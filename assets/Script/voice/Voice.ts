/**
 * @desc: { 多人实时语音 } 
 * @author: zhengyiqiu 
 * @Create Date: 2020-06-23 10:21:00 
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2021-10-14 14:43:11
 */

const { ccclass, property } = cc._decorator

@ccclass
export default class Voice extends cc.Component {
  @property(cc.EditBox)
  ipInput: cc.EditBox = null

  @property(cc.EditBox)
  groupIdInput: cc.EditBox = null

  @property(cc.Toggle)
  microphoneToggle: cc.Toggle = null

  @property(cc.Toggle)
  speakerphoneToggle: cc.Toggle = null

  @property(cc.Toggle)
  playBGMToggle: cc.Toggle = null

  @property(cc.Node)
  joinBtn: cc.Node = null

  @property(cc.Node)
  exitBtn: cc.Node = null

  @property(cc.Node)
  updateBtn: cc.Node = null

  @property(cc.Node)
  onStatusBtn: cc.Node = null

  @property(cc.Node)
  onMembersChangeBtn: cc.Node = null

  @property(cc.Node)
  onSpeakersChangeBtn: cc.Node = null

  @property(cc.Node)
  returnBtn: cc.Node = null

  @property(cc.Label)
  logLabel: cc.Label = null
 
  @property(cc.Label)
  onStatusLabel: cc.Label = null

  @property(cc.Label)
  onMembersChangeLabel: cc.Label = null

  @property(cc.Label)
  onSpeakersChangeLabel: cc.Label = null

  @property(cc.Label)
  tip: cc.Label = null

  start() {
    this.tip.node.active = false
    let audio = qg.createInnerAudioContext()
    // TODO:替换自己的mp3
    audio.src = ''
    audio.loop = true
    console.log('audtio', audio)
    this.playBGMToggle.node.on('toggle', (toggle)=> {
      console.log('playBGMToggle', toggle.isChecked)
      if(toggle.isChecked) {
        window['audio'] = audio
        audio.play()
        audio.volume = 0.05
        console.log('volume', audio.volume)
      } else {
        audio.stop()
      }
    })

    this.joinBtn.on(cc.Node.EventType.TOUCH_START,async () => {
      let ip = this.ipInput.string || ''
      let groupId = this.groupIdInput.string || ''
      let microphone = this.microphoneToggle.isChecked
      let speakerPhone = this.speakerphoneToggle.isChecked
      let timeStamp = new Date().getTime()
      console.log('microphone', microphone)
      console.log('speakerPhone', speakerPhone)
      let nonceStr = Math.random()+''
      let signature
      let url = `http://${ip}:3000/getSignature`
      console.log('服务端接口', url)
      // 自己通过接口请求获取签名
      try {
        signature = await this.sendPostRequest(url, {
          token: window['TOKEN'], // 获取通过 qg.login 获取的并全局存储的大厅 token
          channelName: groupId,
          pkg: 'com.oppo.littleGameDemo',
          timeStamp,
          nonceStr
        })
      } catch (error) {
        this.log(error+': 请检查服务器接口')
        return
      }
      console.log('signature', signature)
      console.log('joinVoIPChat params: ', {
        signature, 
        nonceStr,
        timeStamp,
        groupId,
        muteConfig: {
          muteMicrophone: microphone,
          muteSpeakerPhone: speakerPhone
        }
      })
      qg.joinVoIPChat({
        signature, 
        nonceStr,
        timeStamp,
        groupId,
        muteConfig: {
          muteMicrophone: microphone,
          muteSpeakerPhone: speakerPhone
        },
        success: (res) => {
          this.tip.node.active = true
          this.tip.getComponent(cc.Label).string = `已加入房间，openIdList 为： ${res['openIdList']}`
          this.log(`success: ${JSON.stringify(res)}`)
        },
        fail: (res) => {
          console.log(res)
          this.log(`fail: ${JSON.stringify(res)}`)
        }
      })
    })

    this.exitBtn.on(cc.Node.EventType.TOUCH_START, () => {
      qg.exitVoIPChat({
        success: (res) => {
          this.tip.getComponent(cc.Label).string = `已离开房间`
          this.log(`success: ${JSON.stringify(res)}`)
        },
        fail: (res) => {
          this.log(`fail: ${JSON.stringify(res)}`)
        }
      })
    })
    this.updateBtn.on(cc.Node.EventType.TOUCH_START, () => {
      let microphone = this.microphoneToggle.isChecked
      let speakerPhone = this.speakerphoneToggle.isChecked
      console.log('microphone', microphone)
      console.log('speakerPhone', speakerPhone)
      qg.updateVoIPChatMuteConfig({
        muteConfig: {
          muteMicrophone: microphone,
          muteSpeakerPhone: speakerPhone
        },
        success: (res) => {
          this.log(`success: ${JSON.stringify(res)}`)
        },
        fail: (res) => {
          this.log(`fail: ${JSON.stringify(res)}`)
        }
      })
    })
    this.onMembersChangeBtn.on(cc.Node.EventType.TOUCH_START, () => {
      let inputCb = (res) => {
        this.onMembersChangeLabel.getComponent(cc.Label).string = JSON.stringify(res)
      }
      if(cc.find("Background/Label", this.onMembersChangeBtn).getComponent(cc.Label).string == '监听房间成员变化') {
        qg.onVoIPChatMembersChanged(inputCb)
        cc.find("Background/Label", this.onMembersChangeBtn).getComponent(cc.Label).string = '取消监听房间成员变化'
      } else {
        qg.offVoIPChatMembersChanged()
        this.onMembersChangeLabel.getComponent(cc.Label).string = "取消监听房间成员变化"
        cc.find("Background/Label", this.onMembersChangeBtn).getComponent(cc.Label).string = '监听房间成员变化'
      }
    })
    this.onSpeakersChangeBtn.on(cc.Node.EventType.TOUCH_START, () => {
      let completeCb = (res) => {
        this.onSpeakersChangeLabel.getComponent(cc.Label).string = JSON.stringify(res)
      }
      if(cc.find("Background/Label", this.onSpeakersChangeBtn).getComponent(cc.Label).string == '监听房间成员通话状态变化') {
        qg.onVoIPChatSpeakersChanged(completeCb)
        cc.find("Background/Label", this.onSpeakersChangeBtn).getComponent(cc.Label).string = '取消监听房间成员通话状态变化'
      } else {
        qg.offVoIPChatSpeakersChanged()
        this.onSpeakersChangeLabel.getComponent(cc.Label).string = "取消监听房间成员通话状态变化"
        cc.find("Background/Label", this.onSpeakersChangeBtn).getComponent(cc.Label).string = '监听房间成员通话状态变化'
      }
    })
    this.onStatusBtn.on(cc.Node.EventType.TOUCH_START, () => {
      let confirmCb = (res) => {
        this.onStatusLabel.getComponent(cc.Label).string = JSON.stringify(res)
      }
      if(cc.find("Background/Label", this.onStatusBtn).getComponent(cc.Label).string == '监听房间状态变化') {
        qg.onVoIPChatStatusChanged(confirmCb)
        cc.find("Background/Label", this.onStatusBtn).getComponent(cc.Label).string = '取消监听房间状态变化'
      } else {
        qg.offVoIPChatStatusChanged()
        this.onStatusLabel.getComponent(cc.Label).string = "取消监听房间状态变化"
        cc.find("Background/Label", this.onStatusBtn).getComponent(cc.Label).string = '监听房间状态变化'
      }
    })

    this.returnBtn.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene('main')
    })
  }
  
  // 回调信息展示
  log(msg) {
    console.log(msg)
    this.logLabel.getComponent(cc.Label).string = msg
  }

  sendPostRequest(url, params) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
          if (xhr.readyState == 4) {
            let response = xhr.responseText;
            if(xhr.status >= 200 && xhr.status <= 400) {
              console.log("连接成功");
              console.log(response);
              resolve(response)
            } else {
              console.log("连接失败")
              reject(`${xhr.status} ${xhr.statusText}`)
            }
          }
      };
      xhr.onerror = function() {
        reject(new Error(xhr.statusText));
      }
      xhr.open("POST", url);
      xhr.setRequestHeader("Content-type", "application/json");
      xhr.send(JSON.stringify(params));
    })
  }
}

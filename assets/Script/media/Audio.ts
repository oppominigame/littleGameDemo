/**
 * @desc: { 音频 } 
 * @author: zhengyiqiu 
 * @Create Date: 2020-06-29 11:27:49 
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2021-10-14 14:42:34
 */

const { ccclass, property } = cc._decorator
let innerAudioContext

@ccclass
export default class Audio extends cc.Component {  
  @property(cc.Label)
  logLabel: cc.Label = null

  @property(cc.Node)
  playRemoteAudio: cc.Node = null

  @property(cc.Node)
  playLocalAudio: cc.Node = null
  
  @property(cc.Node)
  getCurrentTime: cc.Node = null

  @property(cc.Node)
  getVolume: cc.Node = null

  @property(cc.AudioClip)
  audioClip: cc.AudioClip = null
 
  @property(cc.Node)
  returnBtn: cc.Node = null

  @property(cc.Node)
  pause: cc.Node = null

  @property(cc.Node)
  stop: cc.Node = null

  @property(cc.Node)
  destroyAudio: cc.Node = null

  @property(cc.Node)
  recycle: cc.Node = null
  
  @property(cc.Node)
  getStatus: cc.Node = null
 
  @property(cc.Node)
  getLength: cc.Node = null

  @property(cc.Node)
  setStartTime: cc.Node = null

  @property(cc.Node)
  seekToTime: cc.Node = null

  @property(cc.Node)
  requestMicrophone: cc.Node = null

  @property(cc.Label)
  volume: cc.Label = null

  @property(cc.Node)
  cancleRequestMicrophone: cc.Node = null

  @property(cc.Label)
  cancleLog: cc.Label = null

  @property(cc.Slider)
  volumeSlider: cc.Slider = null
  
  @property(cc.EditBox)
  startTimeInput: cc.EditBox = null

  @property(cc.EditBox)
  seekTimeInput: cc.EditBox = null

  @property(cc.Slider)
  playbackRateSlider: cc.Slider = null

  @property(cc.Node)
  getPlaybackRateBtn: cc.Node = null

  @property(cc.Label)
  playbackRateLog: cc.Label = null
  
  @property(cc.Node)
  setPlaybackRateBtn: cc.Node = null
  @property(cc.EditBox)
  playbackRateInput: cc.EditBox = null

  
  // 麦克风音量数据
  volumeData
  // 控制打印音量循环
  isPrintVolume = false

  start() {
    innerAudioContext = qg.createInnerAudioContext()
    this.playRemoteAudio.on(cc.Node.EventType.TOUCH_START, () => {
      // TODO: 替换自己的mp3
      innerAudioContext.src = ''
      innerAudioContext.play()
      this.log('播放远程音频')
    })

    this.playLocalAudio.on(cc.Node.EventType.TOUCH_START, () => {
      innerAudioContext.src = this.audioClip
      innerAudioContext.play()
      this.log('播放本地音频')

    })

    this.getCurrentTime.on(cc.Node.EventType.TOUCH_START, () => {
      this.log(`当前音频播放位置：${innerAudioContext.currentTime}`)
    })

    this.getVolume.on(cc.Node.EventType.TOUCH_START, () => {
      this.log(`当前音量：${innerAudioContext.volume}`)
    })

    this.recycle.on(cc.Node.EventType.TOUCH_START, () => {
      innerAudioContext.loop = !innerAudioContext.loop
      if(innerAudioContext.loop) {
        this.log('循环播放')
        cc.find("Background/Label", this.recycle).getComponent(cc.Label).string = '正常播放'
      } else {
        this.log('正常播放')
        cc.find("Background/Label", this.recycle).getComponent(cc.Label).string = '循环播放'
      }
    })


    this.pause.on(cc.Node.EventType.TOUCH_START, () => {
      innerAudioContext.pause()
      this.log('暂停播放')
    })
    

    this.stop.on(cc.Node.EventType.TOUCH_START, () => {
      innerAudioContext.stop()
      this.log('停止播放')
    })

    this.destroyAudio.on(cc.Node.EventType.TOUCH_START, () => {
      innerAudioContext.destroy()
      this.log('销毁实例')
    })

    this.getStatus.on(cc.Node.EventType.TOUCH_START, () => {
      innerAudioContext.paused ? this.log('当前状态：处于暂停或停止') : this.log('当前状态：正常播放')
    })

    this.getLength.on(cc.Node.EventType.TOUCH_START, () => {
      this.log(`当前音频长度：${innerAudioContext.duration}`)
    })

    this.setStartTime.on(cc.Node.EventType.TOUCH_START, () => {
      innerAudioContext.startTime = parseInt(this.startTimeInput.string.replace(/[^0-9]/gi, ''))
      this.log(`当前开始位置：${innerAudioContext.startTime}`)
    })
    
    this.seekToTime.on(cc.Node.EventType.TOUCH_START, () => {
      let seekTime = parseInt(this.seekTimeInput.string.replace(/[^0-9]/gi, ''))
      innerAudioContext.seek(seekTime)
      this.log(`跳转时间：${seekTime}`)
    })

    this.returnBtn.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene('media')
    })

    this.requestMicrophone.on(cc.Node.EventType.TOUCH_START, () => {
      qg.requestMicrophone().then(data => {
        if(data.code == 0) {
          this.volumeData = data
          this.isPrintVolume = true
          this.cancleLog.getComponent(cc.Label).string = ''
        } else {
          this.log(`requestMicrophone err: ${JSON.stringify(data)}`)
        }
      }).catch(err => {
        this.log(`requestMicrophone err: ${JSON.stringify(err)}`)
      })
    })

    this.cancleRequestMicrophone.on(cc.Node.EventType.TOUCH_START, () => {
      qg.cancleRequestMicrophone().then(data => {
        if(data.code == 0) {
          this.isPrintVolume = false
          this.cancleLog.getComponent(cc.Label).string = 'success'
        } else {
          this.log(`cancleRequestMicrophone err: ${JSON.stringify(data)}`)
        }
      }).catch(err => {
        this.log(`cancleRequestMicrophone err: ${JSON.stringify(err)}`)
      })
    })

    this.getPlaybackRateBtn.on(cc.Node.EventType.TOUCH_START, () => {
      this.playbackRateLog.getComponent(cc.Label).string = innerAudioContext.playbackRate + ''
    })

    this.setPlaybackRateBtn.on(cc.Node.EventType.TOUCH_START, () => {
      let playbackRateValue = +this.playbackRateInput.string
      innerAudioContext.playbackRate = playbackRateValue
      this.log(`播放速度：${playbackRateValue}`)
    })
  }
  onVolumeChange() {
    innerAudioContext.volume = this.volumeSlider.progress
    this.log(`当前音量为：${innerAudioContext.volume}`)
  }
  onPlaybackRateChange() {
    innerAudioContext.playbackRate = this.playbackRateSlider.progress+0.5
    this.log(`当前播放速度为：${innerAudioContext.playbackRate}`)
  }

  update() {
    if(this.isPrintVolume) {
      this.volume.getComponent(cc.Label).string = this.volumeData ? this.volumeData.volume + '' : '无数据'
    }
  }

  // 回调信息展示
  log(msg) {
    console.log(msg)
    this.logLabel.getComponent(cc.Label).string = msg
  }
}

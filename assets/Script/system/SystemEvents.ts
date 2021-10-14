/**
 * @desc: { 系统事件 } 
 * @author: zhengyiqiu 
 * @Create Date: 2020-06-23 10:21:00 
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2020-06-30 19:44:44
 */

const { ccclass, property } = cc._decorator

@ccclass
export default class SystemEvents extends cc.Component {
  @property(cc.Label)
  logLabel: cc.Label = null

  @property(cc.Node)
  onAudioInterruptionBegin: cc.Node = null

  @property(cc.Node)
  onAudioInterruptionEnd: cc.Node = null

  @property(cc.Node)
  onError: cc.Node = null

  @property(cc.Node)
  dispatchError: cc.Node = null

  @property(cc.Node)
  returnBtn: cc.Node = null
  
  start() {
    this.onAudioInterruptionBegin.on(cc.Node.EventType.TOUCH_START, () => {
      let onAudioInterruptionBeginCb = () => {
        this.logLabel.getComponent(cc.Label).string = `onAudioInterruptionBegin success: ${new Date().toLocaleString()}`
      }
      if(cc.find("Background/Label", this.onAudioInterruptionBegin).getComponent(cc.Label).string == '监听onAudioInterruptionBegin') {
        qg.onAudioInterruptionBegin(onAudioInterruptionBeginCb)
        cc.find("Background/Label", this.onAudioInterruptionBegin).getComponent(cc.Label).string = '取消监听offAudioInterruptionBegin'
      } else {
        qg.offAudioInterruptionBegin()
        this.logLabel.getComponent(cc.Label).string = "取消监听offAudioInterruptionBegin"
        cc.find("Background/Label", this.onAudioInterruptionBegin).getComponent(cc.Label).string = '监听onAudioInterruptionBegin'
      }
    })
    this.onAudioInterruptionEnd.on(cc.Node.EventType.TOUCH_START, () => {
      let onAudioInterruptionEndCb = () => {
        console.log('onAudioInterruptionEnd')
        this.logLabel.getComponent(cc.Label).string = `onAudioInterruptionEnd success: ${new Date().toLocaleString()}`
      }
      if(cc.find("Background/Label", this.onAudioInterruptionEnd).getComponent(cc.Label).string == '监听onAudioInterruptionEnd') {
        qg.onAudioInterruptionEnd(onAudioInterruptionEndCb)
        cc.find("Background/Label", this.onAudioInterruptionEnd).getComponent(cc.Label).string = '取消监听offAudioInterruptionEnd'
      } else {
        qg.offAudioInterruptionEnd()
        this.logLabel.getComponent(cc.Label).string = "取消监听offAudioInterruptionEnd"
        cc.find("Background/Label", this.onAudioInterruptionEnd).getComponent(cc.Label).string = '监听onAudioInterruptionEnd'
      }
    })
    this.onError.on(cc.Node.EventType.TOUCH_START, () => {
      let onErrorCb = (res) => {
        this.logLabel.getComponent(cc.Label).string = `onError success: ${res.message.slice(0, 149)}`
      }
      if(cc.find("Background/Label", this.onError).getComponent(cc.Label).string == '监听onError') {
        qg.onError(onErrorCb)
        cc.find("Background/Label", this.onError).getComponent(cc.Label).string = '取消监听offError'
      } else {
        qg.offError()
        this.logLabel.getComponent(cc.Label).string = "取消监听offError"
        cc.find("Background/Label", this.onError).getComponent(cc.Label).string = '监听onError'
      }
    })

    this.dispatchError.on(cc.Node.EventType.TOUCH_START, () => {
      throw Error('dispatch Error')
    })

    this.returnBtn.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene('system')
    })
  }

  log(msg) {
    console.log(msg)
    this.logLabel.getComponent(cc.Label).string = msg
  }
}

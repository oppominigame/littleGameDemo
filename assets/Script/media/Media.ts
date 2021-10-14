/**
 * @desc: { 媒体 } 
 * @author: zhengyiqiu 
 * @Create Date: 2020-06-29 11:24:25 
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2020-06-30 17:04:30
 */

const { ccclass, property } = cc._decorator

@ccclass
export default class Meida extends cc.Component {
  @property(cc.Label)
  logLabel: cc.Label = null

  @property(cc.Node)
  audioBtn: cc.Node = null


  @property(cc.Node)
  imgBtn: cc.Node = null

  @property(cc.Node)
  returnBtn: cc.Node = null

  @property(cc.Node)
  videoBtn: cc.Node = null

  @property(cc.Node)
  recorderAudioBtn: cc.Node = null

  start() {
    this.audioBtn.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene('audio')
    })

    this.imgBtn.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene('img')
    })

    this.videoBtn.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene('video')
    })

    this.recorderAudioBtn.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene('recorderManager')
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
}
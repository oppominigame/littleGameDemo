/**
 * @desc: { 系统 } 
 * @author: zhengyiqiu 
 * @Create Date: 2020-06-28 17:32:12 
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2020-06-30 19:44:55
 */

const { ccclass, property } = cc._decorator

@ccclass
export default class System extends cc.Component {
  @property(cc.Label)
  logLabel: cc.Label = null

  @property(cc.Node)
  systemInfo: cc.Node = null
  
  @property(cc.Node)
  systemEvent: cc.Node = null
  
  @property(cc.Node)
  lifeCircle: cc.Node = null

  @property(cc.Node)
  returnBtn: cc.Node = null

  start() {
    this.systemInfo.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene("systemInfo");
    })
    this.systemEvent.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene("systemEvents");
    })
    this.lifeCircle.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene("lifeCircle");
    })
    this.returnBtn.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene('main')
    })
  }

  log(msg) {
    console.log(msg)
    this.logLabel.getComponent(cc.Label).string = msg
  }
}

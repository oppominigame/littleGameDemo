/**
 * @desc: { 界面 } 
 * @author: zhengyiqiu 
 * @Create Date: 2020-06-24 14:51:55 
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2020-06-28 11:43:15
 */

const { ccclass, property } = cc._decorator

@ccclass
export default class Interface extends cc.Component {
  @property(cc.Label)
  logLabel: cc.Label = null

  @property(cc.Node)
  keyboardBtn: cc.Node = null
  
  // @property(cc.Node)
  // timeBtn: cc.Node = null
  
  @property(cc.Node)
  tipFrameBtn: cc.Node = null

  @property(cc.Node)
  returnBtn: cc.Node = null

  start() {
    this.keyboardBtn.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene("keyboard");
    })
    // this.timeBtn.on(cc.Node.EventType.TOUCH_START, () => {
    //   cc.director.loadScene("battery");
    // })
    this.tipFrameBtn.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene("tipFrame");
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

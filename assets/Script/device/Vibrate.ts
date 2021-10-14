/**
 * @desc: { 振动 } 
 * @author: zhengyiqiu 
 * @Create Date: 2020-06-23 10:21:00 
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2020-06-23 21:25:45
 */

const { ccclass, property } = cc._decorator

@ccclass
export default class Vibrate extends cc.Component {
  @property(cc.Label)
  logLabel: cc.Label = null

  @property(cc.Node)
  vibrateLongBtn: cc.Node = null

  @property(cc.Node)
  vibrateShortBtn: cc.Node = null

  @property(cc.Node)
  returnBtn: cc.Node = null
  
  start() {
    this.vibrateLongBtn.on(cc.Node.EventType.TOUCH_START, () => {
      qg.vibrateLong({
          success: (res) => {
            this.log(`长振动`)
          },
          fail: (res) => {},
          complete: (res) => {}
      })
    })    
    this.vibrateShortBtn.on(cc.Node.EventType.TOUCH_START, () => {
      qg.vibrateShort({
          success: (res) => {
            this.log(`短振动`)
          },
          fail: (res) => {},
          complete: (res) => {}
      })
    })

    this.returnBtn.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene('device')
    })
  }

  log(msg) {
    console.log(msg)
    this.logLabel.getComponent(cc.Label).string = msg
  }
}

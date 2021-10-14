/**
 * @desc: { 罗盘 } 
 * @author: zhengyiqiu 
 * @Create Date: 2020-06-23 19:16:14 
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2020-06-23 19:20:12
 */
const { ccclass, property } = cc._decorator

@ccclass
export default class Pay extends cc.Component {
  @property(cc.Label)
  logLabel: cc.Label = null

  @property(cc.Node)
  onChangeBtn: cc.Node = null

  @property(cc.Node)
  startBtn: cc.Node = null

  @property(cc.Node)
  stopBtn: cc.Node = null

  @property(cc.Node)
  offChangeBtn: cc.Node = null

  @property(cc.Node)
  returnBtn: cc.Node = null

  @property(cc.Node)
  directionLable: cc.Node = null
  
  start() {
    const sucCb = () => {
      this.log(`success`)
    }

    const failCb = () => {
      this.log(`fail`)
    }

    this.onChangeBtn.on(cc.Node.EventType.TOUCH_START, () => {
      qg.onCompassChange((res) => {
        this.directionLable.getComponent(cc.Label).string = res.direction
      })


    })

    this.startBtn.on(cc.Node.EventType.TOUCH_START, () => {
      qg.startCompass({
        success: sucCb,
        fail: failCb
      })
    })

    this.stopBtn.on(cc.Node.EventType.TOUCH_START, () => {
      qg.stopCompass({
        success: sucCb,
        fail: failCb
      })
    })

    this.offChangeBtn.on(cc.Node.EventType.TOUCH_START, () => {
      qg.offCompassChange({
        success: sucCb,
        fail: failCb
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

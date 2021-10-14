/**
 * @desc: 加速计
 * @Create Date: 2019-09-30 17:34:32 
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2020-06-22 16:34:52
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
  xLogLabel: cc.Node = null
  @property(cc.Node)
  yLogLabel: cc.Node = null  
  
  @property(cc.Node)
  zLogLabel: cc.Node = null
  
  start() {
    const sucCb = () => {
      this.log(`success`)
    }

    const failCb = () => {
      this.log(`fail`)
    }

    this.onChangeBtn.on(cc.Node.EventType.TOUCH_START, () => {
      qg.onAccelerometerChange((res) => {
        const { x, y, z } = res
        console.log(x, y, z);
        this.xLogLabel.getComponent(cc.Label).string = x
        this.yLogLabel.getComponent(cc.Label).string = y
        this.zLogLabel.getComponent(cc.Label).string = z
      })


    })

    this.startBtn.on(cc.Node.EventType.TOUCH_START, () => {
      qg.startAccelerometer({
        interval: "game",
        success: sucCb,
        fail: failCb
      })
    })

    this.stopBtn.on(cc.Node.EventType.TOUCH_START, () => {
      qg.stopAccelerometer({
        success: sucCb,
        fail: failCb
      })
    })

    this.offChangeBtn.on(cc.Node.EventType.TOUCH_START, () => {
      qg.offAccelerometerChange({
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

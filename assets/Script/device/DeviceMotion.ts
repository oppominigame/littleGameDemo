/**
 * @desc: { 设备方向 } 
 * @author: zhengyiqiu 
 * @Create Date: 2021-09-23 14:43:31 
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2021-09-23 17:23:43
 */
const { ccclass, property } = cc._decorator

@ccclass
export default class DeviceMotion extends cc.Component {
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
  alphaLabel: cc.Node = null

  @property(cc.Node)
  betaLabel: cc.Node = null

  @property(cc.Node)
  gammaLabel: cc.Node = null
  
  start() {
    const sucCb = () => {
      this.log(`success`)
    }

    const failCb = () => {
      this.log(`fail`)
    }

    const changeCb = (res) => {
      this.alphaLabel.getComponent(cc.Label).string = res.alpha

      this.betaLabel.getComponent(cc.Label).string = res.beta

      this.gammaLabel.getComponent(cc.Label).string = res.gamma
    }

    this.onChangeBtn.on(cc.Node.EventType.TOUCH_START, () => {
      qg.onDeviceMotionChange(changeCb)


    })

    this.startBtn.on(cc.Node.EventType.TOUCH_START, () => {
      qg.startDeviceMotionListening({
        success: sucCb,
        fail: failCb
      })
    })

    this.stopBtn.on(cc.Node.EventType.TOUCH_START, () => {
      qg.stopDeviceMotionListening({
        success: sucCb,
        fail: failCb
      })
    })

    this.offChangeBtn.on(cc.Node.EventType.TOUCH_START, () => {
      qg.offDeviceMotionChange(changeCb)
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

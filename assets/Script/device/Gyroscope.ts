/**
 * @desc: { 陀螺仪 } 
 * @author: otomanlu 
 * @Create Date: 2020-06-23 19:16:14 
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2021-09-23 17:24:26
 */
const { ccclass, property } = cc._decorator

@ccclass
export default class Gyroscope extends cc.Component {
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
  xLable: cc.Node = null

  @property(cc.Node)
  yLable: cc.Node = null

  @property(cc.Node)
  zLable: cc.Node = null
  
  @property(cc.Node)
  rollLable: cc.Node = null

  @property(cc.Node)
  pitchLable: cc.Node = null

  @property(cc.Node)
  yawLable: cc.Node = null
  
  start() {
    const sucCb = () => {
      this.log(`success`)
    }

    const failCb = () => {
      this.log(`fail`)
    }

    const changeCb = (res) => {
      this.xLable.getComponent(cc.Label).string = res.x

      this.yLable.getComponent(cc.Label).string = res.y

      this.zLable.getComponent(cc.Label).string = res.z

      this.rollLable.getComponent(cc.Label).string = res.roll

      this.pitchLable.getComponent(cc.Label).string = res.pitch

      this.yawLable.getComponent(cc.Label).string = res.yaw
    }

    this.onChangeBtn.on(cc.Node.EventType.TOUCH_START, () => {
      qg.onGyroscopeChange(changeCb)
    })

    this.startBtn.on(cc.Node.EventType.TOUCH_START, () => {
      qg.startGyroscope({
        success: sucCb,
        fail: failCb
      })
    })

    this.stopBtn.on(cc.Node.EventType.TOUCH_START, () => {
      qg.stopGyroscope({
        success: sucCb,
        fail: failCb
      })
    })

    this.offChangeBtn.on(cc.Node.EventType.TOUCH_START, () => {
      qg.offGyroscopeChange(changeCb)
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

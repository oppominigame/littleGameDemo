/**
 * @desc: { 电量 } 
 * @author: zhengyiqiu 
 * @Create Date: 2020-06-23 10:21:00 
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2020-06-23 10:43:10
 */

const { ccclass, property } = cc._decorator

@ccclass
export default class Pay extends cc.Component {
  @property(cc.Label)
  logLabel: cc.Label = null

  @property(cc.Node)
  getBatteryBtn: cc.Node = null

  @property(cc.Node)
  returnBtn: cc.Node = null
  
  start() {
    this.getBatteryBtn.on(cc.Node.EventType.TOUCH_START, () => {
      qg.getBatteryInfo({
        success: (res) => {
            this.log(`设备电量：${res.level}, 是否充电：${res.isCharging}`);
        },
        fail: (err) => {
          this.log(err)
        },
        complete: () => {}
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

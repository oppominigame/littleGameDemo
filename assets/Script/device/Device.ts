/**
 * @desc: 设备
 * @Create Date: 2019-09-30 17:34:32 
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2021-10-12 17:22:35
 */

const { ccclass, property } = cc._decorator

@ccclass
export default class Pay extends cc.Component {
  @property(cc.Label)
  logLabel: cc.Label = null

  @property(cc.Node)
  accelerometerBtn: cc.Node = null
  
  @property(cc.Node)
  batteryBtn: cc.Node = null
  
  @property(cc.Node)
  clipboardBtn: cc.Node = null
  
  @property(cc.Node)
  compassBtn: cc.Node = null

  @property(cc.Node)
  networkTypeBtn: cc.Node = null

  @property(cc.Node)
  screenBtn: cc.Node = null

  @property(cc.Node)
  vibrateBtn: cc.Node = null

  @property(cc.Node)
  windowResizeBtn: cc.Node = null

  @property(cc.Node)
  performanceBtn: cc.Node = null

  @property(cc.Node)
  deviceMotionBtn: cc.Node = null

  @property(cc.Node)
  returnBtn: cc.Node = null

  @property(cc.Node)
  gyroscopeBtn: cc.Node = null

  @property(cc.Node)
  qrcodeBtn: cc.Node = null
  
  start() {
    this.accelerometerBtn.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene("accelerometer");
    })
    this.batteryBtn.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene("battery");
    })
    this.clipboardBtn.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene("clipboard");
    })
    this.compassBtn.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene("compass");
    })
    this.networkTypeBtn.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene("networkType");
    })
    this.screenBtn.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene("screen");
    })
    this.vibrateBtn.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene("vibrate");
    })
    this.windowResizeBtn.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene("windowResize");
    })
    this.performanceBtn.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene("performance");
    })
    this.returnBtn.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene('main')
    })
    this.gyroscopeBtn.on(cc.Node.EventType.TOUCH_END, () => {
      cc.director.loadScene('gyroscope')
    })
    this.deviceMotionBtn.on(cc.Node.EventType.TOUCH_END, () => {
      cc.director.loadScene('deviceMotion')
    })
    this.qrcodeBtn.on(cc.Node.EventType.TOUCH_END, () => {
      cc.director.loadScene('qrcode')
    })
  }

  log(msg) {
    console.log(msg)
    this.logLabel.getComponent(cc.Label).string = msg
  }
}

/**
 * @desc: { 屏幕 } 
 * @author: zhengyiqiu 
 * @Create Date: 2020-06-23 10:21:00 
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2020-06-29 15:24:35
 */

const { ccclass, property } = cc._decorator

@ccclass
export default class Screen extends cc.Component {
  @property(cc.Label)
  logLabel: cc.Label = null

  @property(cc.Node)
  isKeepScreenOnBtn: cc.Node = null

  @property(cc.Slider)
  setScreenBrightness: cc.Slider = null

  @property(cc.Label)
  isScreenOn: cc.Label = null

  @property(cc.Label)
  screenBrightness: cc.Label = null

  @property(cc.Node)
  returnBtn: cc.Node = null
  
  start() {
    let isScreenOnType = false
    qg.getScreenBrightness({
        success: (res) => {
            this.log(`获取屏幕亮度：${res.value}`);
            this.setScreenBrightness.progress = +(res.value)
            this.screenBrightness.getComponent(cc.Label).string = res.value 
        },
        fail: (res) => {
            this.log(res.errMsg);
        },
        complete: (res) => {}
    })
    this.isKeepScreenOnBtn.on(cc.Node.EventType.TOUCH_START, () => {
      isScreenOnType = !isScreenOnType
      qg.setKeepScreenOn({
        keepScreenOn: isScreenOnType,
        success: (res) => {
          this.log(`设置屏幕是否常亮: ${isScreenOnType}`)
          this.isScreenOn.getComponent(cc.Label).string = isScreenOnType + ''       
        },
        fail: (res) => {},
        complete: (res) => {}
      })
    })

    this.returnBtn.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene('device')
    })
  }

  onSliderChange() {
    qg.setScreenBrightness({
        value: +this.setScreenBrightness.progress,
        success: (res) => {
          this.log(`设置屏幕亮度：${+this.setScreenBrightness.progress}`)
        },
        fail: (res) => {},
        complete: (res) => {}
    })
    qg.getScreenBrightness({
        success: (res) => {
            this.log(`获取屏幕亮度：${res.value}`);
            this.screenBrightness.getComponent(cc.Label).string = res.value 
        },
        fail: (res) => {
            this.log(res.errMsg);
        },
        complete: (res) => {}
    })
  }

  log(msg) {
    console.log(msg)
    this.logLabel.getComponent(cc.Label).string = msg
  }
}

/**
 * @desc: { fps } 
 * @author: zhengyiqiu 
 * @Create Date: 2020-06-30 20:44:24 
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2020-07-01 14:38:49
 */

const { ccclass, property } = cc._decorator
let currentFPS = 30

@ccclass
export default class FPS extends cc.Component {
  @property(cc.Label)
  logLabel: cc.Label = null

  @property(cc.Node)
  setFps: cc.Node = null

  @property(cc.Slider)
  setFPSSlider: cc.Slider = null
  
  @property(cc.Label)
  fpsLabel: cc.Label = null

  @property(cc.Node)
  returnBtn: cc.Node = null
  
  start() {
    this.setFps.on(cc.Node.EventType.TOUCH_START, () => {
      qg.setPreferredFramesPerSecond(currentFPS)
      this.log(`设置帧率：${currentFPS}`)
    })

    this.returnBtn.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene('render')
    })
  }

  onFpsChange() { 
    currentFPS = Math.round(55 * this.setFPSSlider.progress) + 5;
    this.fpsLabel.getComponent(cc.Label).string = currentFPS +  ''
  }

  log(msg) {
    console.log(msg)
    this.logLabel.getComponent(cc.Label).string = msg
  }
}

/**
 * @desc: { 渲染 } 
 * @author: zhengyiqiu 
 * @Create Date: 2020-06-29 11:24:25 
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2020-07-01 14:23:11
 */

const { ccclass, property } = cc._decorator

@ccclass
export default class Render extends cc.Component {
  @property(cc.Label)
  logLabel: cc.Label = null

  @property(cc.Node)
  fps: cc.Node = null

  @property(cc.Node)
  font: cc.Node = null

  @property(cc.Node)
  returnBtn: cc.Node = null

  start() {
    this.fps.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene('fps')
    })

    this.font.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene('font')
    })

    this.returnBtn.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene('main')
    })
  }

  // 回调信息展示
  log(msg) {
    console.log(msg)
    this.logLabel.getComponent(cc.Label).string = msg
  }
}
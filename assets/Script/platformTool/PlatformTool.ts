/**
 * @desc: { 媒体 } 
 * @author: zhengyiqiu 
 * @Create Date: 2020-06-29 11:24:25 
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2020-07-01 10:32:22
 */

const { ccclass, property } = cc._decorator

@ccclass
export default class PlatformTool extends cc.Component {
  @property(cc.Label)
  logLabel: cc.Label = null

  @property(cc.Node)
  performance: cc.Node = null

  @property(cc.Node)
  vConsole: cc.Node = null

  @property(cc.Node)
  returnBtn: cc.Node = null

  start() {
    this.performance.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene('performance')
    })

    this.vConsole.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene('vConsole')
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
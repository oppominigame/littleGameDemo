/**
 * @desc: { 窗口变化 } 
 * @author: zhengyiqiu 
 * @Create Date: 2020-06-24 10:18:51 
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2020-06-24 10:47:38
 */

const { ccclass, property } = cc._decorator

@ccclass
export default class Pay extends cc.Component {
  @property(cc.Label)
  logLabel: cc.Label = null

  @property(cc.Node)
  onBtn: cc.Node = null

  @property(cc.Node)
  offBtn: cc.Node = null

  @property(cc.Node)
  returnBtn: cc.Node = null
  
  start() {
    const callback = (res:object) => {
      this.log(`变化后窗口的宽度：${res['windowWidth']}，高度：${res['windowHeight']}`)
    }
    this.onBtn.on(cc.Node.EventType.TOUCH_START, () => {
      qg.onWindowResize(callback)
    })
    
    this.offBtn.on(cc.Node.EventType.TOUCH_START, () => {
      this.log(`取消监听`)
      qg.offWindowResize(callback)
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

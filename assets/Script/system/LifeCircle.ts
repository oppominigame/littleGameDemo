/**
 * @desc: { 生命周期 } 
 * @author: zhengyiqiu 
 * @Create Date: 2020-06-23 10:21:00 
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2020-06-28 20:39:12
 */

const { ccclass, property } = cc._decorator

@ccclass
export default class Pay extends cc.Component {
  @property(cc.Label)
  logLabel: cc.Label = null

  @property(cc.Node)
  onShow: cc.Node = null

  @property(cc.Node)
  onHide: cc.Node = null

  @property(cc.Node)
  returnBtn: cc.Node = null
  
  start() {
    this.onShow.on(cc.Node.EventType.TOUCH_START, () => {
      let onShowCb = (res) => {
        this.logLabel.getComponent(cc.Label).string = `onShow success: ${JSON.stringify(res)=="{}"?new Date().toLocaleString():JSON.stringify(res)}`
      }
      if(cc.find("Background/Label", this.onShow).getComponent(cc.Label).string == '监听onShow') {
        qg.onShow(onShowCb)
        cc.find("Background/Label", this.onShow).getComponent(cc.Label).string = '取消监听offShow'
      } else {
        qg.offShow()
        this.logLabel.getComponent(cc.Label).string = "取消监听offShow"
        cc.find("Background/Label", this.onShow).getComponent(cc.Label).string = '监听onShow'
      }
    })
    this.onHide.on(cc.Node.EventType.TOUCH_START, () => {
      let onHideCb = (res) => {
        console.log('onhide')
        this.logLabel.getComponent(cc.Label).string = `onHide success: ${new Date().toLocaleString()}`
      }
      if(cc.find("Background/Label", this.onHide).getComponent(cc.Label).string == '监听onHide') {
        qg.onHide(onHideCb)
        cc.find("Background/Label", this.onHide).getComponent(cc.Label).string = '取消监听offHide'
      } else {
        qg.offHide()
        this.logLabel.getComponent(cc.Label).string = "取消监听offHide"
        cc.find("Background/Label", this.onHide).getComponent(cc.Label).string = '监听onHide'
      }
    })

    this.returnBtn.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene('system')
    })
  }

  log(msg) {
    console.log(msg)
    this.logLabel.getComponent(cc.Label).string = msg
  }
}

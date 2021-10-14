/**
 * @desc: 网络
 * @Create Date: 2019-08-28 17:59:07
 * @Last Modified time: 2019-08-29 14:57:41
 */
const { ccclass, property } = cc._decorator

@ccclass
export default class Pay extends cc.Component {
  @property(cc.Label)
  logLabel: cc.Label = null

  @property(cc.Node)
  downloadBtn: cc.Node = null

  @property(cc.Node)
  uploadBtn: cc.Node = null
  
  @property(cc.Node)
  XMLHttpRequestBtn: cc.Node = null

  @property(cc.Node)
  WebSocketBtn: cc.Node = null

  @property(cc.Node)
  returnBtn: cc.Node = null

  start() {
    this.downloadBtn.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene('download')
    })
    this.uploadBtn.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene('upload')
    })
    this.XMLHttpRequestBtn.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene('XMLHttpRequest')
    })
    this.WebSocketBtn.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene('WebSocket')
    })

    this.returnBtn.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene('main')
    })
  }

  log(msg) {
    console.log(msg)
    this.logLabel.getComponent(cc.Label).string = msg
  }
}

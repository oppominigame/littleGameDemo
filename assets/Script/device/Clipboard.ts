/**
 * @desc: { 剪贴板 } 
 * @author: zhengyiqiu 
 * @Create Date: 2020-06-23 11:25:44 
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2020-06-23 14:57:09
 */

const { ccclass, property } = cc._decorator

@ccclass
export default class Pay extends cc.Component {
  @property(cc.Label)
  logLabel: cc.Label = null

  @property(cc.Node)
  copy: cc.Node = null

  @property(cc.Node)
  paste: cc.Node = null

  @property(cc.Node)
  updateBtn: cc.Node = null

  @property(cc.Node)
  returnBtn: cc.Node = null

  @property(cc.Node)
  copyContent: cc.Node = null

  @property(cc.Node)
  pasteContent: cc.Node = null  
  
  start() {
    this.copyContent.getComponent(cc.Label).string =  Math.random().toString(36).slice(-8)
    qg.setClipboardData({
        data: this.copyContent.getComponent(cc.Label).string,
        success: (res) => {},
        fail: (res) => {},
        complete: (res) => {}
    })
    let copyData = ''
    this.copy.on(cc.Node.EventType.TOUCH_START, () => {
      qg.getClipboardData({
          success: (res) => {
              this.log(`复制的内容：${res.data}`)
              copyData = res.data
          },
          fail: (res) => {},
          complete: (res) => {}
      })
    })

    this.paste.on(cc.Node.EventType.TOUCH_START, () => {
      qg.setClipboardData({
          data: copyData || this.copyContent.getComponent(cc.Label).string,
          success: (res) => {
            this.log('粘贴成功')
            this.pasteContent.getComponent(cc.Label).string =  copyData
          },
          fail: (res) => {},
          complete: (res) => {}
      })
    })

    this.updateBtn.on(cc.Node.EventType.TOUCH_START, () => {
      this.copyContent.getComponent(cc.Label).string =  Math.random().toString(36).slice(-8)
      qg.setClipboardData({
          data: this.copyContent.getComponent(cc.Label).string,
          success: (res) => {},
          fail: (res) => {},
          complete: (res) => {}
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

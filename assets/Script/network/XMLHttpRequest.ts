/**
 * @desc: { 网络请求 } 
 * @author: zhengyiqiu 
 * @Create Date: 2020-06-30 20:44:24 
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2021-10-14 14:23:46
 */

const { ccclass, property } = cc._decorator

@ccclass
export default class XMLhttprequest extends cc.Component {
  @property(cc.Label)
  logLabel: cc.Label = null

  @property(cc.Node)
  sendRequest: cc.Node = null
  
  @property(cc.Node)
  returnBtn: cc.Node = null
  
  start() {
    this.sendRequest.on(cc.Node.EventType.TOUCH_START, () => {
      let xhr = new XMLHttpRequest()
      // TODO: 替换请求地址
      xhr.open("GET", "", true)
      xhr.onreadystatechange = () => {
        if(xhr.readyState == 4 && xhr.status == 200) {
          this.log(`发送请求成功：${xhr.responseText}`)
        }
      }
      xhr.send()
    })

    this.returnBtn.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene('network')
    })
  }

  log(msg) {
    console.log(msg)
    this.logLabel.getComponent(cc.Label).string = msg
  }
}

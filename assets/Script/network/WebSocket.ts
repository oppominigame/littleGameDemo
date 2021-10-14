/**
 * @desc: { WebSocket } 
 * @author: zhengyiqiu 
 * @Create Date: 2020-06-30 20:44:24 
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2021-10-14 14:23:07
 */

const { ccclass, property } = cc._decorator

@ccclass
export default class WebSocketDemo extends cc.Component {
  @property(cc.Label)
  logLabel: cc.Label = null

  @property(cc.Node)
  sendMsg: cc.Node = null
  
  @property(cc.Node)
  returnBtn: cc.Node = null
  
  start() {
    this.sendMsg.on(cc.Node.EventType.TOUCH_START, () => {
      // TODO: 替换自己的ws服务
      let ws = new WebSocket('')
      ws.onopen = (event) => {
        this.log('send test ws was opened')
        if(ws.readyState === WebSocket.OPEN) {
          ws.send("Hello WebSocket, I'm a text message")
        } else {
          this.log("WebSocket instance wasn't ready...")
        }
      }
      ws.onmessage = (event) => {
        this.log(`response text msg: ${event.data}`)
      }
      ws.onerror = (event) => {
        this.log(`send text fired an error`)
      }
      ws.onclose = (event) => {
        this.log('WebSocket instance closed')
      }
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

/**
 * @desc: { 网络状态 } 
 * @author: zhengyiqiu 
 * @Create Date: 2020-06-23 10:21:00 
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2020-06-23 20:04:59
 */

const { ccclass, property } = cc._decorator

@ccclass
export default class Pay extends cc.Component {
  @property(cc.Label)
  logLabel: cc.Label = null

  @property(cc.Node)
  getNetworkTypeBtn: cc.Node = null

  @property(cc.Node)
  onNetworkTypeChangeBtn: cc.Node = null

  @property(cc.Node)
  returnBtn: cc.Node = null
  
  start() {
    this.getNetworkTypeBtn.on(cc.Node.EventType.TOUCH_START, () => {
      qg.getNetworkType({
        success: (res) => {
            this.log(`获取网络状态：${res.networkType}`);
        },
        fail: (err) => {
          this.log(err.errMsg)
        },
        complete: () => {}
      })
    })

    this.onNetworkTypeChangeBtn.on(cc.Node.EventType.TOUCH_START, () => {
      qg.onNetworkStatusChange((res) => {
          this.log(`当前是否有网络：${res.isConnected}, 网络类型为：${res.networkType}`);
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

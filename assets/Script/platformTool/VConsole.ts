/**
 * @desc: { vConsole } 
 * @author: zhengyiqiu 
 * @Create Date: 2020-06-23 10:21:00 
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2020-07-01 11:30:02
 */

const { ccclass, property } = cc._decorator

@ccclass
export default class VConsole extends cc.Component {
  @property(cc.Label)
  logLabel: cc.Label = null

  @property(cc.Node)
  enableDebug: cc.Node = null

  @property(cc.Node)
  returnBtn: cc.Node = null
  
  start() {
    let isEnable = false
    this.enableDebug.on(cc.Node.EventType.TOUCH_START, () => {
      qg.setEnableDebug({
        enableDebug: !isEnable, // true 为打开，false 为关闭
        success: () => {
            isEnable = !isEnable
            if(!isEnable) {
              cc.find('Background/Label', this.enableDebug).getComponent(cc.Label).string = '打开控制台'
              this.log('成功关闭控制台')
            } else {
              cc.find('Background/Label', this.enableDebug).getComponent(cc.Label).string = '关闭控制台'
              this.log('成功打开控制台')
            }
            // 以下语句将会在 vConsole 面板输出 
            console.log("test consol log");
            console.info("test console info");
            console.warn("test consol warn");
            console.debug("test consol debug");
            console.error("test consol error");
        },
        fail: () => {
          this.log('打开控制台失败')
        }
    });
    })

    this.returnBtn.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene('platformTool')
    })
  }

  log(msg) {
    console.log(msg)
    this.logLabel.getComponent(cc.Label).string = msg
  }
}

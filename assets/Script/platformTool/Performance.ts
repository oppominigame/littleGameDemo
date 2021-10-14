/**
 * @desc: { 性能 } 
 * @author: zhengyiqiu 
 * @Create Date: 2020-06-30 20:44:24 
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2020-07-01 10:24:31
 */

const { ccclass, property } = cc._decorator

@ccclass
export default class Performance extends cc.Component {
  @property(cc.Label)
  logLabel: cc.Label = null

  @property(cc.Node)
  startBtn: cc.Node = null

  @property(cc.Node)
  stopBtn: cc.Node = null

  @property(cc.Node)
  createObj: cc.Node = null
  
  @property(cc.Node)
  gc: cc.Node = null

  @property(cc.Node)
  returnBtn: cc.Node = null
  
  start() {
    let startTime = 0
    let stopTime = 0
    let testGc = null
    this.startBtn.on(cc.Node.EventType.TOUCH_START, () => {
      startTime = qg.getPerformance().now()
      this.log(`开始计时：${startTime}`)
    })
    this.stopBtn.on(cc.Node.EventType.TOUCH_START, () => {
      stopTime = qg.getPerformance().now()
      this.log(`开始：${startTime}，结束：${stopTime}，差值：${stopTime - startTime}`)
    })

    this.createObj.on(cc.Node.EventType.TOUCH_START, () => {
      if (testGc !== null) {
        return;
      }
      let dataContent = new ArrayBuffer(1024 * 1024 * 10);
      testGc = new Int8Array(dataContent, 0, 1024 * 1024 * 10);
    })

    this.gc.on(cc.Node.EventType.TOUCH_START, () => {
      this.log('垃圾回收，请用 adb logcat 查看内存变化')
      qg.triggerGC();
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

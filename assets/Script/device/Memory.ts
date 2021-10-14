/**
 * @desc: { 性能 } 
 * @author: zhengyiqiu 
 * @Create Date: 2020-06-23 10:21:00 
 * @Last Modified by: 80261040
 * @Last Modified time: 2021-06-24 16:27:31
 */

const { ccclass, property } = cc._decorator

@ccclass
export default class Memory extends cc.Component {
  @property(cc.Label)
  logLabel: cc.Label = null

  @property(cc.Node)
  onMemoryWarningBtn: cc.Node = null

  @property(cc.Node)
  offMemoryWarningBtn: cc.Node = null

  @property(cc.Node)
  addMemoryBtn: cc.Node = null

  @property(cc.Node)
  triggerGCBtn: cc.Node = null

  @property(cc.Node)
  returnBtn: cc.Node = null

  private b = null
  
  start() {
    const callback = (res) => {
      this.log(`监听内存不足告警事件：${JSON.stringify(res)}`);
    }
    this.onMemoryWarningBtn.on(cc.Node.EventType.TOUCH_START, () => {
      this.log(`开始监听内存不足告警事件`);
      qg.onMemoryWarning(callback)
    })

    this.offMemoryWarningBtn.on(cc.Node.EventType.TOUCH_START, () => {
      this.log(`取消监听内存不足告警事件`);
      qg.offMemoryWarning(callback)
    })
    var arr = []

    this.addMemoryBtn.on(cc.Node.EventType.TOUCH_START, () => {
      // let theThing = null;
      // let replaceThing = function() {
      //   const newThing = theThing;
      //   const unused = function() {
      //     if (newThing) console.log("hi");
      //   };
      //   // 不断修改引用
      //   theThing = {
      //     longStr: new Array(10).join("*"),
      //     someMethod: function() {
      //       console.log("a");
      //     },
      //   };
      // };
      // replaceThing()
      this.log(`增加内存`);
      // 999999999
      // this.b = new Array(99999990).fill(1)
      this.b = new Array(35999999).fill(1)
      arr.push(this.b)
    })

    this.triggerGCBtn.on(cc.Node.EventType.TOUCH_START, () => {
      this.b=null
      arr = []
      qg.triggerGC()
      this.log(`垃圾回收`);
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

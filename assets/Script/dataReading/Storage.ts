/**
 * @desc: { 存储 } 
 * @author: zhengyiqiu 
 * @Create Date: 2020-06-23 10:21:00 
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2020-07-02 11:25:26
 */

const { ccclass, property } = cc._decorator

@ccclass
export default class Storage extends cc.Component {
  @property(cc.Label)
  logLabel: cc.Label = null

  @property(cc.Node)
  set: cc.Node = null

  @property(cc.Node)
  get: cc.Node = null
  
  @property(cc.Node)
  remove: cc.Node = null

  @property(cc.Node)
  returnBtn: cc.Node = null
  
  start() {
    this.set.on(cc.Node.EventType.TOUCH_START, () => {
      localStorage.setItem('miniGame', 'test')
      this.log('存储成功')
    })
    this.get.on(cc.Node.EventType.TOUCH_START, () => {
      let val = localStorage.getItem('miniGame')
      if(val) {
        this.log(`读取 miniGame 值: ${val}`)
      } else {
        this.log('暂无数据')
      }
    })
    this.remove.on(cc.Node.EventType.TOUCH_START, () => {
      localStorage.removeItem('miniGame')
      this.log(`清除数据成功`)
    })

    this.returnBtn.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene('dataReading')
    })
  }

  log(msg) {
    console.log(msg)
    this.logLabel.getComponent(cc.Label).string = msg
  }
}

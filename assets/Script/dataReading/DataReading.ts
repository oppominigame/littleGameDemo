/**
 * @desc: { 数据读写 } 
 * @author: zhengyiqiu 
 * @Create Date: 2020-07-02 11:06:48 
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2021-10-12 15:38:30
 */

const { ccclass, property } = cc._decorator

@ccclass
export default class DataReading extends cc.Component {
  @property(cc.Node)
  storage: cc.Node = null

  @property(cc.Node)
  file: cc.Node = null

  @property(cc.Node)
  cloudStorage: cc.Node = null

  @property(cc.Node)
  returnBtn: cc.Node = null

  start() {
    this.storage.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene('storage')
    })
    this.file.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene('file')
    })
    this.cloudStorage.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene('cloudStorage')
    })

    this.returnBtn.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene('main')
    })
  }
}

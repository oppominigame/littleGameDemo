/**
 * @desc: { 位置 } 
 * @author: zhengyiqiu 
 * @Create Date: 2020-06-30 19:59:48 
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2020-07-06 16:18:27
 */

const { ccclass, property } = cc._decorator

@ccclass
export default class Location extends cc.Component {
  @property(cc.Label)
  logLabel: cc.Label = null

  @property(cc.Node)
  locationBtn: cc.Node = null

  @property(cc.Label)
  latitude: cc.Label = null
  @property(cc.Label)
  longitude: cc.Label = null
  @property(cc.Label)
  speed: cc.Label = null
  @property(cc.Label)
  accuracy: cc.Label = null
  @property(cc.Label)
  altitude: cc.Label = null
  @property(cc.Label)
  verticalAccuracy: cc.Label = null
  @property(cc.Label)
  horizontalAccuracy: cc.Label = null
  @property(cc.Node)
  returnBtn: cc.Node = null

  start() {
    this.locationBtn.on(cc.Node.EventType.TOUCH_START, () => {
      qg.getLocation({
          // 在授权弹框点击允许时，回调成功
          type: 'wgs84',
          altitude: true,
          success: (res) => {
              for(let key in res) {
                this[key].getComponent(cc.Label).string = res[key]
              }
          },
          // 在授权弹框点击拒绝时，授权失败
          fail: (res) => {
              // 点击拒绝时，会返回报错信息："authorization failed!"
              this.log(res);
          }
      })
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

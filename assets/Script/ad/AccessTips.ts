/**
 * @desc: 接入说明
 * @Create Date: 2019-08-26 11:42:34
 * @Last Modified time: 2019-08-26 11:43:31
 */
const { ccclass, property } = cc._decorator

@ccclass
export default class AccessTips extends cc.Component {
  @property(cc.Button)
  returnBtn: cc.Button = null

  @property(cc.Node)
  nativeAdTips: cc.Node = null

  @property(cc.Node)
  rewardVideoAdTips: cc.Node = null

  start() {
    this.nativeAdTips.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene('nativeAdTips')
    })
    this.rewardVideoAdTips.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene('rewardVideoAdTips')
    })
  }

  onClickReturnBtn() {
    cc.director.loadScene('ad')
  }
}

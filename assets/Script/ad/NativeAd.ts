/**
 * @desc: 原生广告
 * @Create Date: 2019-08-26 11:42:34
 * @Last Modified time: 2019-08-26 11:43:31
 */
const { ccclass, property } = cc._decorator

@ccclass
export default class NativeAd extends cc.Component {
  @property(cc.Button)
  returnBtn: cc.Button = null

  @property(cc.Node)
  smallNativeAdBtn: cc.Node = null

  @property(cc.Node)
  bigNativeAdBtn: cc.Node = null

  @property(cc.Node)
  mediumNativeAdBtn: cc.Node = null

  @property(cc.Node)
  bannerNativeAdBtn: cc.Node = null

  @property(cc.Node)
  iconNativeAdBtn: cc.Node = null

  start() {
    this.smallNativeAdBtn.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene('smallNativeAd')
    })
    this.bigNativeAdBtn.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene('bigNativeAd')
    })
    this.mediumNativeAdBtn.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene('mediumNativeAd')
    })
    this.bannerNativeAdBtn.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene('bannerNativeAd')
    })
    this.iconNativeAdBtn.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene('iconNativeAd')
    })
  }

  onClickReturnBtn() {
    cc.director.loadScene('ad')
  }
}

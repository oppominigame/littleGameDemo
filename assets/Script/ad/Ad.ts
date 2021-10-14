/**
 * @desc: 广告
 * @Create Date: 2019-08-29 16:05:02
 * @Last Modified time: 2019-08-29 16:05:02
 */
const { ccclass, property } = cc._decorator;

@ccclass
export default class Ad extends cc.Component {
  @property(cc.Button)
  returnBtn: cc.Button = null;

  @property(cc.Node)
  bannerAd: cc.Node = null;

  @property(cc.Node)
  rewardVideoAd: cc.Node = null;

  @property(cc.Node)
  insertAd: cc.Node = null;

  @property(cc.Node)
  nativeAd: cc.Node = null;

  @property(cc.Node)
  bannerBoxAd: cc.Node = null;

  @property(cc.Node)
  portalBoxAd: cc.Node = null;

  @property(cc.Node)
  accessTips: cc.Node = null;

  @property(cc.Node)
  nativeTemplateAd: cc.Node = null;
  
  start() {
    // 跳转到 Banner 广告
    this.bannerAd.on(cc.Node.EventType.TOUCH_START, event => {
      cc.director.loadScene("bannerAd");
    });
    // 跳转到 激励视频 广告
    this.rewardVideoAd.on(cc.Node.EventType.TOUCH_START, event => {
      cc.director.loadScene("rewardVideoAd");
    });
    // 跳转到 插屏 广告
    this.insertAd.on(cc.Node.EventType.TOUCH_START, event => {
      cc.director.loadScene("insertAd");
    });
    // 跳转到 原生 广告
    this.nativeAd.on(cc.Node.EventType.TOUCH_START, event => {
      cc.director.loadScene("nativeAd");
    });
    // 跳转到 互推盒子横幅 广告
    this.bannerBoxAd.on(cc.Node.EventType.TOUCH_START, event => {
      cc.director.loadScene("bannerBoxAd");
    });
    // 跳转到 互推盒子九宫格 广告
    this.portalBoxAd.on(cc.Node.EventType.TOUCH_START, event => {
      cc.director.loadScene("portalBoxAd");
    });
    // 跳转到 接入説明
    this.accessTips.on(cc.Node.EventType.TOUCH_START, event => {
      cc.director.loadScene("accessTips");
    });
    // 跳转到 原生模版广告
    this.nativeTemplateAd.on(cc.Node.EventType.TOUCH_START, event => {
      cc.director.loadScene("nativeTemplateAd");
    });
  }

  onClickReturnBtn() {
    cc.director.loadScene("main");
  }
}

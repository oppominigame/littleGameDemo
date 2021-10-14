/**
 * @desc: 640 x 320 原生广告
 * @Create Date: 2019-08-29 16:22:12
 * @Last Modified time: 2019-08-29 16:22:12
 */
const { ccclass, property } = cc._decorator

interface INativeAd {
  load: Function
  destroy: Function
  onLoad: Function
  onError: Function
  reportAdClick: Function
  reportAdShow: Function
  offLoad: Function
  offError: Function
}

interface IAdData {
  logoUrl: string
  imgUrlList: Array<string>
  adId: string | number
  clickBtnTxt: string
  title: string
  desc: string
}

@ccclass
export default class BigNativeAd extends cc.Component {
  @property(cc.Button)
  returnBtn: cc.Button = null

  @property(cc.Node)
  showBtn: cc.Node = null

  @property(cc.Node)
  loadBtn: cc.Node = null

  @property(cc.Node)
  destroyBtn: cc.Node = null

  @property(cc.Node)
  logLabel: cc.Node = null

  @property(cc.Object)
  nativeAd: INativeAd = null

  @property(cc.Node)
  adLayout: cc.Node = null

  @property(cc.Object)
  adData: IAdData = null

  start() {
    this.adLayout.active = false
    this.nativeAd = qg.createNativeAd({
      // https://u.oppomobile.com/main/app.html 广告联盟网站中媒体管理 > 广告管理中广告名称下面的 id 即为 adUnitId
      adUnitId: '199390'
    })
    // 以下所有小游戏 API 需支持最低小游戏平台版本号'1031' (minPlatformVersion>='1031')
    this.loadBtn.on(cc.Node.EventType.TOUCH_START, () => {
      this.log('加载原生广告')
      this.adData = null
      // 手动拉取广告，成功回调 onLoad，失败回调 onError
      this.nativeAd
        .load()
        .then(() => {
          console.log('promise 回调：加载成功')
        })
        .catch(err => {
          console.log(`promise 回调：加载失败 ${JSON.stringify(err)}`)
        })
    })

    this.showBtn.on(cc.Node.EventType.TOUCH_START, () => {
      this.log('展示原生广告')
      // 调用 load 方法请求展示 banner，成功的时候回调 onShow，出错的时候回调 onError
      this.showAd()
    })
    this.destroyBtn.on(cc.Node.EventType.TOUCH_START, () => {
      this.log('销毁原生广告')
      // 销毁组件，释放资源
      this.nativeAd.destroy()
      // 销毁广告组件之后无法再加载、展示广告。得重新新建
      this.showBtn.active = false
      this.loadBtn.active = false
    })
    // 设置原生广告加载成功回调
    this.nativeAd.onLoad(res => {
      this.log(`加载原生广告成功`, `：${JSON.stringify(res)}`)
      res.adList && res.adList.length > 0 && (this.adData = res.adList[0])
    })
    // 设置原生广告出错回调
    this.nativeAd.onError(err => {
      this.log(`设置原生广告出错：${JSON.stringify(err)}`)
    })
  }

  // 回调信息展示
  log(msg, detail = '') {
    console.log(msg + detail)
    this.logLabel.getComponent(cc.Label).string = msg
  }

  showAd() {
    if (!this.adData) return
    this.adLayout.active = true
    let adImg = void 0,
      adDesc = void 0,
      adLogo = void 0,
      adClose = void 0,
      adTitle = void 0,
      adAction = void 0
    let containLayout = this.adLayout.getChildByName('containLayout')
    adImg = containLayout.getChildByName('adImg')
    adDesc = containLayout.getChildByName('adDesc')
    adLogo = containLayout.getChildByName('adLogo')
    adClose = containLayout.getChildByName('adClose')
    let actionLayout = this.adLayout.getChildByName('actionLayout')
    adAction = actionLayout.getChildByName('adAction')
    adTitle = actionLayout.getChildByName('adTitle')

    // 加载广告图片
    adImg.active = false
    this.adData.imgUrlList &&
      this.adData.imgUrlList.length > 0 &&
      cc.loader.load(this.adData.imgUrlList[0], (err, texture) => {
        adImg.active = true
        adImg.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture)
      })

    // 加载广告 logo
    adLogo.active = false
    this.adData.logoUrl &&
      cc.loader.load(this.adData.logoUrl, function(err, texture) {
        adLogo.active = true
        adLogo.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture)
      })
    adTitle.getComponent(cc.Label).string = this.adData.title
    adDesc.getComponent(cc.Label).string = this.adData.desc
    adAction
      .getChildByName('Background')
      .getChildByName('clickBtnTxt')
      .getComponent(cc.Label).string = this.adData.clickBtnTxt
    adClose.on(cc.Node.EventType.TOUCH_START, () => {
      this.adLayout.active = false
    })
    adAction.on(cc.Node.EventType.TOUCH_START, () => {
      // 点击广告按钮下载
      this.nativeAd.reportAdClick({
        adId: this.adData.adId
      })
    })
    this.nativeAd.reportAdShow({
      adId: this.adData.adId
    })
  }

  // 返回
  onClickReturnBtn() {
    cc.director.loadScene('nativeAd')
  }

  onDestroy() {
    if (!this.nativeAd) return
    this.nativeAd.offLoad() // 移除原生广告加载成功回调
    this.nativeAd.offError() // 移除失败回调
    this.nativeAd.destroy() // 隐藏 banner，成功回调 onHide, 出错的时候回调 onError
    console.log('640 x 320 原生广告销毁')
  }
}

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
export default class MediumNativeAd extends cc.Component {
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
      adUnitId: '283061'
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
      this.log('展示原生广告', JSON.stringify(this.adData))
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

  loadImg(tex, node) {
    cc.loader.load(tex, (err, texture) => {
      node.active = true
      node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture)
    })
  }

  showAd() {
    if (!this.adData) return
    this.adLayout.active = true
    let 
      adImg1 = void 0,
      adImg2 = void 0,
      adImg3 = void 0,
      adDesc = void 0,
      adLogo1 = void 0,
      adLogo2 = void 0,
      adLogo3 = void 0,
      adClose = void 0,
      adTitle = void 0,
      adAction = void 0
    let containLayout = this.adLayout.getChildByName('containLayout')
    adImg1 = containLayout.getChildByName('adImg1')
    adImg2 = containLayout.getChildByName('adImg2')
    adImg3 = containLayout.getChildByName('adImg3')
    adDesc = containLayout.getChildByName('adDesc')
    adLogo1 = containLayout.getChildByName('adLogo1')
    adLogo2 = containLayout.getChildByName('adLogo2')
    adLogo3 = containLayout.getChildByName('adLogo3')
    adClose = containLayout.getChildByName('adClose')
    let actionLayout = this.adLayout.getChildByName('actionLayout')
    adAction = actionLayout.getChildByName('adAction')
    adTitle = actionLayout.getChildByName('adTitle')

    // 加载广告图片
    adImg1.active = false
    adImg2.active = false
    adImg3.active = false
    if( this.adData.imgUrlList &&
      this.adData.imgUrlList.length > 0) {
        this.loadImg(this.adData.imgUrlList[0], adImg1)
        this.loadImg(this.adData.imgUrlList[1], adImg2)
        this.loadImg(this.adData.imgUrlList[2], adImg3)

    }


    // 加载广告 logo
    adLogo1.active = false
    adLogo2.active = false
    adLogo3.active = false
    if(this.adData.logoUrl) {
      this.loadImg(this.adData.logoUrl, adLogo1)
      this.loadImg(this.adData.logoUrl, adLogo2)
      this.loadImg(this.adData.logoUrl, adLogo3)
    }
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
    console.log('三张 320 x 210 原生广告销毁')
  }
}

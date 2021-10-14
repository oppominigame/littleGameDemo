/**
 * @desc:插屏视频广告
 * @Create Date: 2019-08-29 16:05:14
 * @Last Modified time: 2019-08-29 16:05:14
 */
const { ccclass, property } = cc._decorator

interface IInterstitialVideo {
  load: Function
  show: Function
  hide: Function
  offResize: Function
  style: object
  onLoad: Function
  offLoad: Function
  onError: Function
  offError: Function
  onResize: Function
  destroy: Function
  onClose: Function
  offClose: Function
  onShow: Function
  offShow: Function
}

@ccclass
export default class InterstitialVideo extends cc.Component {
  @property(cc.Button)
  returnBtn: cc.Button = null

  @property(cc.Node)
  createBtn: cc.Node = null

  @property(cc.Node)
  loadBtn: cc.Node = null

  @property(cc.Node)
  showBtn: cc.Node = null

  @property(cc.Node)
  onLoadBtn: cc.Node = null

  @property(cc.Node)
  offLoadBtn: cc.Node = null

  @property(cc.Node)
  onShowBtn: cc.Node = null

  @property(cc.Node)
  offShowBtn: cc.Node = null

  @property(cc.Node)
  onErrorBtn: cc.Node = null

  @property(cc.Node)
  offErrorBtn: cc.Node = null

  @property(cc.Node)
  destroyBtn: cc.Node = null

  @property(cc.Node)
  onCloseBtn: cc.Node = null

  @property(cc.Node)
  offCloseBtn: cc.Node = null

  @property(cc.Node)
  logLabel: cc.Node = null

  @property(cc.Object)
  interstitialVideo: IInterstitialVideo = null

  start() {
    this.createBtn.on(cc.Node.EventType.TOUCH_START, () => {
      this.interstitialVideo = qg.createInterstitialVideoAd({
        // 以下所有激励广告 API 需支持最低平台版本号'1051' (minPlatformVersion>='1051')
        adUnitId: '143906'
      })
      this.log(`创建插屏视频广告, 143906`)
    })

    this.loadBtn.on(cc.Node.EventType.TOUCH_START, () => {
      this.log('加载广告')
      this.interstitialVideo.load()
    })

    this.showBtn.on(cc.Node.EventType.TOUCH_START, () => {
      this.log('展示广告')
      // 调用 show 方法请求展示 banner，成功的时候回调 onShow，出错的时候回调 onError
      this.interstitialVideo.show()
    })

    this.destroyBtn.on(cc.Node.EventType.TOUCH_START, () => {
      this.log('销毁广告')
      this.interstitialVideo.destroy()
    })

    let onLoadCallBack = () => {
      this.log('加载广告成功回调')
    }

    this.onLoadBtn.on(cc.Node.EventType.TOUCH_END, () => {
      this.log('设置广告加载回调')
      // 设置 banner 成功加载回调
      this.interstitialVideo.onLoad(onLoadCallBack)
    })

    this.offLoadBtn.on(cc.Node.EventType.TOUCH_END, () => {
      this.log('移除广告加载回调')
      // 设置 banner 成功加载回调
      this.interstitialVideo.offLoad(onLoadCallBack)
    })

    let onShowCallback = () => {
      this.log('展示广告成功回调')
    }

    this.onShowBtn.on(cc.Node.EventType.TOUCH_END, () => {
      this.log('设置广告展示回调')
      // 设置 banner 成功加载回调
      this.interstitialVideo.onShow(onShowCallback)
    })

    this.offShowBtn.on(cc.Node.EventType.TOUCH_END, () => {
      this.log('移除广告展示回调')
      // 设置 banner 成功加载回调
      this.interstitialVideo.offShow(onShowCallback)
    })

    let onErrorCallback = err => {
      this.log(`广告失败回调： ${JSON.stringify(err)}`)
    }

    this.onErrorBtn.on(cc.Node.EventType.TOUCH_END, () => {
      this.log('设置广告失败回调')
      // 设置 banner 成功加载回调
      this.interstitialVideo.onError(onErrorCallback)
    })

    this.offErrorBtn.on(cc.Node.EventType.TOUCH_END, () => {
      this.log('移除广告失败回调')
      // 设置 banner 成功加载回调
      this.interstitialVideo.offError(onErrorCallback)
    })

    let onCloseCallback = () => {
      this.log('插屏视频广告关闭')
    }

    this.onCloseBtn.on(cc.Node.EventType.TOUCH_END, () => {
      this.log('设置广告关闭回调')

      this.interstitialVideo.onClose(onCloseCallback)
    })

    this.offCloseBtn.on(cc.Node.EventType.TOUCH_END, () => {
      this.log('移除广告关闭回调')

      // 设置 banner 成功加载回调
      this.interstitialVideo.offClose(onCloseCallback)
    })
  }

  // 回调信息展示
  log(msg) {
    console.log(msg)
    this.logLabel.getComponent(cc.Label).string = msg
  }

  // 返回
  onClickReturnBtn() {
    cc.director.loadScene('ad')
  }

  onDestroy() {
    if (!this.interstitialVideo) return
    this.interstitialVideo.destroy() // 销毁组件，释放资源
  }
}

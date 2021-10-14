/**
 * @desc:插屏广告
 * @Create Date: 2019-08-29 16:05:14
 * @Last Modified time: 2019-08-29 16:05:14
 */
const { ccclass, property } = cc._decorator

interface IPortalBoxAd {
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
}

@ccclass
export default class PortalBoxAd extends cc.Component {
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
  portalBoxAd: IPortalBoxAd = null

  start() {
    if(!(qg.getSystemInfoSync().platformVersionCode >= 1076)) {
      qg.showModal({
        title: '提示',
        content: '快应用平台版本号低于1076，暂不支持互推盒子相关 API'
      })
      return
    }
    this.createBtn.on(cc.Node.EventType.TOUCH_START, () => {
      this.portalBoxAd = qg.createGamePortalAd({
        // 以下所有激励广告 API 需支持最低平台版本号'1051' (minPlatformVersion>='1051')
        adUnitId: '201138'
      })
      this.log(`创建互推盒子九宫格广告, adUnitId：201138`)
    })

    this.loadBtn.on(cc.Node.EventType.TOUCH_START, () => {
      this.log('加载广告')
      this.portalBoxAd
        .load()
        .then(() => {
          console.log('promise 回调：加载成功')
        })
        .catch(err => {
          console.log(`promise 回调：加载失败 ${JSON.stringify(err)}`)
        })
    })

    this.showBtn.on(cc.Node.EventType.TOUCH_START, () => {
      this.log('展示广告')
      // 调用 show 方法请求展示 banner，成功的时候回调 onShow，出错的时候回调 onError
      this.portalBoxAd
        .show()
        .then(() => {
          console.log('promise 回调：展示成功')
        })
        .catch(err => {
          console.log(`promise 回调：展示失败 ${JSON.stringify(err)}`)
        })
    })

    this.destroyBtn.on(cc.Node.EventType.TOUCH_START, () => {
      this.log('销毁广告')
      this.portalBoxAd.destroy()
    })

    let onLoadCallBack = () => {
      this.log('加载广告成功回调')
    }

    this.onLoadBtn.on(cc.Node.EventType.TOUCH_END, () => {
      this.log('设置广告加载回调')
      // 设置 banner 成功加载回调
      this.portalBoxAd.onLoad(onLoadCallBack)
    })

    this.offLoadBtn.on(cc.Node.EventType.TOUCH_END, () => {
      this.log('移除广告加载回调')
      // 设置 banner 成功加载回调
      this.portalBoxAd.offLoad(onLoadCallBack)
    })

    let onErrorCallback = err => {
      this.log(`广告失败回调： ${JSON.stringify(err)}`)
    }

    this.onErrorBtn.on(cc.Node.EventType.TOUCH_END, () => {
      this.log('设置广告失败回调')
      // 设置 banner 成功加载回调
      this.portalBoxAd.onError(onErrorCallback)
    })

    this.offErrorBtn.on(cc.Node.EventType.TOUCH_END, () => {
      this.log('移除广告失败回调')
      // 设置 banner 成功加载回调
      this.portalBoxAd.offError(onErrorCallback)
    })

    let onCloseCallback = () => {
      this.log('互推盒子九宫格广告关闭')
    }

    this.onCloseBtn.on(cc.Node.EventType.TOUCH_END, () => {
      this.log('设置广告关闭回调')

      this.portalBoxAd.onClose(onCloseCallback)
    })

    this.offCloseBtn.on(cc.Node.EventType.TOUCH_END, () => {
      this.log('移除广告关闭回调')

      // 设置 banner 成功加载回调
      this.portalBoxAd.offClose(onCloseCallback)
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
    if (!this.portalBoxAd) return
    this.portalBoxAd.destroy() // 销毁组件，释放资源
  }
}

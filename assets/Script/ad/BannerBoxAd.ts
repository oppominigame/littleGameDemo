/**
 * @desc: { 互推盒子横幅广告 } 
 * @author: zhengyiqiu 
 * @Create Date: 2020-08-18 17:15:23 
 * @Last Modified by: 80261040
 * @Last Modified time: 2021-04-14 15:35:26
 */
const { ccclass, property } = cc._decorator

interface IBannerAd {
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
}

@ccclass
export default class BannerAd extends cc.Component {
  @property(cc.Button)
  returnBtn: cc.Button = null

  @property(cc.Node)
  createBtn: cc.Node = null

  @property(cc.Node)
  showBtn: cc.Node = null

  @property(cc.Node)
  hideBtn: cc.Node = null

  // @property(cc.Node)
  // changeStyleBtn: cc.Node = null

  @property(cc.Node)
  destroyBtn: cc.Node = null

  @property(cc.Node)
  onLoadBtn: cc.Node = null

  @property(cc.Node)
  offLoadBtn: cc.Node = null

  @property(cc.Node)
  onErrorBtn: cc.Node = null

  @property(cc.Node)
  offErrorBtn: cc.Node = null

  // @property(cc.Node)
  // onResizeBtn: cc.Node = null

  // @property(cc.Node)
  // offResizeBtn: cc.Node = null

  @property(cc.Node)
  logLabel: cc.Node = null

  @property(cc.Object)
  bannerBoxAd: IBannerAd = null

  // @property(cc.EditBox)
  // widthInput: cc.EditBox = null

  // @property(cc.EditBox)
  // heightInput: cc.EditBox = null

  // @property(cc.EditBox)
  // topInput: cc.EditBox = null

  // @property(cc.EditBox)
  // leftInput: cc.EditBox = null

  start() {
    if(!(qg.getSystemInfoSync().platformVersionCode >= 1076)) {
      qg.showModal({
        title: '提示',
        content: '快应用平台版本号低于1076，暂不支持互推盒子相关 API'
      })
      return
    }
    this.createBtn.on(cc.Node.EventType.TOUCH_START, () => {
      this.bannerBoxAd = qg.createGameBannerAd({
        // https://u.oppomobile.com/main/app.html 广告联盟网站中媒体管理 > 广告管理中广告名称下面的 id 即为 adUnitId
        adUnitId: '201139'
      })
      this.log(`创建互推盒子横幅广告, adUnitId：201139`)
    })

    this.showBtn.on(cc.Node.EventType.TOUCH_START, () => {
      this.log('展示广告')
      // 调用 show 方法请求展示 banner，成功的时候回调 onShow，出错的时候回调 onError
      this.bannerBoxAd
        .show()
        .then(() => {
          console.log('promise 回调：展示成功')
        })
        .catch(err => {
          console.log(`promise 回调：展示失败 ${JSON.stringify(err)}`)
        })
    })
    this.hideBtn.on(cc.Node.EventType.TOUCH_START, () => {
      this.log('隐藏广告')
      // 隐藏 banner，成功回调 onHide, 出错的时候回调 onError
      this.bannerBoxAd.hide()
    })
    this.destroyBtn.on(cc.Node.EventType.TOUCH_START, () => {
      this.log('销毁广告')
      this.bannerBoxAd.destroy()
    })

    let onLoadCallBack = () => {
      this.log('加载广告成功回调')
    }

    this.onLoadBtn.on(cc.Node.EventType.TOUCH_END, () => {
      this.log('设置广告加载回调')
      // 设置 banner 成功加载回调
      this.bannerBoxAd.onLoad(onLoadCallBack)
    })

    this.offLoadBtn.on(cc.Node.EventType.TOUCH_END, () => {
      this.log('移除广告加载回调')
      // 设置 banner 成功加载回调
      this.bannerBoxAd.offLoad(onLoadCallBack)
    })

    let onErrorCallback = err => {
      this.log(`广告失败回调： ${JSON.stringify(err)}`)
    }

    this.onErrorBtn.on(cc.Node.EventType.TOUCH_END, () => {
      this.log('设置广告失败回调')
      // 设置 banner 成功加载回调
      this.bannerBoxAd.onError(onErrorCallback)
    })

    this.offErrorBtn.on(cc.Node.EventType.TOUCH_END, () => {
      this.log('移除广告失败回调')
      // 设置 banner 成功加载回调
      this.bannerBoxAd.offError(onErrorCallback)
    })

    // let onResizeCallback = obj => {
    //   this.log('banner 宽度：' + obj.width + ', banner 高度：' + obj.height)
    // }

    // this.onResizeBtn.on(cc.Node.EventType.TOUCH_END, () => {
    //   this.log('设置广告宽高变化回调')

    //   this.bannerBoxAd.onResize(onResizeCallback)
    // })

    // this.offResizeBtn.on(cc.Node.EventType.TOUCH_END, () => {
    //   this.log('移除广告宽高变化回调')

    //   // 设置 banner 成功加载回调
    //   this.bannerBoxAd.offResize(onResizeCallback)
    // })

    // this.changeStyleBtn.on(cc.Node.EventType.TOUCH_START, () => {
    //   let width = parseInt(this.widthInput.string.replace(/[^0-9]/gi, ''))
    //   let height = parseInt(this.heightInput.string.replace(/[^0-9]/gi, ''))
    //   let top = parseInt(this.topInput.string.replace(/[^0-9]/gi, ''))
    //   let left = parseInt(this.leftInput.string.replace(/[^0-9]/gi, ''))
    //   this.addStyle('width', width)
    //   this.addStyle('height', height)
    //   this.addStyle('top', top)
    //   this.addStyle('left', left)
    //   this.log(`广告样式：${JSON.stringify(this.bannerBoxAd.style)}`)
    // })
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

  addStyle(key, value) {
    if ((value !== 0 && !value) || value === '') return this.bannerBoxAd.style
    // 参数必须保证广告能够在屏幕完全展示，否则设置不生效
    this.bannerBoxAd.style[key] = value
    return this.bannerBoxAd.style
  }

  onDestroy() {
    if (!this.bannerBoxAd) return
    this.bannerBoxAd.destroy() // 销毁组件，释放资源
  }
}

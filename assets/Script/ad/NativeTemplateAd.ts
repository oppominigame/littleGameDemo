/**
 * @desc: 原生模版 广告
 * @Create Date: 2019-08-29 16:05:14
 * @Last Modified time: 2019-08-29 16:05:14
 */

const { ccclass, property } = cc._decorator

interface INativeTemplateAd {
  show: Function
  hide: Function
  onLoad: Function
  offLoad: Function
  onError: Function
  offError: Function
  onHide: Function
  offHide: Function
  onShow: Function
  offShow: Function
  destroy: Function
}

@ccclass
export default class customAd extends cc.Component {
  @property(cc.Button)
  returnBtn: cc.Button = null

  @property(cc.Node)
  createBtn: cc.Node = null

  @property(cc.Node)
  showBtn: cc.Node = null

  @property(cc.Node)
  hideBtn: cc.Node = null

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

  @property(cc.Node)
  onShowBtn: cc.Node = null

  @property(cc.Node)
  offShowBtn: cc.Node = null

  @property(cc.Node)
  onHideBtn: cc.Node = null

  @property(cc.Node)
  offHideBtn: cc.Node = null

  @property(cc.Node)
  logLabel: cc.Node = null

  @property(cc.Object)
  customAd: INativeTemplateAd = null

  @property(cc.EditBox)
  widthInput: cc.EditBox = null

  @property(cc.EditBox)
  topInput: cc.EditBox = null

  @property(cc.EditBox)
  leftInput: cc.EditBox = null

  @property(cc.EditBox)
  adUnitId: cc.EditBox = null

  onTemplateToggle(res) {
    // 切换原生模版广告的adUnitAd，上文下图：'399676'，左文右图：’400007‘，三图模版：‘400008’
    this.adUnitId.string = res.node.name
  }

  start() {
    this.adUnitId.string = '399676'
    this.createBtn.on(cc.Node.EventType.TOUCH_START, () => {
      this.customAd = qg.createCustomAd({
        // https://u.oppomobile.com/main/app.html 广告联盟网站中媒体管理 > 广告管理中广告名称下面的 id 即为 adUnitId
        adUnitId: this.adUnitId.string + ''
      })
      this.log(`创建 原生模版 广告, adUnitId：${this.adUnitId.string}`)
    })

    this.showBtn.on(cc.Node.EventType.TOUCH_START, () => {
      this.log('展示广告')
      // 调用 show 方法请求展示 原生模版广告，成功的时候回调 onShow，出错的时候回调 onError
      this.customAd
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
      // 隐藏 原生模版广告，成功回调 onHide, 出错的时候回调 onError
      this.customAd.hide()
    })
    this.destroyBtn.on(cc.Node.EventType.TOUCH_START, () => {
      this.log('销毁广告')
      this.customAd.destroy()
    })

    let onLoadCallBack = () => {
      this.log('加载广告成功回调')
    }

    this.onLoadBtn.on(cc.Node.EventType.TOUCH_END, () => {
      this.log('设置广告加载回调')
      // 设置 原生模版广告 成功加载回调
      this.customAd.onLoad(onLoadCallBack)
    })

    this.offLoadBtn.on(cc.Node.EventType.TOUCH_END, () => {
      this.log('移除广告加载回调')
      // 设置 原生模版广告 成功加载回调
      this.customAd.offLoad(onLoadCallBack)
    })

    let onErrorCallback = err => {
      this.log(`广告失败回调： ${JSON.stringify(err)}`)
    }

    this.onErrorBtn.on(cc.Node.EventType.TOUCH_END, () => {
      this.log('设置广告失败回调')
      // 设置 原生模版广告 成功加载回调
      this.customAd.onError(onErrorCallback)
    })

    this.offErrorBtn.on(cc.Node.EventType.TOUCH_END, () => {
      this.log('移除广告失败回调')
      // 设置 原生模版广告 成功加载回调
      this.customAd.offError(onErrorCallback)
    })

    let onHideCallback = err => {
      this.log(`广告失败回调： ${JSON.stringify(err)}`)
    }

    this.onHideBtn.on(cc.Node.EventType.TOUCH_END, () => {
      this.log('设置广告隐藏回调')
      // 设置 原生模版广告 成功加载回调
      this.customAd.onHide(onHideCallback)
    })

    this.offHideBtn.on(cc.Node.EventType.TOUCH_END, () => {
      this.log('移除广告隐藏回调')
      // 设置 原生模版广告 成功加载回调
      this.customAd.offHide(onHideCallback)
    })

    let onShowCallback = obj => {
      this.log('设置广告展示回调：' + '原生模版广告 宽度：' + obj.width + ', 原生模版广告 高度：' + obj.height)
    }

    this.onShowBtn.on(cc.Node.EventType.TOUCH_END, () => {
      this.log('设置广告宽高变化回调')

      this.customAd.onShow(onShowCallback)
    })

    this.offShowBtn.on(cc.Node.EventType.TOUCH_END, () => {
      this.log('移除广告宽高变化回调')

      this.customAd.offShow(onShowCallback)
    })

    // this.changeStyleBtn.on(cc.Node.EventType.TOUCH_START, () => {
    //   let width = parseInt(this.widthInput.string.replace(/[^0-9]/gi, ''))
    //   let height = parseInt(this.heightInput.string.replace(/[^0-9]/gi, ''))
    //   let top = parseInt(this.topInput.string.replace(/[^0-9]/gi, ''))
    //   let left = parseInt(this.leftInput.string.replace(/[^0-9]/gi, ''))
    //   this.addStyle('width', width)
    //   this.addStyle('height', height)
    //   this.addStyle('top', top)
    //   this.addStyle('left', left)
    //   this.log(`广告样式：${JSON.stringify(this.customAd.style)}`)
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

  // addStyle(key, value) {
  //   if ((value !== 0 && !value) || value === '') return this.customAd.style
  //   // 参数必须保证广告能够在屏幕完全展示，否则设置不生效
  //   this.customAd.style[key] = value
  //   return this.customAd.style
  // }

  onDestroy() {
    if (!this.customAd) return
    this.customAd.destroy() // 销毁组件，释放资源
  }
}

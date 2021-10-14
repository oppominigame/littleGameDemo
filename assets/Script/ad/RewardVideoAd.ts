/**
 * @desc: 激励视频广告
 * @Create Date: 2019-08-29 16:05:14
 * @Last Modified time: 2019-08-29 16:05:14
 */
const { ccclass, property } = cc._decorator

interface IRewardVideoAd {
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
export default class RewardVideoAd extends cc.Component {
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
  rewardVideoAd: IRewardVideoAd = null

  @property(cc.EditBox)
  adUnitId: cc.EditBox = null

  start() {
    this.adUnitId.string = '199392'
    this.createBtn.on(cc.Node.EventType.TOUCH_START, () => {
      this.rewardVideoAd = qg.createRewardedVideoAd({
        // 以下所有激励广告 API 需支持最低平台版本号'1051' (minPlatformVersion>='1051')
        adUnitId: this.adUnitId.string + ''
      })
      this.log(`创建激励视频广告, ${this.adUnitId.string}`)
    })

    this.loadBtn.on(cc.Node.EventType.TOUCH_START, () => {
      this.log('加载广告')
      this.rewardVideoAd
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
      this.rewardVideoAd
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
      this.rewardVideoAd.destroy()
    })

    let onLoadCallBack = () => {
      this.log('加载广告成功回调')
    }

    this.onLoadBtn.on(cc.Node.EventType.TOUCH_END, () => {
      this.log('设置广告加载回调')
      // 设置 banner 成功加载回调
      this.rewardVideoAd.onLoad(onLoadCallBack)
    })

    this.offLoadBtn.on(cc.Node.EventType.TOUCH_END, () => {
      this.log('移除广告加载回调')
      // 设置 banner 成功加载回调
      this.rewardVideoAd.offLoad(onLoadCallBack)
    })

    let onErrorCallback = err => {
      this.log(`广告失败回调： ${JSON.stringify(err)}`)
    }

    this.onErrorBtn.on(cc.Node.EventType.TOUCH_END, () => {
      this.log('设置广告失败回调')
      // 设置 banner 成功加载回调
      this.rewardVideoAd.onError(onErrorCallback)
    })

    this.offErrorBtn.on(cc.Node.EventType.TOUCH_END, () => {
      this.log('移除广告失败回调')
      // 设置 banner 成功加载回调
      this.rewardVideoAd.offError(onErrorCallback)
    })

    let onCloseCallback = res => {
      if (res.isEnded) {
        this.log('激励视频广告完成，发放奖励')
      } else {
        this.log('激励视频广告取消关闭，不发放奖励')
      }
    }

    this.onCloseBtn.on(cc.Node.EventType.TOUCH_END, () => {
      this.log('设置广告关闭回调')

      this.rewardVideoAd.onClose(onCloseCallback)
    })

    this.offCloseBtn.on(cc.Node.EventType.TOUCH_END, () => {
      this.log('移除广告关闭回调')

      // 设置 banner 成功加载回调
      this.rewardVideoAd.offClose(onCloseCallback)
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
    if (!this.rewardVideoAd) return
    this.rewardVideoAd.destroy() // 销毁组件，释放资源
  }
}

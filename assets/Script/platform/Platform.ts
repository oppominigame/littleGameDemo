/**
 * @desc: 平台能力
 * @Create Date: 2019-08-28 17:54:21
 * @Last Modified time: 2019-08-29 15:24:06
 */
const { ccclass, property } = cc._decorator

@ccclass
export default class Platform extends cc.Component {
  @property(cc.Label)
  logLabel: cc.Label = null

  @property(cc.Node)
  loginBtn: cc.Node = null

  @property(cc.Node)
  homescreenIconBtn: cc.Node = null

  @property(cc.Node)
  jumpBtn: cc.Node = null

  @property(cc.Node)
  returnBtn: cc.Node = null

  start() {
    // 登录，支持最低平台版本号'1040' (minPlatformVersion>='1040')
    this.loginBtn.on(cc.Node.EventType.TOUCH_START, () => {
      qg.login({
        success: res => {
          // 可全局储存 token，方便其他能力获取，注意 token 过期时间
          this.log(`登录成功: ${JSON.stringify(res.data)}`)
          window['TOKEN'] = res.data.token
        },
        fail: res => {
          this.log(`登录失败: ${JSON.stringify(res)}`)
        }
      })
    })
    // 创建桌面图标，支持最低平台版本号 1040
    this.homescreenIconBtn.on(cc.Node.EventType.TOUCH_START, () => {
      // 判断是否已经创建桌面图标
      qg.hasShortcutInstalled({
        success: res => {
          // 判断图标未存在时，创建图标
          if (res == false) {
            // 创建桌面图标，需要用户授权
            qg.installShortcut({
              success: res => {
                // 可执行用户创建图标奖励
                this.log(`调起创建桌面图标弹窗成功: ${JSON.stringify(res)}，
                注：由于安卓系统高低版本能力的差异，为了体验统一暂时不提供用户点击取消、添加按钮的回调，可以自己设置时间间隔结合检测创建桌面图标与否的接口做判断`)
              },
              fail: err => {
                this.log(`调起创建桌面图标弹窗失败: ${JSON.stringify(err)}`)
              },
              complete: () => {
                console.log('调起创建桌面图标弹窗')
              }
            })
          } else {
            this.log('桌面图标已创建')
          }
        },
        fail: err => {
          this.log(JSON.stringify(err))
        }
      })
    })

    this.jumpBtn.on(cc.Node.EventType.TOUCH_START, () => {
      this.log(`平台版本号： ${window['Global'] && window['Global'].platformVersion}`)

      // 跳转小游戏按钮，支持最低平台版本号'1044' (minPlatformVersion>='1044')
      if (window['Global'] && window['Global'].platformVersion >= 1044) {
        qg.navigateToMiniGame({
          pkgName: 'com.wepie.snake.miniprogram.nearme.gamecenter', // 要打开的小游戏包名, 此 demo 是贪吃蛇的包名
          success: () => {
            this.log('跳转小游戏成功')
          },
          fail: res => {
            this.log(`跳转小游戏失败：${JSON.stringify(res)}`)
          }
        })
      } else {
        this.log('平台版本号小于1044，不支持跳转小游戏')
      }
    })

    this.returnBtn.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene('main')
    })
  }

  // 回调信息展示
  log(msg) {
    console.log(msg)
    this.logLabel.getComponent(cc.Label).string = msg
  }
}

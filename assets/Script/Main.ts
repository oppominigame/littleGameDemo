/**
 * @desc: 首页
 * @Create Date: 2019-08-28 17:46:50
 * @Last Modified time: 2019-08-29 14:57:51
 */
const { ccclass, property } = cc._decorator

@ccclass
export default class NewClass extends cc.Component {
  @property(cc.Node)
  platformBtn: cc.Node = null

  @property(cc.Node)
  payBtn: cc.Node = null

  @property(cc.Node)
  adBtn: cc.Node = null

  @property(cc.Node)
  mediaBtn: cc.Node = null

  @property(cc.Node)
  deviceBtn: cc.Node = null

  @property(cc.Node)
  interfaceBtn: cc.Node = null

  @property(cc.Node)
  systemBtn: cc.Node = null

  @property(cc.Node)
  locationBtn: cc.Node = null

  @property(cc.Node)
  platformToolBtn: cc.Node = null
  
  @property(cc.Node)
  renderBtn: cc.Node = null

  @property(cc.Node)
  networkBtn: cc.Node = null

  @property(cc.Node)
  dataReadingBtn: cc.Node = null

  @property(cc.Node)
  voipBtn: cc.Node = null

  @property(cc.Node)
  detectFaceBtn: cc.Node = null

  @property(cc.Node)
  gameRecorderBtn: cc.Node = null

  @property(cc.Node)
  mainNode: cc.Node = null

  onLoad() {
    // 设置常驻节点，控制所有场景的加载
    cc.game.addPersistRootNode(this.mainNode)
    // 展示系统信息
    qg.getSystemInfo({
      success: res => {
        console.log(`系统信息: ${JSON.stringify(res)}`)
        // 全局储存平台版本号，后续可以通过 window.Global.platformVersion 获取，以检测某些游戏能力平台版本是否支持
        window['Global'] = {
          platformVersion: res.platformVersion
        }
      },
      fail: err => {
        console.log(`获取系统信息出错: ${JSON.stringify(err)}`)
      }
    })
  }

  start() {
    this.platformBtn.on(cc.Node.EventType.TOUCH_END, () => {
      cc.director.loadScene('platform')
    })

    this.payBtn.on(cc.Node.EventType.TOUCH_END, () => {
      cc.director.loadScene('pay')
    })

    this.adBtn.on(cc.Node.EventType.TOUCH_END, () => {
      cc.director.loadScene('ad')
    })

    this.deviceBtn.on(cc.Node.EventType.TOUCH_END, () => {
      cc.director.loadScene('device')
    })

    this.interfaceBtn.on(cc.Node.EventType.TOUCH_END, () => {
      cc.director.loadScene('interface')
    })
    
    this.systemBtn.on(cc.Node.EventType.TOUCH_END, () => {
      cc.director.loadScene('system')
    })
    
    this.mediaBtn.on(cc.Node.EventType.TOUCH_END, () => {
      cc.director.loadScene('media')
    })
    
    this.platformToolBtn.on(cc.Node.EventType.TOUCH_END, () => {
      cc.director.loadScene('platformTool')
    })

    this.locationBtn.on(cc.Node.EventType.TOUCH_END, () => {
      cc.director.loadScene('location')
    })

    this.renderBtn.on(cc.Node.EventType.TOUCH_END, () => {
      cc.director.loadScene('render')
    })

    this.networkBtn.on(cc.Node.EventType.TOUCH_END, () => {
      cc.director.loadScene('network')
    })

    this.dataReadingBtn.on(cc.Node.EventType.TOUCH_END, () => {
      cc.director.loadScene('dataReading')
    })
    this.voipBtn.on(cc.Node.EventType.TOUCH_END, () => {
      cc.director.loadScene('voice')
    })
    this.detectFaceBtn.on(cc.Node.EventType.TOUCH_END, () => {
      cc.director.loadScene('detectFace')
    })
    this.gameRecorderBtn.on(cc.Node.EventType.TOUCH_END, () => {
      cc.director.loadScene('gameRecorder')
    })
  }
}

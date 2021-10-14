/**
 * @desc: 动画
 * @Create Date: 2019-08-28 17:54:21
 * @Last Modified time: 2019-08-29 15:24:06
 */
const { ccclass, property } = cc._decorator

@ccclass
export default class Animation extends cc.Component {
  @property(cc.Label)
  logLabel: cc.Label = null

  @property(cc.Node)
  playAnimation: cc.Node = null

  @property(cc.Node)
  returnBtn: cc.Node = null

  @property(cc.Animation)
  down: cc.Animation = null

  @property(cc.Node)
  playParticleBtn: cc.Node = null

  @property(cc.Node)
  particleNode: cc.Node = null

  start() {
    this.playAnimation.on(cc.Node.EventType.TOUCH_START, () => {
      this.log('播放动画')
      this.down.play('down')
    })

    this.playParticleBtn.on(cc.Node.EventType.TOUCH_START, () => {
      let particleSystem = this.particleNode.getComponent(cc.ParticleSystem)
      if (particleSystem.active) {
        particleSystem.stopSystem()
        this.log('暂停粒子动画')
      } else {
        particleSystem.resetSystem()
        this.log('播放粒子动画')
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

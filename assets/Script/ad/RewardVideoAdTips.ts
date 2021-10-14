/**
 * @desc: 接入说明
 * @Create Date: 2019-08-26 11:42:34
 * @Last Modified time: 2019-08-26 11:43:31
 */
const { ccclass, property } = cc._decorator

@ccclass
export default class RewardVideoAdTips extends cc.Component {
  @property(cc.Button)
  returnBtn: cc.Button = null

  @property(cc.Node)
  noAdTips: cc.Node = null

  start() {
    this.noAdTips.on(cc.Node.EventType.TOUCH_START, () => {
      qg.showModal({
        title: '提示',
        content: '暂时无广告',
        showCancel: false
      })
    })
  }

  onClickReturnBtn() {
    cc.director.loadScene('accessTips')
  }
}

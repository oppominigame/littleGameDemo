/**
 * @desc: 接入说明
 * @Create Date: 2019-08-26 11:42:34
 * @Last Modified time: 2019-08-26 11:43:31
 */
const { ccclass, property } = cc._decorator

@ccclass
export default class NativeAdTips extends cc.Component {
  @property(cc.Button)
  returnBtn: cc.Button = null

  @property(cc.Node)
  accessStyles: cc.Node = null

  @property(cc.Node)
  accessRules: cc.Node = null
  
  @property(cc.Node)
  accessStylesText: cc.Node = null

  @property(cc.Node)
  accessRulesText: cc.Node = null

  start() {
    this.accessStyles.on(cc.Node.EventType.TOUCH_START, () => {
      this.accessRulesText.active = false
      this.accessStylesText.active = true
    })
    this.accessRules.on(cc.Node.EventType.TOUCH_START, () => {
      this.accessStylesText.active = false
      this.accessRulesText.active = true
    })
  }

  onClickReturnBtn() {
    cc.director.loadScene('accessTips')
  }
}

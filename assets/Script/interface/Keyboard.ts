/**
 * @desc: { 键盘 } 
 * @author: zhengyiqiu 
 * @Create Date: 2020-06-23 10:21:00 
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2020-06-30 15:53:08
 */

const { ccclass, property } = cc._decorator

@ccclass
export default class Keyboard extends cc.Component {
  @property(cc.EditBox)
  defaultValueInput: cc.EditBox = null

  @property(cc.EditBox)
  maxLengthInput: cc.EditBox = null
  
  @property(cc.EditBox)
  confirmTypeInput: cc.EditBox = null

  @property(cc.Toggle)
  multipleToggle: cc.Toggle = null

  @property(cc.Toggle)
  confirmHoldToggle: cc.Toggle = null

  @property(cc.Node)
  showBtn: cc.Node = null

  @property(cc.Node)
  hideBtn: cc.Node = null

  @property(cc.Node)
  onConfirmBtn: cc.Node = null

  @property(cc.Node)
  onInputBtn: cc.Node = null

  @property(cc.Node)
  onCompleteBtn: cc.Node = null

  @property(cc.Node)
  returnBtn: cc.Node = null

  @property(cc.Label)
  onConfirmLabel: cc.Label = null
 
  @property(cc.Label)
  onInputLabel: cc.Label = null

  @property(cc.Label)
  onCompleteLabel: cc.Label = null



  start() {
    this.showBtn.on(cc.Node.EventType.TOUCH_START, () => {
      let defaultValue = this.defaultValueInput.string || ''
      let maxLength = parseInt(this.maxLengthInput.string.replace(/[^0-9]/gi, '')) || 100
      let multiple = this.multipleToggle.isChecked
      let confirmHold = !this.confirmHoldToggle.isChecked
      let confirmType = this.confirmTypeInput.string || 'done'
      console.log('multiple', multiple)
      console.log('confirmHold', confirmHold)
      qg.showKeyboard({
        defaultValue,
        maxLength,
        multiple,
        confirmHold,
        confirmType,
        success: function(){
          console.log("show keyboard");
        }
      })
    })

    this.hideBtn.on(cc.Node.EventType.TOUCH_START, () => {
      qg.hideKeyboard({
          success: function(){
              console.log("hide keyboard");
          }
      })
    })
    this.onInputBtn.on(cc.Node.EventType.TOUCH_START, () => {
      let inputCb = (res) => {
        this.onInputLabel.getComponent(cc.Label).string = res['value']
      }
      if(cc.find("Background/Label", this.onInputBtn).getComponent(cc.Label).string == '监听输入') {
        qg.onKeyboardInput(inputCb)
        cc.find("Background/Label", this.onInputBtn).getComponent(cc.Label).string = '取消监听输入'
      } else {
        qg.offKeyboardInput()
        this.onInputLabel.getComponent(cc.Label).string = "取消监听输入"
        cc.find("Background/Label", this.onInputBtn).getComponent(cc.Label).string = '监听输入'
      }
    })
    this.onCompleteBtn.on(cc.Node.EventType.TOUCH_START, () => {
      let completeCb = (res) => {
        this.onCompleteLabel.getComponent(cc.Label).string = res['value']
      }
      if(cc.find("Background/Label", this.onCompleteBtn).getComponent(cc.Label).string == '监听收起') {
        qg.onKeyboardComplete(completeCb)
        cc.find("Background/Label", this.onCompleteBtn).getComponent(cc.Label).string = '取消监听收起'
      } else {
        qg.offKeyboardComplete()
        this.onCompleteLabel.getComponent(cc.Label).string = "取消监听收起"
        cc.find("Background/Label", this.onCompleteBtn).getComponent(cc.Label).string = '监听收起'
      }
    })
    this.onConfirmBtn.on(cc.Node.EventType.TOUCH_START, () => {
      let confirmCb = (res) => {
        this.onConfirmLabel.getComponent(cc.Label).string = res['value']
      }
      if(cc.find("Background/Label", this.onConfirmBtn).getComponent(cc.Label).string == '监听完成') {
        qg.onKeyboardConfirm(confirmCb)
        cc.find("Background/Label", this.onConfirmBtn).getComponent(cc.Label).string = '取消监听完成'
      } else {
        qg.offKeyboardConfirm()
        this.onConfirmLabel.getComponent(cc.Label).string = "取消监听完成"
        cc.find("Background/Label", this.onConfirmBtn).getComponent(cc.Label).string = '监听完成'
      }
    })

    this.returnBtn.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene('interface')
    })
  }
}

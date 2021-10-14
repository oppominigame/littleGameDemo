/**
 * @desc: { 提示框 } 
 * @author: zhengyiqiu 
 * @Create Date: 2020-06-28 11:30:10 
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2020-06-28 11:53:35
 */

const { ccclass, property } = cc._decorator

@ccclass
export default class TipFrame extends cc.Component {
  @property(cc.Label)
  logLabel: cc.Label = null

  @property(cc.Node)
  showToastBtn: cc.Node = null
  
  @property(cc.Node)
  showModalBtn: cc.Node = null
  
  @property(cc.Node)
  showLoadingBtn: cc.Node = null
  
  @property(cc.Node)
  showActionSheetBtn: cc.Node = null

  @property(cc.Node)
  returnBtn: cc.Node = null
  
  start() {
    this.showToastBtn.on(cc.Node.EventType.TOUCH_START, () => {
      qg.showToast({
        title: '成功',
        icon: 'success',
        duration: 2000,
        success: () => {
          this.log('showToast success')
        }
      })
    })
    this.showModalBtn.on(cc.Node.EventType.TOUCH_START, () => {
      qg.showModal({
        title: '提示',
        content: '这是一个模态弹窗',
        success: (res) => {
          if (res.confirm) {
            this.log('showModal success: 用户点击确定')
          } else if (res.cancel) {
            this.log('showModal success: 用户点击取消')
          }
        }
      })
    })
    this.showLoadingBtn.on(cc.Node.EventType.TOUCH_START, () => {
      qg.showLoading({
        title: '加载中',
        success: () => {
          this.log('showLoading success')
        }
      })
      
      setTimeout(() => {
        qg.hideLoading({
          success: () => {
            this.log('hideLoading success')
          }
        })
      }, 2000)
    })
    this.showActionSheetBtn.on(cc.Node.EventType.TOUCH_START, () => {
      qg.showActionSheet({
        itemList: ['A', 'B', 'C'],
        success: (res) => {
          this.log(`showActionSheet success: 用户点击按钮序号为 ${res.tapIndex}`)
        },
        fail: (res) => {
          this.log(`showActionSheet fail: ${res.errMsg}`)
        }
      })
    })

    this.returnBtn.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene('interface')
    })
  }

  log(msg) {
    console.log(msg)
    this.logLabel.getComponent(cc.Label).string = msg
  }
}

/**
 * @desc: 支付
 * @Create Date: 2019-08-28 17:59:07
 * @Last Modified time: 2019-08-29 14:57:41
 */
const { ccclass, property } = cc._decorator

@ccclass
export default class Pay extends cc.Component {
  @property(cc.Label)
  logLabel: cc.Label = null

  @property(cc.Node)
  payBtn: cc.Node = null  
  
  @property(cc.EditBox)
  moneyInput: cc.EditBox = null

  @property(cc.Node)
  returnBtn: cc.Node = null

  start() {
    this.payBtn.on(cc.Node.EventType.TOUCH_START, () => {
      // 支付之前需要先登录
      qg.login({
        success: res => {
          this.log(`登录成功: ${JSON.stringify(res.data)}`)
          // 向自己的服务器发送支付请求
          this.sendPayRequest(res.data.token)
        },
        fail: res => {
          this.log(`登录失败: ${JSON.stringify(res)}`)
        }
      })
    })
    this.returnBtn.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene('main')
    })
  }

  sendPayRequest(token) {
    let sendData = this.formatSendData(token)
    let xhr = new XMLHttpRequest()
    xhr.open(
      'POST',
      // 小游戏示例专用的服务器接口，完成统一下单接口的请求，CP 不可用
      // 注：CP 需要自己搭建服务器接口，调用小游戏文档里的统一下单接口完成签名等操作后获取平台返回的时间戳、订单号、支付签名，再返回数据给小游戏发起支付
      // 注：服务器向平台请求统一下单接口完成签名等操作具体可参考 server 文件夹里的代码
      // TODO: 替换为自己的服务器地址
      ''
    )
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.setRequestHeader('charset', 'UTF-8')

    xhr.onreadystatechange = () => {
      if (xhr.status === 200) {
        // 获取服务器返回的数据后调用文档的发起支付接口
        let data = JSON.parse(xhr.response).data
        qg.pay({
          appId: 30173650,
          // 登录接口返回的token
          token: token,
          // 时间戳
          timestamp: data.timestamp,
          // 订单号
          orderNo: data.orderNo,
          // 支付签名，需要由服务器生成向平台发起统一下单接口后返回
          paySign: data.paySign,
          // 成功回调函数，结果以小游戏平台通知CP的回调地址为准
          success: res => {
            this.log(JSON.stringify(res))
          },
          fail: res => {
            this.log(JSON.stringify(res))
          }
        })
      } else {
        this.log(JSON.parse(xhr.response))
      }
    }
    xhr.send(JSON.stringify(sendData))
  }

  formatSendData(token) {
    // 统一下单必填的数据（除了sign）
    let dataObject = {
      openId: token,
      deviceInfo: '',
      model: 'PAAM00',
      ip: '10.102.217.239',
      productName: '测试',
      productDesc: 'testpay',
      count: 1,
      price: +this.moneyInput.string || 1, // 以分为单位
      currency: 'CNY',
      attach: '',
      appVersion: '1.0.0',
      engineVersion: '1045'
    }
    console.log(`--- sendData: ${JSON.stringify(dataObject)}`)
    return dataObject
  }

  log(msg) {
    console.log(msg)
    this.logLabel.getComponent(cc.Label).string = msg
  }
}

const express = require('express')
const https = require('https')
const app = express()
const crypto = require('crypto') // node 自带的加密模块
const cors = require('cors') // 跨域模块
const port = process.env.PORT || 3000
const ONLINE_API_URL = `http://127.0.0.1:${port}`
const TIMESTAMP = new Date().getTime()
const { sortByASCII, urlEncode } = require('./utils')

app.get('/', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With')
  res.setHeader('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')

  res.send('hello nodejs')
})

// 支付接口
app.post('/payResult', cors(), (req, res) => {
  // console.log('req', req)
  console.log('req', req)
  let { token } = req.body
  let result = sendPayRequest(token)
  res.setHeader('Content-Type', 'application/json')
  console.log('支付接口返回给小游戏的数据', result)

  res.send(result)
})

console.log(ONLINE_API_URL)
app.listen(port)

// mock：服务器自己模拟发起下单请求，真实环境应该是小游戏调用服务器支付接口发起下单请求
// TODO:替换自己的token
sendPayRequest('') // ''是token

// 向小游戏平台统一下单接口请求数据
function sendPayRequest(token) {
  let { sendData } = formatSendData(token)
  // TODO: 替换自己的统一下单接口 URL:  
  const options = {
    hostname: '',
    path: '',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const req = https.request(options, res => {
    res.on('data', d => {
      console.log(`统一下单接口返回的数据：${d}\n`)
      let payData = {
        orderNo: JSON.parse(d).data.orderNo, // 订单号
        timestamp: TIMESTAMP, // 时间戳,注意得与发起下单时的时间戳一致
        appKey: '' // 小游戏上架后可在开发平台中查得
      }
      let paySign = generateSign(payData)
      outputData = Object.assign({}, payData, { paySign })
      console.log('小游戏发起支付需要的数据：', outputData)
      return JSON.parse(d)
    })
  })
  req.write(sendData)

  req.on('error', e => {
    console.error(e)
  })
  req.end()
}

// 格式化发送的数据
function formatSendData(token) {
  // 统一下单必填的数据（除了sign）
  let dataObject = {
    // TODO: 替换自己的appid
    appId: '',
    openId: token,
    timestamp: TIMESTAMP,
    productName: '测试',
    productDesc: 'testpay',
    count: 1,
    price: 1,
    currency: 'CNY',
    cpOrderId: '1',
    appVersion: '1.0.0',
    engineVersion: '1045',
    callBackUrl: `${ONLINE_API_URL}/payResult` // 服务器接收平台返回数据的接口回调地址
  }

  const sign = generateSign(dataObject)
  let sendData = JSON.stringify(Object.assign({}, dataObject, { sign }))
  console.log(`向统一下单接口发送的格式化数据: ${sendData}\n`)
  return { sendData }
}

// 获得签名数据，包含签名所有步骤
function generateSign(data) {
  console.log('需排序的数据：', data)
  console.log('排序好的数据：', sortByASCII(data))
  // 1. sortByASCII: 参数名ASCII码从小到大排序（字典序）
  // 2. urlEncode: 使用 URL 键值对的格式（即key1=value1&key2=value2）拼接成字符串
  let dataString = urlEncode(sortByASCII(data))
  console.log('URL 键值对:', dataString)
  return signDataWithCrypto(dataString)
}

// 3. 将源串stringA使用RSA算法（SHA256WithRSA），用私钥进行签名，将签名后的字符数组经过Base64编码，最后得到签名字段sign的值
function signDataWithCrypto(msg) {
  // TODO: 替换私钥
  const privateKey =
    ''
  let sign = crypto.createSign('RSA-SHA256')
  sign.update(msg)
  let res = sign.sign(privateKey, 'base64')

  // 以下用公钥认证私钥的签名
  const verify = crypto.createVerify('RSA-SHA256')

  verify.write(msg)
  verify.end()

  // TODO: 替换公钥
  const publicKey =
    ''
  console.log(`验证签名： ${verify.verify(publicKey, res, 'base64')}\n`)
  return res
}

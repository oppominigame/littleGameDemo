const express = require('express')
const app = express()
const crypto = require('crypto') // node 自带的加密模块
const cors = require('cors') // 跨域模块
const port = process.env.PORT || 3000
const ONLINE_API_URL = `http://127.0.0.1:${port}`
const { sortByASCII, urlEncode } = require('./utils')
const bodyParser = require('body-parser');
// TODO：替换私钥
let privateKey = ''

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors()); 
app.use(bodyParser.json())
// 支付接口
app.post('/getSignature', (req, res) => {
  // console.log('req', req)
  console.log('req', req.body)
  let { token, channelName, pkg, nonceStr, timeStamp} = req.body
 
  let result = generateSign({
    token,
    nonceStr,
    timeStamp,
    channelName,
    pkg
  })
  res.setHeader('Content-Type', 'application/json')
  console.log('实时语音获取签名接口返回给小游戏的数据', result)

  res.send(result)
})
console.log('后端服务已开启: ', ONLINE_API_URL)
app.listen(port)

// 获得签名数据，包含签名所有步骤
function generateSign(data) {
  console.log('需排序的数据：', data)
  console.log('排序好的数据：', sortByASCII(data))
  // 1. sortByASCII: 参数名ASCII码从小到大排序（字典序）
  // 2. urlEncode: 使用 URL 键值对的格式（即key1=value1&key2=value2）拼接成字符串
  let dataString = urlEncode(sortByASCII(data))
  console.log('URL 键值对:', dataString)
  return signDataWithMD5(dataString)
}

// 3. 将源串stringA使用RSA算法（SHA256WithRSA），用私钥进行签名，将签名后的字符数组经过Base64编码，最后得到签名字段sign的值
function signDataWithMD5(data) {
  let hash = crypto.createHash('md5')
  const toSignData = `${data}&secretKey=${privateKey}`
  console.log(`需签名的数据：${toSignData}`)
  hash.update(toSignData)
  let res = hash.digest('hex')
  console.log(`signature： ${res}`)
  return res
}

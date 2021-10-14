/**
 * @description 1. 参数名ASCII码从小到大排序（字典序）,代码示例，js版
 * @param {object} obj
 * @returns {object} 返回排序好的对象
 */
function sortByASCII(obj) {
  var arr = new Array()
  var num = 0
  for (var i in obj) {
    arr[num] = i
    num++
  }
  var sortArr = arr.sort()
  var sortObj = {}
  for (var i in sortArr) {
    sortObj[sortArr[i]] = obj[sortArr[i]]
  }
  return sortObj
}
/**
 * @description 2. 使用 URL 键值对的格式（即key1=value1&key2=value2）拼接成字符串
 * @param {string|number|boolean|object} param  
 * @param {*} key
 * @returns {string} 返回 URL 键值对字符串
 */
function urlEncode(param, key) {
  if (param == null) return ''
  var paramStr = ''
  var t = typeof param
  if (t == 'string' || t == 'number' || t == 'boolean') {
    paramStr += '&' + key + '=' + param
  } else {
    for (var i in param) {
      var k =
        key == null
          ? i
          : key + (param instanceof Array ? '[' + i + ']' : '.' + i)
      paramStr += urlEncode(param[i], k)
    }
    paramStr = paramStr.slice(1)
  }
  return paramStr
}

module.exports = {
  sortByASCII,
  urlEncode
}
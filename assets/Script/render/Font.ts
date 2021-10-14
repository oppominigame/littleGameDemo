/**
 * @desc: { 字体 } 
 * @author: zhengyiqiu 
 * @Create Date: 2020-06-30 20:44:24 
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2021-10-14 14:25:43
 */

const { ccclass, property } = cc._decorator
let fontUrls = [
  // TODO: 替换为自己的文字文件
  ""
]
@ccclass
export default class Font extends cc.Component {
  @property(cc.Label)
  logLabel: cc.Label = null

  @property(cc.Node)
  loadFont: cc.Node = null

  @property(cc.Node)
  changeFont: cc.Node = null
  
  @property(cc.Label)
  progressLabel: cc.Label = null
  
  @property(cc.Label)
  fontFamily: cc.Label = null

  @property(cc.Label)
  testFont: cc.Label = null

  @property(cc.Node)
  returnBtn: cc.Node = null
  
  start() {
    let index = 0
    let fontFamilyName
    this.loadFont.on(cc.Node.EventType.TOUCH_START, () => {
      if(index >= fontUrls.length-1) {
        index = 0
      } else {
        index += 1 
      }
      let tempFilePath = `${qg.env.USER_DATA_PATH}/` + index + '.ttf'
      let task = qg.downloadFile({
          url: fontUrls[index],
          filePath: tempFilePath,
          success: () => {
              this.log(`加载成功`)
              fontFamilyName = qg.loadFont(tempFilePath)
          },
          fail: (msg) => {
            this.log(JSON.stringify(msg))
          },
      });
      
      task.onProgressUpdate((msg) => {
          this.progressLabel.getComponent(cc.Label).string =  msg['progress'] + '%'
      });
    })

    this.changeFont.on(cc.Node.EventType.TOUCH_START, () => {
      this.fontFamily.getComponent(cc.Label).string = '当前字体：' + fontFamilyName
      this.testFont.getComponent(cc.Label).fontFamily =  fontFamilyName
    })

    this.returnBtn.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene('render')
    })
  }

  log(msg) {
    console.log(msg)
    this.logLabel.getComponent(cc.Label).string = msg
  }
}

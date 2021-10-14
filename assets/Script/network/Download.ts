/**
 * @desc: { 字体 } 
 * @author: zhengyiqiu 
 * @Create Date: 2020-06-30 20:44:24 
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2021-10-14 14:44:23
 */

const { ccclass, property } = cc._decorator

@ccclass
export default class Download extends cc.Component {
  @property(cc.Label)
  logLabel: cc.Label = null

  @property(cc.Node)
  downloadBtn: cc.Node = null

  @property(cc.Label)
  progressLabel: cc.Label = null
  
  @property(cc.Sprite)
  imgContainer: cc.Sprite = null

  @property(cc.Node)
  returnBtn: cc.Node = null
  
  start() {
    this.downloadBtn.on(cc.Node.EventType.TOUCH_START, () => {
      let tempFilePath = `${qg.env.USER_DATA_PATH}/download.png`
      let task = qg.downloadFile({
          // TODO: 替换自己的图片
          url: '',
          filePath: tempFilePath,
          success: () => {
              this.log(`加载成功`)
              cc.loader.load(tempFilePath, (err, texture) => {
                  this.imgContainer.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture)
              })
          },
          fail: (msg) => {
            this.log(JSON.stringify(msg))
          },
      });
      
      task.onProgressUpdate((msg) => {
          this.progressLabel.getComponent(cc.Label).string =  msg['progress'] + '%'
      });
    })

    this.returnBtn.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene('network')
    })
  }

  log(msg) {
    console.log(msg)
    this.logLabel.getComponent(cc.Label).string = msg
  }
}

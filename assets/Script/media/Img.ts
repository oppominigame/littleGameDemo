/**
 * @desc: { 图片 } 
 * @author: zhengyiqiu 
 * @Create Date: 2020-06-29 17:43:49 
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2021-10-12 17:33:55
 */

const { ccclass, property } = cc._decorator

@ccclass
export default class Img extends cc.Component {
  @property(cc.Label)
  logLabel: cc.Label = null

  @property(cc.Node)
  chooseImg: cc.Node = null

  @property(cc.Node)
  previewImg: cc.Node = null

  @property(cc.Node)
  saveImg: cc.Node = null
  
  @property(cc.Node)
  returnBtn: cc.Node = null
  
  start() {
    let img
    this.chooseImg.on(cc.Node.EventType.TOUCH_START, () => {
      qg.chooseImage({
        count: 1,
        sizeType: ['original'],
        sourceType: ['album'],
        success: (res) => {
          img = res.tempFilePaths
          this.log(`${JSON.stringify(res)}`)
        },
        fail: (e) => {
          this.log(JSON.stringify(e));
        },
      })
    })

    this.previewImg.on(cc.Node.EventType.TOUCH_START, () => {
      if(img) {
        qg.previewImage({
          urls: img,
          success: () => {
            this.log(`预览图片成功`)
          },
          fail: (e) => {
              this.log(e);
          },
        })
      } else {
        this.log('请先选择图片')
      }
    })

    this.saveImg.on(cc.Node.EventType.TOUCH_START, () => {
      if(img) {
        qg.saveImageToPhotosAlbum({
          filePath: img[0],
          success: () => {
            this.log(`保存图片成功`)
          },
          fail: (e) => {
              this.log(e);
          },
        })
      } else {
        this.log('请先选择图片')
      }
    })

    this.returnBtn.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene('media')
    })
  }

  log(msg) {
    console.log(msg)
    this.logLabel.getComponent(cc.Label).string = msg
  }
}

/**
 * @desc: { 二维码 } 
 * @author: zhengyiqiu 
 * @Create Date: 2021-10-12 16:56:37 
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2021-10-13 15:00:04
 */

const { ccclass, property } = cc._decorator

@ccclass
export default class Voice extends cc.Component {
  @property(cc.EditBox)
  pkgNameInput: cc.EditBox = null

  @property(cc.EditBox)
  extraDataInput: cc.EditBox = null

  @property(cc.EditBox)
  dataInput: cc.EditBox = null

  @property(cc.Toggle)
  isSaveToAlbumToggle: cc.Toggle = null

  @property(cc.Toggle)
  isBattleGameToggle: cc.Toggle = null

  @property(cc.Node)
  creatQRCodeBtn: cc.Node = null

  @property(cc.Node)
  returnBtn: cc.Node = null

  @property(cc.Node)
  qrcodeImg: cc.Node = null

  @property(cc.Label)
  logLabel: cc.Label = null

  start() {
    qg.getManifestInfo && qg.getManifestInfo({
      success: (res) => {
        this.pkgNameInput.string = JSON.parse(res.manifest).package
        console.log(JSON.parse(res.manifest));
      }
    })
    this.creatQRCodeBtn.on(cc.Node.EventType.TOUCH_START,async () => {
      let pkgName = this.pkgNameInput.string || ''
      let extraData = this.extraDataInput.string || ''
      let data = this.dataInput.string || ''
      let isSaveToAlbum = this.isSaveToAlbumToggle.isChecked
      let isBattleGame = this.isBattleGameToggle.isChecked
    
      console.log('createQRCode params: ', {
        pkgName,
        extraData,
        isSaveToAlbum,
        isBattleGame,
        data,
      })
      qg.createQRCode({
        pkgName,
        extraData,
        isSaveToAlbum,
        isBattleGame,
        data,
        success: (res) => {
          this.log(`createQRCode success: ${res.path} ${isSaveToAlbum ? '已经保存到相册' :""}`)
          console.log(this.qrcodeImg)
          this.loadUrlImg(res.path, this.qrcodeImg)
        },
        fail: (res) => {
          this.log(`createQRCode fail: ${JSON.stringify(res)}`)
        }
      })
      
    })

    this.returnBtn.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene('device')
    })
  }
  
  // 回调信息展示
  log(msg) {
    console.log(msg)
    this.logLabel.getComponent(cc.Label).string = msg
  }

  loadUrlImg(url: string, spriteNode: any) {
    cc.loader.load(url, function (err, imageAsset) {
      // Use texture to create sprite frame
      if(err || !imageAsset) {
          console.error('头像错误', err)
          return
      }
      let spriteFrame = new cc.SpriteFrame();
      spriteFrame.setTexture(imageAsset);
      spriteNode.getComponent(cc.Sprite).spriteFrame = spriteFrame;
    });
  }
}

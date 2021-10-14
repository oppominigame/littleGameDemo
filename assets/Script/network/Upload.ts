/**
 * @desc: { 上传 } 
 * @author: zhengyiqiu 
 * @Create Date: 2020-06-30 20:44:24 
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2021-10-14 14:22:38
 */

const { ccclass, property } = cc._decorator

@ccclass
export default class Upload extends cc.Component {
  @property(cc.Label)
  logLabel: cc.Label = null

  @property(cc.Node)
  uploadBtn: cc.Node = null

  @property(cc.Label)
  progressLabel: cc.Label = null
  

  @property(cc.Node)
  returnBtn: cc.Node = null
  
  start() {
    this.uploadBtn.on(cc.Node.EventType.TOUCH_START, () => {
      let task 
    // TODO:替换为自己上传的服务器地址
      let url = ''
      let successCb = (data) => {
        let tempFilePath = data.tempFilePaths[0]
          task = qg.uploadFile({
            url,
            filePath: tempFilePath,
            name: "file",
            success: () => {
                this.log(`上传成功`)
            },
            fail: (msg) => {
              this.log(JSON.stringify(msg))
            },
        });
        task.onProgressUpdate((msg) => {
            this.progressLabel.getComponent(cc.Label).string =  msg['progress'] + '%'
        })
      }
      let failCb = (data) => {
          this.log(`choose img failed: ${data}`, );
      }
      qg.chooseImage({
        count: 1,
        sourceType: ['album'],
        success: successCb,
        fail: failCb
      })
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

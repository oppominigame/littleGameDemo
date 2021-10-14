/**
 * @desc: { 游戏对局回放 } 
 * @author: 80261040 
 * @Create Date: 2021-03-01 11:06:24 
 * @Last Modified by: 80261040
 * @Last Modified time: 2021-03-01 16:07:39
 */

const { ccclass, property } = cc._decorator

@ccclass
export default class gameRecorder extends cc.Component {
  @property(cc.Node)
  getGameRecorder: cc.Node = null

  @property(cc.Node)
  isAtempoSupported: cc.Node = null

  @property(cc.Node)
  isFrameSupported: cc.Node = null

  @property(cc.Node)
  isSoundSupported: cc.Node = null

  @property(cc.Node)
  isVolumeSupported: cc.Node = null

  @property(cc.Node)
  startBtn: cc.Node = null

  @property(cc.Node)
  stopBtn: cc.Node = null

  @property(cc.Node)
  pauseBtn: cc.Node = null

  @property(cc.Node)
  resumeBtn: cc.Node = null

  @property(cc.Node)
  saveToAlbum: cc.Node = null

  @property(cc.Node)
  returnBtn: cc.Node = null

  
  @property(cc.Label)
  logLabel: cc.Label = null
  
  @property(cc.Node)
  onStartBtn: cc.Node = null

  @property(cc.Label)
  onStartLabel: cc.Label = null
  
  @property(cc.Node)
  onPauseBtn: cc.Node = null

  @property(cc.Label)
  onPauseLabel: cc.Label = null
  
  @property(cc.Node)
  onErrorBtn: cc.Node = null

  @property(cc.Label)
  onErrorLabel: cc.Label = null
  
  @property(cc.Node)
  onStopBtn: cc.Node = null

  @property(cc.Label)
  onStopLabel: cc.Label = null
  
  @property(cc.Node)
  onResumeBtn: cc.Node = null

  @property(cc.Label)
  onResumeLabel: cc.Label = null
  
  @property(cc.Node)
  onSaveToAlbumBtn: cc.Node = null

  @property(cc.Label)
  onSaveToAlbumLabel: cc.Label = null

  private recorder = null

  start() {

    this.getGameRecorder.on(cc.Node.EventType.TOUCH_START,() => {
      this.recorder = qg.getGameRecorder()
      this.log('获取录制对象')
    })

    this.isAtempoSupported.on(cc.Node.EventType.TOUCH_START, () => {
      this.recorder && this.log(this.recorder.isAtempoSupported())
    })

    this.isFrameSupported.on(cc.Node.EventType.TOUCH_START, () => {
      this.recorder && this.log(this.recorder.isFrameSupported())
    })

    this.isSoundSupported.on(cc.Node.EventType.TOUCH_START, () => {
      this.recorder && this.log(this.recorder.isSoundSupported())
    })

    this.isVolumeSupported.on(cc.Node.EventType.TOUCH_START, () => {
      this.recorder && this.log(this.recorder.isVolumeSupported())
    })

    this.startBtn.on(cc.Node.EventType.TOUCH_START, () => {
      if(this.recorder) {
        this.recorder.start()
        this.log('开始录屏')
      }
    })

    this.pauseBtn.on(cc.Node.EventType.TOUCH_START, () => {
      if(this.recorder) {
        this.recorder.pause()
        this.log('暂停录屏')
      }
    })

    this.resumeBtn.on(cc.Node.EventType.TOUCH_START, () => {
      if(this.recorder) {
        this.recorder.resume()
        this.log('恢复录屏')
      }
    })

    this.stopBtn.on(cc.Node.EventType.TOUCH_START, () => {
      if(this.recorder) {
        this.recorder.stop()
        this.log('停止录屏')
      }
    })

    
    this.saveToAlbum.on(cc.Node.EventType.TOUCH_START, () => {
      if(this.recorder) {
        this.recorder.saveToAlbum()
        this.log('保存录屏画面到相册')
      }
    })

    this.onStartBtn.on(cc.Node.EventType.TOUCH_START, () => {
      if(!this.recorder) return
      let inputCb = (res) => {
        if(!res) {
          this.onStartLabel.getComponent(cc.Label).string = '无数据返回'
        } else {
          this.onStartLabel.getComponent(cc.Label).string = JSON.stringify(res)
        }
      }
      if(cc.find("Background/Label", this.onStartBtn).getComponent(cc.Label).string == '监听录屏开始') {
        this.recorder.on('start' ,inputCb)
        cc.find("Background/Label", this.onStartBtn).getComponent(cc.Label).string = '取消监听录屏开始'
      } else {
        this.recorder.off('start', inputCb)
        this.onStartLabel.getComponent(cc.Label).string = "取消监听录屏开始"
        cc.find("Background/Label", this.onStartBtn).getComponent(cc.Label).string = '监听录屏开始'
      }
    })
    this.onPauseBtn.on(cc.Node.EventType.TOUCH_START, () => {
      if(!this.recorder) return
      let inputCb = (res) => {
        if(!res) {
          this.onPauseLabel.getComponent(cc.Label).string = '无数据返回'
        } else {
          this.onPauseLabel.getComponent(cc.Label).string = JSON.stringify(res)
        }
      }
      if(cc.find("Background/Label", this.onPauseBtn).getComponent(cc.Label).string == '监听录屏暂停') {
        this.recorder.on('pause' ,inputCb)
        cc.find("Background/Label", this.onPauseBtn).getComponent(cc.Label).string = '取消监听录屏暂停'
      } else {
        this.recorder.off('pause', inputCb)
        this.onPauseLabel.getComponent(cc.Label).string = "取消监听录屏暂停"
        cc.find("Background/Label", this.onPauseBtn).getComponent(cc.Label).string = '监听录屏暂停'
      }
    })
    this.onStopBtn.on(cc.Node.EventType.TOUCH_START, () => {
      if(!this.recorder) return
      let inputCb = (res) => {
        if(!res) {
          this.onStopLabel.getComponent(cc.Label).string = '无数据返回'
        } else {
          this.onStopLabel.getComponent(cc.Label).string = JSON.stringify(res)
        }
      }
      if(cc.find("Background/Label", this.onStopBtn).getComponent(cc.Label).string == '监听录屏结束') {
        this.recorder.on('stop' ,inputCb)
        cc.find("Background/Label", this.onStopBtn).getComponent(cc.Label).string = '取消监听录屏结束'
      } else {
        this.recorder.off('stop', inputCb)
        this.onStopLabel.getComponent(cc.Label).string = "取消监听录屏结束"
        cc.find("Background/Label", this.onStopBtn).getComponent(cc.Label).string = '监听录屏结束'
      }
    })
    this.onResumeBtn.on(cc.Node.EventType.TOUCH_START, () => {
      if(!this.recorder) return
      let inputCb = (res) => {
        if(!res) {
          this.onResumeLabel.getComponent(cc.Label).string = '无数据返回'
        } else {
          this.onResumeLabel.getComponent(cc.Label).string = JSON.stringify(res)
        }
      }
      if(cc.find("Background/Label", this.onResumeBtn).getComponent(cc.Label).string == '监听录屏恢复') {
        this.recorder.on('resume' ,inputCb)
        cc.find("Background/Label", this.onResumeBtn).getComponent(cc.Label).string = '取消监听录屏恢复'
      } else {
        this.recorder.off('resume', inputCb)
        this.onResumeLabel.getComponent(cc.Label).string = "取消监听录屏恢复"
        cc.find("Background/Label", this.onResumeBtn).getComponent(cc.Label).string = '监听录屏恢复'
      }
    })
    this.onErrorBtn.on(cc.Node.EventType.TOUCH_START, () => {
      if(!this.recorder) return
      let inputCb = (res) => {
        if(!res) {
          this.onErrorLabel.getComponent(cc.Label).string = '无数据返回'
        } else {
          this.onErrorLabel.getComponent(cc.Label).string = JSON.stringify(res)
        }
      }
      if(cc.find("Background/Label", this.onErrorBtn).getComponent(cc.Label).string == '监听录屏报错') {
        this.recorder.on('error' ,inputCb)
        cc.find("Background/Label", this.onErrorBtn).getComponent(cc.Label).string = '取消监听录屏报错'
      } else {
        this.recorder.off('error', inputCb)
        this.onErrorLabel.getComponent(cc.Label).string = "取消监听录屏报错"
        cc.find("Background/Label", this.onErrorBtn).getComponent(cc.Label).string = '监听录屏报错'
      }
    })
    this.onSaveToAlbumBtn.on(cc.Node.EventType.TOUCH_START, () => {
      if(!this.recorder) return
      let inputCb = (res) => {
        if(!res) {
          this.onSaveToAlbumLabel.getComponent(cc.Label).string = '无数据返回'
        } else {
          this.onSaveToAlbumLabel.getComponent(cc.Label).string = JSON.stringify(res)
        }
      }
      if(cc.find("Background/Label", this.onSaveToAlbumBtn).getComponent(cc.Label).string == '监听保存到相册') {
        this.recorder.on('saveToAlbum' ,inputCb)
        cc.find("Background/Label", this.onSaveToAlbumBtn).getComponent(cc.Label).string = '取消监听保存到相册'
      } else {
        this.recorder.off('saveToAlbum', inputCb)
        this.onSaveToAlbumLabel.getComponent(cc.Label).string = "取消监听保存到相册"
        cc.find("Background/Label", this.onSaveToAlbumBtn).getComponent(cc.Label).string = '监听保存到相册'
      }
    })

    this.returnBtn.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene('main')
    })
  }
  
  // 回调信息展示
  log(msg) {
    console.log(msg)
    this.logLabel.getComponent(cc.Label).string = msg
  }
}

/**
 * @desc: { 图片 } 
 * @author: zhengyiqiu 
 * @Create Date: 2020-06-29 17:43:49 
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2020-06-30 17:59:41
 */

const { ccclass, property } = cc._decorator

let record
let options = {
  duration: 10000,
  sampleRate: 44100,
  numberOfChannels: 1,
  encodeBitRate: 192000,
  format: 'aac',
  frameSize: 50
}
let url
let audio
@ccclass
export default class RecorderManager extends cc.Component {
  @property(cc.Label)
  logLabel: cc.Label = null

  @property(cc.Node)
  startBtn: cc.Node = null

  @property(cc.Node)
  pauseBtn: cc.Node = null

  @property(cc.Node)
  resumeBtn: cc.Node = null

  @property(cc.Node)
  stopBtn: cc.Node = null

  @property(cc.Node)
  playBtn: cc.Node = null
  
  @property(cc.Node)
  returnBtn: cc.Node = null
  
  start() {
    record = qg.getRecorderManager()
    audio = qg.createInnerAudioContext()
    this.setBtnStatus(this.playBtn, false)
    this.setBtnStatus(this.pauseBtn, false)
    this.setBtnStatus(this.resumeBtn, false)
    this.setBtnStatus(this.stopBtn, false)

    this.returnBtn.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene('media')
    })
  }

  clickStart() {
    record.start(options)
    this.log('开始录音')
    this.setBtnStatus(this.startBtn, false)
    this.setBtnStatus(this.pauseBtn, true)
    this.setBtnStatus(this.resumeBtn, true)
    this.setBtnStatus(this.stopBtn, true)
    record.onStop((res) => {
      url = res.tempFilePath
      this.log(`录音文件：${res.tempFilePath}`)
      this.setBtnStatus(this.startBtn, true)
      this.setBtnStatus(this.playBtn, true)
      this.setBtnStatus(this.pauseBtn, false)
      this.setBtnStatus(this.resumeBtn, false)
      this.setBtnStatus(this.stopBtn, false)
    })
  }

  clickPause(){
    record.pause()
    this.log('暂停录音')
    this.setBtnStatus(this.pauseBtn, false)
    this.setBtnStatus(this.resumeBtn, true)
  }

  clickResume() {
    record.resume()      
    this.log('继续录音')
    this.setBtnStatus(this.pauseBtn, true)
    this.setBtnStatus(this.resumeBtn, false)
  }

  clickStop() {
    this.log('停止录音')
    this.setBtnStatus(this.pauseBtn, false)
    this.setBtnStatus(this.resumeBtn, false)
    this.setBtnStatus(this.playBtn, true)
    record.stop()    
  }

  clickPlay() {
    if(url) {
      this.setBtnStatus(this.playBtn, false)
      audio.src = url
      this.log(`播放音乐：${url}`)
      audio.play()
      audio.onEnded(() => {
        this.setBtnStatus(this.playBtn, true) 
      })
    }
  }

  log(msg) {
    console.log(msg)
    this.logLabel.getComponent(cc.Label).string = msg
  }
  setBtnStatus(node, status) {
    node.getComponent(cc.Button).interactable = status
  }
}

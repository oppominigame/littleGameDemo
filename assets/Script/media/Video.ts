/**
 * @desc: { 图片 } 
 * @author: zhengyiqiu 
 * @Create Date: 2020-06-29 17:43:49 
 * @Last Modified by: 80261040
 * @Last Modified time: 2021-02-26 10:57:10
 */

const { ccclass, property } = cc._decorator
let video
@ccclass
export default class Img extends cc.Component {
  @property(cc.Label)
  logLabel: cc.Label = null

  @property(cc.Node)
  play: cc.Node = null
  
  @property(cc.Node)
  returnBtn: cc.Node = null

  @property(cc.VideoPlayer)
  videoPlayer: cc.VideoPlayer = null
  
  @property(cc.Texture2D)
  poster: cc.Texture2D = null

  start() {
    this.play.on(cc.Node.EventType.TOUCH_START, () => {
      const canvas = window['__canvas']
      console.log(this.videoPlayer.getComponent(cc.VideoPlayer))
      video = qg.createVideo({
          x: canvas.width/2-450,
          y: canvas.height/2,
          width: 900,
          height: 450,
          src: this.videoPlayer.getComponent(cc.VideoPlayer).clip['url'],
          poster: this.poster,
          playbackRate: 1.0,
          objectFit: "contain",
          autoplay: false,
      });
      
      video.onPlay(() => {
          this.log("video play");
      });
      video.play();
    })

    this.returnBtn.on(cc.Node.EventType.TOUCH_START, () => {
      this.videoPlayer.destroy()
      if(video && video.destroy) {
        video.destroy()
      }
      cc.director.loadScene('media')
    })
  }
  log(msg) {
    console.log(msg)
    this.logLabel.getComponent(cc.Label).string = msg
  }
}

/**
 * @desc: { 人脸识别 } 
 * @author: zhengyiqiu 
 * @Create Date: 2021-10-14 14:19:42 
 * @Last Modified by: zhengyiqiu 
 * @Last Modified time: 2021-10-14 14:19:42 
 */
const { ccclass, property } = cc._decorator

@ccclass
export default class DrawImage extends cc.Component {
  @property(cc.Node)
  returnBtn: cc.Node = null
  @property(cc.Node)
  bg: cc.Node = null
  @property(cc.Node)
  setting: cc.Node = null

  @property(cc.Toggle)
  startCameraToggle: cc.Toggle = null

  @property(cc.Toggle)
  detectFacesToggle: cc.Toggle = null

  @property(cc.Toggle)
  onActionsToggle: cc.Toggle = null

  @property(cc.Texture2D)
  img: cc.Texture2D = null
  @property(cc.Label)
  blink: cc.Label = null
  @property(cc.Label)
  mouthAh: cc.Label = null
  @property(cc.Label)
  leftBlink: cc.Label = null
  @property(cc.Label)
  rightBlink: cc.Label = null
  @property(cc.Label)
  poutMouth: cc.Label = null
  @property(cc.Label)
  headYaw: cc.Label = null
  @property(cc.Label)
  headPitch: cc.Label = null
  @property(cc.Label)
  jumpEyeBrow: cc.Label = null
  @property(cc.Label)
  IndianHeadYaw: cc.Label = null

  
  @property(cc.Node)
  setBeautifyBtn: cc.Node = null
  @property(cc.EditBox)
  smoothenInput: cc.EditBox = null
  @property(cc.EditBox)
  whitenInput: cc.EditBox = null
  @property(cc.EditBox)
  filterInput: cc.EditBox = null


  private camera: any = null
  private spriteFrame: any = null
  private tex: any = null
  private detector: any = null
  private video: any = null
  private cameraNode
  private faceBox
  private rectNode
  private frame: number = 0;
  // 放大系数
  private _cameraScaleY: number;
  private _curWidth: number;
  private _curHeight: number;
  private ctx
  private isStartDetect = false
  private faceBoxLabel
  private showCb
  private previewSize = 240
  // 美颜参数
  private beautifyParam = {
    smoothen: 0.5,
    whiten: 0.5,
    filter: 0,
  }
  onCameraErr(err) {
    if(err.code == -1) {
      qg.showModal({
        content: '当前游戏需要开启摄像头权限，是否前往设置？',
        success: (res) =>{
          if (res.confirm) {
            console.log('用户点击确定')
            this.setAuth()
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    } else if(err.code == -2) {
      qg.showModal({
        content: '权限请求失败，请稍后重试',
        showCancel: false,
        success: (res) =>{
          this.bg.active = true
          console.log('权限请求失败，请稍后重试')
        }
      })
    } else if(err.code == -3) {
      qg.showModal({
        content: '初始化失败，请重启游戏',
        showCancel: false,
        success: (res) =>{
          this.bg.active = true
          console.log('初始化失败，请重启游戏')
        }
      })
    }
    console.log('onCameraErr', err)
  }
  setAuth() {
    qg.openSetting({
      success: (data) => {
        this.bg.active = true
        this.onStartCameraToggle({ isChecked: this.startCameraToggle.isChecked })
      }
    })
  }
  onDestroy() {
    console.log('destory')
    qg.offShow(this.showCb)
    this.onAcitonsToggle({isChecked:false})
    this.onDetectFacesToggle({isChecked:false})
    this.onStartCameraToggle({isChecked:false})
    
  }
  onLoad() {
    qg.setKeepScreenOn({
      keepScreenOn: true,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {}
    })
    this.setting.on(cc.Node.EventType.TOUCH_START, this.setAuth)
    this.returnBtn.on(cc.Node.EventType.TOUCH_START, () => {
      this.camera.destroy()
      this.detector.offActions()
      this.detector.offDetectFaces()
      qg.offShow(this.showCb)
      cc.director.loadScene('main')
    })
    this.onStartCameraToggle({ isChecked: this.startCameraToggle.isChecked })
    this.onDetectFacesToggle({ isChecked: this.detectFacesToggle.isChecked })
    this.onAcitonsToggle({ isChecked: this.onActionsToggle.isChecked })
    // 监听后台返回后进行摄像头重启，防止后台打开相机返回游戏后失效
    this.showCb = () => {
      this.camera = qg.createCamera()
      this.camera.start().then(video => {
        this.video = video;
        this.initCameraNode()
      }).catch(err => {
        // 获取摄像头权限失败
        this.onCameraErr(err)
        console.log(err)
      })
    }
    qg.onShow(this.showCb)
    qg.onHide(() => {
      this.camera.destroy()
      this.camera = null
    })
    
    this.setBeautifyBtn.on(cc.Node.EventType.TOUCH_START, () => {
      this.setBeautify()
    })
  }
  startDetector() {
    if (this.detector && this.tex) {
      this.detector.detectFaces({ data: this.video.data, width: this.video.width, height: this.video.height })
        .then(res => {
          if (res.code == 0) {
            if (Array.isArray(res.data) && res.data.length > 0) {
              res.data.forEach((item, index) => {
                // 以下是绘制人脸矩形的示例，其中因为cocos节点是世界坐标系，原点在屏幕中心的右手坐标系，而获取的人脸矩形的坐标是基于屏幕左上方为原点的左手坐标系，因此需对各坐标点做坐标系转换适配
                // 左手坐标系的x轴上的坐标转换为世界坐标系
                let left = (item.rect.left - this.video.width / 2) * this._cameraScaleY
                let right = (item.rect.right - this.video.width / 2) * this._cameraScaleY
                // 左手坐标系Y轴上的坐标转换为世界坐标系，需要对左手坐标系的Y轴做翻转并将原点定到rectNode中心，然后需要定位到摄像头节点cameraNode的原点中心
                // let bottom = (-(item.rect.bottom-this.video.height)-this.video.height/2)*this._cameraScaleY 
                // let top = (-(item.rect.top-this.video.height)-this.video.height/2)*this._cameraScaleY
                let bottom = (this.video.height / 2 - item.rect.bottom) * this._cameraScaleY // 简化的式子
                let top = (this.video.height / 2 - item.rect.top) * this._cameraScaleY
                let width = right - left;
                let height = bottom - top;
                // 绘制人脸矩形、关键点、信息数据、以及歪头角度示例
                let rectOldNode = this.node['_children'][index+1]
                let hatOldNode = rectOldNode && rectOldNode['_children'][0]
                let faceBoxOldNode = rectOldNode && rectOldNode['_children'][1]
                let rectNode
                let hatNode
                let faceBox
                // 没有初始人脸相关节点时才创建
                if(!rectOldNode || rectOldNode['index'] != index){
                  rectNode = new cc.Node();
                  rectNode.name = 'rectNode'
                  rectNode.index = index
                  rectNode.addComponent(cc.Graphics)
                  rectNode.convertToWorldSpace(cc.v2(0, 0))
                  this.node.insertChild(rectNode, index+1);
                  this.ctx = rectNode.getComponent(cc.Graphics)
                  hatNode = new cc.Node()
                  rectNode.insertChild(hatNode, 0);
                  hatNode.name = 'hatNode'
                  hatNode.index = index
                  hatNode.addComponent(cc.Sprite)
                  hatNode.convertToWorldSpace(cc.v2(0, 0))
                  let hatNodeSp = hatNode.getComponent(cc.Sprite)
                  hatNodeSp.spriteFrame = new cc.SpriteFrame(this.img)
                  hatNode.setAnchorPoint(0.5, 0.5);

                  faceBox = new cc.Node();
                  faceBox.name = 'faceBox'
                  faceBox.addComponent(cc.Label)
                  faceBox.convertToWorldSpace(cc.v2(0, 0))
                  rectNode.insertChild(faceBox, 1);
            
                } else {
                  rectNode = rectOldNode
                  this.ctx = rectNode.getComponent(cc.Graphics)
                  this.ctx.clear()
                  hatNode = hatOldNode
                  faceBox = faceBoxOldNode
                }
                this.ctx.lineWidth = 2;
                this.ctx.strokeColor = cc.Color.YELLOW;
                this.ctx.rect(left, top, width, height);
                this.ctx.stroke();

                // hatNode.width = width/ hatNode.width
                hatNode.y = top+150
                hatNode.x = left+width/2
                item.roll && hatNode.setRotation(item.roll);
                // hatNodeSp.width = width
                // hatNode.setScale(width / this.img.width)
        
                this.faceBoxLabel = faceBox.getComponent(cc.Label)
                faceBox.x = left + width/2
                faceBox.y = bottom - 100
                this.faceBoxLabel.fontSize = 20
                if(item.roll) {
                  this.faceBoxLabel.string = 'score: ' + item.score+'\n'
                                            +'yaw: ' + item.yaw+'\n'
                                            +'pitch: ' + item.pitch+'\n'
                                            +'roll: ' + item.roll+'\n'
                } else {
                  this.faceBoxLabel.string = 'score: ' + item.score
                }
              
                // 下巴轮廓，[0, 32]
                for (let i = 0; i <= 32; i++) {
                  this.ctx.circle((item.point_x[i] - this.video.width / 2) * this._cameraScaleY, (this.video.height / 2 - item.point_y[i]) * this._cameraScaleY, 2);
                  this.ctx.fillColor = cc.Color.YELLOW;
                  this.ctx.fill();
                }
                // 眉毛，[33, 42]，[64, 71]
                for (let i = 33; i <= 42; i++) {
                  this.ctx.circle((item.point_x[i] - this.video.width / 2) * this._cameraScaleY, (this.video.height / 2 - item.point_y[i]) * this._cameraScaleY, 2);
                  this.ctx.fillColor = cc.Color.BLUE;
                  this.ctx.fill();
                }
                for (let i = 64; i <= 71; i++) {
                  this.ctx.circle((item.point_x[i] - this.video.width / 2) * this._cameraScaleY, (this.video.height / 2 - item.point_y[i]) * this._cameraScaleY, 2);
                  this.ctx.fillColor = cc.Color.BLUE;
                  this.ctx.fill();
                }
                // 眼部，[52, 63]
                for (let i = 52; i <= 63; i++) {
                  this.ctx.circle((item.point_x[i] - this.video.width / 2) * this._cameraScaleY, (this.video.height / 2 - item.point_y[i]) * this._cameraScaleY, 2);
                  this.ctx.fillColor = cc.Color.RED;
                  this.ctx.fill();
                }
                // 瞳孔，[72, 77], [104, 105]
                for (let i = 72; i <= 77; i++) {
                  this.ctx.circle((item.point_x[i] - this.video.width / 2) * this._cameraScaleY, (this.video.height / 2 - item.point_y[i]) * this._cameraScaleY, 2);
                  this.ctx.fillColor = cc.Color.GRAY;
                  this.ctx.fill();
                }
                for (let i = 104; i <= 105; i++) {
                  this.ctx.circle((item.point_x[i] - this.video.width / 2) * this._cameraScaleY, (this.video.height / 2 - item.point_y[i]) * this._cameraScaleY, 2);
                  this.ctx.fillColor = cc.Color.GRAY;
                  this.ctx.fill();
                }
                // 鼻子，[47, 51], [78, 83]
                for (let i = 47; i <= 51; i++) {
                  this.ctx.circle((item.point_x[i] - this.video.width / 2) * this._cameraScaleY, (this.video.height / 2 - item.point_y[i]) * this._cameraScaleY, 2);
                  this.ctx.fillColor = cc.Color.GREEN;
                  this.ctx.fill();
                }
                for (let i = 78; i <= 83; i++) {
                  this.ctx.circle((item.point_x[i] - this.video.width / 2) * this._cameraScaleY, (this.video.height / 2 - item.point_y[i]) * this._cameraScaleY, 2);
                  this.ctx.fillColor = cc.Color.GREEN;
                  this.ctx.fill();
                }
                // 嘴巴，[84, 103]
                for (let i = 84; i <= 103; i++) {
                  this.ctx.circle((item.point_x[i] - this.video.width / 2) * this._cameraScaleY, (this.video.height / 2 - item.point_y[i]) * this._cameraScaleY, 2);
                  this.ctx.fillColor = cc.Color.ORANGE;
                  this.ctx.fill();
                }
                // 额头，[106, 136]
                for (let i = 106; i <= 136; i++) {
                  this.ctx.circle((item.point_x[i] - this.video.width / 2) * this._cameraScaleY, (this.video.height / 2 - item.point_y[i]) * this._cameraScaleY, 2);
                  this.ctx.fillColor = cc.Color.ORANGE;
                  this.ctx.fill();
                }
              
              })
                let rectNodeArr = []
                let elements = this.node['_children'];
                for(let f =0, len=elements.length;f<len; f++){
                  if(elements[f]['name'] == 'rectNode') {
                    rectNodeArr.push(elements[f])
                  }
                }
                if(res.data.length < rectNodeArr.length) {
                  rectNodeArr.forEach((item, index) => {
                    if(!res.data[index]) {
                      this.node.removeChild(item)
                    }
                  })
                }
           
            }
          } else {
            // 无人脸时清除节点
            let elements = this.node['_children'];
            for(let i = elements.length -1; i >= 0 ; i--){
                if(elements[i]['name'] == 'rectNode'){
                    elements.splice(i, 1);
                }
            }
            // console.log('显示异常弹窗', JSON.stringify(res))
          }
          // console.log('人脸检测数据', res)
        }).catch(err => {
          console.log('人脸检测数据 err', err)
        })
    }
  }
  update(td) {
    if (this.tex) {
      //进行人脸检测
      // 更新画面
      this.tex.initWithData(this.video.data, cc.Texture2D.PixelFormat.RGBA8888, this.video.width, this.video.height)
      // 摄像头画面适配铺满整屏
      this.cameraNode.width = this._curWidth;
      this.cameraNode.height = this._curHeight;

      this.frame++;
      if (this.isStartDetect) {
        this.startDetector();   //每三帧进行一次人脸检测
      }
    }
  }
  
  setBeautify() {
    let smoothen = this.smoothenInput.string
    let whiten = this.whitenInput.string
    let filter = this.filterInput.string
    // @ts-ignore
    this.beautifyParam.smoothen = !!(+smoothen) || smoothen === '0' ? +smoothen : smoothen
    // @ts-ignore
    this.beautifyParam.whiten = !!(+whiten) || whiten === '0' ? +whiten : whiten
    // @ts-ignore
    this.beautifyParam.filter = !!(+filter) || filter === '0' ? +filter : filter
    this.camera.setBeautifyParam(this.beautifyParam)
    console.log('设置美颜', this.beautifyParam)
  }

  initCameraNode() {
    console.log('camera.start ', this.video)
    if (!this.cameraNode) {
      // 设置摄像头画面节点
      this.bg.active = false

      this.cameraNode = new cc.Node();
      this.cameraNode.addComponent(cc.Sprite)
      this.node.insertChild(this.cameraNode, 0);
      this.tex = new cc.Texture2D()
      this.spriteFrame = new cc.SpriteFrame();
      this.cameraNode.getComponent(cc.Sprite).spriteFrame = this.spriteFrame;
      this.spriteFrame.setTexture(this.tex);

      // this.faceBox.addComponent(cc.Graphics)

      // 屏幕适配
      this._cameraScaleY = this.node.height / this.video.height;
      this._curWidth = this.video.width * this._cameraScaleY;
      this._curHeight = this.node.height;

      // 更新画面
      this.tex.initWithData(this.video.data, cc.Texture2D.PixelFormat.RGBA8888, this.video.width, this.video.height)
      // 摄像头画面适配铺满整屏
      this.cameraNode.width = this._curWidth;
      this.cameraNode.height = this._curHeight;
    }
  }
  onStartCameraToggle(res) {
    if (res.isChecked) {
      this.camera = qg.createCamera()
      // 实时接收摄像头数据
      // this.camera.start().then(video => {
        console.log('camera start', this.camera)
      this.bg.active = false

      this.camera.start({previewSize: this.previewSize}).then(video => {
        console.log('start cb', video)
        this.video = video;
        this.initCameraNode()
      }).catch(err => {
        // 获取摄像头权限失败
        this.onCameraErr(err)
        console.log(err)
      })
    } else {
      this.camera.destroy()
      this.camera = null
      this.bg.active = true
    }
  }
  onDetectFacesToggle(res) {
    let rectNode = this.node.getChildByName('rectNode')
    let faceBox = this.node.getChildByName('faceBox')
    console.log('rectnode', rectNode, faceBox)
    console.log('res.isChecked', res.isChecked)
    if (res.isChecked) {
      !this.detector && (this.detector = qg.createFaceDetector());
      rectNode && (rectNode.active = true)
      this.isStartDetect = true
    } else {
      rectNode && (rectNode.active = false)
      this.detector.offDetectFaces()
      this.detector = null
      this.isStartDetect = false
    }
  }
  onAcitonsToggle(res) {
    if (res.isChecked) {
      this.detector.onActions(detectData => {
        // console.log('onActions', detectData)
      })
      this.detector.onBlink(detectData => {
        let n = this.blink.getComponent(cc.Label)
        n.string = parseInt(n.string) + 1 + ''
        console.log('onBlink', detectData)
      })
      // this.detector.onBlinkLeft(detectData => {
      //   let n = this.leftBlink.getComponent(cc.Label)
      //   n.string = parseInt(n.string) + 1 + ''
      //   console.log('onBlinkLeft', detectData)
      // })
      // this.detector.onBlinkRight(detectData => {
      //   let n = this.rightBlink.getComponent(cc.Label)
      //   n.string = parseInt(n.string) + 1 + ''
      //   console.log('onBlinkRight', detectData)
      // })
      this.detector.onMouthAh(detectData => {
        let n = this.mouthAh.getComponent(cc.Label)
        n.string = parseInt(n.string) + 1 + ''
        console.log('onMouthAh', detectData)
      })
      this.detector.onMouthPout(detectData => {
        let n = this.poutMouth.getComponent(cc.Label)
        n.string = parseInt(n.string) + 1 + ''
        console.log('onMouthPout', detectData)
      })
      this.detector.onHeadYaw(detectData => {
        let n = this.headYaw.getComponent(cc.Label)
        n.string = parseInt(n.string) + 1 + ''
        console.log('onHeadYaw', detectData)
      })
      // this.detector.onHeadYawIndian(detectData => {
      //   let n = this.IndianHeadYaw.getComponent(cc.Label)
      //   n.string = parseInt(n.string) + 1 + ''
      //   console.log('onHeadYawIndian', detectData)
      // })
      this.detector.onHeadPitch(detectData => {
        let n = this.headPitch.getComponent(cc.Label)
        n.string = parseInt(n.string) + 1 + ''
        console.log('onHeadPitch', detectData)
      })
      this.detector.onBrowJump(detectData => {
        let n = this.jumpEyeBrow.getComponent(cc.Label)
        n.string = parseInt(n.string) + 1 + ''
        console.log('onBrowJump', detectData)
      })
    } else {
      this.detector && this.detector.offActions()
    }
  }
  onPreviewToggle(res) {
    console.log('onPreviewToggle', +res.node.name)
    this.previewSize = +res.node.name
    this.camera.resetSize(this.previewSize).then(res => {
      if(res.code == 0) {
        // 屏幕适
        console.log('重新设置previewSize',this.previewSize,  this.video, this._cameraScaleY, this._curWidth, this._curHeight)
        this._cameraScaleY = this.node.height / this.video.height;
        this._curWidth = this.video.width * this._cameraScaleY;
        this._curHeight = this.node.height;
        setTimeout(() => {
          console.log('重新设置previewSize last', this.previewSize,  this.video, this._cameraScaleY, this._curWidth, this._curHeight)
        }, 1000)
      }
    }).catch(err => {
      // 获取摄像头权限失败
      console.log(err)
    })
  }
}
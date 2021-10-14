/**
 * @desc: { 系统信息 } 
 * @author: zhengyiqiu 
 * @Create Date: 2020-06-28 17:33:31 
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2021-10-12 16:20:39
 */

const { ccclass, property } = cc._decorator

@ccclass
export default class SystemInfo extends cc.Component {
  @property(cc.Label)
  logLabel: cc.Label = null

  @property(cc.Node)
  asyncBtn: cc.Node = null

  @property(cc.Node)
  syncBtn: cc.Node = null

  @property(cc.Node)
  getManifestBtn: cc.Node = null

  @property(cc.Node)
  returnBtn: cc.Node = null

  @property(cc.Node)
  brand: cc.Node = null

  @property(cc.Node)
  model: cc.Node = null  
  
  @property(cc.Node)
  pixelRatio: cc.Node = null
    
  @property(cc.Node)
  screenWidth: cc.Node = null
    
  @property(cc.Node)
  screenHeight: cc.Node = null
    
  @property(cc.Node)
  windowHeight: cc.Node = null
    
  @property(cc.Node)
  windowWidth: cc.Node = null
    
  @property(cc.Node)
  language: cc.Node = null
    
  @property(cc.Node)
  COREVersion: cc.Node = null
      
  @property(cc.Node)
  platformVersionName: cc.Node = null
      
  @property(cc.Node)
  system: cc.Node = null
      
  @property(cc.Node)
  platformVersionCode: cc.Node = null
      
  @property(cc.Node)
  statusBarHeight: cc.Node = null

  start() {
    const sucCb = () => {
      this.log(`success`)
    }

    const failCb = () => {
      this.log(`fail`)
    }

    this.asyncBtn.on(cc.Node.EventType.TOUCH_START, () => {
      qg.getSystemInfo({
        success: (res) => {
          console.log(JSON.stringify(res))

          this.logLabel.getComponent(cc.Label).string = '异步获取成功'
          for(let key in res) {
            if(this[key]) {
              this[key].getComponent(cc.Label).string = res[key]
            }

          }
        },
        fail: (err) => {
          this.logLabel.getComponent(cc.Label).string = err
        }
      })
    })

    this.syncBtn.on(cc.Node.EventType.TOUCH_START, () => {
      const res = qg.getSystemInfoSync()
      console.log(JSON.stringify(res))
      this.logLabel.getComponent(cc.Label).string = '同步获取成功'
      for(let key in res) {
        if(this[key]) {
          this[key].getComponent(cc.Label).string = res[key]
        }
      }
    })

    this.getManifestBtn.on(cc.Node.EventType.TOUCH_START, () => {
      if(qg.getManifestInfo) {
        qg.getManifestInfo({
          success:  (res) => {
            this.log(res.manifest);
          },
          fail: function (err) {
            this.log('getManifest fail')
          },
        });
      } else {
        this.log('getManifest 支持最低平台版本号 1082 ')
      }
    })

    this.returnBtn.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene('system')
    })
  }

  log(msg) {
    console.log(msg)
    this.logLabel.getComponent(cc.Label).string = msg
  }
}

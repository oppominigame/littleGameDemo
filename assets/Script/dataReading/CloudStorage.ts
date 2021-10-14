/**
 * @desc: { 云存储 } 
 * @author: zhengyiqiu 
 * @Create Date: 2020-06-23 10:21:00 
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2021-10-12 15:50:35
 */

const { ccclass, property } = cc._decorator

@ccclass
export default class Storage extends cc.Component {
  @property(cc.Label)
  logLabel: cc.Label = null

  @property(cc.Node)
  set: cc.Node = null

  @property(cc.Node)
  get: cc.Node = null
  
  @property(cc.Node)
  remove: cc.Node = null

  @property(cc.Node)
  returnBtn: cc.Node = null
  
  start() {
    if(!qg.setUserCloudStorage) {
      this.log('云存储 API 需支持最低平台版本号为1090')
      return
    }
    this.set.on(cc.Node.EventType.TOUCH_START, () => {
      qg.setUserCloudStorage({
        KVDataList: [
          {
            miniGame: "test"
          },
        ],
        success: (res) => {
          this.log('存储 miniGame 成功')
        },
        fail: (res) => {
          this.log("存储 miniGame 失败,注意先在平台能力模块中点登录");
        },
      });
    })
    this.get.on(cc.Node.EventType.TOUCH_START, () => {
      qg.getUserCloudStorage({
        keyList: ["miniGame"], // 要获取的 key 列表
        success: (res) => {
          this.log(`读取 miniGame 值: ${res.KVDataList}`)
        },
        fail: (res) => {
          this.log("获取 minGame 值: 失败");
        }
      })
    })
    this.remove.on(cc.Node.EventType.TOUCH_START, () => {
      qg.removeUserCloudStorage({
        keyList: ["miniGame"], // 要删除的 key 列表,
        success: (res) => {
          this.log(`清除数据成功`)
        },
        fail: (res) => {
          this.log("清除数据失败");
        },
      });
    })

    this.returnBtn.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene('dataReading')
    })
  }

  log(msg) {
    console.log(msg)
    this.logLabel.getComponent(cc.Label).string = msg
  }
}

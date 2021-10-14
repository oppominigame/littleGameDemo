/**
 * @desc: { 文件 } 
 * @author: zhengyiqiu 
 * @Create Date: 2020-06-23 10:21:00 
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2021-10-14 14:41:32
 */

const { ccclass, property } = cc._decorator
let qgDir
let localFilePath
let localDir
@ccclass
export default class File extends cc.Component {
  @property(cc.Label)
  logLabel: cc.Label = null

  @property(cc.Node)
  writeFile: cc.Node = null
  @property(cc.Node)
  readFile: cc.Node = null
  @property(cc.Node)
  mkdir: cc.Node = null
  @property(cc.Node)
  rmdir: cc.Node = null
  @property(cc.Node)
  isDirectoryOrFileExist: cc.Node = null
  @property(cc.Node)
  rename: cc.Node = null
  @property(cc.Node)
  saveFile: cc.Node = null
  @property(cc.Node)
  readdir: cc.Node = null
  @property(cc.Node)
  appendFile: cc.Node = null
  @property(cc.Node)
  copyFile: cc.Node = null
  @property(cc.Node)
  removeSavedFile: cc.Node = null
  @property(cc.Node)
  stat: cc.Node = null
  @property(cc.Node)
  unzip: cc.Node = null
  @property(cc.Node)
  getFileInfo: cc.Node = null
  @property(cc.Node)
  returnBtn: cc.Node = null
  
  start() {
    qgDir = qg.env.USER_DATA_PATH
    localFilePath = `${qgDir}/my/file.txt`
    localDir = `${qgDir}/my`
    let fs = qg.getFileSystemManager()

    this.mkdir.on(cc.Node.EventType.TOUCH_START, () => {
      fs.mkdir({
        dirPath: `${localDir}`,
        encoding: "utf8",
        success: () => {
          this.log(`创建目录成功：${localDir} `)
        },
        fail: (res) => {
          this.log(`创建目录失败：${localDir}, ${JSON.stringify(res)} `)
        }
      })
    })
    this.rmdir.on(cc.Node.EventType.TOUCH_START, () => {
      fs.rmdir({
        dirPath: `${localDir}`,
        success: () => {
          this.log(`删除目录成功：${localDir} `)
        },
        fail: (res) => {
          this.log(`删除目录失败：${localDir}, ${JSON.stringify(res)} `)
        }
      })
    })
    this.isDirectoryOrFileExist.on(cc.Node.EventType.TOUCH_START, () => {
      try {        
        let dirStat = fs.statSync(localDir, false)
        let fileStat = fs.statSync(localFilePath, false)
        this.log(`${localDir} 是否是目录：${dirStat.isDirectory()}；
         ${localFilePath} 是否是文件：${fileStat.isFile()}`)
      } catch (error) {
        this.log(`${error}, 请创建目录、写入文件`)
      }
    })
    this.rename.on(cc.Node.EventType.TOUCH_START, () => {
      fs.rename({
        oldPath: `${localDir}`,
        newPath: `${qgDir}/new${Math.random()}`,
        success: () => {
          this.log(`重命名目录成功：${localDir} => ${qgDir}/new`)
        },
        fail: (res) => {
          this.log(`重命名目录失败：${localDir}, ${JSON.stringify(res)} `)
        }
      })
    })
    this.saveFile.on(cc.Node.EventType.TOUCH_START, () => {
      qg.chooseImage({
        count: 1,
        sizeType: ['original'],
        sourceType: ['album'],
        success: (imgRes) => {
          fs.saveFile({
            filePath: `${localFilePath}`,
            tempFilePath: `${imgRes.tempFilePaths[0]}`,
            success: (res) => {
              this.log(`保存地址为: ${res.savedFilePath} `)
            },
            fail: (res) => {
              this.log(`error：${JSON.stringify(res)}`)
            }
          })
        },
        fail: (e) => {
          this.log(`选择图片失败：${JSON.stringify(e)}`)
        }
      })
    })
    this.readdir.on(cc.Node.EventType.TOUCH_START, () => {
      fs.readdir({
        dirPath: `${localDir}`,
        success: (res) => {
          this.log(`success：${localDir}, ${res.files} `)
        },
        fail: (res) => {
          this.log(`error：${localFilePath} => ${qgDir}/newPath.txt，${JSON.stringify(res)}`)
        }
      })
    })

    this.writeFile.on(cc.Node.EventType.TOUCH_START, () => {
      fs.writeFile({
        filePath: localFilePath,
        data: "Hello world.",
        encoding: "utf8",
        success: () => {
          this.log(`写入文件成功：${localFilePath} `)
        },
        fail: (res) => {
          this.log(`${JSON.stringify(res)}`)
        }
      })
    })
    this.readFile.on(cc.Node.EventType.TOUCH_START, () => {
      fs.readFile({
        filePath: localFilePath,
        data: "Hello world.",
        encoding: "utf8",
        success: (res) => {
          this.log(`读取文件成功：${localFilePath}, ${res.data} `)
        },
        fail: (res) => {
          this.log(`读取文件失败：${localFilePath}, ${JSON.stringify(res)}`)
        }
      })
    })
    this.appendFile.on(cc.Node.EventType.TOUCH_START, () => {
      fs.appendFile({
        filePath: localFilePath,
        data: "Hello world.",
        encoding: "utf8",
        success: () => {
          this.log(`追加文件成功：${localFilePath} `)
        },
        fail: (res) => {
          this.log(`追加文件失败：${localFilePath}, ${JSON.stringify(res)}`)
        }
      })
    })
    this.copyFile.on(cc.Node.EventType.TOUCH_START, () => {
      fs.copyFile({
        srcPath: localFilePath,
        destPath: `${qgDir}/copy.txt`,
        success: () => {
          this.log(`复制文件成功：${localFilePath} => ${qgDir}/copy.txt`)
        },
        fail: (res) => {
          this.log(`复制文件失败：${localFilePath}, ${JSON.stringify(res)}`)
        }
      })
    })
    this.removeSavedFile.on(cc.Node.EventType.TOUCH_START, () => {
      fs.removeSavedFile({
        filePath: localFilePath,
        success: () => {
          this.log(`success: ${localFilePath}`)
        },
        fail: (res) => {
          this.log(`error: ${localFilePath}, ${JSON.stringify(res)}`)
        }
      })
    })
    this.stat.on(cc.Node.EventType.TOUCH_START, () => {
      fs.stat({
        path: localFilePath,
        success: (res) => {
          this.log(`${localFilePath}: ${JSON.stringify(res)}`)
        },
        fail: (res) => {
          this.log(`error: ${localFilePath}, ${JSON.stringify(res)}`)
        }
      })
    })
    this.unzip.on(cc.Node.EventType.TOUCH_START, () => {
      let tempFilePath = `${qg.env.USER_DATA_PATH}/test.zip`
      qg.downloadFile({
          // TODO: 替换自己的文件压缩包
          url: '',
          filePath: tempFilePath
      });
      fs.unzip({
        zipFilePath: tempFilePath,
        targetPath: `${qgDir}`,
        success: (res) => {
          this.log(`解压文件成功：${qgDir}`)
        },
        fail: (res) => {
          this.log(`解压文件失败：${qgDir}, ${JSON.stringify(res)}`)
        }
      })
    })
    this.getFileInfo.on(cc.Node.EventType.TOUCH_START, () => {
      fs.getFileInfo({
        filePath: localFilePath,
        success: (res) => {
          this.log(`success: ${localFilePath}, 文件大小： ${res.size} 字节`)
        },
        fail: (res) => {
          this.log(`error: ${localFilePath}, ${JSON.stringify(res)}`)
        }
      })
    })
    this.returnBtn.on(cc.Node.EventType.TOUCH_START, () => {
      cc.director.loadScene('dataReading')
    })
  }

  showModal(content, success = ()=>{}, fail= ()=>{}, title="提示") {
    qg.showModal({
      title,
      content,
      success,
      fail
    })
    this.log(content)
  }

  log(msg) {
    console.log(msg)
    this.logLabel.getComponent(cc.Label).string = msg
  }
}

"use strict";
cc._RF.push(module, '6c6e85NGKNF06eVrzdZP1f+', 'File');
// Script/dataReading/File.ts

/**
 * @desc: { 文件 }
 * @author: zhengyiqiu
 * @Create Date: 2020-06-23 10:21:00
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2020-07-03 15:05:02
 */
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var qgDir;
var localFilePath;
var localDir;
var File = /** @class */ (function (_super) {
    __extends(File, _super);
    function File() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logLabel = null;
        _this.writeFile = null;
        _this.readFile = null;
        _this.mkdir = null;
        _this.rmdir = null;
        _this.isDirectoryOrFileExist = null;
        _this.rename = null;
        _this.saveFile = null;
        _this.readdir = null;
        _this.appendFile = null;
        _this.copyFile = null;
        _this.removeSavedFile = null;
        _this.stat = null;
        _this.unzip = null;
        _this.getFileInfo = null;
        _this.returnBtn = null;
        return _this;
    }
    File.prototype.start = function () {
        var _this = this;
        qgDir = qg.env.USER_DATA_PATH;
        localFilePath = qgDir + "/my/file.txt";
        localDir = qgDir + "/my";
        var fs = qg.getFileSystemManager();
        this.mkdir.on(cc.Node.EventType.TOUCH_START, function () {
            fs.mkdir({
                dirPath: "" + localDir,
                encoding: "utf8",
                success: function () {
                    _this.log("\u521B\u5EFA\u76EE\u5F55\u6210\u529F\uFF1A" + localDir + " ");
                },
                fail: function (res) {
                    _this.log("\u521B\u5EFA\u76EE\u5F55\u5931\u8D25\uFF1A" + localDir + ", " + JSON.stringify(res) + " ");
                }
            });
        });
        this.rmdir.on(cc.Node.EventType.TOUCH_START, function () {
            fs.rmdir({
                dirPath: "" + localDir,
                success: function () {
                    _this.log("\u5220\u9664\u76EE\u5F55\u6210\u529F\uFF1A" + localDir + " ");
                },
                fail: function (res) {
                    _this.log("\u5220\u9664\u76EE\u5F55\u5931\u8D25\uFF1A" + localDir + ", " + JSON.stringify(res) + " ");
                }
            });
        });
        this.isDirectoryOrFileExist.on(cc.Node.EventType.TOUCH_START, function () {
            try {
                var dirStat = fs.statSync(localDir, false);
                var fileStat = fs.statSync(localFilePath, false);
                _this.log(localDir + " \u662F\u5426\u662F\u76EE\u5F55\uFF1A" + dirStat.isDirectory() + "\uFF1B\n         " + localFilePath + " \u662F\u5426\u662F\u6587\u4EF6\uFF1A" + fileStat.isFile());
            }
            catch (error) {
                _this.log(error + ", \u8BF7\u521B\u5EFA\u76EE\u5F55\u3001\u5199\u5165\u6587\u4EF6");
            }
        });
        this.rename.on(cc.Node.EventType.TOUCH_START, function () {
            fs.rename({
                oldPath: "" + localDir,
                newPath: qgDir + "/new" + Math.random(),
                success: function () {
                    _this.log("\u91CD\u547D\u540D\u76EE\u5F55\u6210\u529F\uFF1A" + localDir + " => " + qgDir + "/new");
                },
                fail: function (res) {
                    _this.log("\u91CD\u547D\u540D\u76EE\u5F55\u5931\u8D25\uFF1A" + localDir + ", " + JSON.stringify(res) + " ");
                }
            });
        });
        this.saveFile.on(cc.Node.EventType.TOUCH_START, function () {
            qg.chooseImage({
                count: 1,
                sizeType: ['original'],
                sourceType: ['album'],
                success: function (imgRes) {
                    fs.saveFile({
                        filePath: "" + localFilePath,
                        tempFilePath: "" + imgRes.tempFilePaths[0],
                        success: function (res) {
                            _this.log("\u4FDD\u5B58\u5730\u5740\u4E3A: " + res.savedFilePath + " ");
                        },
                        fail: function (res) {
                            _this.log("error\uFF1A" + JSON.stringify(res));
                        }
                    });
                },
                fail: function (e) {
                    _this.log("\u9009\u62E9\u56FE\u7247\u5931\u8D25\uFF1A" + JSON.stringify(e));
                }
            });
        });
        this.readdir.on(cc.Node.EventType.TOUCH_START, function () {
            fs.readdir({
                dirPath: "" + localDir,
                success: function (res) {
                    _this.log("success\uFF1A" + localDir + ", " + res.files + " ");
                },
                fail: function (res) {
                    _this.log("error\uFF1A" + localFilePath + " => " + qgDir + "/newPath.txt\uFF0C" + JSON.stringify(res));
                }
            });
        });
        this.writeFile.on(cc.Node.EventType.TOUCH_START, function () {
            fs.writeFile({
                filePath: localFilePath,
                data: "Hello world.",
                encoding: "utf8",
                success: function () {
                    _this.log("\u5199\u5165\u6587\u4EF6\u6210\u529F\uFF1A" + localFilePath + " ");
                },
                fail: function (res) {
                    _this.log("" + JSON.stringify(res));
                }
            });
        });
        this.readFile.on(cc.Node.EventType.TOUCH_START, function () {
            fs.readFile({
                filePath: localFilePath,
                data: "Hello world.",
                encoding: "utf8",
                success: function (res) {
                    _this.log("\u8BFB\u53D6\u6587\u4EF6\u6210\u529F\uFF1A" + localFilePath + ", " + res.data + " ");
                },
                fail: function (res) {
                    _this.log("\u8BFB\u53D6\u6587\u4EF6\u5931\u8D25\uFF1A" + localFilePath + ", " + JSON.stringify(res));
                }
            });
        });
        this.appendFile.on(cc.Node.EventType.TOUCH_START, function () {
            fs.appendFile({
                filePath: localFilePath,
                data: "Hello world.",
                encoding: "utf8",
                success: function () {
                    _this.log("\u8FFD\u52A0\u6587\u4EF6\u6210\u529F\uFF1A" + localFilePath + " ");
                },
                fail: function (res) {
                    _this.log("\u8FFD\u52A0\u6587\u4EF6\u5931\u8D25\uFF1A" + localFilePath + ", " + JSON.stringify(res));
                }
            });
        });
        this.copyFile.on(cc.Node.EventType.TOUCH_START, function () {
            fs.copyFile({
                srcPath: localFilePath,
                destPath: qgDir + "/copy.txt",
                success: function () {
                    _this.log("\u590D\u5236\u6587\u4EF6\u6210\u529F\uFF1A" + localFilePath + " => " + qgDir + "/copy.txt");
                },
                fail: function (res) {
                    _this.log("\u590D\u5236\u6587\u4EF6\u5931\u8D25\uFF1A" + localFilePath + ", " + JSON.stringify(res));
                }
            });
        });
        this.removeSavedFile.on(cc.Node.EventType.TOUCH_START, function () {
            fs.removeSavedFile({
                filePath: localFilePath,
                success: function () {
                    _this.log("success: " + localFilePath);
                },
                fail: function (res) {
                    _this.log("error: " + localFilePath + ", " + JSON.stringify(res));
                }
            });
        });
        this.stat.on(cc.Node.EventType.TOUCH_START, function () {
            fs.stat({
                path: localFilePath,
                success: function (res) {
                    _this.log(localFilePath + ": " + JSON.stringify(res));
                },
                fail: function (res) {
                    _this.log("error: " + localFilePath + ", " + JSON.stringify(res));
                }
            });
        });
        this.unzip.on(cc.Node.EventType.TOUCH_START, function () {
            var tempFilePath = qg.env.USER_DATA_PATH + "/test.zip";
            qg.downloadFile({
                url: 'https://cdofs.oppomobile.com/cdo-activity/static/201905/08/da1f253b1854d1c6353ec79c3e3e8145.zip',
                filePath: tempFilePath
            });
            fs.unzip({
                zipFilePath: tempFilePath,
                targetPath: "" + qgDir,
                success: function (res) {
                    _this.log("\u89E3\u538B\u6587\u4EF6\u6210\u529F\uFF1A" + qgDir);
                },
                fail: function (res) {
                    _this.log("\u89E3\u538B\u6587\u4EF6\u5931\u8D25\uFF1A" + qgDir + ", " + JSON.stringify(res));
                }
            });
        });
        this.getFileInfo.on(cc.Node.EventType.TOUCH_START, function () {
            fs.getFileInfo({
                filePath: localFilePath,
                success: function (res) {
                    _this.log("success: " + localFilePath + ", \u6587\u4EF6\u5927\u5C0F\uFF1A " + res.size + " \u5B57\u8282");
                },
                fail: function (res) {
                    _this.log("error: " + localFilePath + ", " + JSON.stringify(res));
                }
            });
        });
        this.returnBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('dataReading');
        });
    };
    File.prototype.showModal = function (content, success, fail, title) {
        if (success === void 0) { success = function () { }; }
        if (fail === void 0) { fail = function () { }; }
        if (title === void 0) { title = "提示"; }
        qg.showModal({
            title: title,
            content: content,
            success: success,
            fail: fail
        });
        this.log(content);
    };
    File.prototype.log = function (msg) {
        console.log(msg);
        this.logLabel.getComponent(cc.Label).string = msg;
    };
    __decorate([
        property(cc.Label)
    ], File.prototype, "logLabel", void 0);
    __decorate([
        property(cc.Node)
    ], File.prototype, "writeFile", void 0);
    __decorate([
        property(cc.Node)
    ], File.prototype, "readFile", void 0);
    __decorate([
        property(cc.Node)
    ], File.prototype, "mkdir", void 0);
    __decorate([
        property(cc.Node)
    ], File.prototype, "rmdir", void 0);
    __decorate([
        property(cc.Node)
    ], File.prototype, "isDirectoryOrFileExist", void 0);
    __decorate([
        property(cc.Node)
    ], File.prototype, "rename", void 0);
    __decorate([
        property(cc.Node)
    ], File.prototype, "saveFile", void 0);
    __decorate([
        property(cc.Node)
    ], File.prototype, "readdir", void 0);
    __decorate([
        property(cc.Node)
    ], File.prototype, "appendFile", void 0);
    __decorate([
        property(cc.Node)
    ], File.prototype, "copyFile", void 0);
    __decorate([
        property(cc.Node)
    ], File.prototype, "removeSavedFile", void 0);
    __decorate([
        property(cc.Node)
    ], File.prototype, "stat", void 0);
    __decorate([
        property(cc.Node)
    ], File.prototype, "unzip", void 0);
    __decorate([
        property(cc.Node)
    ], File.prototype, "getFileInfo", void 0);
    __decorate([
        property(cc.Node)
    ], File.prototype, "returnBtn", void 0);
    File = __decorate([
        ccclass
    ], File);
    return File;
}(cc.Component));
exports.default = File;

cc._RF.pop();
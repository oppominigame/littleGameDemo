(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/network/Upload.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'f9342HbOzhLnLi626J9DxFu', 'Upload', __filename);
// Script/network/Upload.ts

/**
 * @desc: { 上传 }
 * @author: zhengyiqiu
 * @Create Date: 2020-06-30 20:44:24
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2020-07-01 20:06:15
 */
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Upload = /** @class */ (function (_super) {
    __extends(Upload, _super);
    function Upload() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logLabel = null;
        _this.uploadBtn = null;
        _this.progressLabel = null;
        _this.returnBtn = null;
        return _this;
    }
    Upload.prototype.start = function () {
        var _this = this;
        this.uploadBtn.on(cc.Node.EventType.TOUCH_START, function () {
            var task;
            var url = 'https://test-runtime.cocos.com:12345/uploads';
            var successCb = function (data) {
                var tempFilePath = data.tempFilePaths[0];
                task = qg.uploadFile({
                    url: url,
                    filePath: tempFilePath,
                    name: "file",
                    success: function () {
                        _this.log("\u4E0A\u4F20\u6210\u529F");
                    },
                    fail: function (msg) {
                        _this.log(JSON.stringify(msg));
                    },
                });
                task.onProgressUpdate(function (msg) {
                    _this.progressLabel.getComponent(cc.Label).string = msg['progress'] + '%';
                });
            };
            var failCb = function (data) {
                _this.log("choose img failed: " + data);
            };
            qg.chooseImage({
                count: 1,
                sourceType: ['album'],
                success: successCb,
                fail: failCb
            });
        });
        this.returnBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('network');
        });
    };
    Upload.prototype.log = function (msg) {
        console.log(msg);
        this.logLabel.getComponent(cc.Label).string = msg;
    };
    __decorate([
        property(cc.Label)
    ], Upload.prototype, "logLabel", void 0);
    __decorate([
        property(cc.Node)
    ], Upload.prototype, "uploadBtn", void 0);
    __decorate([
        property(cc.Label)
    ], Upload.prototype, "progressLabel", void 0);
    __decorate([
        property(cc.Node)
    ], Upload.prototype, "returnBtn", void 0);
    Upload = __decorate([
        ccclass
    ], Upload);
    return Upload;
}(cc.Component));
exports.default = Upload;

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=Upload.js.map
        
(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/network/Download.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '0be73XIUVVPdrWf+DPtmdeR', 'Download', __filename);
// Script/network/Download.ts

/**
 * @desc: { 字体 }
 * @author: zhengyiqiu
 * @Create Date: 2020-06-30 20:44:24
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2020-07-01 19:24:22
 */
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Download = /** @class */ (function (_super) {
    __extends(Download, _super);
    function Download() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logLabel = null;
        _this.downloadBtn = null;
        _this.progressLabel = null;
        _this.imgContainer = null;
        _this.returnBtn = null;
        return _this;
    }
    Download.prototype.start = function () {
        var _this = this;
        this.downloadBtn.on(cc.Node.EventType.TOUCH_START, function () {
            var tempFilePath = qg.env.USER_DATA_PATH + "/download.png";
            var task = qg.downloadFile({
                url: 'https://openfs.oppomobile.com/open/res/201907/31/5f27f86a3cc84b02a8baaf0a4a3066ab.png',
                filePath: tempFilePath,
                success: function () {
                    _this.log("\u52A0\u8F7D\u6210\u529F");
                    cc.loader.load(tempFilePath, function (err, texture) {
                        _this.imgContainer.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
                    });
                },
                fail: function (msg) {
                    _this.log(JSON.stringify(msg));
                },
            });
            task.onProgressUpdate(function (msg) {
                _this.progressLabel.getComponent(cc.Label).string = msg['progress'] + '%';
            });
        });
        this.returnBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('network');
        });
    };
    Download.prototype.log = function (msg) {
        console.log(msg);
        this.logLabel.getComponent(cc.Label).string = msg;
    };
    __decorate([
        property(cc.Label)
    ], Download.prototype, "logLabel", void 0);
    __decorate([
        property(cc.Node)
    ], Download.prototype, "downloadBtn", void 0);
    __decorate([
        property(cc.Label)
    ], Download.prototype, "progressLabel", void 0);
    __decorate([
        property(cc.Sprite)
    ], Download.prototype, "imgContainer", void 0);
    __decorate([
        property(cc.Node)
    ], Download.prototype, "returnBtn", void 0);
    Download = __decorate([
        ccclass
    ], Download);
    return Download;
}(cc.Component));
exports.default = Download;

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
        //# sourceMappingURL=Download.js.map
        
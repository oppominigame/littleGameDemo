(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/media/Media.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '8a21fflrd1AfZv7r2PNo7Cb', 'Media', __filename);
// Script/media/Media.ts

/**
 * @desc: { 媒体 }
 * @author: zhengyiqiu
 * @Create Date: 2020-06-29 11:24:25
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2020-06-30 17:04:30
 */
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Meida = /** @class */ (function (_super) {
    __extends(Meida, _super);
    function Meida() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logLabel = null;
        _this.audioBtn = null;
        _this.imgBtn = null;
        _this.returnBtn = null;
        _this.videoBtn = null;
        _this.recorderAudioBtn = null;
        return _this;
    }
    Meida.prototype.start = function () {
        this.audioBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('audio');
        });
        this.imgBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('img');
        });
        this.videoBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('video');
        });
        this.recorderAudioBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('recorderManager');
        });
        this.returnBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('main');
        });
    };
    // 回调信息展示
    Meida.prototype.log = function (msg) {
        console.log(msg);
        this.logLabel.getComponent(cc.Label).string = msg;
    };
    __decorate([
        property(cc.Label)
    ], Meida.prototype, "logLabel", void 0);
    __decorate([
        property(cc.Node)
    ], Meida.prototype, "audioBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Meida.prototype, "imgBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Meida.prototype, "returnBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Meida.prototype, "videoBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Meida.prototype, "recorderAudioBtn", void 0);
    Meida = __decorate([
        ccclass
    ], Meida);
    return Meida;
}(cc.Component));
exports.default = Meida;

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
        //# sourceMappingURL=Media.js.map
        
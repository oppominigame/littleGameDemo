(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/render/FPS.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '85dd2u4mjtO/5kMl5e6uzS3', 'FPS', __filename);
// Script/render/FPS.ts

/**
 * @desc: { fps }
 * @author: zhengyiqiu
 * @Create Date: 2020-06-30 20:44:24
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2020-07-01 14:38:49
 */
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var currentFPS = 30;
var FPS = /** @class */ (function (_super) {
    __extends(FPS, _super);
    function FPS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logLabel = null;
        _this.setFps = null;
        _this.setFPSSlider = null;
        _this.fpsLabel = null;
        _this.returnBtn = null;
        return _this;
    }
    FPS.prototype.start = function () {
        var _this = this;
        this.setFps.on(cc.Node.EventType.TOUCH_START, function () {
            qg.setPreferredFramesPerSecond(currentFPS);
            _this.log("\u8BBE\u7F6E\u5E27\u7387\uFF1A" + currentFPS);
        });
        this.returnBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('render');
        });
    };
    FPS.prototype.onFpsChange = function () {
        currentFPS = Math.round(55 * this.setFPSSlider.progress) + 5;
        this.fpsLabel.getComponent(cc.Label).string = currentFPS + '';
    };
    FPS.prototype.log = function (msg) {
        console.log(msg);
        this.logLabel.getComponent(cc.Label).string = msg;
    };
    __decorate([
        property(cc.Label)
    ], FPS.prototype, "logLabel", void 0);
    __decorate([
        property(cc.Node)
    ], FPS.prototype, "setFps", void 0);
    __decorate([
        property(cc.Slider)
    ], FPS.prototype, "setFPSSlider", void 0);
    __decorate([
        property(cc.Label)
    ], FPS.prototype, "fpsLabel", void 0);
    __decorate([
        property(cc.Node)
    ], FPS.prototype, "returnBtn", void 0);
    FPS = __decorate([
        ccclass
    ], FPS);
    return FPS;
}(cc.Component));
exports.default = FPS;

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
        //# sourceMappingURL=FPS.js.map
        
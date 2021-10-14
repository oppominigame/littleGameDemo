(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/device/Screen.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '9fec2JlxYtNH4fB4khbGq9t', 'Screen', __filename);
// Script/device/Screen.ts

/**
 * @desc: { 屏幕 }
 * @author: zhengyiqiu
 * @Create Date: 2020-06-23 10:21:00
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2020-06-29 15:24:35
 */
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Screen = /** @class */ (function (_super) {
    __extends(Screen, _super);
    function Screen() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logLabel = null;
        _this.isKeepScreenOnBtn = null;
        _this.setScreenBrightness = null;
        _this.isScreenOn = null;
        _this.screenBrightness = null;
        _this.returnBtn = null;
        return _this;
    }
    Screen.prototype.start = function () {
        var _this = this;
        var isScreenOnType = false;
        qg.getScreenBrightness({
            success: function (res) {
                _this.log("\u83B7\u53D6\u5C4F\u5E55\u4EAE\u5EA6\uFF1A" + res.value);
                _this.setScreenBrightness.progress = +(res.value);
                _this.screenBrightness.getComponent(cc.Label).string = res.value;
            },
            fail: function (res) {
                _this.log(res.errMsg);
            },
            complete: function (res) { }
        });
        this.isKeepScreenOnBtn.on(cc.Node.EventType.TOUCH_START, function () {
            isScreenOnType = !isScreenOnType;
            qg.setKeepScreenOn({
                keepScreenOn: isScreenOnType,
                success: function (res) {
                    _this.log("\u8BBE\u7F6E\u5C4F\u5E55\u662F\u5426\u5E38\u4EAE: " + isScreenOnType);
                    _this.isScreenOn.getComponent(cc.Label).string = isScreenOnType + '';
                },
                fail: function (res) { },
                complete: function (res) { }
            });
        });
        this.returnBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('device');
        });
    };
    Screen.prototype.onSliderChange = function () {
        var _this = this;
        qg.setScreenBrightness({
            value: +this.setScreenBrightness.progress,
            success: function (res) {
                _this.log("\u8BBE\u7F6E\u5C4F\u5E55\u4EAE\u5EA6\uFF1A" + +_this.setScreenBrightness.progress);
            },
            fail: function (res) { },
            complete: function (res) { }
        });
        qg.getScreenBrightness({
            success: function (res) {
                _this.log("\u83B7\u53D6\u5C4F\u5E55\u4EAE\u5EA6\uFF1A" + res.value);
                _this.screenBrightness.getComponent(cc.Label).string = res.value;
            },
            fail: function (res) {
                _this.log(res.errMsg);
            },
            complete: function (res) { }
        });
    };
    Screen.prototype.log = function (msg) {
        console.log(msg);
        this.logLabel.getComponent(cc.Label).string = msg;
    };
    __decorate([
        property(cc.Label)
    ], Screen.prototype, "logLabel", void 0);
    __decorate([
        property(cc.Node)
    ], Screen.prototype, "isKeepScreenOnBtn", void 0);
    __decorate([
        property(cc.Slider)
    ], Screen.prototype, "setScreenBrightness", void 0);
    __decorate([
        property(cc.Label)
    ], Screen.prototype, "isScreenOn", void 0);
    __decorate([
        property(cc.Label)
    ], Screen.prototype, "screenBrightness", void 0);
    __decorate([
        property(cc.Node)
    ], Screen.prototype, "returnBtn", void 0);
    Screen = __decorate([
        ccclass
    ], Screen);
    return Screen;
}(cc.Component));
exports.default = Screen;

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
        //# sourceMappingURL=Screen.js.map
        
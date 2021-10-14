"use strict";
cc._RF.push(module, '67178T6xVxF/qySBjVgqsm6', 'Vibrate');
// Script/device/Vibrate.ts

/**
 * @desc: { 振动 }
 * @author: zhengyiqiu
 * @Create Date: 2020-06-23 10:21:00
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2020-06-23 21:25:45
 */
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Vibrate = /** @class */ (function (_super) {
    __extends(Vibrate, _super);
    function Vibrate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logLabel = null;
        _this.vibrateLongBtn = null;
        _this.vibrateShortBtn = null;
        _this.returnBtn = null;
        return _this;
    }
    Vibrate.prototype.start = function () {
        var _this = this;
        this.vibrateLongBtn.on(cc.Node.EventType.TOUCH_START, function () {
            qg.vibrateLong({
                success: function (res) {
                    _this.log("\u957F\u632F\u52A8");
                },
                fail: function (res) { },
                complete: function (res) { }
            });
        });
        this.vibrateShortBtn.on(cc.Node.EventType.TOUCH_START, function () {
            qg.vibrateShort({
                success: function (res) {
                    _this.log("\u77ED\u632F\u52A8");
                },
                fail: function (res) { },
                complete: function (res) { }
            });
        });
        this.returnBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('device');
        });
    };
    Vibrate.prototype.log = function (msg) {
        console.log(msg);
        this.logLabel.getComponent(cc.Label).string = msg;
    };
    __decorate([
        property(cc.Label)
    ], Vibrate.prototype, "logLabel", void 0);
    __decorate([
        property(cc.Node)
    ], Vibrate.prototype, "vibrateLongBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Vibrate.prototype, "vibrateShortBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Vibrate.prototype, "returnBtn", void 0);
    Vibrate = __decorate([
        ccclass
    ], Vibrate);
    return Vibrate;
}(cc.Component));
exports.default = Vibrate;

cc._RF.pop();
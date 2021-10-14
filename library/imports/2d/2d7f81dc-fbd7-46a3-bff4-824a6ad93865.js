"use strict";
cc._RF.push(module, '2d7f8Hc+9dGo7/0gkpq2Thl', 'Battery');
// Script/device/Battery.ts

/**
 * @desc: { 电量 }
 * @author: zhengyiqiu
 * @Create Date: 2020-06-23 10:21:00
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2020-06-23 10:43:10
 */
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Pay = /** @class */ (function (_super) {
    __extends(Pay, _super);
    function Pay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logLabel = null;
        _this.getBatteryBtn = null;
        _this.returnBtn = null;
        return _this;
    }
    Pay.prototype.start = function () {
        var _this = this;
        this.getBatteryBtn.on(cc.Node.EventType.TOUCH_START, function () {
            qg.getBatteryInfo({
                success: function (res) {
                    _this.log("\u8BBE\u5907\u7535\u91CF\uFF1A" + res.level + ", \u662F\u5426\u5145\u7535\uFF1A" + res.isCharging);
                },
                fail: function (err) {
                    _this.log(err);
                },
                complete: function () { }
            });
        });
        this.returnBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('device');
        });
    };
    Pay.prototype.log = function (msg) {
        console.log(msg);
        this.logLabel.getComponent(cc.Label).string = msg;
    };
    __decorate([
        property(cc.Label)
    ], Pay.prototype, "logLabel", void 0);
    __decorate([
        property(cc.Node)
    ], Pay.prototype, "getBatteryBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Pay.prototype, "returnBtn", void 0);
    Pay = __decorate([
        ccclass
    ], Pay);
    return Pay;
}(cc.Component));
exports.default = Pay;

cc._RF.pop();
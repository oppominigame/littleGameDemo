"use strict";
cc._RF.push(module, '3ce1flze8BFBKlj/8nzT02F', 'Compass');
// Script/device/Compass.ts

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @desc: { 罗盘 }
 * @author: zhengyiqiu
 * @Create Date: 2020-06-23 19:16:14
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2020-06-23 19:20:12
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Pay = /** @class */ (function (_super) {
    __extends(Pay, _super);
    function Pay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logLabel = null;
        _this.onChangeBtn = null;
        _this.startBtn = null;
        _this.stopBtn = null;
        _this.offChangeBtn = null;
        _this.returnBtn = null;
        _this.directionLable = null;
        return _this;
    }
    Pay.prototype.start = function () {
        var _this = this;
        var sucCb = function () {
            _this.log("success");
        };
        var failCb = function () {
            _this.log("fail");
        };
        this.onChangeBtn.on(cc.Node.EventType.TOUCH_START, function () {
            qg.onCompassChange(function (res) {
                _this.directionLable.getComponent(cc.Label).string = res.direction;
            });
        });
        this.startBtn.on(cc.Node.EventType.TOUCH_START, function () {
            qg.startCompass({
                success: sucCb,
                fail: failCb
            });
        });
        this.stopBtn.on(cc.Node.EventType.TOUCH_START, function () {
            qg.stopCompass({
                success: sucCb,
                fail: failCb
            });
        });
        this.offChangeBtn.on(cc.Node.EventType.TOUCH_START, function () {
            qg.offCompassChange({
                success: sucCb,
                fail: failCb
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
    ], Pay.prototype, "onChangeBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Pay.prototype, "startBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Pay.prototype, "stopBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Pay.prototype, "offChangeBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Pay.prototype, "returnBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Pay.prototype, "directionLable", void 0);
    Pay = __decorate([
        ccclass
    ], Pay);
    return Pay;
}(cc.Component));
exports.default = Pay;

cc._RF.pop();
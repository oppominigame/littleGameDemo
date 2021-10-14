"use strict";
cc._RF.push(module, '40797osrbpIALW5ijihlQ7/', 'WindowResize');
// Script/device/WindowResize.ts

/**
 * @desc: { 窗口变化 }
 * @author: zhengyiqiu
 * @Create Date: 2020-06-24 10:18:51
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2020-06-24 10:47:38
 */
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Pay = /** @class */ (function (_super) {
    __extends(Pay, _super);
    function Pay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logLabel = null;
        _this.onBtn = null;
        _this.offBtn = null;
        _this.returnBtn = null;
        return _this;
    }
    Pay.prototype.start = function () {
        var _this = this;
        var callback = function (res) {
            _this.log("\u53D8\u5316\u540E\u7A97\u53E3\u7684\u5BBD\u5EA6\uFF1A" + res['windowWidth'] + "\uFF0C\u9AD8\u5EA6\uFF1A" + res['windowHeight']);
        };
        this.onBtn.on(cc.Node.EventType.TOUCH_START, function () {
            qg.onWindowResize(callback);
        });
        this.offBtn.on(cc.Node.EventType.TOUCH_START, function () {
            _this.log("\u53D6\u6D88\u76D1\u542C");
            qg.offWindowResize(callback);
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
    ], Pay.prototype, "onBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Pay.prototype, "offBtn", void 0);
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
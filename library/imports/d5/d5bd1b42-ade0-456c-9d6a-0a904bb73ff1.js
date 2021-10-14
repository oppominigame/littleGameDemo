"use strict";
cc._RF.push(module, 'd5bd1tCreBFbJ1qCpBLtz/x', 'System');
// Script/system/System.ts

/**
 * @desc: { 系统 }
 * @author: zhengyiqiu
 * @Create Date: 2020-06-28 17:32:12
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2020-06-30 19:44:55
 */
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var System = /** @class */ (function (_super) {
    __extends(System, _super);
    function System() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logLabel = null;
        _this.systemInfo = null;
        _this.systemEvent = null;
        _this.lifeCircle = null;
        _this.returnBtn = null;
        return _this;
    }
    System.prototype.start = function () {
        this.systemInfo.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene("systemInfo");
        });
        this.systemEvent.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene("systemEvents");
        });
        this.lifeCircle.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene("lifeCircle");
        });
        this.returnBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('main');
        });
    };
    System.prototype.log = function (msg) {
        console.log(msg);
        this.logLabel.getComponent(cc.Label).string = msg;
    };
    __decorate([
        property(cc.Label)
    ], System.prototype, "logLabel", void 0);
    __decorate([
        property(cc.Node)
    ], System.prototype, "systemInfo", void 0);
    __decorate([
        property(cc.Node)
    ], System.prototype, "systemEvent", void 0);
    __decorate([
        property(cc.Node)
    ], System.prototype, "lifeCircle", void 0);
    __decorate([
        property(cc.Node)
    ], System.prototype, "returnBtn", void 0);
    System = __decorate([
        ccclass
    ], System);
    return System;
}(cc.Component));
exports.default = System;

cc._RF.pop();
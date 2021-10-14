"use strict";
cc._RF.push(module, '80c14UwPw1ATKgzSIxUvxsT', 'DeviceMotion');
// Script/device/DeviceMotion.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @desc: { 设备方向 }
 * @author: zhengyiqiu
 * @Create Date: 2021-09-23 14:43:31
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2021-09-23 17:23:43
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DeviceMotion = /** @class */ (function (_super) {
    __extends(DeviceMotion, _super);
    function DeviceMotion() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logLabel = null;
        _this.onChangeBtn = null;
        _this.startBtn = null;
        _this.stopBtn = null;
        _this.offChangeBtn = null;
        _this.returnBtn = null;
        _this.alphaLabel = null;
        _this.betaLabel = null;
        _this.gammaLabel = null;
        return _this;
    }
    DeviceMotion.prototype.start = function () {
        var _this = this;
        var sucCb = function () {
            _this.log("success");
        };
        var failCb = function () {
            _this.log("fail");
        };
        var changeCb = function (res) {
            _this.alphaLabel.getComponent(cc.Label).string = res.alpha;
            _this.betaLabel.getComponent(cc.Label).string = res.beta;
            _this.gammaLabel.getComponent(cc.Label).string = res.gamma;
        };
        this.onChangeBtn.on(cc.Node.EventType.TOUCH_START, function () {
            qg.onDeviceMotionChange(changeCb);
        });
        this.startBtn.on(cc.Node.EventType.TOUCH_START, function () {
            qg.startDeviceMotionListening({
                success: sucCb,
                fail: failCb
            });
        });
        this.stopBtn.on(cc.Node.EventType.TOUCH_START, function () {
            qg.stopDeviceMotionListening({
                success: sucCb,
                fail: failCb
            });
        });
        this.offChangeBtn.on(cc.Node.EventType.TOUCH_START, function () {
            qg.offDeviceMotionChange(changeCb);
        });
        this.returnBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('device');
        });
    };
    DeviceMotion.prototype.log = function (msg) {
        console.log(msg);
        this.logLabel.getComponent(cc.Label).string = msg;
    };
    __decorate([
        property(cc.Label)
    ], DeviceMotion.prototype, "logLabel", void 0);
    __decorate([
        property(cc.Node)
    ], DeviceMotion.prototype, "onChangeBtn", void 0);
    __decorate([
        property(cc.Node)
    ], DeviceMotion.prototype, "startBtn", void 0);
    __decorate([
        property(cc.Node)
    ], DeviceMotion.prototype, "stopBtn", void 0);
    __decorate([
        property(cc.Node)
    ], DeviceMotion.prototype, "offChangeBtn", void 0);
    __decorate([
        property(cc.Node)
    ], DeviceMotion.prototype, "returnBtn", void 0);
    __decorate([
        property(cc.Node)
    ], DeviceMotion.prototype, "alphaLabel", void 0);
    __decorate([
        property(cc.Node)
    ], DeviceMotion.prototype, "betaLabel", void 0);
    __decorate([
        property(cc.Node)
    ], DeviceMotion.prototype, "gammaLabel", void 0);
    DeviceMotion = __decorate([
        ccclass
    ], DeviceMotion);
    return DeviceMotion;
}(cc.Component));
exports.default = DeviceMotion;

cc._RF.pop();
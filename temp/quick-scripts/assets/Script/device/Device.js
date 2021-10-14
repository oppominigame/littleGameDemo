(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/device/Device.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'bdd1er2FttPuIwv96Cpd/Xq', 'Device', __filename);
// Script/device/Device.ts

"use strict";
/**
 * @desc: 设备
 * @Create Date: 2019-09-30 17:34:32
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2021-10-12 17:22:35
 */
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Pay = /** @class */ (function (_super) {
    __extends(Pay, _super);
    function Pay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logLabel = null;
        _this.accelerometerBtn = null;
        _this.batteryBtn = null;
        _this.clipboardBtn = null;
        _this.compassBtn = null;
        _this.networkTypeBtn = null;
        _this.screenBtn = null;
        _this.vibrateBtn = null;
        _this.windowResizeBtn = null;
        _this.performanceBtn = null;
        _this.deviceMotionBtn = null;
        _this.returnBtn = null;
        _this.gyroscopeBtn = null;
        _this.qrcodeBtn = null;
        return _this;
    }
    Pay.prototype.start = function () {
        this.accelerometerBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene("accelerometer");
        });
        this.batteryBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene("battery");
        });
        this.clipboardBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene("clipboard");
        });
        this.compassBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene("compass");
        });
        this.networkTypeBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene("networkType");
        });
        this.screenBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene("screen");
        });
        this.vibrateBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene("vibrate");
        });
        this.windowResizeBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene("windowResize");
        });
        this.performanceBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene("performance");
        });
        this.returnBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('main');
        });
        this.gyroscopeBtn.on(cc.Node.EventType.TOUCH_END, function () {
            cc.director.loadScene('gyroscope');
        });
        this.deviceMotionBtn.on(cc.Node.EventType.TOUCH_END, function () {
            cc.director.loadScene('deviceMotion');
        });
        this.qrcodeBtn.on(cc.Node.EventType.TOUCH_END, function () {
            cc.director.loadScene('qrcode');
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
    ], Pay.prototype, "accelerometerBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Pay.prototype, "batteryBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Pay.prototype, "clipboardBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Pay.prototype, "compassBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Pay.prototype, "networkTypeBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Pay.prototype, "screenBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Pay.prototype, "vibrateBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Pay.prototype, "windowResizeBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Pay.prototype, "performanceBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Pay.prototype, "deviceMotionBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Pay.prototype, "returnBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Pay.prototype, "gyroscopeBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Pay.prototype, "qrcodeBtn", void 0);
    Pay = __decorate([
        ccclass
    ], Pay);
    return Pay;
}(cc.Component));
exports.default = Pay;

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
        //# sourceMappingURL=Device.js.map
        
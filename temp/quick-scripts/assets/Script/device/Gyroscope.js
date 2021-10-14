(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/device/Gyroscope.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'f1d0bQSq99Hr58XgS/N5mwl', 'Gyroscope', __filename);
// Script/device/Gyroscope.ts

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
 * @desc: { 陀螺仪 }
 * @author: otomanlu
 * @Create Date: 2020-06-23 19:16:14
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2021-09-23 17:24:26
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Gyroscope = /** @class */ (function (_super) {
    __extends(Gyroscope, _super);
    function Gyroscope() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logLabel = null;
        _this.onChangeBtn = null;
        _this.startBtn = null;
        _this.stopBtn = null;
        _this.offChangeBtn = null;
        _this.returnBtn = null;
        _this.xLable = null;
        _this.yLable = null;
        _this.zLable = null;
        _this.rollLable = null;
        _this.pitchLable = null;
        _this.yawLable = null;
        return _this;
    }
    Gyroscope.prototype.start = function () {
        var _this = this;
        var sucCb = function () {
            _this.log("success");
        };
        var failCb = function () {
            _this.log("fail");
        };
        var changeCb = function (res) {
            _this.xLable.getComponent(cc.Label).string = res.x;
            _this.yLable.getComponent(cc.Label).string = res.y;
            _this.zLable.getComponent(cc.Label).string = res.z;
            _this.rollLable.getComponent(cc.Label).string = res.roll;
            _this.pitchLable.getComponent(cc.Label).string = res.pitch;
            _this.yawLable.getComponent(cc.Label).string = res.yaw;
        };
        this.onChangeBtn.on(cc.Node.EventType.TOUCH_START, function () {
            qg.onGyroscopeChange(changeCb);
        });
        this.startBtn.on(cc.Node.EventType.TOUCH_START, function () {
            qg.startGyroscope({
                success: sucCb,
                fail: failCb
            });
        });
        this.stopBtn.on(cc.Node.EventType.TOUCH_START, function () {
            qg.stopGyroscope({
                success: sucCb,
                fail: failCb
            });
        });
        this.offChangeBtn.on(cc.Node.EventType.TOUCH_START, function () {
            qg.offGyroscopeChange(changeCb);
        });
        this.returnBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('device');
        });
    };
    Gyroscope.prototype.log = function (msg) {
        console.log(msg);
        this.logLabel.getComponent(cc.Label).string = msg;
    };
    __decorate([
        property(cc.Label)
    ], Gyroscope.prototype, "logLabel", void 0);
    __decorate([
        property(cc.Node)
    ], Gyroscope.prototype, "onChangeBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Gyroscope.prototype, "startBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Gyroscope.prototype, "stopBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Gyroscope.prototype, "offChangeBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Gyroscope.prototype, "returnBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Gyroscope.prototype, "xLable", void 0);
    __decorate([
        property(cc.Node)
    ], Gyroscope.prototype, "yLable", void 0);
    __decorate([
        property(cc.Node)
    ], Gyroscope.prototype, "zLable", void 0);
    __decorate([
        property(cc.Node)
    ], Gyroscope.prototype, "rollLable", void 0);
    __decorate([
        property(cc.Node)
    ], Gyroscope.prototype, "pitchLable", void 0);
    __decorate([
        property(cc.Node)
    ], Gyroscope.prototype, "yawLable", void 0);
    Gyroscope = __decorate([
        ccclass
    ], Gyroscope);
    return Gyroscope;
}(cc.Component));
exports.default = Gyroscope;

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
        //# sourceMappingURL=Gyroscope.js.map
        
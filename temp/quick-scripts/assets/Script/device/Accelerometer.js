(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/device/Accelerometer.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '8eeddmnsqNHD7Nx1U1KdiDy', 'Accelerometer', __filename);
// Script/device/Accelerometer.ts

/**
 * @desc: 加速计
 * @Create Date: 2019-09-30 17:34:32
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2020-06-22 16:34:52
 */
Object.defineProperty(exports, "__esModule", { value: true });
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
        _this.xLogLabel = null;
        _this.yLogLabel = null;
        _this.zLogLabel = null;
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
            qg.onAccelerometerChange(function (res) {
                var x = res.x, y = res.y, z = res.z;
                console.log(x, y, z);
                _this.xLogLabel.getComponent(cc.Label).string = x;
                _this.yLogLabel.getComponent(cc.Label).string = y;
                _this.zLogLabel.getComponent(cc.Label).string = z;
            });
        });
        this.startBtn.on(cc.Node.EventType.TOUCH_START, function () {
            qg.startAccelerometer({
                interval: "game",
                success: sucCb,
                fail: failCb
            });
        });
        this.stopBtn.on(cc.Node.EventType.TOUCH_START, function () {
            qg.stopAccelerometer({
                success: sucCb,
                fail: failCb
            });
        });
        this.offChangeBtn.on(cc.Node.EventType.TOUCH_START, function () {
            qg.offAccelerometerChange({
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
    ], Pay.prototype, "xLogLabel", void 0);
    __decorate([
        property(cc.Node)
    ], Pay.prototype, "yLogLabel", void 0);
    __decorate([
        property(cc.Node)
    ], Pay.prototype, "zLogLabel", void 0);
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
        //# sourceMappingURL=Accelerometer.js.map
        
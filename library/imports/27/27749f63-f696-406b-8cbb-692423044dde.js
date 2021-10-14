"use strict";
cc._RF.push(module, '277499j9pZAa4y7aSQjBE3e', 'Location');
// Script/location/Location.ts

/**
 * @desc: { 位置 }
 * @author: zhengyiqiu
 * @Create Date: 2020-06-30 19:59:48
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2020-07-06 16:18:27
 */
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Location = /** @class */ (function (_super) {
    __extends(Location, _super);
    function Location() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logLabel = null;
        _this.locationBtn = null;
        _this.latitude = null;
        _this.longitude = null;
        _this.speed = null;
        _this.accuracy = null;
        _this.altitude = null;
        _this.verticalAccuracy = null;
        _this.horizontalAccuracy = null;
        _this.returnBtn = null;
        return _this;
    }
    Location.prototype.start = function () {
        var _this = this;
        this.locationBtn.on(cc.Node.EventType.TOUCH_START, function () {
            qg.getLocation({
                // 在授权弹框点击允许时，回调成功
                type: 'wgs84',
                altitude: true,
                success: function (res) {
                    for (var key in res) {
                        _this[key].getComponent(cc.Label).string = res[key];
                    }
                },
                // 在授权弹框点击拒绝时，授权失败
                fail: function (res) {
                    // 点击拒绝时，会返回报错信息："authorization failed!"
                    _this.log(res);
                }
            });
        });
        this.returnBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('main');
        });
    };
    Location.prototype.log = function (msg) {
        console.log(msg);
        this.logLabel.getComponent(cc.Label).string = msg;
    };
    __decorate([
        property(cc.Label)
    ], Location.prototype, "logLabel", void 0);
    __decorate([
        property(cc.Node)
    ], Location.prototype, "locationBtn", void 0);
    __decorate([
        property(cc.Label)
    ], Location.prototype, "latitude", void 0);
    __decorate([
        property(cc.Label)
    ], Location.prototype, "longitude", void 0);
    __decorate([
        property(cc.Label)
    ], Location.prototype, "speed", void 0);
    __decorate([
        property(cc.Label)
    ], Location.prototype, "accuracy", void 0);
    __decorate([
        property(cc.Label)
    ], Location.prototype, "altitude", void 0);
    __decorate([
        property(cc.Label)
    ], Location.prototype, "verticalAccuracy", void 0);
    __decorate([
        property(cc.Label)
    ], Location.prototype, "horizontalAccuracy", void 0);
    __decorate([
        property(cc.Node)
    ], Location.prototype, "returnBtn", void 0);
    Location = __decorate([
        ccclass
    ], Location);
    return Location;
}(cc.Component));
exports.default = Location;

cc._RF.pop();
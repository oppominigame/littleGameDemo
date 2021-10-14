"use strict";
cc._RF.push(module, 'ec03alkyWFKj7nCND/tQYD3', 'AccessTips');
// Script/ad/AccessTips.ts

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @desc: 接入说明
 * @Create Date: 2019-08-26 11:42:34
 * @Last Modified time: 2019-08-26 11:43:31
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AccessTips = /** @class */ (function (_super) {
    __extends(AccessTips, _super);
    function AccessTips() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.returnBtn = null;
        _this.nativeAdTips = null;
        _this.rewardVideoAdTips = null;
        return _this;
    }
    AccessTips.prototype.start = function () {
        this.nativeAdTips.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('nativeAdTips');
        });
        this.rewardVideoAdTips.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('rewardVideoAdTips');
        });
    };
    AccessTips.prototype.onClickReturnBtn = function () {
        cc.director.loadScene('ad');
    };
    __decorate([
        property(cc.Button)
    ], AccessTips.prototype, "returnBtn", void 0);
    __decorate([
        property(cc.Node)
    ], AccessTips.prototype, "nativeAdTips", void 0);
    __decorate([
        property(cc.Node)
    ], AccessTips.prototype, "rewardVideoAdTips", void 0);
    AccessTips = __decorate([
        ccclass
    ], AccessTips);
    return AccessTips;
}(cc.Component));
exports.default = AccessTips;

cc._RF.pop();
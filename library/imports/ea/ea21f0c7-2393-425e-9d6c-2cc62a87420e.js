"use strict";
cc._RF.push(module, 'ea21fDHI5NCXp1sLMYqh0IO', 'RewardVideoAdTips');
// Script/ad/RewardVideoAdTips.ts

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @desc: 接入说明
 * @Create Date: 2019-08-26 11:42:34
 * @Last Modified time: 2019-08-26 11:43:31
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RewardVideoAdTips = /** @class */ (function (_super) {
    __extends(RewardVideoAdTips, _super);
    function RewardVideoAdTips() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.returnBtn = null;
        _this.noAdTips = null;
        return _this;
    }
    RewardVideoAdTips.prototype.start = function () {
        this.noAdTips.on(cc.Node.EventType.TOUCH_START, function () {
            qg.showModal({
                title: '提示',
                content: '暂时无广告',
                showCancel: false
            });
        });
    };
    RewardVideoAdTips.prototype.onClickReturnBtn = function () {
        cc.director.loadScene('accessTips');
    };
    __decorate([
        property(cc.Button)
    ], RewardVideoAdTips.prototype, "returnBtn", void 0);
    __decorate([
        property(cc.Node)
    ], RewardVideoAdTips.prototype, "noAdTips", void 0);
    RewardVideoAdTips = __decorate([
        ccclass
    ], RewardVideoAdTips);
    return RewardVideoAdTips;
}(cc.Component));
exports.default = RewardVideoAdTips;

cc._RF.pop();
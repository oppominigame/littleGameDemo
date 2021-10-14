"use strict";
cc._RF.push(module, '0f43662dAhCUbxoQQzRSliN', 'NativeAd');
// Script/ad/NativeAd.ts

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @desc: 原生广告
 * @Create Date: 2019-08-26 11:42:34
 * @Last Modified time: 2019-08-26 11:43:31
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NativeAd = /** @class */ (function (_super) {
    __extends(NativeAd, _super);
    function NativeAd() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.returnBtn = null;
        _this.smallNativeAdBtn = null;
        _this.bigNativeAdBtn = null;
        _this.mediumNativeAdBtn = null;
        _this.bannerNativeAdBtn = null;
        _this.iconNativeAdBtn = null;
        return _this;
    }
    NativeAd.prototype.start = function () {
        this.smallNativeAdBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('smallNativeAd');
        });
        this.bigNativeAdBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('bigNativeAd');
        });
        this.mediumNativeAdBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('mediumNativeAd');
        });
        this.bannerNativeAdBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('bannerNativeAd');
        });
        this.iconNativeAdBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('iconNativeAd');
        });
    };
    NativeAd.prototype.onClickReturnBtn = function () {
        cc.director.loadScene('ad');
    };
    __decorate([
        property(cc.Button)
    ], NativeAd.prototype, "returnBtn", void 0);
    __decorate([
        property(cc.Node)
    ], NativeAd.prototype, "smallNativeAdBtn", void 0);
    __decorate([
        property(cc.Node)
    ], NativeAd.prototype, "bigNativeAdBtn", void 0);
    __decorate([
        property(cc.Node)
    ], NativeAd.prototype, "mediumNativeAdBtn", void 0);
    __decorate([
        property(cc.Node)
    ], NativeAd.prototype, "bannerNativeAdBtn", void 0);
    __decorate([
        property(cc.Node)
    ], NativeAd.prototype, "iconNativeAdBtn", void 0);
    NativeAd = __decorate([
        ccclass
    ], NativeAd);
    return NativeAd;
}(cc.Component));
exports.default = NativeAd;

cc._RF.pop();
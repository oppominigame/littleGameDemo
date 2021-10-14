(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/ad/Ad.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '78c36exZglAs584F81CsYt8', 'Ad', __filename);
// Script/ad/Ad.ts

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
 * @desc: 广告
 * @Create Date: 2019-08-29 16:05:02
 * @Last Modified time: 2019-08-29 16:05:02
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Ad = /** @class */ (function (_super) {
    __extends(Ad, _super);
    function Ad() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.returnBtn = null;
        _this.bannerAd = null;
        _this.rewardVideoAd = null;
        _this.insertAd = null;
        _this.nativeAd = null;
        _this.bannerBoxAd = null;
        _this.portalBoxAd = null;
        _this.accessTips = null;
        _this.nativeTemplateAd = null;
        return _this;
    }
    Ad.prototype.start = function () {
        // 跳转到 Banner 广告
        this.bannerAd.on(cc.Node.EventType.TOUCH_START, function (event) {
            cc.director.loadScene("bannerAd");
        });
        // 跳转到 激励视频 广告
        this.rewardVideoAd.on(cc.Node.EventType.TOUCH_START, function (event) {
            cc.director.loadScene("rewardVideoAd");
        });
        // 跳转到 插屏 广告
        this.insertAd.on(cc.Node.EventType.TOUCH_START, function (event) {
            cc.director.loadScene("insertAd");
        });
        // 跳转到 原生 广告
        this.nativeAd.on(cc.Node.EventType.TOUCH_START, function (event) {
            cc.director.loadScene("nativeAd");
        });
        // 跳转到 互推盒子横幅 广告
        this.bannerBoxAd.on(cc.Node.EventType.TOUCH_START, function (event) {
            cc.director.loadScene("bannerBoxAd");
        });
        // 跳转到 互推盒子九宫格 广告
        this.portalBoxAd.on(cc.Node.EventType.TOUCH_START, function (event) {
            cc.director.loadScene("portalBoxAd");
        });
        // 跳转到 接入説明
        this.accessTips.on(cc.Node.EventType.TOUCH_START, function (event) {
            cc.director.loadScene("accessTips");
        });
        // 跳转到 原生模版广告
        this.nativeTemplateAd.on(cc.Node.EventType.TOUCH_START, function (event) {
            cc.director.loadScene("nativeTemplateAd");
        });
    };
    Ad.prototype.onClickReturnBtn = function () {
        cc.director.loadScene("main");
    };
    __decorate([
        property(cc.Button)
    ], Ad.prototype, "returnBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Ad.prototype, "bannerAd", void 0);
    __decorate([
        property(cc.Node)
    ], Ad.prototype, "rewardVideoAd", void 0);
    __decorate([
        property(cc.Node)
    ], Ad.prototype, "insertAd", void 0);
    __decorate([
        property(cc.Node)
    ], Ad.prototype, "nativeAd", void 0);
    __decorate([
        property(cc.Node)
    ], Ad.prototype, "bannerBoxAd", void 0);
    __decorate([
        property(cc.Node)
    ], Ad.prototype, "portalBoxAd", void 0);
    __decorate([
        property(cc.Node)
    ], Ad.prototype, "accessTips", void 0);
    __decorate([
        property(cc.Node)
    ], Ad.prototype, "nativeTemplateAd", void 0);
    Ad = __decorate([
        ccclass
    ], Ad);
    return Ad;
}(cc.Component));
exports.default = Ad;

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
        //# sourceMappingURL=Ad.js.map
        
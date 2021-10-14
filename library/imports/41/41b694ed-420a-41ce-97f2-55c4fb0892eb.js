"use strict";
cc._RF.push(module, '41b69TtQgpBzpfyVcT7CJLr', 'RewardVideoAd');
// Script/ad/RewardVideoAd.ts

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
 * @desc: 激励视频广告
 * @Create Date: 2019-08-29 16:05:14
 * @Last Modified time: 2019-08-29 16:05:14
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RewardVideoAd = /** @class */ (function (_super) {
    __extends(RewardVideoAd, _super);
    function RewardVideoAd() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.returnBtn = null;
        _this.createBtn = null;
        _this.loadBtn = null;
        _this.showBtn = null;
        _this.onLoadBtn = null;
        _this.offLoadBtn = null;
        _this.onErrorBtn = null;
        _this.offErrorBtn = null;
        _this.destroyBtn = null;
        _this.onCloseBtn = null;
        _this.offCloseBtn = null;
        _this.logLabel = null;
        _this.rewardVideoAd = null;
        _this.adUnitId = null;
        return _this;
    }
    RewardVideoAd.prototype.start = function () {
        var _this = this;
        this.adUnitId.string = '199392';
        this.createBtn.on(cc.Node.EventType.TOUCH_START, function () {
            _this.rewardVideoAd = qg.createRewardedVideoAd({
                // 以下所有激励广告 API 需支持最低平台版本号'1051' (minPlatformVersion>='1051')
                adUnitId: _this.adUnitId.string + ''
            });
            _this.log("\u521B\u5EFA\u6FC0\u52B1\u89C6\u9891\u5E7F\u544A, " + _this.adUnitId.string);
        });
        this.loadBtn.on(cc.Node.EventType.TOUCH_START, function () {
            _this.log('加载广告');
            _this.rewardVideoAd
                .load()
                .then(function () {
                console.log('promise 回调：加载成功');
            })
                .catch(function (err) {
                console.log("promise \u56DE\u8C03\uFF1A\u52A0\u8F7D\u5931\u8D25 " + JSON.stringify(err));
            });
        });
        this.showBtn.on(cc.Node.EventType.TOUCH_START, function () {
            _this.log('展示广告');
            // 调用 show 方法请求展示 banner，成功的时候回调 onShow，出错的时候回调 onError
            _this.rewardVideoAd
                .show()
                .then(function () {
                console.log('promise 回调：展示成功');
            })
                .catch(function (err) {
                console.log("promise \u56DE\u8C03\uFF1A\u5C55\u793A\u5931\u8D25 " + JSON.stringify(err));
            });
        });
        this.destroyBtn.on(cc.Node.EventType.TOUCH_START, function () {
            _this.log('销毁广告');
            _this.rewardVideoAd.destroy();
        });
        var onLoadCallBack = function () {
            _this.log('加载广告成功回调');
        };
        this.onLoadBtn.on(cc.Node.EventType.TOUCH_END, function () {
            _this.log('设置广告加载回调');
            // 设置 banner 成功加载回调
            _this.rewardVideoAd.onLoad(onLoadCallBack);
        });
        this.offLoadBtn.on(cc.Node.EventType.TOUCH_END, function () {
            _this.log('移除广告加载回调');
            // 设置 banner 成功加载回调
            _this.rewardVideoAd.offLoad(onLoadCallBack);
        });
        var onErrorCallback = function (err) {
            _this.log("\u5E7F\u544A\u5931\u8D25\u56DE\u8C03\uFF1A " + JSON.stringify(err));
        };
        this.onErrorBtn.on(cc.Node.EventType.TOUCH_END, function () {
            _this.log('设置广告失败回调');
            // 设置 banner 成功加载回调
            _this.rewardVideoAd.onError(onErrorCallback);
        });
        this.offErrorBtn.on(cc.Node.EventType.TOUCH_END, function () {
            _this.log('移除广告失败回调');
            // 设置 banner 成功加载回调
            _this.rewardVideoAd.offError(onErrorCallback);
        });
        var onCloseCallback = function (res) {
            if (res.isEnded) {
                _this.log('激励视频广告完成，发放奖励');
            }
            else {
                _this.log('激励视频广告取消关闭，不发放奖励');
            }
        };
        this.onCloseBtn.on(cc.Node.EventType.TOUCH_END, function () {
            _this.log('设置广告关闭回调');
            _this.rewardVideoAd.onClose(onCloseCallback);
        });
        this.offCloseBtn.on(cc.Node.EventType.TOUCH_END, function () {
            _this.log('移除广告关闭回调');
            // 设置 banner 成功加载回调
            _this.rewardVideoAd.offClose(onCloseCallback);
        });
    };
    // 回调信息展示
    RewardVideoAd.prototype.log = function (msg) {
        console.log(msg);
        this.logLabel.getComponent(cc.Label).string = msg;
    };
    // 返回
    RewardVideoAd.prototype.onClickReturnBtn = function () {
        cc.director.loadScene('ad');
    };
    RewardVideoAd.prototype.onDestroy = function () {
        if (!this.rewardVideoAd)
            return;
        this.rewardVideoAd.destroy(); // 销毁组件，释放资源
    };
    __decorate([
        property(cc.Button)
    ], RewardVideoAd.prototype, "returnBtn", void 0);
    __decorate([
        property(cc.Node)
    ], RewardVideoAd.prototype, "createBtn", void 0);
    __decorate([
        property(cc.Node)
    ], RewardVideoAd.prototype, "loadBtn", void 0);
    __decorate([
        property(cc.Node)
    ], RewardVideoAd.prototype, "showBtn", void 0);
    __decorate([
        property(cc.Node)
    ], RewardVideoAd.prototype, "onLoadBtn", void 0);
    __decorate([
        property(cc.Node)
    ], RewardVideoAd.prototype, "offLoadBtn", void 0);
    __decorate([
        property(cc.Node)
    ], RewardVideoAd.prototype, "onErrorBtn", void 0);
    __decorate([
        property(cc.Node)
    ], RewardVideoAd.prototype, "offErrorBtn", void 0);
    __decorate([
        property(cc.Node)
    ], RewardVideoAd.prototype, "destroyBtn", void 0);
    __decorate([
        property(cc.Node)
    ], RewardVideoAd.prototype, "onCloseBtn", void 0);
    __decorate([
        property(cc.Node)
    ], RewardVideoAd.prototype, "offCloseBtn", void 0);
    __decorate([
        property(cc.Node)
    ], RewardVideoAd.prototype, "logLabel", void 0);
    __decorate([
        property(cc.Object)
    ], RewardVideoAd.prototype, "rewardVideoAd", void 0);
    __decorate([
        property(cc.EditBox)
    ], RewardVideoAd.prototype, "adUnitId", void 0);
    RewardVideoAd = __decorate([
        ccclass
    ], RewardVideoAd);
    return RewardVideoAd;
}(cc.Component));
exports.default = RewardVideoAd;

cc._RF.pop();
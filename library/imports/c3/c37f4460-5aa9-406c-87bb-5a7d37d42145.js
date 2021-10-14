"use strict";
cc._RF.push(module, 'c37f4RgWqlAbIe7Wn031CFF', 'interstitialVideo');
// Script/ad/interstitialVideo.ts

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @desc:插屏视频广告
 * @Create Date: 2019-08-29 16:05:14
 * @Last Modified time: 2019-08-29 16:05:14
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var InterstitialVideo = /** @class */ (function (_super) {
    __extends(InterstitialVideo, _super);
    function InterstitialVideo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.returnBtn = null;
        _this.createBtn = null;
        _this.loadBtn = null;
        _this.showBtn = null;
        _this.onLoadBtn = null;
        _this.offLoadBtn = null;
        _this.onShowBtn = null;
        _this.offShowBtn = null;
        _this.onErrorBtn = null;
        _this.offErrorBtn = null;
        _this.destroyBtn = null;
        _this.onCloseBtn = null;
        _this.offCloseBtn = null;
        _this.logLabel = null;
        _this.interstitialVideo = null;
        return _this;
    }
    InterstitialVideo.prototype.start = function () {
        var _this = this;
        this.createBtn.on(cc.Node.EventType.TOUCH_START, function () {
            _this.interstitialVideo = qg.createInterstitialVideoAd({
                // 以下所有激励广告 API 需支持最低平台版本号'1051' (minPlatformVersion>='1051')
                adUnitId: '143906'
            });
            _this.log("\u521B\u5EFA\u63D2\u5C4F\u89C6\u9891\u5E7F\u544A, 143906");
        });
        this.loadBtn.on(cc.Node.EventType.TOUCH_START, function () {
            _this.log('加载广告');
            _this.interstitialVideo.load();
        });
        this.showBtn.on(cc.Node.EventType.TOUCH_START, function () {
            _this.log('展示广告');
            // 调用 show 方法请求展示 banner，成功的时候回调 onShow，出错的时候回调 onError
            _this.interstitialVideo.show();
        });
        this.destroyBtn.on(cc.Node.EventType.TOUCH_START, function () {
            _this.log('销毁广告');
            _this.interstitialVideo.destroy();
        });
        var onLoadCallBack = function () {
            _this.log('加载广告成功回调');
        };
        this.onLoadBtn.on(cc.Node.EventType.TOUCH_END, function () {
            _this.log('设置广告加载回调');
            // 设置 banner 成功加载回调
            _this.interstitialVideo.onLoad(onLoadCallBack);
        });
        this.offLoadBtn.on(cc.Node.EventType.TOUCH_END, function () {
            _this.log('移除广告加载回调');
            // 设置 banner 成功加载回调
            _this.interstitialVideo.offLoad(onLoadCallBack);
        });
        var onShowCallback = function () {
            _this.log('展示广告成功回调');
        };
        this.onShowBtn.on(cc.Node.EventType.TOUCH_END, function () {
            _this.log('设置广告展示回调');
            // 设置 banner 成功加载回调
            _this.interstitialVideo.onShow(onShowCallback);
        });
        this.offShowBtn.on(cc.Node.EventType.TOUCH_END, function () {
            _this.log('移除广告展示回调');
            // 设置 banner 成功加载回调
            _this.interstitialVideo.offShow(onShowCallback);
        });
        var onErrorCallback = function (err) {
            _this.log("\u5E7F\u544A\u5931\u8D25\u56DE\u8C03\uFF1A " + JSON.stringify(err));
        };
        this.onErrorBtn.on(cc.Node.EventType.TOUCH_END, function () {
            _this.log('设置广告失败回调');
            // 设置 banner 成功加载回调
            _this.interstitialVideo.onError(onErrorCallback);
        });
        this.offErrorBtn.on(cc.Node.EventType.TOUCH_END, function () {
            _this.log('移除广告失败回调');
            // 设置 banner 成功加载回调
            _this.interstitialVideo.offError(onErrorCallback);
        });
        var onCloseCallback = function () {
            _this.log('插屏视频广告关闭');
        };
        this.onCloseBtn.on(cc.Node.EventType.TOUCH_END, function () {
            _this.log('设置广告关闭回调');
            _this.interstitialVideo.onClose(onCloseCallback);
        });
        this.offCloseBtn.on(cc.Node.EventType.TOUCH_END, function () {
            _this.log('移除广告关闭回调');
            // 设置 banner 成功加载回调
            _this.interstitialVideo.offClose(onCloseCallback);
        });
    };
    // 回调信息展示
    InterstitialVideo.prototype.log = function (msg) {
        console.log(msg);
        this.logLabel.getComponent(cc.Label).string = msg;
    };
    // 返回
    InterstitialVideo.prototype.onClickReturnBtn = function () {
        cc.director.loadScene('ad');
    };
    InterstitialVideo.prototype.onDestroy = function () {
        if (!this.interstitialVideo)
            return;
        this.interstitialVideo.destroy(); // 销毁组件，释放资源
    };
    __decorate([
        property(cc.Button)
    ], InterstitialVideo.prototype, "returnBtn", void 0);
    __decorate([
        property(cc.Node)
    ], InterstitialVideo.prototype, "createBtn", void 0);
    __decorate([
        property(cc.Node)
    ], InterstitialVideo.prototype, "loadBtn", void 0);
    __decorate([
        property(cc.Node)
    ], InterstitialVideo.prototype, "showBtn", void 0);
    __decorate([
        property(cc.Node)
    ], InterstitialVideo.prototype, "onLoadBtn", void 0);
    __decorate([
        property(cc.Node)
    ], InterstitialVideo.prototype, "offLoadBtn", void 0);
    __decorate([
        property(cc.Node)
    ], InterstitialVideo.prototype, "onShowBtn", void 0);
    __decorate([
        property(cc.Node)
    ], InterstitialVideo.prototype, "offShowBtn", void 0);
    __decorate([
        property(cc.Node)
    ], InterstitialVideo.prototype, "onErrorBtn", void 0);
    __decorate([
        property(cc.Node)
    ], InterstitialVideo.prototype, "offErrorBtn", void 0);
    __decorate([
        property(cc.Node)
    ], InterstitialVideo.prototype, "destroyBtn", void 0);
    __decorate([
        property(cc.Node)
    ], InterstitialVideo.prototype, "onCloseBtn", void 0);
    __decorate([
        property(cc.Node)
    ], InterstitialVideo.prototype, "offCloseBtn", void 0);
    __decorate([
        property(cc.Node)
    ], InterstitialVideo.prototype, "logLabel", void 0);
    __decorate([
        property(cc.Object)
    ], InterstitialVideo.prototype, "interstitialVideo", void 0);
    InterstitialVideo = __decorate([
        ccclass
    ], InterstitialVideo);
    return InterstitialVideo;
}(cc.Component));
exports.default = InterstitialVideo;

cc._RF.pop();
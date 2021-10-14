"use strict";
cc._RF.push(module, '4014bYxBzpIYKzljVlmMyrz', 'InsertAd');
// Script/ad/InsertAd.ts

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @desc:插屏广告
 * @Create Date: 2019-08-29 16:05:14
 * @Last Modified time: 2019-08-29 16:05:14
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var InsertAd = /** @class */ (function (_super) {
    __extends(InsertAd, _super);
    function InsertAd() {
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
        _this.insertAd = null;
        return _this;
    }
    InsertAd.prototype.start = function () {
        var _this = this;
        this.createBtn.on(cc.Node.EventType.TOUCH_START, function () {
            _this.insertAd = qg.createInterstitialAd({
                // 以下所有激励广告 API 需支持最低平台版本号'1051' (minPlatformVersion>='1051')
                adUnitId: '114187'
            });
            _this.log("\u521B\u5EFA\u63D2\u5C4F\u5E7F\u544A, adUnitId\uFF1A114187");
        });
        this.loadBtn.on(cc.Node.EventType.TOUCH_START, function () {
            _this.log('加载广告');
            _this.insertAd
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
            _this.insertAd
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
            _this.insertAd.destroy();
        });
        var onLoadCallBack = function () {
            _this.log('加载广告成功回调');
        };
        this.onLoadBtn.on(cc.Node.EventType.TOUCH_END, function () {
            _this.log('设置广告加载回调');
            // 设置 banner 成功加载回调
            _this.insertAd.onLoad(onLoadCallBack);
        });
        this.offLoadBtn.on(cc.Node.EventType.TOUCH_END, function () {
            _this.log('移除广告加载回调');
            // 设置 banner 成功加载回调
            _this.insertAd.offLoad(onLoadCallBack);
        });
        var onErrorCallback = function (err) {
            _this.log("\u5E7F\u544A\u5931\u8D25\u56DE\u8C03\uFF1A " + JSON.stringify(err));
        };
        this.onErrorBtn.on(cc.Node.EventType.TOUCH_END, function () {
            _this.log('设置广告失败回调');
            // 设置 banner 成功加载回调
            _this.insertAd.onError(onErrorCallback);
        });
        this.offErrorBtn.on(cc.Node.EventType.TOUCH_END, function () {
            _this.log('移除广告失败回调');
            // 设置 banner 成功加载回调
            _this.insertAd.offError(onErrorCallback);
        });
        var onCloseCallback = function () {
            _this.log('插屏广告关闭');
        };
        this.onCloseBtn.on(cc.Node.EventType.TOUCH_END, function () {
            _this.log('设置广告关闭回调');
            _this.insertAd.onClose(onCloseCallback);
        });
        this.offCloseBtn.on(cc.Node.EventType.TOUCH_END, function () {
            _this.log('移除广告关闭回调');
            // 设置 banner 成功加载回调
            _this.insertAd.offClose(onCloseCallback);
        });
    };
    // 回调信息展示
    InsertAd.prototype.log = function (msg) {
        console.log(msg);
        this.logLabel.getComponent(cc.Label).string = msg;
    };
    // 返回
    InsertAd.prototype.onClickReturnBtn = function () {
        cc.director.loadScene('ad');
    };
    InsertAd.prototype.onDestroy = function () {
        if (!this.insertAd)
            return;
        this.insertAd.destroy(); // 销毁组件，释放资源
    };
    __decorate([
        property(cc.Button)
    ], InsertAd.prototype, "returnBtn", void 0);
    __decorate([
        property(cc.Node)
    ], InsertAd.prototype, "createBtn", void 0);
    __decorate([
        property(cc.Node)
    ], InsertAd.prototype, "loadBtn", void 0);
    __decorate([
        property(cc.Node)
    ], InsertAd.prototype, "showBtn", void 0);
    __decorate([
        property(cc.Node)
    ], InsertAd.prototype, "onLoadBtn", void 0);
    __decorate([
        property(cc.Node)
    ], InsertAd.prototype, "offLoadBtn", void 0);
    __decorate([
        property(cc.Node)
    ], InsertAd.prototype, "onErrorBtn", void 0);
    __decorate([
        property(cc.Node)
    ], InsertAd.prototype, "offErrorBtn", void 0);
    __decorate([
        property(cc.Node)
    ], InsertAd.prototype, "destroyBtn", void 0);
    __decorate([
        property(cc.Node)
    ], InsertAd.prototype, "onCloseBtn", void 0);
    __decorate([
        property(cc.Node)
    ], InsertAd.prototype, "offCloseBtn", void 0);
    __decorate([
        property(cc.Node)
    ], InsertAd.prototype, "logLabel", void 0);
    __decorate([
        property(cc.Object)
    ], InsertAd.prototype, "insertAd", void 0);
    InsertAd = __decorate([
        ccclass
    ], InsertAd);
    return InsertAd;
}(cc.Component));
exports.default = InsertAd;

cc._RF.pop();
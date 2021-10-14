(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/ad/BannerAd.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'c49e1b25iRM0rjf1TBtigXE', 'BannerAd', __filename);
// Script/ad/BannerAd.ts

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @desc: Bannner 广告
 * @Create Date: 2019-08-29 16:05:14
 * @Last Modified time: 2019-08-29 16:05:14
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BannerAd = /** @class */ (function (_super) {
    __extends(BannerAd, _super);
    function BannerAd() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.returnBtn = null;
        _this.createBtn = null;
        _this.showBtn = null;
        _this.hideBtn = null;
        _this.changeStyleBtn = null;
        _this.destroyBtn = null;
        _this.onLoadBtn = null;
        _this.offLoadBtn = null;
        _this.onErrorBtn = null;
        _this.offErrorBtn = null;
        _this.onResizeBtn = null;
        _this.offResizeBtn = null;
        _this.logLabel = null;
        _this.bannerAd = null;
        _this.widthInput = null;
        _this.heightInput = null;
        _this.topInput = null;
        _this.leftInput = null;
        _this.adUnitId = null;
        return _this;
    }
    BannerAd.prototype.start = function () {
        var _this = this;
        this.adUnitId.string = '199389';
        this.createBtn.on(cc.Node.EventType.TOUCH_START, function () {
            _this.bannerAd = qg.createBannerAd({
                // https://u.oppomobile.com/main/app.html 广告联盟网站中媒体管理 > 广告管理中广告名称下面的 id 即为 adUnitId
                adUnitId: _this.adUnitId.string + ''
            });
            _this.log("\u521B\u5EFA banner \u5E7F\u544A, adUnitId\uFF1A" + _this.adUnitId.string);
        });
        this.showBtn.on(cc.Node.EventType.TOUCH_START, function () {
            _this.log('展示广告');
            // 调用 show 方法请求展示 banner，成功的时候回调 onShow，出错的时候回调 onError
            _this.bannerAd
                .show()
                .then(function () {
                console.log('promise 回调：展示成功');
            })
                .catch(function (err) {
                console.log("promise \u56DE\u8C03\uFF1A\u5C55\u793A\u5931\u8D25 " + JSON.stringify(err));
            });
        });
        this.hideBtn.on(cc.Node.EventType.TOUCH_START, function () {
            _this.log('隐藏广告');
            // 隐藏 banner，成功回调 onHide, 出错的时候回调 onError
            _this.bannerAd.hide();
        });
        this.destroyBtn.on(cc.Node.EventType.TOUCH_START, function () {
            _this.log('销毁广告');
            _this.bannerAd.destroy();
        });
        var onLoadCallBack = function () {
            _this.log('加载广告成功回调');
        };
        this.onLoadBtn.on(cc.Node.EventType.TOUCH_END, function () {
            _this.log('设置广告加载回调');
            // 设置 banner 成功加载回调
            _this.bannerAd.onLoad(onLoadCallBack);
        });
        this.offLoadBtn.on(cc.Node.EventType.TOUCH_END, function () {
            _this.log('移除广告加载回调');
            // 设置 banner 成功加载回调
            _this.bannerAd.offLoad(onLoadCallBack);
        });
        var onErrorCallback = function (err) {
            _this.log("\u5E7F\u544A\u5931\u8D25\u56DE\u8C03\uFF1A " + JSON.stringify(err));
        };
        this.onErrorBtn.on(cc.Node.EventType.TOUCH_END, function () {
            _this.log('设置广告失败回调');
            // 设置 banner 成功加载回调
            _this.bannerAd.onError(onErrorCallback);
        });
        this.offErrorBtn.on(cc.Node.EventType.TOUCH_END, function () {
            _this.log('移除广告失败回调');
            // 设置 banner 成功加载回调
            _this.bannerAd.offError(onErrorCallback);
        });
        var onResizeCallback = function (obj) {
            _this.log('banner 宽度：' + obj.width + ', banner 高度：' + obj.height);
        };
        this.onResizeBtn.on(cc.Node.EventType.TOUCH_END, function () {
            _this.log('设置广告宽高变化回调');
            _this.bannerAd.onResize(onResizeCallback);
        });
        this.offResizeBtn.on(cc.Node.EventType.TOUCH_END, function () {
            _this.log('移除广告宽高变化回调');
            // 设置 banner 成功加载回调
            _this.bannerAd.offResize(onResizeCallback);
        });
        this.changeStyleBtn.on(cc.Node.EventType.TOUCH_START, function () {
            var width = parseInt(_this.widthInput.string.replace(/[^0-9]/gi, ''));
            var height = parseInt(_this.heightInput.string.replace(/[^0-9]/gi, ''));
            var top = parseInt(_this.topInput.string.replace(/[^0-9]/gi, ''));
            var left = parseInt(_this.leftInput.string.replace(/[^0-9]/gi, ''));
            _this.addStyle('width', width);
            _this.addStyle('height', height);
            _this.addStyle('top', top);
            _this.addStyle('left', left);
            _this.log("\u5E7F\u544A\u6837\u5F0F\uFF1A" + JSON.stringify(_this.bannerAd.style));
        });
    };
    // 回调信息展示
    BannerAd.prototype.log = function (msg) {
        console.log(msg);
        this.logLabel.getComponent(cc.Label).string = msg;
    };
    // 返回
    BannerAd.prototype.onClickReturnBtn = function () {
        cc.director.loadScene('ad');
    };
    BannerAd.prototype.addStyle = function (key, value) {
        if ((value !== 0 && !value) || value === '')
            return this.bannerAd.style;
        // 参数必须保证广告能够在屏幕完全展示，否则设置不生效
        this.bannerAd.style[key] = value;
        return this.bannerAd.style;
    };
    BannerAd.prototype.onDestroy = function () {
        if (!this.bannerAd)
            return;
        this.bannerAd.destroy(); // 销毁组件，释放资源
    };
    __decorate([
        property(cc.Button)
    ], BannerAd.prototype, "returnBtn", void 0);
    __decorate([
        property(cc.Node)
    ], BannerAd.prototype, "createBtn", void 0);
    __decorate([
        property(cc.Node)
    ], BannerAd.prototype, "showBtn", void 0);
    __decorate([
        property(cc.Node)
    ], BannerAd.prototype, "hideBtn", void 0);
    __decorate([
        property(cc.Node)
    ], BannerAd.prototype, "changeStyleBtn", void 0);
    __decorate([
        property(cc.Node)
    ], BannerAd.prototype, "destroyBtn", void 0);
    __decorate([
        property(cc.Node)
    ], BannerAd.prototype, "onLoadBtn", void 0);
    __decorate([
        property(cc.Node)
    ], BannerAd.prototype, "offLoadBtn", void 0);
    __decorate([
        property(cc.Node)
    ], BannerAd.prototype, "onErrorBtn", void 0);
    __decorate([
        property(cc.Node)
    ], BannerAd.prototype, "offErrorBtn", void 0);
    __decorate([
        property(cc.Node)
    ], BannerAd.prototype, "onResizeBtn", void 0);
    __decorate([
        property(cc.Node)
    ], BannerAd.prototype, "offResizeBtn", void 0);
    __decorate([
        property(cc.Node)
    ], BannerAd.prototype, "logLabel", void 0);
    __decorate([
        property(cc.Object)
    ], BannerAd.prototype, "bannerAd", void 0);
    __decorate([
        property(cc.EditBox)
    ], BannerAd.prototype, "widthInput", void 0);
    __decorate([
        property(cc.EditBox)
    ], BannerAd.prototype, "heightInput", void 0);
    __decorate([
        property(cc.EditBox)
    ], BannerAd.prototype, "topInput", void 0);
    __decorate([
        property(cc.EditBox)
    ], BannerAd.prototype, "leftInput", void 0);
    __decorate([
        property(cc.EditBox)
    ], BannerAd.prototype, "adUnitId", void 0);
    BannerAd = __decorate([
        ccclass
    ], BannerAd);
    return BannerAd;
}(cc.Component));
exports.default = BannerAd;

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
        //# sourceMappingURL=BannerAd.js.map
        
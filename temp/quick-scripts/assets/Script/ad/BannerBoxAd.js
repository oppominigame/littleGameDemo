(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/ad/BannerBoxAd.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'b9c9cRRrlBLLqy6MUWnQbNb', 'BannerBoxAd', __filename);
// Script/ad/BannerBoxAd.ts

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @desc: { 互推盒子横幅广告 }
 * @author: zhengyiqiu
 * @Create Date: 2020-08-18 17:15:23
 * @Last Modified by: 80261040
 * @Last Modified time: 2021-04-14 15:35:26
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
        // @property(cc.Node)
        // changeStyleBtn: cc.Node = null
        _this.destroyBtn = null;
        _this.onLoadBtn = null;
        _this.offLoadBtn = null;
        _this.onErrorBtn = null;
        _this.offErrorBtn = null;
        // @property(cc.Node)
        // onResizeBtn: cc.Node = null
        // @property(cc.Node)
        // offResizeBtn: cc.Node = null
        _this.logLabel = null;
        _this.bannerBoxAd = null;
        return _this;
    }
    // @property(cc.EditBox)
    // widthInput: cc.EditBox = null
    // @property(cc.EditBox)
    // heightInput: cc.EditBox = null
    // @property(cc.EditBox)
    // topInput: cc.EditBox = null
    // @property(cc.EditBox)
    // leftInput: cc.EditBox = null
    BannerAd.prototype.start = function () {
        var _this = this;
        if (!(qg.getSystemInfoSync().platformVersionCode >= 1076)) {
            qg.showModal({
                title: '提示',
                content: '快应用平台版本号低于1076，暂不支持互推盒子相关 API'
            });
            return;
        }
        this.createBtn.on(cc.Node.EventType.TOUCH_START, function () {
            _this.bannerBoxAd = qg.createGameBannerAd({
                // https://u.oppomobile.com/main/app.html 广告联盟网站中媒体管理 > 广告管理中广告名称下面的 id 即为 adUnitId
                adUnitId: '201139'
            });
            _this.log("\u521B\u5EFA\u4E92\u63A8\u76D2\u5B50\u6A2A\u5E45\u5E7F\u544A, adUnitId\uFF1A201139");
        });
        this.showBtn.on(cc.Node.EventType.TOUCH_START, function () {
            _this.log('展示广告');
            // 调用 show 方法请求展示 banner，成功的时候回调 onShow，出错的时候回调 onError
            _this.bannerBoxAd
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
            _this.bannerBoxAd.hide();
        });
        this.destroyBtn.on(cc.Node.EventType.TOUCH_START, function () {
            _this.log('销毁广告');
            _this.bannerBoxAd.destroy();
        });
        var onLoadCallBack = function () {
            _this.log('加载广告成功回调');
        };
        this.onLoadBtn.on(cc.Node.EventType.TOUCH_END, function () {
            _this.log('设置广告加载回调');
            // 设置 banner 成功加载回调
            _this.bannerBoxAd.onLoad(onLoadCallBack);
        });
        this.offLoadBtn.on(cc.Node.EventType.TOUCH_END, function () {
            _this.log('移除广告加载回调');
            // 设置 banner 成功加载回调
            _this.bannerBoxAd.offLoad(onLoadCallBack);
        });
        var onErrorCallback = function (err) {
            _this.log("\u5E7F\u544A\u5931\u8D25\u56DE\u8C03\uFF1A " + JSON.stringify(err));
        };
        this.onErrorBtn.on(cc.Node.EventType.TOUCH_END, function () {
            _this.log('设置广告失败回调');
            // 设置 banner 成功加载回调
            _this.bannerBoxAd.onError(onErrorCallback);
        });
        this.offErrorBtn.on(cc.Node.EventType.TOUCH_END, function () {
            _this.log('移除广告失败回调');
            // 设置 banner 成功加载回调
            _this.bannerBoxAd.offError(onErrorCallback);
        });
        // let onResizeCallback = obj => {
        //   this.log('banner 宽度：' + obj.width + ', banner 高度：' + obj.height)
        // }
        // this.onResizeBtn.on(cc.Node.EventType.TOUCH_END, () => {
        //   this.log('设置广告宽高变化回调')
        //   this.bannerBoxAd.onResize(onResizeCallback)
        // })
        // this.offResizeBtn.on(cc.Node.EventType.TOUCH_END, () => {
        //   this.log('移除广告宽高变化回调')
        //   // 设置 banner 成功加载回调
        //   this.bannerBoxAd.offResize(onResizeCallback)
        // })
        // this.changeStyleBtn.on(cc.Node.EventType.TOUCH_START, () => {
        //   let width = parseInt(this.widthInput.string.replace(/[^0-9]/gi, ''))
        //   let height = parseInt(this.heightInput.string.replace(/[^0-9]/gi, ''))
        //   let top = parseInt(this.topInput.string.replace(/[^0-9]/gi, ''))
        //   let left = parseInt(this.leftInput.string.replace(/[^0-9]/gi, ''))
        //   this.addStyle('width', width)
        //   this.addStyle('height', height)
        //   this.addStyle('top', top)
        //   this.addStyle('left', left)
        //   this.log(`广告样式：${JSON.stringify(this.bannerBoxAd.style)}`)
        // })
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
            return this.bannerBoxAd.style;
        // 参数必须保证广告能够在屏幕完全展示，否则设置不生效
        this.bannerBoxAd.style[key] = value;
        return this.bannerBoxAd.style;
    };
    BannerAd.prototype.onDestroy = function () {
        if (!this.bannerBoxAd)
            return;
        this.bannerBoxAd.destroy(); // 销毁组件，释放资源
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
    ], BannerAd.prototype, "logLabel", void 0);
    __decorate([
        property(cc.Object)
    ], BannerAd.prototype, "bannerBoxAd", void 0);
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
        //# sourceMappingURL=BannerBoxAd.js.map
        
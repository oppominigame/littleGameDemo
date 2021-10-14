(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/ad/PortalBoxAd.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'd8e68roVCND9a42tfoounIq', 'PortalBoxAd', __filename);
// Script/ad/PortalBoxAd.ts

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @desc:插屏广告
 * @Create Date: 2019-08-29 16:05:14
 * @Last Modified time: 2019-08-29 16:05:14
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PortalBoxAd = /** @class */ (function (_super) {
    __extends(PortalBoxAd, _super);
    function PortalBoxAd() {
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
        _this.portalBoxAd = null;
        return _this;
    }
    PortalBoxAd.prototype.start = function () {
        var _this = this;
        if (!(qg.getSystemInfoSync().platformVersionCode >= 1076)) {
            qg.showModal({
                title: '提示',
                content: '快应用平台版本号低于1076，暂不支持互推盒子相关 API'
            });
            return;
        }
        this.createBtn.on(cc.Node.EventType.TOUCH_START, function () {
            _this.portalBoxAd = qg.createGamePortalAd({
                // 以下所有激励广告 API 需支持最低平台版本号'1051' (minPlatformVersion>='1051')
                adUnitId: '201138'
            });
            _this.log("\u521B\u5EFA\u4E92\u63A8\u76D2\u5B50\u4E5D\u5BAB\u683C\u5E7F\u544A, adUnitId\uFF1A201138");
        });
        this.loadBtn.on(cc.Node.EventType.TOUCH_START, function () {
            _this.log('加载广告');
            _this.portalBoxAd
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
            _this.portalBoxAd
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
            _this.portalBoxAd.destroy();
        });
        var onLoadCallBack = function () {
            _this.log('加载广告成功回调');
        };
        this.onLoadBtn.on(cc.Node.EventType.TOUCH_END, function () {
            _this.log('设置广告加载回调');
            // 设置 banner 成功加载回调
            _this.portalBoxAd.onLoad(onLoadCallBack);
        });
        this.offLoadBtn.on(cc.Node.EventType.TOUCH_END, function () {
            _this.log('移除广告加载回调');
            // 设置 banner 成功加载回调
            _this.portalBoxAd.offLoad(onLoadCallBack);
        });
        var onErrorCallback = function (err) {
            _this.log("\u5E7F\u544A\u5931\u8D25\u56DE\u8C03\uFF1A " + JSON.stringify(err));
        };
        this.onErrorBtn.on(cc.Node.EventType.TOUCH_END, function () {
            _this.log('设置广告失败回调');
            // 设置 banner 成功加载回调
            _this.portalBoxAd.onError(onErrorCallback);
        });
        this.offErrorBtn.on(cc.Node.EventType.TOUCH_END, function () {
            _this.log('移除广告失败回调');
            // 设置 banner 成功加载回调
            _this.portalBoxAd.offError(onErrorCallback);
        });
        var onCloseCallback = function () {
            _this.log('互推盒子九宫格广告关闭');
        };
        this.onCloseBtn.on(cc.Node.EventType.TOUCH_END, function () {
            _this.log('设置广告关闭回调');
            _this.portalBoxAd.onClose(onCloseCallback);
        });
        this.offCloseBtn.on(cc.Node.EventType.TOUCH_END, function () {
            _this.log('移除广告关闭回调');
            // 设置 banner 成功加载回调
            _this.portalBoxAd.offClose(onCloseCallback);
        });
    };
    // 回调信息展示
    PortalBoxAd.prototype.log = function (msg) {
        console.log(msg);
        this.logLabel.getComponent(cc.Label).string = msg;
    };
    // 返回
    PortalBoxAd.prototype.onClickReturnBtn = function () {
        cc.director.loadScene('ad');
    };
    PortalBoxAd.prototype.onDestroy = function () {
        if (!this.portalBoxAd)
            return;
        this.portalBoxAd.destroy(); // 销毁组件，释放资源
    };
    __decorate([
        property(cc.Button)
    ], PortalBoxAd.prototype, "returnBtn", void 0);
    __decorate([
        property(cc.Node)
    ], PortalBoxAd.prototype, "createBtn", void 0);
    __decorate([
        property(cc.Node)
    ], PortalBoxAd.prototype, "loadBtn", void 0);
    __decorate([
        property(cc.Node)
    ], PortalBoxAd.prototype, "showBtn", void 0);
    __decorate([
        property(cc.Node)
    ], PortalBoxAd.prototype, "onLoadBtn", void 0);
    __decorate([
        property(cc.Node)
    ], PortalBoxAd.prototype, "offLoadBtn", void 0);
    __decorate([
        property(cc.Node)
    ], PortalBoxAd.prototype, "onErrorBtn", void 0);
    __decorate([
        property(cc.Node)
    ], PortalBoxAd.prototype, "offErrorBtn", void 0);
    __decorate([
        property(cc.Node)
    ], PortalBoxAd.prototype, "destroyBtn", void 0);
    __decorate([
        property(cc.Node)
    ], PortalBoxAd.prototype, "onCloseBtn", void 0);
    __decorate([
        property(cc.Node)
    ], PortalBoxAd.prototype, "offCloseBtn", void 0);
    __decorate([
        property(cc.Node)
    ], PortalBoxAd.prototype, "logLabel", void 0);
    __decorate([
        property(cc.Object)
    ], PortalBoxAd.prototype, "portalBoxAd", void 0);
    PortalBoxAd = __decorate([
        ccclass
    ], PortalBoxAd);
    return PortalBoxAd;
}(cc.Component));
exports.default = PortalBoxAd;

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
        //# sourceMappingURL=PortalBoxAd.js.map
        
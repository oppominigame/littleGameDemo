"use strict";
cc._RF.push(module, '98cf2NmmzpJmYwqwbdt7Ash', 'NativeTemplateAd');
// Script/ad/NativeTemplateAd.ts

"use strict";
/**
 * @desc: 原生模版 广告
 * @Create Date: 2019-08-29 16:05:14
 * @Last Modified time: 2019-08-29 16:05:14
 */
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var customAd = /** @class */ (function (_super) {
    __extends(customAd, _super);
    function customAd() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.returnBtn = null;
        _this.createBtn = null;
        _this.showBtn = null;
        _this.hideBtn = null;
        _this.destroyBtn = null;
        _this.onLoadBtn = null;
        _this.offLoadBtn = null;
        _this.onErrorBtn = null;
        _this.offErrorBtn = null;
        _this.onShowBtn = null;
        _this.offShowBtn = null;
        _this.onHideBtn = null;
        _this.offHideBtn = null;
        _this.logLabel = null;
        _this.customAd = null;
        _this.widthInput = null;
        _this.topInput = null;
        _this.leftInput = null;
        _this.adUnitId = null;
        return _this;
    }
    customAd.prototype.onTemplateToggle = function (res) {
        // 切换原生模版广告的adUnitAd，上文下图：'399676'，左文右图：’400007‘，三图模版：‘400008’
        this.adUnitId.string = res.node.name;
    };
    customAd.prototype.start = function () {
        var _this = this;
        this.adUnitId.string = '399676';
        this.createBtn.on(cc.Node.EventType.TOUCH_START, function () {
            _this.customAd = qg.createCustomAd({
                // https://u.oppomobile.com/main/app.html 广告联盟网站中媒体管理 > 广告管理中广告名称下面的 id 即为 adUnitId
                adUnitId: _this.adUnitId.string + ''
            });
            _this.log("\u521B\u5EFA \u539F\u751F\u6A21\u7248 \u5E7F\u544A, adUnitId\uFF1A" + _this.adUnitId.string);
        });
        this.showBtn.on(cc.Node.EventType.TOUCH_START, function () {
            _this.log('展示广告');
            // 调用 show 方法请求展示 原生模版广告，成功的时候回调 onShow，出错的时候回调 onError
            _this.customAd
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
            // 隐藏 原生模版广告，成功回调 onHide, 出错的时候回调 onError
            _this.customAd.hide();
        });
        this.destroyBtn.on(cc.Node.EventType.TOUCH_START, function () {
            _this.log('销毁广告');
            _this.customAd.destroy();
        });
        var onLoadCallBack = function () {
            _this.log('加载广告成功回调');
        };
        this.onLoadBtn.on(cc.Node.EventType.TOUCH_END, function () {
            _this.log('设置广告加载回调');
            // 设置 原生模版广告 成功加载回调
            _this.customAd.onLoad(onLoadCallBack);
        });
        this.offLoadBtn.on(cc.Node.EventType.TOUCH_END, function () {
            _this.log('移除广告加载回调');
            // 设置 原生模版广告 成功加载回调
            _this.customAd.offLoad(onLoadCallBack);
        });
        var onErrorCallback = function (err) {
            _this.log("\u5E7F\u544A\u5931\u8D25\u56DE\u8C03\uFF1A " + JSON.stringify(err));
        };
        this.onErrorBtn.on(cc.Node.EventType.TOUCH_END, function () {
            _this.log('设置广告失败回调');
            // 设置 原生模版广告 成功加载回调
            _this.customAd.onError(onErrorCallback);
        });
        this.offErrorBtn.on(cc.Node.EventType.TOUCH_END, function () {
            _this.log('移除广告失败回调');
            // 设置 原生模版广告 成功加载回调
            _this.customAd.offError(onErrorCallback);
        });
        var onHideCallback = function (err) {
            _this.log("\u5E7F\u544A\u5931\u8D25\u56DE\u8C03\uFF1A " + JSON.stringify(err));
        };
        this.onHideBtn.on(cc.Node.EventType.TOUCH_END, function () {
            _this.log('设置广告隐藏回调');
            // 设置 原生模版广告 成功加载回调
            _this.customAd.onHide(onHideCallback);
        });
        this.offHideBtn.on(cc.Node.EventType.TOUCH_END, function () {
            _this.log('移除广告隐藏回调');
            // 设置 原生模版广告 成功加载回调
            _this.customAd.offHide(onHideCallback);
        });
        var onShowCallback = function (obj) {
            _this.log('设置广告展示回调：' + '原生模版广告 宽度：' + obj.width + ', 原生模版广告 高度：' + obj.height);
        };
        this.onShowBtn.on(cc.Node.EventType.TOUCH_END, function () {
            _this.log('设置广告宽高变化回调');
            _this.customAd.onShow(onShowCallback);
        });
        this.offShowBtn.on(cc.Node.EventType.TOUCH_END, function () {
            _this.log('移除广告宽高变化回调');
            _this.customAd.offShow(onShowCallback);
        });
        // this.changeStyleBtn.on(cc.Node.EventType.TOUCH_START, () => {
        //   let width = parseInt(this.widthInput.string.replace(/[^0-9]/gi, ''))
        //   let height = parseInt(this.heightInput.string.replace(/[^0-9]/gi, ''))
        //   let top = parseInt(this.topInput.string.replace(/[^0-9]/gi, ''))
        //   let left = parseInt(this.leftInput.string.replace(/[^0-9]/gi, ''))
        //   this.addStyle('width', width)
        //   this.addStyle('height', height)
        //   this.addStyle('top', top)
        //   this.addStyle('left', left)
        //   this.log(`广告样式：${JSON.stringify(this.customAd.style)}`)
        // })
    };
    // 回调信息展示
    customAd.prototype.log = function (msg) {
        console.log(msg);
        this.logLabel.getComponent(cc.Label).string = msg;
    };
    // 返回
    customAd.prototype.onClickReturnBtn = function () {
        cc.director.loadScene('ad');
    };
    // addStyle(key, value) {
    //   if ((value !== 0 && !value) || value === '') return this.customAd.style
    //   // 参数必须保证广告能够在屏幕完全展示，否则设置不生效
    //   this.customAd.style[key] = value
    //   return this.customAd.style
    // }
    customAd.prototype.onDestroy = function () {
        if (!this.customAd)
            return;
        this.customAd.destroy(); // 销毁组件，释放资源
    };
    __decorate([
        property(cc.Button)
    ], customAd.prototype, "returnBtn", void 0);
    __decorate([
        property(cc.Node)
    ], customAd.prototype, "createBtn", void 0);
    __decorate([
        property(cc.Node)
    ], customAd.prototype, "showBtn", void 0);
    __decorate([
        property(cc.Node)
    ], customAd.prototype, "hideBtn", void 0);
    __decorate([
        property(cc.Node)
    ], customAd.prototype, "destroyBtn", void 0);
    __decorate([
        property(cc.Node)
    ], customAd.prototype, "onLoadBtn", void 0);
    __decorate([
        property(cc.Node)
    ], customAd.prototype, "offLoadBtn", void 0);
    __decorate([
        property(cc.Node)
    ], customAd.prototype, "onErrorBtn", void 0);
    __decorate([
        property(cc.Node)
    ], customAd.prototype, "offErrorBtn", void 0);
    __decorate([
        property(cc.Node)
    ], customAd.prototype, "onShowBtn", void 0);
    __decorate([
        property(cc.Node)
    ], customAd.prototype, "offShowBtn", void 0);
    __decorate([
        property(cc.Node)
    ], customAd.prototype, "onHideBtn", void 0);
    __decorate([
        property(cc.Node)
    ], customAd.prototype, "offHideBtn", void 0);
    __decorate([
        property(cc.Node)
    ], customAd.prototype, "logLabel", void 0);
    __decorate([
        property(cc.Object)
    ], customAd.prototype, "customAd", void 0);
    __decorate([
        property(cc.EditBox)
    ], customAd.prototype, "widthInput", void 0);
    __decorate([
        property(cc.EditBox)
    ], customAd.prototype, "topInput", void 0);
    __decorate([
        property(cc.EditBox)
    ], customAd.prototype, "leftInput", void 0);
    __decorate([
        property(cc.EditBox)
    ], customAd.prototype, "adUnitId", void 0);
    customAd = __decorate([
        ccclass
    ], customAd);
    return customAd;
}(cc.Component));
exports.default = customAd;

cc._RF.pop();
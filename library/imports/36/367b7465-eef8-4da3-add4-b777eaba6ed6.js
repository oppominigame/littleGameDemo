"use strict";
cc._RF.push(module, '367b7Rl7vhNo63Ut3fqum7W', 'BigNativeAd');
// Script/ad/BigNativeAd.ts

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @desc: 640 x 320 原生广告
 * @Create Date: 2019-08-29 16:22:12
 * @Last Modified time: 2019-08-29 16:22:12
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BigNativeAd = /** @class */ (function (_super) {
    __extends(BigNativeAd, _super);
    function BigNativeAd() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.returnBtn = null;
        _this.showBtn = null;
        _this.loadBtn = null;
        _this.destroyBtn = null;
        _this.logLabel = null;
        _this.nativeAd = null;
        _this.adLayout = null;
        _this.adData = null;
        return _this;
    }
    BigNativeAd.prototype.start = function () {
        var _this = this;
        this.adLayout.active = false;
        this.nativeAd = qg.createNativeAd({
            // https://u.oppomobile.com/main/app.html 广告联盟网站中媒体管理 > 广告管理中广告名称下面的 id 即为 adUnitId
            adUnitId: '199390'
        });
        // 以下所有小游戏 API 需支持最低小游戏平台版本号'1031' (minPlatformVersion>='1031')
        this.loadBtn.on(cc.Node.EventType.TOUCH_START, function () {
            _this.log('加载原生广告');
            _this.adData = null;
            // 手动拉取广告，成功回调 onLoad，失败回调 onError
            _this.nativeAd
                .load()
                .then(function () {
                console.log('promise 回调：加载成功');
            })
                .catch(function (err) {
                console.log("promise \u56DE\u8C03\uFF1A\u52A0\u8F7D\u5931\u8D25 " + JSON.stringify(err));
            });
        });
        this.showBtn.on(cc.Node.EventType.TOUCH_START, function () {
            _this.log('展示原生广告');
            // 调用 load 方法请求展示 banner，成功的时候回调 onShow，出错的时候回调 onError
            _this.showAd();
        });
        this.destroyBtn.on(cc.Node.EventType.TOUCH_START, function () {
            _this.log('销毁原生广告');
            // 销毁组件，释放资源
            _this.nativeAd.destroy();
            // 销毁广告组件之后无法再加载、展示广告。得重新新建
            _this.showBtn.active = false;
            _this.loadBtn.active = false;
        });
        // 设置原生广告加载成功回调
        this.nativeAd.onLoad(function (res) {
            _this.log("\u52A0\u8F7D\u539F\u751F\u5E7F\u544A\u6210\u529F", "\uFF1A" + JSON.stringify(res));
            res.adList && res.adList.length > 0 && (_this.adData = res.adList[0]);
        });
        // 设置原生广告出错回调
        this.nativeAd.onError(function (err) {
            _this.log("\u8BBE\u7F6E\u539F\u751F\u5E7F\u544A\u51FA\u9519\uFF1A" + JSON.stringify(err));
        });
    };
    // 回调信息展示
    BigNativeAd.prototype.log = function (msg, detail) {
        if (detail === void 0) { detail = ''; }
        console.log(msg + detail);
        this.logLabel.getComponent(cc.Label).string = msg;
    };
    BigNativeAd.prototype.showAd = function () {
        var _this = this;
        if (!this.adData)
            return;
        this.adLayout.active = true;
        var adImg = void 0, adDesc = void 0, adLogo = void 0, adClose = void 0, adTitle = void 0, adAction = void 0;
        var containLayout = this.adLayout.getChildByName('containLayout');
        adImg = containLayout.getChildByName('adImg');
        adDesc = containLayout.getChildByName('adDesc');
        adLogo = containLayout.getChildByName('adLogo');
        adClose = containLayout.getChildByName('adClose');
        var actionLayout = this.adLayout.getChildByName('actionLayout');
        adAction = actionLayout.getChildByName('adAction');
        adTitle = actionLayout.getChildByName('adTitle');
        // 加载广告图片
        adImg.active = false;
        this.adData.imgUrlList &&
            this.adData.imgUrlList.length > 0 &&
            cc.loader.load(this.adData.imgUrlList[0], function (err, texture) {
                adImg.active = true;
                adImg.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
            });
        // 加载广告 logo
        adLogo.active = false;
        this.adData.logoUrl &&
            cc.loader.load(this.adData.logoUrl, function (err, texture) {
                adLogo.active = true;
                adLogo.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
            });
        adTitle.getComponent(cc.Label).string = this.adData.title;
        adDesc.getComponent(cc.Label).string = this.adData.desc;
        adAction
            .getChildByName('Background')
            .getChildByName('clickBtnTxt')
            .getComponent(cc.Label).string = this.adData.clickBtnTxt;
        adClose.on(cc.Node.EventType.TOUCH_START, function () {
            _this.adLayout.active = false;
        });
        adAction.on(cc.Node.EventType.TOUCH_START, function () {
            // 点击广告按钮下载
            _this.nativeAd.reportAdClick({
                adId: _this.adData.adId
            });
        });
        this.nativeAd.reportAdShow({
            adId: this.adData.adId
        });
    };
    // 返回
    BigNativeAd.prototype.onClickReturnBtn = function () {
        cc.director.loadScene('nativeAd');
    };
    BigNativeAd.prototype.onDestroy = function () {
        if (!this.nativeAd)
            return;
        this.nativeAd.offLoad(); // 移除原生广告加载成功回调
        this.nativeAd.offError(); // 移除失败回调
        this.nativeAd.destroy(); // 隐藏 banner，成功回调 onHide, 出错的时候回调 onError
        console.log('640 x 320 原生广告销毁');
    };
    __decorate([
        property(cc.Button)
    ], BigNativeAd.prototype, "returnBtn", void 0);
    __decorate([
        property(cc.Node)
    ], BigNativeAd.prototype, "showBtn", void 0);
    __decorate([
        property(cc.Node)
    ], BigNativeAd.prototype, "loadBtn", void 0);
    __decorate([
        property(cc.Node)
    ], BigNativeAd.prototype, "destroyBtn", void 0);
    __decorate([
        property(cc.Node)
    ], BigNativeAd.prototype, "logLabel", void 0);
    __decorate([
        property(cc.Object)
    ], BigNativeAd.prototype, "nativeAd", void 0);
    __decorate([
        property(cc.Node)
    ], BigNativeAd.prototype, "adLayout", void 0);
    __decorate([
        property(cc.Object)
    ], BigNativeAd.prototype, "adData", void 0);
    BigNativeAd = __decorate([
        ccclass
    ], BigNativeAd);
    return BigNativeAd;
}(cc.Component));
exports.default = BigNativeAd;

cc._RF.pop();
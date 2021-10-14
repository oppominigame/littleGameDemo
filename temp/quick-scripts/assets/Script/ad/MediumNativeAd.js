(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/ad/MediumNativeAd.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '6d1e0lHQKRPyb1+P7K7D+rZ', 'MediumNativeAd', __filename);
// Script/ad/MediumNativeAd.ts

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @desc: 640 x 320 原生广告
 * @Create Date: 2019-08-29 16:22:12
 * @Last Modified time: 2019-08-29 16:22:12
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MediumNativeAd = /** @class */ (function (_super) {
    __extends(MediumNativeAd, _super);
    function MediumNativeAd() {
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
    MediumNativeAd.prototype.start = function () {
        var _this = this;
        this.adLayout.active = false;
        this.nativeAd = qg.createNativeAd({
            // https://u.oppomobile.com/main/app.html 广告联盟网站中媒体管理 > 广告管理中广告名称下面的 id 即为 adUnitId
            adUnitId: '283061'
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
            _this.log('展示原生广告', JSON.stringify(_this.adData));
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
    MediumNativeAd.prototype.log = function (msg, detail) {
        if (detail === void 0) { detail = ''; }
        console.log(msg + detail);
        this.logLabel.getComponent(cc.Label).string = msg;
    };
    MediumNativeAd.prototype.loadImg = function (tex, node) {
        cc.loader.load(tex, function (err, texture) {
            node.active = true;
            node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
        });
    };
    MediumNativeAd.prototype.showAd = function () {
        var _this = this;
        if (!this.adData)
            return;
        this.adLayout.active = true;
        var adImg1 = void 0, adImg2 = void 0, adImg3 = void 0, adDesc = void 0, adLogo1 = void 0, adLogo2 = void 0, adLogo3 = void 0, adClose = void 0, adTitle = void 0, adAction = void 0;
        var containLayout = this.adLayout.getChildByName('containLayout');
        adImg1 = containLayout.getChildByName('adImg1');
        adImg2 = containLayout.getChildByName('adImg2');
        adImg3 = containLayout.getChildByName('adImg3');
        adDesc = containLayout.getChildByName('adDesc');
        adLogo1 = containLayout.getChildByName('adLogo1');
        adLogo2 = containLayout.getChildByName('adLogo2');
        adLogo3 = containLayout.getChildByName('adLogo3');
        adClose = containLayout.getChildByName('adClose');
        var actionLayout = this.adLayout.getChildByName('actionLayout');
        adAction = actionLayout.getChildByName('adAction');
        adTitle = actionLayout.getChildByName('adTitle');
        // 加载广告图片
        adImg1.active = false;
        adImg2.active = false;
        adImg3.active = false;
        if (this.adData.imgUrlList &&
            this.adData.imgUrlList.length > 0) {
            this.loadImg(this.adData.imgUrlList[0], adImg1);
            this.loadImg(this.adData.imgUrlList[1], adImg2);
            this.loadImg(this.adData.imgUrlList[2], adImg3);
        }
        // 加载广告 logo
        adLogo1.active = false;
        adLogo2.active = false;
        adLogo3.active = false;
        if (this.adData.logoUrl) {
            this.loadImg(this.adData.logoUrl, adLogo1);
            this.loadImg(this.adData.logoUrl, adLogo2);
            this.loadImg(this.adData.logoUrl, adLogo3);
        }
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
    MediumNativeAd.prototype.onClickReturnBtn = function () {
        cc.director.loadScene('nativeAd');
    };
    MediumNativeAd.prototype.onDestroy = function () {
        if (!this.nativeAd)
            return;
        this.nativeAd.offLoad(); // 移除原生广告加载成功回调
        this.nativeAd.offError(); // 移除失败回调
        this.nativeAd.destroy(); // 隐藏 banner，成功回调 onHide, 出错的时候回调 onError
        console.log('三张 320 x 210 原生广告销毁');
    };
    __decorate([
        property(cc.Button)
    ], MediumNativeAd.prototype, "returnBtn", void 0);
    __decorate([
        property(cc.Node)
    ], MediumNativeAd.prototype, "showBtn", void 0);
    __decorate([
        property(cc.Node)
    ], MediumNativeAd.prototype, "loadBtn", void 0);
    __decorate([
        property(cc.Node)
    ], MediumNativeAd.prototype, "destroyBtn", void 0);
    __decorate([
        property(cc.Node)
    ], MediumNativeAd.prototype, "logLabel", void 0);
    __decorate([
        property(cc.Object)
    ], MediumNativeAd.prototype, "nativeAd", void 0);
    __decorate([
        property(cc.Node)
    ], MediumNativeAd.prototype, "adLayout", void 0);
    __decorate([
        property(cc.Object)
    ], MediumNativeAd.prototype, "adData", void 0);
    MediumNativeAd = __decorate([
        ccclass
    ], MediumNativeAd);
    return MediumNativeAd;
}(cc.Component));
exports.default = MediumNativeAd;

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
        //# sourceMappingURL=MediumNativeAd.js.map
        
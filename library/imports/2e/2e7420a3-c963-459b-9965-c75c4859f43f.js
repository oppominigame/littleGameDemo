"use strict";
cc._RF.push(module, '2e742CjyWNFm5llx1xIWfQ/', 'LifeCircle');
// Script/system/LifeCircle.ts

/**
 * @desc: { 生命周期 }
 * @author: zhengyiqiu
 * @Create Date: 2020-06-23 10:21:00
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2020-06-28 20:39:12
 */
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Pay = /** @class */ (function (_super) {
    __extends(Pay, _super);
    function Pay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logLabel = null;
        _this.onShow = null;
        _this.onHide = null;
        _this.returnBtn = null;
        return _this;
    }
    Pay.prototype.start = function () {
        var _this = this;
        this.onShow.on(cc.Node.EventType.TOUCH_START, function () {
            var onShowCb = function (res) {
                _this.logLabel.getComponent(cc.Label).string = "onShow success: " + (JSON.stringify(res) == "{}" ? new Date().toLocaleString() : JSON.stringify(res));
            };
            if (cc.find("Background/Label", _this.onShow).getComponent(cc.Label).string == '监听onShow') {
                qg.onShow(onShowCb);
                cc.find("Background/Label", _this.onShow).getComponent(cc.Label).string = '取消监听offShow';
            }
            else {
                qg.offShow();
                _this.logLabel.getComponent(cc.Label).string = "取消监听offShow";
                cc.find("Background/Label", _this.onShow).getComponent(cc.Label).string = '监听onShow';
            }
        });
        this.onHide.on(cc.Node.EventType.TOUCH_START, function () {
            var onHideCb = function (res) {
                console.log('onhide');
                _this.logLabel.getComponent(cc.Label).string = "onHide success: " + new Date().toLocaleString();
            };
            if (cc.find("Background/Label", _this.onHide).getComponent(cc.Label).string == '监听onHide') {
                qg.onHide(onHideCb);
                cc.find("Background/Label", _this.onHide).getComponent(cc.Label).string = '取消监听offHide';
            }
            else {
                qg.offHide();
                _this.logLabel.getComponent(cc.Label).string = "取消监听offHide";
                cc.find("Background/Label", _this.onHide).getComponent(cc.Label).string = '监听onHide';
            }
        });
        this.returnBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('system');
        });
    };
    Pay.prototype.log = function (msg) {
        console.log(msg);
        this.logLabel.getComponent(cc.Label).string = msg;
    };
    __decorate([
        property(cc.Label)
    ], Pay.prototype, "logLabel", void 0);
    __decorate([
        property(cc.Node)
    ], Pay.prototype, "onShow", void 0);
    __decorate([
        property(cc.Node)
    ], Pay.prototype, "onHide", void 0);
    __decorate([
        property(cc.Node)
    ], Pay.prototype, "returnBtn", void 0);
    Pay = __decorate([
        ccclass
    ], Pay);
    return Pay;
}(cc.Component));
exports.default = Pay;

cc._RF.pop();
"use strict";
cc._RF.push(module, '39413jsOEhA0rp1Eco4VZf1', 'tipFrame');
// Script/interface/tipFrame.ts

/**
 * @desc: { 提示框 }
 * @author: zhengyiqiu
 * @Create Date: 2020-06-28 11:30:10
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2020-06-28 11:53:35
 */
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TipFrame = /** @class */ (function (_super) {
    __extends(TipFrame, _super);
    function TipFrame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logLabel = null;
        _this.showToastBtn = null;
        _this.showModalBtn = null;
        _this.showLoadingBtn = null;
        _this.showActionSheetBtn = null;
        _this.returnBtn = null;
        return _this;
    }
    TipFrame.prototype.start = function () {
        var _this = this;
        this.showToastBtn.on(cc.Node.EventType.TOUCH_START, function () {
            qg.showToast({
                title: '成功',
                icon: 'success',
                duration: 2000,
                success: function () {
                    _this.log('showToast success');
                }
            });
        });
        this.showModalBtn.on(cc.Node.EventType.TOUCH_START, function () {
            qg.showModal({
                title: '提示',
                content: '这是一个模态弹窗',
                success: function (res) {
                    if (res.confirm) {
                        _this.log('showModal success: 用户点击确定');
                    }
                    else if (res.cancel) {
                        _this.log('showModal success: 用户点击取消');
                    }
                }
            });
        });
        this.showLoadingBtn.on(cc.Node.EventType.TOUCH_START, function () {
            qg.showLoading({
                title: '加载中',
                success: function () {
                    _this.log('showLoading success');
                }
            });
            setTimeout(function () {
                qg.hideLoading({
                    success: function () {
                        _this.log('hideLoading success');
                    }
                });
            }, 2000);
        });
        this.showActionSheetBtn.on(cc.Node.EventType.TOUCH_START, function () {
            qg.showActionSheet({
                itemList: ['A', 'B', 'C'],
                success: function (res) {
                    _this.log("showActionSheet success: \u7528\u6237\u70B9\u51FB\u6309\u94AE\u5E8F\u53F7\u4E3A " + res.tapIndex);
                },
                fail: function (res) {
                    _this.log("showActionSheet fail: " + res.errMsg);
                }
            });
        });
        this.returnBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('interface');
        });
    };
    TipFrame.prototype.log = function (msg) {
        console.log(msg);
        this.logLabel.getComponent(cc.Label).string = msg;
    };
    __decorate([
        property(cc.Label)
    ], TipFrame.prototype, "logLabel", void 0);
    __decorate([
        property(cc.Node)
    ], TipFrame.prototype, "showToastBtn", void 0);
    __decorate([
        property(cc.Node)
    ], TipFrame.prototype, "showModalBtn", void 0);
    __decorate([
        property(cc.Node)
    ], TipFrame.prototype, "showLoadingBtn", void 0);
    __decorate([
        property(cc.Node)
    ], TipFrame.prototype, "showActionSheetBtn", void 0);
    __decorate([
        property(cc.Node)
    ], TipFrame.prototype, "returnBtn", void 0);
    TipFrame = __decorate([
        ccclass
    ], TipFrame);
    return TipFrame;
}(cc.Component));
exports.default = TipFrame;

cc._RF.pop();
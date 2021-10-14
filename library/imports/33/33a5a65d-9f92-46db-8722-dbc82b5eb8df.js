"use strict";
cc._RF.push(module, '33a5aZdn5JG24ci28grXrjf', 'Clipboard');
// Script/device/Clipboard.ts

/**
 * @desc: { 剪贴板 }
 * @author: zhengyiqiu
 * @Create Date: 2020-06-23 11:25:44
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2020-06-23 14:57:09
 */
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Pay = /** @class */ (function (_super) {
    __extends(Pay, _super);
    function Pay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logLabel = null;
        _this.copy = null;
        _this.paste = null;
        _this.updateBtn = null;
        _this.returnBtn = null;
        _this.copyContent = null;
        _this.pasteContent = null;
        return _this;
    }
    Pay.prototype.start = function () {
        var _this = this;
        this.copyContent.getComponent(cc.Label).string = Math.random().toString(36).slice(-8);
        qg.setClipboardData({
            data: this.copyContent.getComponent(cc.Label).string,
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { }
        });
        var copyData = '';
        this.copy.on(cc.Node.EventType.TOUCH_START, function () {
            qg.getClipboardData({
                success: function (res) {
                    _this.log("\u590D\u5236\u7684\u5185\u5BB9\uFF1A" + res.data);
                    copyData = res.data;
                },
                fail: function (res) { },
                complete: function (res) { }
            });
        });
        this.paste.on(cc.Node.EventType.TOUCH_START, function () {
            qg.setClipboardData({
                data: copyData || _this.copyContent.getComponent(cc.Label).string,
                success: function (res) {
                    _this.log('粘贴成功');
                    _this.pasteContent.getComponent(cc.Label).string = copyData;
                },
                fail: function (res) { },
                complete: function (res) { }
            });
        });
        this.updateBtn.on(cc.Node.EventType.TOUCH_START, function () {
            _this.copyContent.getComponent(cc.Label).string = Math.random().toString(36).slice(-8);
            qg.setClipboardData({
                data: _this.copyContent.getComponent(cc.Label).string,
                success: function (res) { },
                fail: function (res) { },
                complete: function (res) { }
            });
        });
        this.returnBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('device');
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
    ], Pay.prototype, "copy", void 0);
    __decorate([
        property(cc.Node)
    ], Pay.prototype, "paste", void 0);
    __decorate([
        property(cc.Node)
    ], Pay.prototype, "updateBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Pay.prototype, "returnBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Pay.prototype, "copyContent", void 0);
    __decorate([
        property(cc.Node)
    ], Pay.prototype, "pasteContent", void 0);
    Pay = __decorate([
        ccclass
    ], Pay);
    return Pay;
}(cc.Component));
exports.default = Pay;

cc._RF.pop();
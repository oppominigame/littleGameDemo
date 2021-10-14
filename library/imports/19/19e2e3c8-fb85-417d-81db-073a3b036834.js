"use strict";
cc._RF.push(module, '19e2ePI+4VBfYHbBzo7A2g0', 'Storage');
// Script/dataReading/Storage.ts

/**
 * @desc: { 存储 }
 * @author: zhengyiqiu
 * @Create Date: 2020-06-23 10:21:00
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2020-07-02 11:25:26
 */
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Storage = /** @class */ (function (_super) {
    __extends(Storage, _super);
    function Storage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logLabel = null;
        _this.set = null;
        _this.get = null;
        _this.remove = null;
        _this.returnBtn = null;
        return _this;
    }
    Storage.prototype.start = function () {
        var _this = this;
        this.set.on(cc.Node.EventType.TOUCH_START, function () {
            localStorage.setItem('miniGame', 'test');
            _this.log('存储成功');
        });
        this.get.on(cc.Node.EventType.TOUCH_START, function () {
            var val = localStorage.getItem('miniGame');
            if (val) {
                _this.log("\u8BFB\u53D6 miniGame \u503C: " + val);
            }
            else {
                _this.log('暂无数据');
            }
        });
        this.remove.on(cc.Node.EventType.TOUCH_START, function () {
            localStorage.removeItem('miniGame');
            _this.log("\u6E05\u9664\u6570\u636E\u6210\u529F");
        });
        this.returnBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('dataReading');
        });
    };
    Storage.prototype.log = function (msg) {
        console.log(msg);
        this.logLabel.getComponent(cc.Label).string = msg;
    };
    __decorate([
        property(cc.Label)
    ], Storage.prototype, "logLabel", void 0);
    __decorate([
        property(cc.Node)
    ], Storage.prototype, "set", void 0);
    __decorate([
        property(cc.Node)
    ], Storage.prototype, "get", void 0);
    __decorate([
        property(cc.Node)
    ], Storage.prototype, "remove", void 0);
    __decorate([
        property(cc.Node)
    ], Storage.prototype, "returnBtn", void 0);
    Storage = __decorate([
        ccclass
    ], Storage);
    return Storage;
}(cc.Component));
exports.default = Storage;

cc._RF.pop();
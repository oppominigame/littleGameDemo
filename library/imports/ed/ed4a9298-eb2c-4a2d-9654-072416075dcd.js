"use strict";
cc._RF.push(module, 'ed4a9KY6yxKLZZUByQWB13N', 'Interface');
// Script/interface/Interface.ts

/**
 * @desc: { 界面 }
 * @author: zhengyiqiu
 * @Create Date: 2020-06-24 14:51:55
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2020-06-28 11:43:15
 */
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Interface = /** @class */ (function (_super) {
    __extends(Interface, _super);
    function Interface() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logLabel = null;
        _this.keyboardBtn = null;
        // @property(cc.Node)
        // timeBtn: cc.Node = null
        _this.tipFrameBtn = null;
        _this.returnBtn = null;
        return _this;
    }
    Interface.prototype.start = function () {
        this.keyboardBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene("keyboard");
        });
        // this.timeBtn.on(cc.Node.EventType.TOUCH_START, () => {
        //   cc.director.loadScene("battery");
        // })
        this.tipFrameBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene("tipFrame");
        });
        this.returnBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('main');
        });
    };
    Interface.prototype.log = function (msg) {
        console.log(msg);
        this.logLabel.getComponent(cc.Label).string = msg;
    };
    __decorate([
        property(cc.Label)
    ], Interface.prototype, "logLabel", void 0);
    __decorate([
        property(cc.Node)
    ], Interface.prototype, "keyboardBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Interface.prototype, "tipFrameBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Interface.prototype, "returnBtn", void 0);
    Interface = __decorate([
        ccclass
    ], Interface);
    return Interface;
}(cc.Component));
exports.default = Interface;

cc._RF.pop();
"use strict";
cc._RF.push(module, '4887amveKFFe4A34/FCg++J', 'Render');
// Script/render/Render.ts

/**
 * @desc: { 渲染 }
 * @author: zhengyiqiu
 * @Create Date: 2020-06-29 11:24:25
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2020-07-01 14:23:11
 */
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Render = /** @class */ (function (_super) {
    __extends(Render, _super);
    function Render() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logLabel = null;
        _this.fps = null;
        _this.font = null;
        _this.returnBtn = null;
        return _this;
    }
    Render.prototype.start = function () {
        this.fps.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('fps');
        });
        this.font.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('font');
        });
        this.returnBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('main');
        });
    };
    // 回调信息展示
    Render.prototype.log = function (msg) {
        console.log(msg);
        this.logLabel.getComponent(cc.Label).string = msg;
    };
    __decorate([
        property(cc.Label)
    ], Render.prototype, "logLabel", void 0);
    __decorate([
        property(cc.Node)
    ], Render.prototype, "fps", void 0);
    __decorate([
        property(cc.Node)
    ], Render.prototype, "font", void 0);
    __decorate([
        property(cc.Node)
    ], Render.prototype, "returnBtn", void 0);
    Render = __decorate([
        ccclass
    ], Render);
    return Render;
}(cc.Component));
exports.default = Render;

cc._RF.pop();
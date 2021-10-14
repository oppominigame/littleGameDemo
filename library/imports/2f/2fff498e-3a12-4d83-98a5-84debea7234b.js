"use strict";
cc._RF.push(module, '2fff4mOOhJNg5ilhN6+pyNL', 'PlatformTool');
// Script/platformTool/PlatformTool.ts

/**
 * @desc: { 媒体 }
 * @author: zhengyiqiu
 * @Create Date: 2020-06-29 11:24:25
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2020-07-01 10:32:22
 */
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlatformTool = /** @class */ (function (_super) {
    __extends(PlatformTool, _super);
    function PlatformTool() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logLabel = null;
        _this.performance = null;
        _this.vConsole = null;
        _this.returnBtn = null;
        return _this;
    }
    PlatformTool.prototype.start = function () {
        this.performance.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('performance');
        });
        this.vConsole.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('vConsole');
        });
        this.returnBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('main');
        });
    };
    // 回调信息展示
    PlatformTool.prototype.log = function (msg) {
        console.log(msg);
        this.logLabel.getComponent(cc.Label).string = msg;
    };
    __decorate([
        property(cc.Label)
    ], PlatformTool.prototype, "logLabel", void 0);
    __decorate([
        property(cc.Node)
    ], PlatformTool.prototype, "performance", void 0);
    __decorate([
        property(cc.Node)
    ], PlatformTool.prototype, "vConsole", void 0);
    __decorate([
        property(cc.Node)
    ], PlatformTool.prototype, "returnBtn", void 0);
    PlatformTool = __decorate([
        ccclass
    ], PlatformTool);
    return PlatformTool;
}(cc.Component));
exports.default = PlatformTool;

cc._RF.pop();
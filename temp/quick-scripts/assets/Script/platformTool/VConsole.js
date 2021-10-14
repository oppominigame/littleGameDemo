(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/platformTool/VConsole.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'e22e29VSUdHtq8atfp0xwNc', 'VConsole', __filename);
// Script/platformTool/VConsole.ts

/**
 * @desc: { vConsole }
 * @author: zhengyiqiu
 * @Create Date: 2020-06-23 10:21:00
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2020-07-01 11:30:02
 */
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var VConsole = /** @class */ (function (_super) {
    __extends(VConsole, _super);
    function VConsole() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logLabel = null;
        _this.enableDebug = null;
        _this.returnBtn = null;
        return _this;
    }
    VConsole.prototype.start = function () {
        var _this = this;
        var isEnable = false;
        this.enableDebug.on(cc.Node.EventType.TOUCH_START, function () {
            qg.setEnableDebug({
                enableDebug: !isEnable,
                success: function () {
                    isEnable = !isEnable;
                    if (!isEnable) {
                        cc.find('Background/Label', _this.enableDebug).getComponent(cc.Label).string = '打开控制台';
                        _this.log('成功关闭控制台');
                    }
                    else {
                        cc.find('Background/Label', _this.enableDebug).getComponent(cc.Label).string = '关闭控制台';
                        _this.log('成功打开控制台');
                    }
                    // 以下语句将会在 vConsole 面板输出 
                    console.log("test consol log");
                    console.info("test console info");
                    console.warn("test consol warn");
                    console.debug("test consol debug");
                    console.error("test consol error");
                },
                fail: function () {
                    _this.log('打开控制台失败');
                }
            });
        });
        this.returnBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('platformTool');
        });
    };
    VConsole.prototype.log = function (msg) {
        console.log(msg);
        this.logLabel.getComponent(cc.Label).string = msg;
    };
    __decorate([
        property(cc.Label)
    ], VConsole.prototype, "logLabel", void 0);
    __decorate([
        property(cc.Node)
    ], VConsole.prototype, "enableDebug", void 0);
    __decorate([
        property(cc.Node)
    ], VConsole.prototype, "returnBtn", void 0);
    VConsole = __decorate([
        ccclass
    ], VConsole);
    return VConsole;
}(cc.Component));
exports.default = VConsole;

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
        //# sourceMappingURL=VConsole.js.map
        
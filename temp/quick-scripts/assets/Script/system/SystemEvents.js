(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/system/SystemEvents.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '7de759/F4hO1LnX8ZHVN5Wp', 'SystemEvents', __filename);
// Script/system/SystemEvents.ts

/**
 * @desc: { 系统事件 }
 * @author: zhengyiqiu
 * @Create Date: 2020-06-23 10:21:00
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2020-06-30 19:44:44
 */
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SystemEvents = /** @class */ (function (_super) {
    __extends(SystemEvents, _super);
    function SystemEvents() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logLabel = null;
        _this.onAudioInterruptionBegin = null;
        _this.onAudioInterruptionEnd = null;
        _this.onError = null;
        _this.dispatchError = null;
        _this.returnBtn = null;
        return _this;
    }
    SystemEvents.prototype.start = function () {
        var _this = this;
        this.onAudioInterruptionBegin.on(cc.Node.EventType.TOUCH_START, function () {
            var onAudioInterruptionBeginCb = function () {
                _this.logLabel.getComponent(cc.Label).string = "onAudioInterruptionBegin success: " + new Date().toLocaleString();
            };
            if (cc.find("Background/Label", _this.onAudioInterruptionBegin).getComponent(cc.Label).string == '监听onAudioInterruptionBegin') {
                qg.onAudioInterruptionBegin(onAudioInterruptionBeginCb);
                cc.find("Background/Label", _this.onAudioInterruptionBegin).getComponent(cc.Label).string = '取消监听offAudioInterruptionBegin';
            }
            else {
                qg.offAudioInterruptionBegin();
                _this.logLabel.getComponent(cc.Label).string = "取消监听offAudioInterruptionBegin";
                cc.find("Background/Label", _this.onAudioInterruptionBegin).getComponent(cc.Label).string = '监听onAudioInterruptionBegin';
            }
        });
        this.onAudioInterruptionEnd.on(cc.Node.EventType.TOUCH_START, function () {
            var onAudioInterruptionEndCb = function () {
                console.log('onAudioInterruptionEnd');
                _this.logLabel.getComponent(cc.Label).string = "onAudioInterruptionEnd success: " + new Date().toLocaleString();
            };
            if (cc.find("Background/Label", _this.onAudioInterruptionEnd).getComponent(cc.Label).string == '监听onAudioInterruptionEnd') {
                qg.onAudioInterruptionEnd(onAudioInterruptionEndCb);
                cc.find("Background/Label", _this.onAudioInterruptionEnd).getComponent(cc.Label).string = '取消监听offAudioInterruptionEnd';
            }
            else {
                qg.offAudioInterruptionEnd();
                _this.logLabel.getComponent(cc.Label).string = "取消监听offAudioInterruptionEnd";
                cc.find("Background/Label", _this.onAudioInterruptionEnd).getComponent(cc.Label).string = '监听onAudioInterruptionEnd';
            }
        });
        this.onError.on(cc.Node.EventType.TOUCH_START, function () {
            var onErrorCb = function (res) {
                _this.logLabel.getComponent(cc.Label).string = "onError success: " + res.message.slice(0, 149);
            };
            if (cc.find("Background/Label", _this.onError).getComponent(cc.Label).string == '监听onError') {
                qg.onError(onErrorCb);
                cc.find("Background/Label", _this.onError).getComponent(cc.Label).string = '取消监听offError';
            }
            else {
                qg.offError();
                _this.logLabel.getComponent(cc.Label).string = "取消监听offError";
                cc.find("Background/Label", _this.onError).getComponent(cc.Label).string = '监听onError';
            }
        });
        this.dispatchError.on(cc.Node.EventType.TOUCH_START, function () {
            throw Error('dispatch Error');
        });
        this.returnBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('system');
        });
    };
    SystemEvents.prototype.log = function (msg) {
        console.log(msg);
        this.logLabel.getComponent(cc.Label).string = msg;
    };
    __decorate([
        property(cc.Label)
    ], SystemEvents.prototype, "logLabel", void 0);
    __decorate([
        property(cc.Node)
    ], SystemEvents.prototype, "onAudioInterruptionBegin", void 0);
    __decorate([
        property(cc.Node)
    ], SystemEvents.prototype, "onAudioInterruptionEnd", void 0);
    __decorate([
        property(cc.Node)
    ], SystemEvents.prototype, "onError", void 0);
    __decorate([
        property(cc.Node)
    ], SystemEvents.prototype, "dispatchError", void 0);
    __decorate([
        property(cc.Node)
    ], SystemEvents.prototype, "returnBtn", void 0);
    SystemEvents = __decorate([
        ccclass
    ], SystemEvents);
    return SystemEvents;
}(cc.Component));
exports.default = SystemEvents;

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
        //# sourceMappingURL=SystemEvents.js.map
        
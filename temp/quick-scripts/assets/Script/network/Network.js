(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/network/Network.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '92f0fs3gcZBQql62egGOQKr', 'Network', __filename);
// Script/network/Network.ts

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @desc: 网络
 * @Create Date: 2019-08-28 17:59:07
 * @Last Modified time: 2019-08-29 14:57:41
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Pay = /** @class */ (function (_super) {
    __extends(Pay, _super);
    function Pay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logLabel = null;
        _this.downloadBtn = null;
        _this.uploadBtn = null;
        _this.XMLHttpRequestBtn = null;
        _this.WebSocketBtn = null;
        _this.returnBtn = null;
        return _this;
    }
    Pay.prototype.start = function () {
        this.downloadBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('download');
        });
        this.uploadBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('upload');
        });
        this.XMLHttpRequestBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('XMLHttpRequest');
        });
        this.WebSocketBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('WebSocket');
        });
        this.returnBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('main');
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
    ], Pay.prototype, "downloadBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Pay.prototype, "uploadBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Pay.prototype, "XMLHttpRequestBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Pay.prototype, "WebSocketBtn", void 0);
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
        //# sourceMappingURL=Network.js.map
        
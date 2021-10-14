(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/device/NetworkType.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'ff8a6D+HV1PRqui3gXRduxk', 'NetworkType', __filename);
// Script/device/NetworkType.ts

/**
 * @desc: { 网络状态 }
 * @author: zhengyiqiu
 * @Create Date: 2020-06-23 10:21:00
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2020-06-23 20:04:59
 */
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Pay = /** @class */ (function (_super) {
    __extends(Pay, _super);
    function Pay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logLabel = null;
        _this.getNetworkTypeBtn = null;
        _this.onNetworkTypeChangeBtn = null;
        _this.returnBtn = null;
        return _this;
    }
    Pay.prototype.start = function () {
        var _this = this;
        this.getNetworkTypeBtn.on(cc.Node.EventType.TOUCH_START, function () {
            qg.getNetworkType({
                success: function (res) {
                    _this.log("\u83B7\u53D6\u7F51\u7EDC\u72B6\u6001\uFF1A" + res.networkType);
                },
                fail: function (err) {
                    _this.log(err.errMsg);
                },
                complete: function () { }
            });
        });
        this.onNetworkTypeChangeBtn.on(cc.Node.EventType.TOUCH_START, function () {
            qg.onNetworkStatusChange(function (res) {
                _this.log("\u5F53\u524D\u662F\u5426\u6709\u7F51\u7EDC\uFF1A" + res.isConnected + ", \u7F51\u7EDC\u7C7B\u578B\u4E3A\uFF1A" + res.networkType);
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
    ], Pay.prototype, "getNetworkTypeBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Pay.prototype, "onNetworkTypeChangeBtn", void 0);
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
        //# sourceMappingURL=NetworkType.js.map
        
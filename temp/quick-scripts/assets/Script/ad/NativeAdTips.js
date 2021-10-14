(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/ad/NativeAdTips.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'c67fb4IkCNLQbIgRjHndUiz', 'NativeAdTips', __filename);
// Script/ad/NativeAdTips.ts

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @desc: 接入说明
 * @Create Date: 2019-08-26 11:42:34
 * @Last Modified time: 2019-08-26 11:43:31
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NativeAdTips = /** @class */ (function (_super) {
    __extends(NativeAdTips, _super);
    function NativeAdTips() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.returnBtn = null;
        _this.accessStyles = null;
        _this.accessRules = null;
        _this.accessStylesText = null;
        _this.accessRulesText = null;
        return _this;
    }
    NativeAdTips.prototype.start = function () {
        var _this = this;
        this.accessStyles.on(cc.Node.EventType.TOUCH_START, function () {
            _this.accessRulesText.active = false;
            _this.accessStylesText.active = true;
        });
        this.accessRules.on(cc.Node.EventType.TOUCH_START, function () {
            _this.accessStylesText.active = false;
            _this.accessRulesText.active = true;
        });
    };
    NativeAdTips.prototype.onClickReturnBtn = function () {
        cc.director.loadScene('accessTips');
    };
    __decorate([
        property(cc.Button)
    ], NativeAdTips.prototype, "returnBtn", void 0);
    __decorate([
        property(cc.Node)
    ], NativeAdTips.prototype, "accessStyles", void 0);
    __decorate([
        property(cc.Node)
    ], NativeAdTips.prototype, "accessRules", void 0);
    __decorate([
        property(cc.Node)
    ], NativeAdTips.prototype, "accessStylesText", void 0);
    __decorate([
        property(cc.Node)
    ], NativeAdTips.prototype, "accessRulesText", void 0);
    NativeAdTips = __decorate([
        ccclass
    ], NativeAdTips);
    return NativeAdTips;
}(cc.Component));
exports.default = NativeAdTips;

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
        //# sourceMappingURL=NativeAdTips.js.map
        
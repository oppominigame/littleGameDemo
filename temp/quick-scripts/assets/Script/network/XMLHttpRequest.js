(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/network/XMLHttpRequest.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'fd86eDoC3hOzY0gvrWDBFJv', 'XMLHttpRequest', __filename);
// Script/network/XMLHttpRequest.ts

/**
 * @desc: { 网络请求 }
 * @author: zhengyiqiu
 * @Create Date: 2020-06-30 20:44:24
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2020-07-02 09:55:19
 */
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var XMLhttprequest = /** @class */ (function (_super) {
    __extends(XMLhttprequest, _super);
    function XMLhttprequest() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logLabel = null;
        _this.sendRequest = null;
        _this.returnBtn = null;
        return _this;
    }
    XMLhttprequest.prototype.start = function () {
        var _this = this;
        this.sendRequest.on(cc.Node.EventType.TOUCH_START, function () {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "http://httpbin.org/get", true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    _this.log("\u53D1\u9001\u8BF7\u6C42\u6210\u529F\uFF1A" + xhr.responseText);
                }
            };
            xhr.send();
        });
        this.returnBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('network');
        });
    };
    XMLhttprequest.prototype.log = function (msg) {
        console.log(msg);
        this.logLabel.getComponent(cc.Label).string = msg;
    };
    __decorate([
        property(cc.Label)
    ], XMLhttprequest.prototype, "logLabel", void 0);
    __decorate([
        property(cc.Node)
    ], XMLhttprequest.prototype, "sendRequest", void 0);
    __decorate([
        property(cc.Node)
    ], XMLhttprequest.prototype, "returnBtn", void 0);
    XMLhttprequest = __decorate([
        ccclass
    ], XMLhttprequest);
    return XMLhttprequest;
}(cc.Component));
exports.default = XMLhttprequest;

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
        //# sourceMappingURL=XMLHttpRequest.js.map
        
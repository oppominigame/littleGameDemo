(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/network/WebSocket.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'f3b11iGPCpOIb6l/bZsPP3z', 'WebSocket', __filename);
// Script/network/WebSocket.ts

"use strict";
/**
 * @desc: { WebSocket }
 * @author: zhengyiqiu
 * @Create Date: 2020-06-30 20:44:24
 * @Last Modified by: 80261040
 * @Last Modified time: 2021-08-19 17:27:04
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var WebSocketDemo = /** @class */ (function (_super) {
    __extends(WebSocketDemo, _super);
    function WebSocketDemo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logLabel = null;
        _this.sendMsg = null;
        _this.returnBtn = null;
        return _this;
    }
    WebSocketDemo.prototype.start = function () {
        var _this = this;
        this.sendMsg.on(cc.Node.EventType.TOUCH_START, function () {
            var ws = new WebSocket('ws://sbattle.wanyol.com/battle');
            ws.onopen = function (event) {
                _this.log('send test ws was opened');
                if (ws.readyState === WebSocket.OPEN) {
                    ws.send("Hello WebSocket, I'm a text message");
                }
                else {
                    _this.log("WebSocket instance wasn't ready...");
                }
            };
            ws.onmessage = function (event) {
                _this.log("response text msg: " + event.data);
            };
            ws.onerror = function (event) {
                _this.log("send text fired an error");
            };
            ws.onclose = function (event) {
                _this.log('WebSocket instance closed');
            };
        });
        this.returnBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('network');
        });
    };
    WebSocketDemo.prototype.log = function (msg) {
        console.log(msg);
        this.logLabel.getComponent(cc.Label).string = msg;
    };
    __decorate([
        property(cc.Label)
    ], WebSocketDemo.prototype, "logLabel", void 0);
    __decorate([
        property(cc.Node)
    ], WebSocketDemo.prototype, "sendMsg", void 0);
    __decorate([
        property(cc.Node)
    ], WebSocketDemo.prototype, "returnBtn", void 0);
    WebSocketDemo = __decorate([
        ccclass
    ], WebSocketDemo);
    return WebSocketDemo;
}(cc.Component));
exports.default = WebSocketDemo;

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
        //# sourceMappingURL=WebSocket.js.map
        
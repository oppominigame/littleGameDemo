(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/device/Memory.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '0bb7bcKiNVPY7IWDSh4VOnG', 'Memory', __filename);
// Script/device/Memory.ts

/**
 * @desc: { 性能 }
 * @author: zhengyiqiu
 * @Create Date: 2020-06-23 10:21:00
 * @Last Modified by: 80261040
 * @Last Modified time: 2021-06-24 16:27:31
 */
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Memory = /** @class */ (function (_super) {
    __extends(Memory, _super);
    function Memory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logLabel = null;
        _this.onMemoryWarningBtn = null;
        _this.offMemoryWarningBtn = null;
        _this.addMemoryBtn = null;
        _this.triggerGCBtn = null;
        _this.returnBtn = null;
        _this.b = null;
        return _this;
    }
    Memory.prototype.start = function () {
        var _this = this;
        var callback = function (res) {
            _this.log("\u76D1\u542C\u5185\u5B58\u4E0D\u8DB3\u544A\u8B66\u4E8B\u4EF6\uFF1A" + JSON.stringify(res));
        };
        this.onMemoryWarningBtn.on(cc.Node.EventType.TOUCH_START, function () {
            _this.log("\u5F00\u59CB\u76D1\u542C\u5185\u5B58\u4E0D\u8DB3\u544A\u8B66\u4E8B\u4EF6");
            qg.onMemoryWarning(callback);
        });
        this.offMemoryWarningBtn.on(cc.Node.EventType.TOUCH_START, function () {
            _this.log("\u53D6\u6D88\u76D1\u542C\u5185\u5B58\u4E0D\u8DB3\u544A\u8B66\u4E8B\u4EF6");
            qg.offMemoryWarning(callback);
        });
        var arr = [];
        this.addMemoryBtn.on(cc.Node.EventType.TOUCH_START, function () {
            // let theThing = null;
            // let replaceThing = function() {
            //   const newThing = theThing;
            //   const unused = function() {
            //     if (newThing) console.log("hi");
            //   };
            //   // 不断修改引用
            //   theThing = {
            //     longStr: new Array(10).join("*"),
            //     someMethod: function() {
            //       console.log("a");
            //     },
            //   };
            // };
            // replaceThing()
            _this.log("\u589E\u52A0\u5185\u5B58");
            // 999999999
            // this.b = new Array(99999990).fill(1)
            _this.b = new Array(35999999).fill(1);
            arr.push(_this.b);
        });
        this.triggerGCBtn.on(cc.Node.EventType.TOUCH_START, function () {
            _this.b = null;
            arr = [];
            qg.triggerGC();
            _this.log("\u5783\u573E\u56DE\u6536");
        });
        this.returnBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('device');
        });
    };
    Memory.prototype.log = function (msg) {
        console.log(msg);
        this.logLabel.getComponent(cc.Label).string = msg;
    };
    __decorate([
        property(cc.Label)
    ], Memory.prototype, "logLabel", void 0);
    __decorate([
        property(cc.Node)
    ], Memory.prototype, "onMemoryWarningBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Memory.prototype, "offMemoryWarningBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Memory.prototype, "addMemoryBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Memory.prototype, "triggerGCBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Memory.prototype, "returnBtn", void 0);
    Memory = __decorate([
        ccclass
    ], Memory);
    return Memory;
}(cc.Component));
exports.default = Memory;

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
        //# sourceMappingURL=Memory.js.map
        
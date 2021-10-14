(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/system/SystemInfo.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '99e13PIpOVCrJaxqfQxUOKB', 'SystemInfo', __filename);
// Script/system/SystemInfo.ts

"use strict";
/**
 * @desc: { 系统信息 }
 * @author: zhengyiqiu
 * @Create Date: 2020-06-28 17:33:31
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2021-10-12 16:20:39
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
var SystemInfo = /** @class */ (function (_super) {
    __extends(SystemInfo, _super);
    function SystemInfo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logLabel = null;
        _this.asyncBtn = null;
        _this.syncBtn = null;
        _this.getManifestBtn = null;
        _this.returnBtn = null;
        _this.brand = null;
        _this.model = null;
        _this.pixelRatio = null;
        _this.screenWidth = null;
        _this.screenHeight = null;
        _this.windowHeight = null;
        _this.windowWidth = null;
        _this.language = null;
        _this.COREVersion = null;
        _this.platformVersionName = null;
        _this.system = null;
        _this.platformVersionCode = null;
        _this.statusBarHeight = null;
        return _this;
    }
    SystemInfo.prototype.start = function () {
        var _this = this;
        var sucCb = function () {
            _this.log("success");
        };
        var failCb = function () {
            _this.log("fail");
        };
        this.asyncBtn.on(cc.Node.EventType.TOUCH_START, function () {
            qg.getSystemInfo({
                success: function (res) {
                    console.log(JSON.stringify(res));
                    _this.logLabel.getComponent(cc.Label).string = '异步获取成功';
                    for (var key in res) {
                        if (_this[key]) {
                            _this[key].getComponent(cc.Label).string = res[key];
                        }
                    }
                },
                fail: function (err) {
                    _this.logLabel.getComponent(cc.Label).string = err;
                }
            });
        });
        this.syncBtn.on(cc.Node.EventType.TOUCH_START, function () {
            var res = qg.getSystemInfoSync();
            console.log(JSON.stringify(res));
            _this.logLabel.getComponent(cc.Label).string = '同步获取成功';
            for (var key in res) {
                if (_this[key]) {
                    _this[key].getComponent(cc.Label).string = res[key];
                }
            }
        });
        this.getManifestBtn.on(cc.Node.EventType.TOUCH_START, function () {
            if (qg.getManifestInfo) {
                qg.getManifestInfo({
                    success: function (res) {
                        _this.log(res.manifest);
                    },
                    fail: function (err) {
                        this.log('getManifest fail');
                    },
                });
            }
            else {
                _this.log('getManifest 支持最低平台版本号 1082 ');
            }
        });
        this.returnBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('system');
        });
    };
    SystemInfo.prototype.log = function (msg) {
        console.log(msg);
        this.logLabel.getComponent(cc.Label).string = msg;
    };
    __decorate([
        property(cc.Label)
    ], SystemInfo.prototype, "logLabel", void 0);
    __decorate([
        property(cc.Node)
    ], SystemInfo.prototype, "asyncBtn", void 0);
    __decorate([
        property(cc.Node)
    ], SystemInfo.prototype, "syncBtn", void 0);
    __decorate([
        property(cc.Node)
    ], SystemInfo.prototype, "getManifestBtn", void 0);
    __decorate([
        property(cc.Node)
    ], SystemInfo.prototype, "returnBtn", void 0);
    __decorate([
        property(cc.Node)
    ], SystemInfo.prototype, "brand", void 0);
    __decorate([
        property(cc.Node)
    ], SystemInfo.prototype, "model", void 0);
    __decorate([
        property(cc.Node)
    ], SystemInfo.prototype, "pixelRatio", void 0);
    __decorate([
        property(cc.Node)
    ], SystemInfo.prototype, "screenWidth", void 0);
    __decorate([
        property(cc.Node)
    ], SystemInfo.prototype, "screenHeight", void 0);
    __decorate([
        property(cc.Node)
    ], SystemInfo.prototype, "windowHeight", void 0);
    __decorate([
        property(cc.Node)
    ], SystemInfo.prototype, "windowWidth", void 0);
    __decorate([
        property(cc.Node)
    ], SystemInfo.prototype, "language", void 0);
    __decorate([
        property(cc.Node)
    ], SystemInfo.prototype, "COREVersion", void 0);
    __decorate([
        property(cc.Node)
    ], SystemInfo.prototype, "platformVersionName", void 0);
    __decorate([
        property(cc.Node)
    ], SystemInfo.prototype, "system", void 0);
    __decorate([
        property(cc.Node)
    ], SystemInfo.prototype, "platformVersionCode", void 0);
    __decorate([
        property(cc.Node)
    ], SystemInfo.prototype, "statusBarHeight", void 0);
    SystemInfo = __decorate([
        ccclass
    ], SystemInfo);
    return SystemInfo;
}(cc.Component));
exports.default = SystemInfo;

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
        //# sourceMappingURL=SystemInfo.js.map
        
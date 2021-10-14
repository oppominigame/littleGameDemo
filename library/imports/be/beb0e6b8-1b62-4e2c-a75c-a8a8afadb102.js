"use strict";
cc._RF.push(module, 'beb0ea4G2JOLKdcqKivrbEC', 'Main');
// Script/Main.ts

"use strict";
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
/**
 * @desc: 首页
 * @Create Date: 2019-08-28 17:46:50
 * @Last Modified time: 2019-08-29 14:57:51
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.platformBtn = null;
        _this.payBtn = null;
        _this.adBtn = null;
        _this.mediaBtn = null;
        _this.deviceBtn = null;
        _this.interfaceBtn = null;
        _this.systemBtn = null;
        _this.locationBtn = null;
        _this.platformToolBtn = null;
        _this.renderBtn = null;
        _this.networkBtn = null;
        _this.dataReadingBtn = null;
        _this.voipBtn = null;
        _this.detectFaceBtn = null;
        _this.gameRecorderBtn = null;
        _this.mainNode = null;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        // 设置常驻节点，控制所有场景的加载
        cc.game.addPersistRootNode(this.mainNode);
        // 展示系统信息
        qg.getSystemInfo({
            success: function (res) {
                console.log("\u7CFB\u7EDF\u4FE1\u606F: " + JSON.stringify(res));
                // 全局储存平台版本号，后续可以通过 window.Global.platformVersion 获取，以检测某些游戏能力平台版本是否支持
                window['Global'] = {
                    platformVersion: res.platformVersion
                };
            },
            fail: function (err) {
                console.log("\u83B7\u53D6\u7CFB\u7EDF\u4FE1\u606F\u51FA\u9519: " + JSON.stringify(err));
            }
        });
    };
    NewClass.prototype.start = function () {
        this.platformBtn.on(cc.Node.EventType.TOUCH_END, function () {
            cc.director.loadScene('platform');
        });
        this.payBtn.on(cc.Node.EventType.TOUCH_END, function () {
            cc.director.loadScene('pay');
        });
        this.adBtn.on(cc.Node.EventType.TOUCH_END, function () {
            cc.director.loadScene('ad');
        });
        this.deviceBtn.on(cc.Node.EventType.TOUCH_END, function () {
            cc.director.loadScene('device');
        });
        this.interfaceBtn.on(cc.Node.EventType.TOUCH_END, function () {
            cc.director.loadScene('interface');
        });
        this.systemBtn.on(cc.Node.EventType.TOUCH_END, function () {
            cc.director.loadScene('system');
        });
        this.mediaBtn.on(cc.Node.EventType.TOUCH_END, function () {
            cc.director.loadScene('media');
        });
        this.platformToolBtn.on(cc.Node.EventType.TOUCH_END, function () {
            cc.director.loadScene('platformTool');
        });
        this.locationBtn.on(cc.Node.EventType.TOUCH_END, function () {
            cc.director.loadScene('location');
        });
        this.renderBtn.on(cc.Node.EventType.TOUCH_END, function () {
            cc.director.loadScene('render');
        });
        this.networkBtn.on(cc.Node.EventType.TOUCH_END, function () {
            cc.director.loadScene('network');
        });
        this.dataReadingBtn.on(cc.Node.EventType.TOUCH_END, function () {
            cc.director.loadScene('dataReading');
        });
        this.voipBtn.on(cc.Node.EventType.TOUCH_END, function () {
            cc.director.loadScene('voice');
        });
        this.detectFaceBtn.on(cc.Node.EventType.TOUCH_END, function () {
            cc.director.loadScene('detectFace');
        });
        this.gameRecorderBtn.on(cc.Node.EventType.TOUCH_END, function () {
            cc.director.loadScene('gameRecorder');
        });
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "platformBtn", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "payBtn", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "adBtn", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "mediaBtn", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "deviceBtn", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "interfaceBtn", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "systemBtn", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "locationBtn", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "platformToolBtn", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "renderBtn", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "networkBtn", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "dataReadingBtn", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "voipBtn", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "detectFaceBtn", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "gameRecorderBtn", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "mainNode", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
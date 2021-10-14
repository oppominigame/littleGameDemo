"use strict";
cc._RF.push(module, '81bf9cz0tBBdaM9veImy8XV', 'CloudStorage');
// Script/dataReading/CloudStorage.ts

"use strict";
/**
 * @desc: { 云存储 }
 * @author: zhengyiqiu
 * @Create Date: 2020-06-23 10:21:00
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2021-10-12 15:50:35
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
var Storage = /** @class */ (function (_super) {
    __extends(Storage, _super);
    function Storage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logLabel = null;
        _this.set = null;
        _this.get = null;
        _this.remove = null;
        _this.returnBtn = null;
        return _this;
    }
    Storage.prototype.start = function () {
        var _this = this;
        if (!qg.setUserCloudStorage) {
            this.log('云存储 API 需支持最低平台版本号为1090');
            return;
        }
        this.set.on(cc.Node.EventType.TOUCH_START, function () {
            qg.setUserCloudStorage({
                KVDataList: [
                    {
                        miniGame: "test"
                    },
                ],
                success: function (res) {
                    _this.log('存储 miniGame 成功');
                },
                fail: function (res) {
                    _this.log("存储 miniGame 失败,注意先在平台能力模块中点登录");
                },
            });
        });
        this.get.on(cc.Node.EventType.TOUCH_START, function () {
            qg.getUserCloudStorage({
                keyList: ["miniGame"],
                success: function (res) {
                    _this.log("\u8BFB\u53D6 miniGame \u503C: " + res.KVDataList);
                },
                fail: function (res) {
                    _this.log("获取 minGame 值: 失败");
                }
            });
        });
        this.remove.on(cc.Node.EventType.TOUCH_START, function () {
            qg.removeUserCloudStorage({
                keyList: ["miniGame"],
                success: function (res) {
                    _this.log("\u6E05\u9664\u6570\u636E\u6210\u529F");
                },
                fail: function (res) {
                    _this.log("清除数据失败");
                },
            });
        });
        this.returnBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('dataReading');
        });
    };
    Storage.prototype.log = function (msg) {
        console.log(msg);
        this.logLabel.getComponent(cc.Label).string = msg;
    };
    __decorate([
        property(cc.Label)
    ], Storage.prototype, "logLabel", void 0);
    __decorate([
        property(cc.Node)
    ], Storage.prototype, "set", void 0);
    __decorate([
        property(cc.Node)
    ], Storage.prototype, "get", void 0);
    __decorate([
        property(cc.Node)
    ], Storage.prototype, "remove", void 0);
    __decorate([
        property(cc.Node)
    ], Storage.prototype, "returnBtn", void 0);
    Storage = __decorate([
        ccclass
    ], Storage);
    return Storage;
}(cc.Component));
exports.default = Storage;

cc._RF.pop();
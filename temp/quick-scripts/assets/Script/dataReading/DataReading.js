(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/dataReading/DataReading.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '90bbaGlw09LaovOl+llheqW', 'DataReading', __filename);
// Script/dataReading/DataReading.ts

"use strict";
/**
 * @desc: { 数据读写 }
 * @author: zhengyiqiu
 * @Create Date: 2020-07-02 11:06:48
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2021-10-12 15:38:30
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
var DataReading = /** @class */ (function (_super) {
    __extends(DataReading, _super);
    function DataReading() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.storage = null;
        _this.file = null;
        _this.cloudStorage = null;
        _this.returnBtn = null;
        return _this;
    }
    DataReading.prototype.start = function () {
        this.storage.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('storage');
        });
        this.file.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('file');
        });
        this.cloudStorage.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('cloudStorage');
        });
        this.returnBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('main');
        });
    };
    __decorate([
        property(cc.Node)
    ], DataReading.prototype, "storage", void 0);
    __decorate([
        property(cc.Node)
    ], DataReading.prototype, "file", void 0);
    __decorate([
        property(cc.Node)
    ], DataReading.prototype, "cloudStorage", void 0);
    __decorate([
        property(cc.Node)
    ], DataReading.prototype, "returnBtn", void 0);
    DataReading = __decorate([
        ccclass
    ], DataReading);
    return DataReading;
}(cc.Component));
exports.default = DataReading;

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
        //# sourceMappingURL=DataReading.js.map
        
"use strict";
cc._RF.push(module, '3e9bckzH15P2LZ/0wnqjzjY', 'Img');
// Script/media/Img.ts

"use strict";
/**
 * @desc: { 图片 }
 * @author: zhengyiqiu
 * @Create Date: 2020-06-29 17:43:49
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2021-10-12 17:33:55
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
var Img = /** @class */ (function (_super) {
    __extends(Img, _super);
    function Img() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logLabel = null;
        _this.chooseImg = null;
        _this.previewImg = null;
        _this.saveImg = null;
        _this.returnBtn = null;
        return _this;
    }
    Img.prototype.start = function () {
        var _this = this;
        var img;
        this.chooseImg.on(cc.Node.EventType.TOUCH_START, function () {
            qg.chooseImage({
                count: 1,
                sizeType: ['original'],
                sourceType: ['album'],
                success: function (res) {
                    img = res.tempFilePaths;
                    _this.log("" + JSON.stringify(res));
                },
                fail: function (e) {
                    _this.log(JSON.stringify(e));
                },
            });
        });
        this.previewImg.on(cc.Node.EventType.TOUCH_START, function () {
            if (img) {
                qg.previewImage({
                    urls: img,
                    success: function () {
                        _this.log("\u9884\u89C8\u56FE\u7247\u6210\u529F");
                    },
                    fail: function (e) {
                        _this.log(e);
                    },
                });
            }
            else {
                _this.log('请先选择图片');
            }
        });
        this.saveImg.on(cc.Node.EventType.TOUCH_START, function () {
            if (img) {
                qg.saveImageToPhotosAlbum({
                    filePath: img[0],
                    success: function () {
                        _this.log("\u4FDD\u5B58\u56FE\u7247\u6210\u529F");
                    },
                    fail: function (e) {
                        _this.log(e);
                    },
                });
            }
            else {
                _this.log('请先选择图片');
            }
        });
        this.returnBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('media');
        });
    };
    Img.prototype.log = function (msg) {
        console.log(msg);
        this.logLabel.getComponent(cc.Label).string = msg;
    };
    __decorate([
        property(cc.Label)
    ], Img.prototype, "logLabel", void 0);
    __decorate([
        property(cc.Node)
    ], Img.prototype, "chooseImg", void 0);
    __decorate([
        property(cc.Node)
    ], Img.prototype, "previewImg", void 0);
    __decorate([
        property(cc.Node)
    ], Img.prototype, "saveImg", void 0);
    __decorate([
        property(cc.Node)
    ], Img.prototype, "returnBtn", void 0);
    Img = __decorate([
        ccclass
    ], Img);
    return Img;
}(cc.Component));
exports.default = Img;

cc._RF.pop();
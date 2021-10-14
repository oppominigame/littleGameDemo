(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/device/QRCode.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '2c431OL2JlM/q3pCfKJ82px', 'QRCode', __filename);
// Script/device/QRCode.ts

"use strict";
/**
 * @desc: { 二维码 }
 * @author: zhengyiqiu
 * @Create Date: 2021-10-12 16:56:37
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2021-10-13 15:00:04
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Voice = /** @class */ (function (_super) {
    __extends(Voice, _super);
    function Voice() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pkgNameInput = null;
        _this.extraDataInput = null;
        _this.dataInput = null;
        _this.isSaveToAlbumToggle = null;
        _this.isBattleGameToggle = null;
        _this.creatQRCodeBtn = null;
        _this.returnBtn = null;
        _this.qrcodeImg = null;
        _this.logLabel = null;
        return _this;
    }
    Voice.prototype.start = function () {
        var _this = this;
        qg.getManifestInfo && qg.getManifestInfo({
            success: function (res) {
                _this.pkgNameInput.string = JSON.parse(res.manifest).package;
                console.log(JSON.parse(res.manifest));
            }
        });
        this.creatQRCodeBtn.on(cc.Node.EventType.TOUCH_START, function () { return __awaiter(_this, void 0, void 0, function () {
            var pkgName, extraData, data, isSaveToAlbum, isBattleGame;
            var _this = this;
            return __generator(this, function (_a) {
                pkgName = this.pkgNameInput.string || '';
                extraData = this.extraDataInput.string || '';
                data = this.dataInput.string || '';
                isSaveToAlbum = this.isSaveToAlbumToggle.isChecked;
                isBattleGame = this.isBattleGameToggle.isChecked;
                console.log('createQRCode params: ', {
                    pkgName: pkgName,
                    extraData: extraData,
                    isSaveToAlbum: isSaveToAlbum,
                    isBattleGame: isBattleGame,
                    data: data,
                });
                qg.createQRCode({
                    pkgName: pkgName,
                    extraData: extraData,
                    isSaveToAlbum: isSaveToAlbum,
                    isBattleGame: isBattleGame,
                    data: data,
                    success: function (res) {
                        _this.log("createQRCode success: " + res.path + " " + (isSaveToAlbum ? '已经保存到相册' : ""));
                        console.log(_this.qrcodeImg);
                        _this.loadUrlImg(res.path, _this.qrcodeImg);
                    },
                    fail: function (res) {
                        _this.log("createQRCode fail: " + JSON.stringify(res));
                    }
                });
                return [2 /*return*/];
            });
        }); });
        this.returnBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('device');
        });
    };
    // 回调信息展示
    Voice.prototype.log = function (msg) {
        console.log(msg);
        this.logLabel.getComponent(cc.Label).string = msg;
    };
    Voice.prototype.loadUrlImg = function (url, spriteNode) {
        cc.loader.load(url, function (err, imageAsset) {
            // Use texture to create sprite frame
            if (err || !imageAsset) {
                console.error('头像错误', err);
                return;
            }
            var spriteFrame = new cc.SpriteFrame();
            spriteFrame.setTexture(imageAsset);
            spriteNode.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });
    };
    __decorate([
        property(cc.EditBox)
    ], Voice.prototype, "pkgNameInput", void 0);
    __decorate([
        property(cc.EditBox)
    ], Voice.prototype, "extraDataInput", void 0);
    __decorate([
        property(cc.EditBox)
    ], Voice.prototype, "dataInput", void 0);
    __decorate([
        property(cc.Toggle)
    ], Voice.prototype, "isSaveToAlbumToggle", void 0);
    __decorate([
        property(cc.Toggle)
    ], Voice.prototype, "isBattleGameToggle", void 0);
    __decorate([
        property(cc.Node)
    ], Voice.prototype, "creatQRCodeBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Voice.prototype, "returnBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Voice.prototype, "qrcodeImg", void 0);
    __decorate([
        property(cc.Label)
    ], Voice.prototype, "logLabel", void 0);
    Voice = __decorate([
        ccclass
    ], Voice);
    return Voice;
}(cc.Component));
exports.default = Voice;

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
        //# sourceMappingURL=QRCode.js.map
        
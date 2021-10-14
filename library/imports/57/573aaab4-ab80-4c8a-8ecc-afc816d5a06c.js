"use strict";
cc._RF.push(module, '573aaq0q4BMio7Mr8gW1aBs', 'Font');
// Script/render/Font.ts

/**
 * @desc: { 字体 }
 * @author: zhengyiqiu
 * @Create Date: 2020-06-30 20:44:24
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2020-07-06 15:23:14
 */
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var fontUrls = [
    "http://47.98.62.68/cocos-runtime-demo/media/writer.ttf",
    "http://47.98.62.68/cocos-runtime-demo/media/font/cinema-light.ttc",
    "http://47.98.62.68/cocos-runtime-demo/media/font/Countryside.ttf",
    "http://47.98.62.68/cocos-runtime-demo/media/font/kaze2-light.ttc",
    "http://47.98.62.68/cocos-runtime-demo/media/font/Vegan.ttf",
    "http://47.98.62.68/cocos-runtime-demo/media/font/ZapfinoExtraLTPro.otf",
    "http://47.98.62.68/cocos-runtime-demo/media/font/ZapfinoForteLT-One.otf",
];
var Font = /** @class */ (function (_super) {
    __extends(Font, _super);
    function Font() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logLabel = null;
        _this.loadFont = null;
        _this.changeFont = null;
        _this.progressLabel = null;
        _this.fontFamily = null;
        _this.testFont = null;
        _this.returnBtn = null;
        return _this;
    }
    Font.prototype.start = function () {
        var _this = this;
        var index = 0;
        var fontFamilyName;
        this.loadFont.on(cc.Node.EventType.TOUCH_START, function () {
            if (index >= fontUrls.length - 1) {
                index = 0;
            }
            else {
                index += 1;
            }
            var tempFilePath = qg.env.USER_DATA_PATH + "/" + index + '.ttf';
            var task = qg.downloadFile({
                url: fontUrls[index],
                filePath: tempFilePath,
                success: function () {
                    _this.log("\u52A0\u8F7D\u6210\u529F");
                    fontFamilyName = qg.loadFont(tempFilePath);
                },
                fail: function (msg) {
                    _this.log(JSON.stringify(msg));
                },
            });
            task.onProgressUpdate(function (msg) {
                _this.progressLabel.getComponent(cc.Label).string = msg['progress'] + '%';
            });
        });
        this.changeFont.on(cc.Node.EventType.TOUCH_START, function () {
            _this.fontFamily.getComponent(cc.Label).string = '当前字体：' + fontFamilyName;
            _this.testFont.getComponent(cc.Label).fontFamily = fontFamilyName;
        });
        this.returnBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('render');
        });
    };
    Font.prototype.log = function (msg) {
        console.log(msg);
        this.logLabel.getComponent(cc.Label).string = msg;
    };
    __decorate([
        property(cc.Label)
    ], Font.prototype, "logLabel", void 0);
    __decorate([
        property(cc.Node)
    ], Font.prototype, "loadFont", void 0);
    __decorate([
        property(cc.Node)
    ], Font.prototype, "changeFont", void 0);
    __decorate([
        property(cc.Label)
    ], Font.prototype, "progressLabel", void 0);
    __decorate([
        property(cc.Label)
    ], Font.prototype, "fontFamily", void 0);
    __decorate([
        property(cc.Label)
    ], Font.prototype, "testFont", void 0);
    __decorate([
        property(cc.Node)
    ], Font.prototype, "returnBtn", void 0);
    Font = __decorate([
        ccclass
    ], Font);
    return Font;
}(cc.Component));
exports.default = Font;

cc._RF.pop();
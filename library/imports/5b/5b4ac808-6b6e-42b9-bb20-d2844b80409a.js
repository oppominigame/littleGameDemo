"use strict";
cc._RF.push(module, '5b4acgIa25Cubsg0oRLgECa', 'Video');
// Script/media/Video.ts

/**
 * @desc: { 图片 }
 * @author: zhengyiqiu
 * @Create Date: 2020-06-29 17:43:49
 * @Last Modified by: 80261040
 * @Last Modified time: 2021-02-26 10:57:10
 */
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var video;
var Img = /** @class */ (function (_super) {
    __extends(Img, _super);
    function Img() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logLabel = null;
        _this.play = null;
        _this.returnBtn = null;
        _this.videoPlayer = null;
        _this.poster = null;
        return _this;
    }
    Img.prototype.start = function () {
        var _this = this;
        this.play.on(cc.Node.EventType.TOUCH_START, function () {
            var canvas = window['__canvas'];
            console.log(_this.videoPlayer.getComponent(cc.VideoPlayer));
            video = qg.createVideo({
                x: canvas.width / 2 - 450,
                y: canvas.height / 2,
                width: 900,
                height: 450,
                src: _this.videoPlayer.getComponent(cc.VideoPlayer).clip['url'],
                poster: _this.poster,
                playbackRate: 1.0,
                objectFit: "contain",
                autoplay: false,
            });
            video.onPlay(function () {
                _this.log("video play");
            });
            video.play();
        });
        this.returnBtn.on(cc.Node.EventType.TOUCH_START, function () {
            _this.videoPlayer.destroy();
            if (video && video.destroy) {
                video.destroy();
            }
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
    ], Img.prototype, "play", void 0);
    __decorate([
        property(cc.Node)
    ], Img.prototype, "returnBtn", void 0);
    __decorate([
        property(cc.VideoPlayer)
    ], Img.prototype, "videoPlayer", void 0);
    __decorate([
        property(cc.Texture2D)
    ], Img.prototype, "poster", void 0);
    Img = __decorate([
        ccclass
    ], Img);
    return Img;
}(cc.Component));
exports.default = Img;

cc._RF.pop();
"use strict";
cc._RF.push(module, '2c7801yF5xMuLyZejqmbDG0', 'Audio');
// Script/media/Audio.ts

"use strict";
/**
 * @desc: { 音频 }
 * @author: zhengyiqiu
 * @Create Date: 2020-06-29 11:27:49
 * @Last Modified by: 80261040
 * @Last Modified time: 2021-08-20 15:23:31
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
var innerAudioContext;
var Audio = /** @class */ (function (_super) {
    __extends(Audio, _super);
    function Audio() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logLabel = null;
        _this.playRemoteAudio = null;
        _this.playLocalAudio = null;
        _this.getCurrentTime = null;
        _this.getVolume = null;
        _this.audioClip = null;
        _this.returnBtn = null;
        _this.pause = null;
        _this.stop = null;
        _this.destroyAudio = null;
        _this.recycle = null;
        _this.getStatus = null;
        _this.getLength = null;
        _this.setStartTime = null;
        _this.seekToTime = null;
        _this.requestMicrophone = null;
        _this.volume = null;
        _this.cancleRequestMicrophone = null;
        _this.cancleLog = null;
        _this.volumeSlider = null;
        _this.startTimeInput = null;
        _this.seekTimeInput = null;
        _this.playbackRateSlider = null;
        _this.getPlaybackRateBtn = null;
        _this.playbackRateLog = null;
        _this.setPlaybackRateBtn = null;
        _this.playbackRateInput = null;
        // 控制打印音量循环
        _this.isPrintVolume = false;
        return _this;
    }
    Audio.prototype.start = function () {
        var _this = this;
        innerAudioContext = qg.createInnerAudioContext();
        this.playRemoteAudio.on(cc.Node.EventType.TOUCH_START, function () {
            innerAudioContext.src = 'http://10.114.69.182:8080/files/browser/music/huxia-4M.mp3';
            // innerAudioContext.src = 'http://47.98.62.68/cocos-runtime-demo/media/StreamAudio.mp3'
            innerAudioContext.play();
            _this.log('播放远程音频');
        });
        this.playLocalAudio.on(cc.Node.EventType.TOUCH_START, function () {
            innerAudioContext.src = _this.audioClip;
            innerAudioContext.play();
            _this.log('播放本地音频');
        });
        this.getCurrentTime.on(cc.Node.EventType.TOUCH_START, function () {
            _this.log("\u5F53\u524D\u97F3\u9891\u64AD\u653E\u4F4D\u7F6E\uFF1A" + innerAudioContext.currentTime);
        });
        this.getVolume.on(cc.Node.EventType.TOUCH_START, function () {
            _this.log("\u5F53\u524D\u97F3\u91CF\uFF1A" + innerAudioContext.volume);
        });
        this.recycle.on(cc.Node.EventType.TOUCH_START, function () {
            innerAudioContext.loop = !innerAudioContext.loop;
            if (innerAudioContext.loop) {
                _this.log('循环播放');
                cc.find("Background/Label", _this.recycle).getComponent(cc.Label).string = '正常播放';
            }
            else {
                _this.log('正常播放');
                cc.find("Background/Label", _this.recycle).getComponent(cc.Label).string = '循环播放';
            }
        });
        this.pause.on(cc.Node.EventType.TOUCH_START, function () {
            innerAudioContext.pause();
            _this.log('暂停播放');
        });
        this.stop.on(cc.Node.EventType.TOUCH_START, function () {
            innerAudioContext.stop();
            _this.log('停止播放');
        });
        this.destroyAudio.on(cc.Node.EventType.TOUCH_START, function () {
            innerAudioContext.destroy();
            _this.log('销毁实例');
        });
        this.getStatus.on(cc.Node.EventType.TOUCH_START, function () {
            innerAudioContext.paused ? _this.log('当前状态：处于暂停或停止') : _this.log('当前状态：正常播放');
        });
        this.getLength.on(cc.Node.EventType.TOUCH_START, function () {
            _this.log("\u5F53\u524D\u97F3\u9891\u957F\u5EA6\uFF1A" + innerAudioContext.duration);
        });
        this.setStartTime.on(cc.Node.EventType.TOUCH_START, function () {
            innerAudioContext.startTime = parseInt(_this.startTimeInput.string.replace(/[^0-9]/gi, ''));
            _this.log("\u5F53\u524D\u5F00\u59CB\u4F4D\u7F6E\uFF1A" + innerAudioContext.startTime);
        });
        this.seekToTime.on(cc.Node.EventType.TOUCH_START, function () {
            var seekTime = parseInt(_this.seekTimeInput.string.replace(/[^0-9]/gi, ''));
            innerAudioContext.seek(seekTime);
            _this.log("\u8DF3\u8F6C\u65F6\u95F4\uFF1A" + seekTime);
        });
        this.returnBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('media');
        });
        this.requestMicrophone.on(cc.Node.EventType.TOUCH_START, function () {
            qg.requestMicrophone().then(function (data) {
                if (data.code == 0) {
                    _this.volumeData = data;
                    _this.isPrintVolume = true;
                    _this.cancleLog.getComponent(cc.Label).string = '';
                }
                else {
                    _this.log("requestMicrophone err: " + JSON.stringify(data));
                }
            }).catch(function (err) {
                _this.log("requestMicrophone err: " + JSON.stringify(err));
            });
        });
        this.cancleRequestMicrophone.on(cc.Node.EventType.TOUCH_START, function () {
            qg.cancleRequestMicrophone().then(function (data) {
                if (data.code == 0) {
                    _this.isPrintVolume = false;
                    _this.cancleLog.getComponent(cc.Label).string = 'success';
                }
                else {
                    _this.log("cancleRequestMicrophone err: " + JSON.stringify(data));
                }
            }).catch(function (err) {
                _this.log("cancleRequestMicrophone err: " + JSON.stringify(err));
            });
        });
        this.getPlaybackRateBtn.on(cc.Node.EventType.TOUCH_START, function () {
            _this.playbackRateLog.getComponent(cc.Label).string = innerAudioContext.playbackRate + '';
        });
        this.setPlaybackRateBtn.on(cc.Node.EventType.TOUCH_START, function () {
            var playbackRateValue = +_this.playbackRateInput.string;
            innerAudioContext.playbackRate = playbackRateValue;
            _this.log("\u64AD\u653E\u901F\u5EA6\uFF1A" + playbackRateValue);
        });
    };
    Audio.prototype.onVolumeChange = function () {
        innerAudioContext.volume = this.volumeSlider.progress;
        this.log("\u5F53\u524D\u97F3\u91CF\u4E3A\uFF1A" + innerAudioContext.volume);
    };
    Audio.prototype.onPlaybackRateChange = function () {
        innerAudioContext.playbackRate = this.playbackRateSlider.progress + 0.5;
        this.log("\u5F53\u524D\u64AD\u653E\u901F\u5EA6\u4E3A\uFF1A" + innerAudioContext.playbackRate);
    };
    Audio.prototype.update = function () {
        if (this.isPrintVolume) {
            this.volume.getComponent(cc.Label).string = this.volumeData ? this.volumeData.volume + '' : '无数据';
        }
    };
    // 回调信息展示
    Audio.prototype.log = function (msg) {
        console.log(msg);
        this.logLabel.getComponent(cc.Label).string = msg;
    };
    __decorate([
        property(cc.Label)
    ], Audio.prototype, "logLabel", void 0);
    __decorate([
        property(cc.Node)
    ], Audio.prototype, "playRemoteAudio", void 0);
    __decorate([
        property(cc.Node)
    ], Audio.prototype, "playLocalAudio", void 0);
    __decorate([
        property(cc.Node)
    ], Audio.prototype, "getCurrentTime", void 0);
    __decorate([
        property(cc.Node)
    ], Audio.prototype, "getVolume", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Audio.prototype, "audioClip", void 0);
    __decorate([
        property(cc.Node)
    ], Audio.prototype, "returnBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Audio.prototype, "pause", void 0);
    __decorate([
        property(cc.Node)
    ], Audio.prototype, "stop", void 0);
    __decorate([
        property(cc.Node)
    ], Audio.prototype, "destroyAudio", void 0);
    __decorate([
        property(cc.Node)
    ], Audio.prototype, "recycle", void 0);
    __decorate([
        property(cc.Node)
    ], Audio.prototype, "getStatus", void 0);
    __decorate([
        property(cc.Node)
    ], Audio.prototype, "getLength", void 0);
    __decorate([
        property(cc.Node)
    ], Audio.prototype, "setStartTime", void 0);
    __decorate([
        property(cc.Node)
    ], Audio.prototype, "seekToTime", void 0);
    __decorate([
        property(cc.Node)
    ], Audio.prototype, "requestMicrophone", void 0);
    __decorate([
        property(cc.Label)
    ], Audio.prototype, "volume", void 0);
    __decorate([
        property(cc.Node)
    ], Audio.prototype, "cancleRequestMicrophone", void 0);
    __decorate([
        property(cc.Label)
    ], Audio.prototype, "cancleLog", void 0);
    __decorate([
        property(cc.Slider)
    ], Audio.prototype, "volumeSlider", void 0);
    __decorate([
        property(cc.EditBox)
    ], Audio.prototype, "startTimeInput", void 0);
    __decorate([
        property(cc.EditBox)
    ], Audio.prototype, "seekTimeInput", void 0);
    __decorate([
        property(cc.Slider)
    ], Audio.prototype, "playbackRateSlider", void 0);
    __decorate([
        property(cc.Node)
    ], Audio.prototype, "getPlaybackRateBtn", void 0);
    __decorate([
        property(cc.Label)
    ], Audio.prototype, "playbackRateLog", void 0);
    __decorate([
        property(cc.Node)
    ], Audio.prototype, "setPlaybackRateBtn", void 0);
    __decorate([
        property(cc.EditBox)
    ], Audio.prototype, "playbackRateInput", void 0);
    Audio = __decorate([
        ccclass
    ], Audio);
    return Audio;
}(cc.Component));
exports.default = Audio;

cc._RF.pop();
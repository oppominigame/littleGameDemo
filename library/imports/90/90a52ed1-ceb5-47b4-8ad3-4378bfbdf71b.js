"use strict";
cc._RF.push(module, '90a527RzrVHtIrTQ3i/vfcb', 'RecorderManager');
// Script/media/RecorderManager.ts

/**
 * @desc: { 图片 }
 * @author: zhengyiqiu
 * @Create Date: 2020-06-29 17:43:49
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2020-06-30 17:59:41
 */
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var record;
var options = {
    duration: 10000,
    sampleRate: 44100,
    numberOfChannels: 1,
    encodeBitRate: 192000,
    format: 'aac',
    frameSize: 50
};
var url;
var audio;
var RecorderManager = /** @class */ (function (_super) {
    __extends(RecorderManager, _super);
    function RecorderManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logLabel = null;
        _this.startBtn = null;
        _this.pauseBtn = null;
        _this.resumeBtn = null;
        _this.stopBtn = null;
        _this.playBtn = null;
        _this.returnBtn = null;
        return _this;
    }
    RecorderManager.prototype.start = function () {
        record = qg.getRecorderManager();
        audio = qg.createInnerAudioContext();
        this.setBtnStatus(this.playBtn, false);
        this.setBtnStatus(this.pauseBtn, false);
        this.setBtnStatus(this.resumeBtn, false);
        this.setBtnStatus(this.stopBtn, false);
        this.returnBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('media');
        });
    };
    RecorderManager.prototype.clickStart = function () {
        var _this = this;
        record.start(options);
        this.log('开始录音');
        this.setBtnStatus(this.startBtn, false);
        this.setBtnStatus(this.pauseBtn, true);
        this.setBtnStatus(this.resumeBtn, true);
        this.setBtnStatus(this.stopBtn, true);
        record.onStop(function (res) {
            url = res.tempFilePath;
            _this.log("\u5F55\u97F3\u6587\u4EF6\uFF1A" + res.tempFilePath);
            _this.setBtnStatus(_this.startBtn, true);
            _this.setBtnStatus(_this.playBtn, true);
            _this.setBtnStatus(_this.pauseBtn, false);
            _this.setBtnStatus(_this.resumeBtn, false);
            _this.setBtnStatus(_this.stopBtn, false);
        });
    };
    RecorderManager.prototype.clickPause = function () {
        record.pause();
        this.log('暂停录音');
        this.setBtnStatus(this.pauseBtn, false);
        this.setBtnStatus(this.resumeBtn, true);
    };
    RecorderManager.prototype.clickResume = function () {
        record.resume();
        this.log('继续录音');
        this.setBtnStatus(this.pauseBtn, true);
        this.setBtnStatus(this.resumeBtn, false);
    };
    RecorderManager.prototype.clickStop = function () {
        this.log('停止录音');
        this.setBtnStatus(this.pauseBtn, false);
        this.setBtnStatus(this.resumeBtn, false);
        this.setBtnStatus(this.playBtn, true);
        record.stop();
    };
    RecorderManager.prototype.clickPlay = function () {
        var _this = this;
        if (url) {
            this.setBtnStatus(this.playBtn, false);
            audio.src = url;
            this.log("\u64AD\u653E\u97F3\u4E50\uFF1A" + url);
            audio.play();
            audio.onEnded(function () {
                _this.setBtnStatus(_this.playBtn, true);
            });
        }
    };
    RecorderManager.prototype.log = function (msg) {
        console.log(msg);
        this.logLabel.getComponent(cc.Label).string = msg;
    };
    RecorderManager.prototype.setBtnStatus = function (node, status) {
        node.getComponent(cc.Button).interactable = status;
    };
    __decorate([
        property(cc.Label)
    ], RecorderManager.prototype, "logLabel", void 0);
    __decorate([
        property(cc.Node)
    ], RecorderManager.prototype, "startBtn", void 0);
    __decorate([
        property(cc.Node)
    ], RecorderManager.prototype, "pauseBtn", void 0);
    __decorate([
        property(cc.Node)
    ], RecorderManager.prototype, "resumeBtn", void 0);
    __decorate([
        property(cc.Node)
    ], RecorderManager.prototype, "stopBtn", void 0);
    __decorate([
        property(cc.Node)
    ], RecorderManager.prototype, "playBtn", void 0);
    __decorate([
        property(cc.Node)
    ], RecorderManager.prototype, "returnBtn", void 0);
    RecorderManager = __decorate([
        ccclass
    ], RecorderManager);
    return RecorderManager;
}(cc.Component));
exports.default = RecorderManager;

cc._RF.pop();
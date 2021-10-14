"use strict";
cc._RF.push(module, 'cb154puCAtO7aG8Fw9nBmfd', 'gameRecorder');
// Script/gameRecorder/gameRecorder.ts

/**
 * @desc: { 游戏对局回放 }
 * @author: 80261040
 * @Create Date: 2021-03-01 11:06:24
 * @Last Modified by: 80261040
 * @Last Modified time: 2021-03-01 16:07:39
 */
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var gameRecorder = /** @class */ (function (_super) {
    __extends(gameRecorder, _super);
    function gameRecorder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getGameRecorder = null;
        _this.isAtempoSupported = null;
        _this.isFrameSupported = null;
        _this.isSoundSupported = null;
        _this.isVolumeSupported = null;
        _this.startBtn = null;
        _this.stopBtn = null;
        _this.pauseBtn = null;
        _this.resumeBtn = null;
        _this.saveToAlbum = null;
        _this.returnBtn = null;
        _this.logLabel = null;
        _this.onStartBtn = null;
        _this.onStartLabel = null;
        _this.onPauseBtn = null;
        _this.onPauseLabel = null;
        _this.onErrorBtn = null;
        _this.onErrorLabel = null;
        _this.onStopBtn = null;
        _this.onStopLabel = null;
        _this.onResumeBtn = null;
        _this.onResumeLabel = null;
        _this.onSaveToAlbumBtn = null;
        _this.onSaveToAlbumLabel = null;
        _this.recorder = null;
        return _this;
    }
    gameRecorder.prototype.start = function () {
        var _this = this;
        this.getGameRecorder.on(cc.Node.EventType.TOUCH_START, function () {
            _this.recorder = qg.getGameRecorder();
            _this.log('获取录制对象');
        });
        this.isAtempoSupported.on(cc.Node.EventType.TOUCH_START, function () {
            _this.recorder && _this.log(_this.recorder.isAtempoSupported());
        });
        this.isFrameSupported.on(cc.Node.EventType.TOUCH_START, function () {
            _this.recorder && _this.log(_this.recorder.isFrameSupported());
        });
        this.isSoundSupported.on(cc.Node.EventType.TOUCH_START, function () {
            _this.recorder && _this.log(_this.recorder.isSoundSupported());
        });
        this.isVolumeSupported.on(cc.Node.EventType.TOUCH_START, function () {
            _this.recorder && _this.log(_this.recorder.isVolumeSupported());
        });
        this.startBtn.on(cc.Node.EventType.TOUCH_START, function () {
            if (_this.recorder) {
                _this.recorder.start();
                _this.log('开始录屏');
            }
        });
        this.pauseBtn.on(cc.Node.EventType.TOUCH_START, function () {
            if (_this.recorder) {
                _this.recorder.pause();
                _this.log('暂停录屏');
            }
        });
        this.resumeBtn.on(cc.Node.EventType.TOUCH_START, function () {
            if (_this.recorder) {
                _this.recorder.resume();
                _this.log('恢复录屏');
            }
        });
        this.stopBtn.on(cc.Node.EventType.TOUCH_START, function () {
            if (_this.recorder) {
                _this.recorder.stop();
                _this.log('停止录屏');
            }
        });
        this.saveToAlbum.on(cc.Node.EventType.TOUCH_START, function () {
            if (_this.recorder) {
                _this.recorder.saveToAlbum();
                _this.log('保存录屏画面到相册');
            }
        });
        this.onStartBtn.on(cc.Node.EventType.TOUCH_START, function () {
            if (!_this.recorder)
                return;
            var inputCb = function (res) {
                if (!res) {
                    _this.onStartLabel.getComponent(cc.Label).string = '无数据返回';
                }
                else {
                    _this.onStartLabel.getComponent(cc.Label).string = JSON.stringify(res);
                }
            };
            if (cc.find("Background/Label", _this.onStartBtn).getComponent(cc.Label).string == '监听录屏开始') {
                _this.recorder.on('start', inputCb);
                cc.find("Background/Label", _this.onStartBtn).getComponent(cc.Label).string = '取消监听录屏开始';
            }
            else {
                _this.recorder.off('start', inputCb);
                _this.onStartLabel.getComponent(cc.Label).string = "取消监听录屏开始";
                cc.find("Background/Label", _this.onStartBtn).getComponent(cc.Label).string = '监听录屏开始';
            }
        });
        this.onPauseBtn.on(cc.Node.EventType.TOUCH_START, function () {
            if (!_this.recorder)
                return;
            var inputCb = function (res) {
                if (!res) {
                    _this.onPauseLabel.getComponent(cc.Label).string = '无数据返回';
                }
                else {
                    _this.onPauseLabel.getComponent(cc.Label).string = JSON.stringify(res);
                }
            };
            if (cc.find("Background/Label", _this.onPauseBtn).getComponent(cc.Label).string == '监听录屏暂停') {
                _this.recorder.on('pause', inputCb);
                cc.find("Background/Label", _this.onPauseBtn).getComponent(cc.Label).string = '取消监听录屏暂停';
            }
            else {
                _this.recorder.off('pause', inputCb);
                _this.onPauseLabel.getComponent(cc.Label).string = "取消监听录屏暂停";
                cc.find("Background/Label", _this.onPauseBtn).getComponent(cc.Label).string = '监听录屏暂停';
            }
        });
        this.onStopBtn.on(cc.Node.EventType.TOUCH_START, function () {
            if (!_this.recorder)
                return;
            var inputCb = function (res) {
                if (!res) {
                    _this.onStopLabel.getComponent(cc.Label).string = '无数据返回';
                }
                else {
                    _this.onStopLabel.getComponent(cc.Label).string = JSON.stringify(res);
                }
            };
            if (cc.find("Background/Label", _this.onStopBtn).getComponent(cc.Label).string == '监听录屏结束') {
                _this.recorder.on('stop', inputCb);
                cc.find("Background/Label", _this.onStopBtn).getComponent(cc.Label).string = '取消监听录屏结束';
            }
            else {
                _this.recorder.off('stop', inputCb);
                _this.onStopLabel.getComponent(cc.Label).string = "取消监听录屏结束";
                cc.find("Background/Label", _this.onStopBtn).getComponent(cc.Label).string = '监听录屏结束';
            }
        });
        this.onResumeBtn.on(cc.Node.EventType.TOUCH_START, function () {
            if (!_this.recorder)
                return;
            var inputCb = function (res) {
                if (!res) {
                    _this.onResumeLabel.getComponent(cc.Label).string = '无数据返回';
                }
                else {
                    _this.onResumeLabel.getComponent(cc.Label).string = JSON.stringify(res);
                }
            };
            if (cc.find("Background/Label", _this.onResumeBtn).getComponent(cc.Label).string == '监听录屏恢复') {
                _this.recorder.on('resume', inputCb);
                cc.find("Background/Label", _this.onResumeBtn).getComponent(cc.Label).string = '取消监听录屏恢复';
            }
            else {
                _this.recorder.off('resume', inputCb);
                _this.onResumeLabel.getComponent(cc.Label).string = "取消监听录屏恢复";
                cc.find("Background/Label", _this.onResumeBtn).getComponent(cc.Label).string = '监听录屏恢复';
            }
        });
        this.onErrorBtn.on(cc.Node.EventType.TOUCH_START, function () {
            if (!_this.recorder)
                return;
            var inputCb = function (res) {
                if (!res) {
                    _this.onErrorLabel.getComponent(cc.Label).string = '无数据返回';
                }
                else {
                    _this.onErrorLabel.getComponent(cc.Label).string = JSON.stringify(res);
                }
            };
            if (cc.find("Background/Label", _this.onErrorBtn).getComponent(cc.Label).string == '监听录屏报错') {
                _this.recorder.on('error', inputCb);
                cc.find("Background/Label", _this.onErrorBtn).getComponent(cc.Label).string = '取消监听录屏报错';
            }
            else {
                _this.recorder.off('error', inputCb);
                _this.onErrorLabel.getComponent(cc.Label).string = "取消监听录屏报错";
                cc.find("Background/Label", _this.onErrorBtn).getComponent(cc.Label).string = '监听录屏报错';
            }
        });
        this.onSaveToAlbumBtn.on(cc.Node.EventType.TOUCH_START, function () {
            if (!_this.recorder)
                return;
            var inputCb = function (res) {
                if (!res) {
                    _this.onSaveToAlbumLabel.getComponent(cc.Label).string = '无数据返回';
                }
                else {
                    _this.onSaveToAlbumLabel.getComponent(cc.Label).string = JSON.stringify(res);
                }
            };
            if (cc.find("Background/Label", _this.onSaveToAlbumBtn).getComponent(cc.Label).string == '监听保存到相册') {
                _this.recorder.on('saveToAlbum', inputCb);
                cc.find("Background/Label", _this.onSaveToAlbumBtn).getComponent(cc.Label).string = '取消监听保存到相册';
            }
            else {
                _this.recorder.off('saveToAlbum', inputCb);
                _this.onSaveToAlbumLabel.getComponent(cc.Label).string = "取消监听保存到相册";
                cc.find("Background/Label", _this.onSaveToAlbumBtn).getComponent(cc.Label).string = '监听保存到相册';
            }
        });
        this.returnBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('main');
        });
    };
    // 回调信息展示
    gameRecorder.prototype.log = function (msg) {
        console.log(msg);
        this.logLabel.getComponent(cc.Label).string = msg;
    };
    __decorate([
        property(cc.Node)
    ], gameRecorder.prototype, "getGameRecorder", void 0);
    __decorate([
        property(cc.Node)
    ], gameRecorder.prototype, "isAtempoSupported", void 0);
    __decorate([
        property(cc.Node)
    ], gameRecorder.prototype, "isFrameSupported", void 0);
    __decorate([
        property(cc.Node)
    ], gameRecorder.prototype, "isSoundSupported", void 0);
    __decorate([
        property(cc.Node)
    ], gameRecorder.prototype, "isVolumeSupported", void 0);
    __decorate([
        property(cc.Node)
    ], gameRecorder.prototype, "startBtn", void 0);
    __decorate([
        property(cc.Node)
    ], gameRecorder.prototype, "stopBtn", void 0);
    __decorate([
        property(cc.Node)
    ], gameRecorder.prototype, "pauseBtn", void 0);
    __decorate([
        property(cc.Node)
    ], gameRecorder.prototype, "resumeBtn", void 0);
    __decorate([
        property(cc.Node)
    ], gameRecorder.prototype, "saveToAlbum", void 0);
    __decorate([
        property(cc.Node)
    ], gameRecorder.prototype, "returnBtn", void 0);
    __decorate([
        property(cc.Label)
    ], gameRecorder.prototype, "logLabel", void 0);
    __decorate([
        property(cc.Node)
    ], gameRecorder.prototype, "onStartBtn", void 0);
    __decorate([
        property(cc.Label)
    ], gameRecorder.prototype, "onStartLabel", void 0);
    __decorate([
        property(cc.Node)
    ], gameRecorder.prototype, "onPauseBtn", void 0);
    __decorate([
        property(cc.Label)
    ], gameRecorder.prototype, "onPauseLabel", void 0);
    __decorate([
        property(cc.Node)
    ], gameRecorder.prototype, "onErrorBtn", void 0);
    __decorate([
        property(cc.Label)
    ], gameRecorder.prototype, "onErrorLabel", void 0);
    __decorate([
        property(cc.Node)
    ], gameRecorder.prototype, "onStopBtn", void 0);
    __decorate([
        property(cc.Label)
    ], gameRecorder.prototype, "onStopLabel", void 0);
    __decorate([
        property(cc.Node)
    ], gameRecorder.prototype, "onResumeBtn", void 0);
    __decorate([
        property(cc.Label)
    ], gameRecorder.prototype, "onResumeLabel", void 0);
    __decorate([
        property(cc.Node)
    ], gameRecorder.prototype, "onSaveToAlbumBtn", void 0);
    __decorate([
        property(cc.Label)
    ], gameRecorder.prototype, "onSaveToAlbumLabel", void 0);
    gameRecorder = __decorate([
        ccclass
    ], gameRecorder);
    return gameRecorder;
}(cc.Component));
exports.default = gameRecorder;

cc._RF.pop();
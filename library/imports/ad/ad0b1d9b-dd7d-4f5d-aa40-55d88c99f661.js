"use strict";
cc._RF.push(module, 'ad0b12b3X1PXapAVdiMmfZh', 'Voice');
// Script/voice/Voice.ts

"use strict";
/**
 * @desc: { 多人实时语音 }
 * @author: zhengyiqiu
 * @Create Date: 2020-06-23 10:21:00
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2021-09-24 10:20:55
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
        _this.ipInput = null;
        _this.groupIdInput = null;
        _this.microphoneToggle = null;
        _this.speakerphoneToggle = null;
        _this.playBGMToggle = null;
        _this.joinBtn = null;
        _this.exitBtn = null;
        _this.updateBtn = null;
        _this.onStatusBtn = null;
        _this.onMembersChangeBtn = null;
        _this.onSpeakersChangeBtn = null;
        _this.returnBtn = null;
        _this.logLabel = null;
        _this.onStatusLabel = null;
        _this.onMembersChangeLabel = null;
        _this.onSpeakersChangeLabel = null;
        _this.tip = null;
        return _this;
    }
    Voice.prototype.start = function () {
        var _this = this;
        this.tip.node.active = false;
        var audio = qg.createInnerAudioContext();
        audio.src = 'https://sharefs.ali.kugou.com/202107161456/788024988871910afd76ee3ac772296b/KGTX/CLTX001/9c29ccf742c1a8f8a8171dd3305b428b.mp3';
        audio.loop = true;
        console.log('audtio', audio);
        this.playBGMToggle.node.on('toggle', function (toggle) {
            console.log('playBGMToggle', toggle.isChecked);
            if (toggle.isChecked) {
                window['audio'] = audio;
                audio.play();
                audio.volume = 0.05;
                console.log('volume', audio.volume);
            }
            else {
                audio.stop();
            }
        });
        this.joinBtn.on(cc.Node.EventType.TOUCH_START, function () { return __awaiter(_this, void 0, void 0, function () {
            var ip, groupId, microphone, speakerPhone, timeStamp, nonceStr, signature, url, error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ip = this.ipInput.string || '';
                        groupId = this.groupIdInput.string || '';
                        microphone = this.microphoneToggle.isChecked;
                        speakerPhone = this.speakerphoneToggle.isChecked;
                        timeStamp = new Date().getTime();
                        console.log('microphone', microphone);
                        console.log('speakerPhone', speakerPhone);
                        nonceStr = Math.random() + '';
                        url = "http://" + ip + ":3000/getSignature";
                        console.log('服务端接口', url);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.sendPostRequest(url, {
                                token: window['TOKEN'],
                                channelName: groupId,
                                pkg: 'com.oppo.littleGameDemo',
                                timeStamp: timeStamp,
                                nonceStr: nonceStr
                            })];
                    case 2:
                        signature = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.log(error_1 + ': 请检查服务器接口');
                        return [2 /*return*/];
                    case 4:
                        console.log('signature', signature);
                        console.log('joinVoIPChat params: ', {
                            signature: signature,
                            nonceStr: nonceStr,
                            timeStamp: timeStamp,
                            groupId: groupId,
                            muteConfig: {
                                muteMicrophone: microphone,
                                muteSpeakerPhone: speakerPhone
                            }
                        });
                        qg.joinVoIPChat({
                            signature: signature,
                            nonceStr: nonceStr,
                            timeStamp: timeStamp,
                            groupId: groupId,
                            muteConfig: {
                                muteMicrophone: microphone,
                                muteSpeakerPhone: speakerPhone
                            },
                            success: function (res) {
                                _this.tip.node.active = true;
                                _this.tip.getComponent(cc.Label).string = "\u5DF2\u52A0\u5165\u623F\u95F4\uFF0CopenIdList \u4E3A\uFF1A " + res['openIdList'];
                                _this.log("success: " + JSON.stringify(res));
                            },
                            fail: function (res) {
                                console.log(res);
                                _this.log("fail: " + JSON.stringify(res));
                            }
                        });
                        return [2 /*return*/];
                }
            });
        }); });
        this.exitBtn.on(cc.Node.EventType.TOUCH_START, function () {
            qg.exitVoIPChat({
                success: function (res) {
                    _this.tip.getComponent(cc.Label).string = "\u5DF2\u79BB\u5F00\u623F\u95F4";
                    _this.log("success: " + JSON.stringify(res));
                },
                fail: function (res) {
                    _this.log("fail: " + JSON.stringify(res));
                }
            });
        });
        this.updateBtn.on(cc.Node.EventType.TOUCH_START, function () {
            var microphone = _this.microphoneToggle.isChecked;
            var speakerPhone = _this.speakerphoneToggle.isChecked;
            console.log('microphone', microphone);
            console.log('speakerPhone', speakerPhone);
            qg.updateVoIPChatMuteConfig({
                muteConfig: {
                    muteMicrophone: microphone,
                    muteSpeakerPhone: speakerPhone
                },
                success: function (res) {
                    _this.log("success: " + JSON.stringify(res));
                },
                fail: function (res) {
                    _this.log("fail: " + JSON.stringify(res));
                }
            });
        });
        this.onMembersChangeBtn.on(cc.Node.EventType.TOUCH_START, function () {
            var inputCb = function (res) {
                _this.onMembersChangeLabel.getComponent(cc.Label).string = JSON.stringify(res);
            };
            if (cc.find("Background/Label", _this.onMembersChangeBtn).getComponent(cc.Label).string == '监听房间成员变化') {
                qg.onVoIPChatMembersChanged(inputCb);
                cc.find("Background/Label", _this.onMembersChangeBtn).getComponent(cc.Label).string = '取消监听房间成员变化';
            }
            else {
                qg.offVoIPChatMembersChanged();
                _this.onMembersChangeLabel.getComponent(cc.Label).string = "取消监听房间成员变化";
                cc.find("Background/Label", _this.onMembersChangeBtn).getComponent(cc.Label).string = '监听房间成员变化';
            }
        });
        this.onSpeakersChangeBtn.on(cc.Node.EventType.TOUCH_START, function () {
            var completeCb = function (res) {
                _this.onSpeakersChangeLabel.getComponent(cc.Label).string = JSON.stringify(res);
            };
            if (cc.find("Background/Label", _this.onSpeakersChangeBtn).getComponent(cc.Label).string == '监听房间成员通话状态变化') {
                qg.onVoIPChatSpeakersChanged(completeCb);
                cc.find("Background/Label", _this.onSpeakersChangeBtn).getComponent(cc.Label).string = '取消监听房间成员通话状态变化';
            }
            else {
                qg.offVoIPChatSpeakersChanged();
                _this.onSpeakersChangeLabel.getComponent(cc.Label).string = "取消监听房间成员通话状态变化";
                cc.find("Background/Label", _this.onSpeakersChangeBtn).getComponent(cc.Label).string = '监听房间成员通话状态变化';
            }
        });
        this.onStatusBtn.on(cc.Node.EventType.TOUCH_START, function () {
            var confirmCb = function (res) {
                _this.onStatusLabel.getComponent(cc.Label).string = JSON.stringify(res);
            };
            if (cc.find("Background/Label", _this.onStatusBtn).getComponent(cc.Label).string == '监听房间状态变化') {
                qg.onVoIPChatStatusChanged(confirmCb);
                cc.find("Background/Label", _this.onStatusBtn).getComponent(cc.Label).string = '取消监听房间状态变化';
            }
            else {
                qg.offVoIPChatStatusChanged();
                _this.onStatusLabel.getComponent(cc.Label).string = "取消监听房间状态变化";
                cc.find("Background/Label", _this.onStatusBtn).getComponent(cc.Label).string = '监听房间状态变化';
            }
        });
        this.returnBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('main');
        });
    };
    // 回调信息展示
    Voice.prototype.log = function (msg) {
        console.log(msg);
        this.logLabel.getComponent(cc.Label).string = msg;
    };
    Voice.prototype.sendPostRequest = function (url, params) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    var response = xhr.responseText;
                    if (xhr.status >= 200 && xhr.status <= 400) {
                        console.log("连接成功");
                        console.log(response);
                        resolve(response);
                    }
                    else {
                        console.log("连接失败");
                        reject(xhr.status + " " + xhr.statusText);
                    }
                }
            };
            xhr.onerror = function () {
                reject(new Error(xhr.statusText));
            };
            xhr.open("POST", url);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify(params));
        });
    };
    __decorate([
        property(cc.EditBox)
    ], Voice.prototype, "ipInput", void 0);
    __decorate([
        property(cc.EditBox)
    ], Voice.prototype, "groupIdInput", void 0);
    __decorate([
        property(cc.Toggle)
    ], Voice.prototype, "microphoneToggle", void 0);
    __decorate([
        property(cc.Toggle)
    ], Voice.prototype, "speakerphoneToggle", void 0);
    __decorate([
        property(cc.Toggle)
    ], Voice.prototype, "playBGMToggle", void 0);
    __decorate([
        property(cc.Node)
    ], Voice.prototype, "joinBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Voice.prototype, "exitBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Voice.prototype, "updateBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Voice.prototype, "onStatusBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Voice.prototype, "onMembersChangeBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Voice.prototype, "onSpeakersChangeBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Voice.prototype, "returnBtn", void 0);
    __decorate([
        property(cc.Label)
    ], Voice.prototype, "logLabel", void 0);
    __decorate([
        property(cc.Label)
    ], Voice.prototype, "onStatusLabel", void 0);
    __decorate([
        property(cc.Label)
    ], Voice.prototype, "onMembersChangeLabel", void 0);
    __decorate([
        property(cc.Label)
    ], Voice.prototype, "onSpeakersChangeLabel", void 0);
    __decorate([
        property(cc.Label)
    ], Voice.prototype, "tip", void 0);
    Voice = __decorate([
        ccclass
    ], Voice);
    return Voice;
}(cc.Component));
exports.default = Voice;

cc._RF.pop();
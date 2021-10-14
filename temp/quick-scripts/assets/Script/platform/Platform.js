(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/platform/Platform.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '52194ovHIRPUqCMECK62HcC', 'Platform', __filename);
// Script/platform/Platform.ts

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @desc: 平台能力
 * @Create Date: 2019-08-28 17:54:21
 * @Last Modified time: 2019-08-29 15:24:06
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Platform = /** @class */ (function (_super) {
    __extends(Platform, _super);
    function Platform() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logLabel = null;
        _this.loginBtn = null;
        _this.homescreenIconBtn = null;
        _this.jumpBtn = null;
        _this.returnBtn = null;
        return _this;
    }
    Platform.prototype.start = function () {
        var _this = this;
        // 登录，支持最低平台版本号'1040' (minPlatformVersion>='1040')
        this.loginBtn.on(cc.Node.EventType.TOUCH_START, function () {
            qg.login({
                success: function (res) {
                    // 可全局储存 token，方便其他能力获取，注意 token 过期时间
                    _this.log("\u767B\u5F55\u6210\u529F: " + JSON.stringify(res.data));
                    window['TOKEN'] = res.data.token;
                },
                fail: function (res) {
                    _this.log("\u767B\u5F55\u5931\u8D25: " + JSON.stringify(res));
                }
            });
        });
        // 创建桌面图标，支持最低平台版本号 1040
        this.homescreenIconBtn.on(cc.Node.EventType.TOUCH_START, function () {
            // 判断是否已经创建桌面图标
            qg.hasShortcutInstalled({
                success: function (res) {
                    // 判断图标未存在时，创建图标
                    if (res == false) {
                        // 创建桌面图标，需要用户授权
                        qg.installShortcut({
                            success: function (res) {
                                // 可执行用户创建图标奖励
                                _this.log("\u8C03\u8D77\u521B\u5EFA\u684C\u9762\u56FE\u6807\u5F39\u7A97\u6210\u529F: " + JSON.stringify(res) + "\uFF0C\n                \u6CE8\uFF1A\u7531\u4E8E\u5B89\u5353\u7CFB\u7EDF\u9AD8\u4F4E\u7248\u672C\u80FD\u529B\u7684\u5DEE\u5F02\uFF0C\u4E3A\u4E86\u4F53\u9A8C\u7EDF\u4E00\u6682\u65F6\u4E0D\u63D0\u4F9B\u7528\u6237\u70B9\u51FB\u53D6\u6D88\u3001\u6DFB\u52A0\u6309\u94AE\u7684\u56DE\u8C03\uFF0C\u53EF\u4EE5\u81EA\u5DF1\u8BBE\u7F6E\u65F6\u95F4\u95F4\u9694\u7ED3\u5408\u68C0\u6D4B\u521B\u5EFA\u684C\u9762\u56FE\u6807\u4E0E\u5426\u7684\u63A5\u53E3\u505A\u5224\u65AD");
                            },
                            fail: function (err) {
                                _this.log("\u8C03\u8D77\u521B\u5EFA\u684C\u9762\u56FE\u6807\u5F39\u7A97\u5931\u8D25: " + JSON.stringify(err));
                            },
                            complete: function () {
                                console.log('调起创建桌面图标弹窗');
                            }
                        });
                    }
                    else {
                        _this.log('桌面图标已创建');
                    }
                },
                fail: function (err) {
                    _this.log(JSON.stringify(err));
                }
            });
        });
        this.jumpBtn.on(cc.Node.EventType.TOUCH_START, function () {
            _this.log("\u5E73\u53F0\u7248\u672C\u53F7\uFF1A " + (window['Global'] && window['Global'].platformVersion));
            // 跳转小游戏按钮，支持最低平台版本号'1044' (minPlatformVersion>='1044')
            if (window['Global'] && window['Global'].platformVersion >= 1044) {
                qg.navigateToMiniGame({
                    pkgName: 'com.wepie.snake.miniprogram.nearme.gamecenter',
                    success: function () {
                        _this.log('跳转小游戏成功');
                    },
                    fail: function (res) {
                        _this.log("\u8DF3\u8F6C\u5C0F\u6E38\u620F\u5931\u8D25\uFF1A" + JSON.stringify(res));
                    }
                });
            }
            else {
                _this.log('平台版本号小于1044，不支持跳转小游戏');
            }
        });
        this.returnBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('main');
        });
    };
    // 回调信息展示
    Platform.prototype.log = function (msg) {
        console.log(msg);
        this.logLabel.getComponent(cc.Label).string = msg;
    };
    __decorate([
        property(cc.Label)
    ], Platform.prototype, "logLabel", void 0);
    __decorate([
        property(cc.Node)
    ], Platform.prototype, "loginBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Platform.prototype, "homescreenIconBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Platform.prototype, "jumpBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Platform.prototype, "returnBtn", void 0);
    Platform = __decorate([
        ccclass
    ], Platform);
    return Platform;
}(cc.Component));
exports.default = Platform;

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
        //# sourceMappingURL=Platform.js.map
        
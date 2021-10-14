(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/animation/animation.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '9adb7nxtX9LepPhse5AhsdZ', 'animation', __filename);
// Script/animation/animation.ts

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @desc: 动画
 * @Create Date: 2019-08-28 17:54:21
 * @Last Modified time: 2019-08-29 15:24:06
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Animation = /** @class */ (function (_super) {
    __extends(Animation, _super);
    function Animation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logLabel = null;
        _this.playAnimation = null;
        _this.returnBtn = null;
        _this.down = null;
        _this.playParticleBtn = null;
        _this.particleNode = null;
        return _this;
    }
    Animation.prototype.start = function () {
        var _this = this;
        this.playAnimation.on(cc.Node.EventType.TOUCH_START, function () {
            _this.log('播放动画');
            _this.down.play('down');
        });
        this.playParticleBtn.on(cc.Node.EventType.TOUCH_START, function () {
            var particleSystem = _this.particleNode.getComponent(cc.ParticleSystem);
            if (particleSystem.active) {
                particleSystem.stopSystem();
                _this.log('暂停粒子动画');
            }
            else {
                particleSystem.resetSystem();
                _this.log('播放粒子动画');
            }
        });
        this.returnBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('main');
        });
    };
    // 回调信息展示
    Animation.prototype.log = function (msg) {
        console.log(msg);
        this.logLabel.getComponent(cc.Label).string = msg;
    };
    __decorate([
        property(cc.Label)
    ], Animation.prototype, "logLabel", void 0);
    __decorate([
        property(cc.Node)
    ], Animation.prototype, "playAnimation", void 0);
    __decorate([
        property(cc.Node)
    ], Animation.prototype, "returnBtn", void 0);
    __decorate([
        property(cc.Animation)
    ], Animation.prototype, "down", void 0);
    __decorate([
        property(cc.Node)
    ], Animation.prototype, "playParticleBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Animation.prototype, "particleNode", void 0);
    Animation = __decorate([
        ccclass
    ], Animation);
    return Animation;
}(cc.Component));
exports.default = Animation;

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
        //# sourceMappingURL=animation.js.map
        
(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/platformTool/Performance.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'f0be1seCsdBNpOHa/UllJQ5', 'Performance', __filename);
// Script/platformTool/Performance.ts

/**
 * @desc: { 性能 }
 * @author: zhengyiqiu
 * @Create Date: 2020-06-30 20:44:24
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2020-07-01 10:24:31
 */
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Performance = /** @class */ (function (_super) {
    __extends(Performance, _super);
    function Performance() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logLabel = null;
        _this.startBtn = null;
        _this.stopBtn = null;
        _this.createObj = null;
        _this.gc = null;
        _this.returnBtn = null;
        return _this;
    }
    Performance.prototype.start = function () {
        var _this = this;
        var startTime = 0;
        var stopTime = 0;
        var testGc = null;
        this.startBtn.on(cc.Node.EventType.TOUCH_START, function () {
            startTime = qg.getPerformance().now();
            _this.log("\u5F00\u59CB\u8BA1\u65F6\uFF1A" + startTime);
        });
        this.stopBtn.on(cc.Node.EventType.TOUCH_START, function () {
            stopTime = qg.getPerformance().now();
            _this.log("\u5F00\u59CB\uFF1A" + startTime + "\uFF0C\u7ED3\u675F\uFF1A" + stopTime + "\uFF0C\u5DEE\u503C\uFF1A" + (stopTime - startTime));
        });
        this.createObj.on(cc.Node.EventType.TOUCH_START, function () {
            if (testGc !== null) {
                return;
            }
            var dataContent = new ArrayBuffer(1024 * 1024 * 10);
            testGc = new Int8Array(dataContent, 0, 1024 * 1024 * 10);
        });
        this.gc.on(cc.Node.EventType.TOUCH_START, function () {
            _this.log('垃圾回收，请用 adb logcat 查看内存变化');
            qg.triggerGC();
        });
        this.returnBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('platformTool');
        });
    };
    Performance.prototype.log = function (msg) {
        console.log(msg);
        this.logLabel.getComponent(cc.Label).string = msg;
    };
    __decorate([
        property(cc.Label)
    ], Performance.prototype, "logLabel", void 0);
    __decorate([
        property(cc.Node)
    ], Performance.prototype, "startBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Performance.prototype, "stopBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Performance.prototype, "createObj", void 0);
    __decorate([
        property(cc.Node)
    ], Performance.prototype, "gc", void 0);
    __decorate([
        property(cc.Node)
    ], Performance.prototype, "returnBtn", void 0);
    Performance = __decorate([
        ccclass
    ], Performance);
    return Performance;
}(cc.Component));
exports.default = Performance;

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
        //# sourceMappingURL=Performance.js.map
        
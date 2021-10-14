"use strict";
cc._RF.push(module, '0a078BbkyFNroC3OCvnvTfD', 'Keyboard');
// Script/interface/Keyboard.ts

/**
 * @desc: { 键盘 }
 * @author: zhengyiqiu
 * @Create Date: 2020-06-23 10:21:00
 * @Last Modified by: zhengyiqiu
 * @Last Modified time: 2020-06-30 15:53:08
 */
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Keyboard = /** @class */ (function (_super) {
    __extends(Keyboard, _super);
    function Keyboard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultValueInput = null;
        _this.maxLengthInput = null;
        _this.confirmTypeInput = null;
        _this.multipleToggle = null;
        _this.confirmHoldToggle = null;
        _this.showBtn = null;
        _this.hideBtn = null;
        _this.onConfirmBtn = null;
        _this.onInputBtn = null;
        _this.onCompleteBtn = null;
        _this.returnBtn = null;
        _this.onConfirmLabel = null;
        _this.onInputLabel = null;
        _this.onCompleteLabel = null;
        return _this;
    }
    Keyboard.prototype.start = function () {
        var _this = this;
        this.showBtn.on(cc.Node.EventType.TOUCH_START, function () {
            var defaultValue = _this.defaultValueInput.string || '';
            var maxLength = parseInt(_this.maxLengthInput.string.replace(/[^0-9]/gi, '')) || 100;
            var multiple = _this.multipleToggle.isChecked;
            var confirmHold = !_this.confirmHoldToggle.isChecked;
            var confirmType = _this.confirmTypeInput.string || 'done';
            console.log('multiple', multiple);
            console.log('confirmHold', confirmHold);
            qg.showKeyboard({
                defaultValue: defaultValue,
                maxLength: maxLength,
                multiple: multiple,
                confirmHold: confirmHold,
                confirmType: confirmType,
                success: function () {
                    console.log("show keyboard");
                }
            });
        });
        this.hideBtn.on(cc.Node.EventType.TOUCH_START, function () {
            qg.hideKeyboard({
                success: function () {
                    console.log("hide keyboard");
                }
            });
        });
        this.onInputBtn.on(cc.Node.EventType.TOUCH_START, function () {
            var inputCb = function (res) {
                _this.onInputLabel.getComponent(cc.Label).string = res['value'];
            };
            if (cc.find("Background/Label", _this.onInputBtn).getComponent(cc.Label).string == '监听输入') {
                qg.onKeyboardInput(inputCb);
                cc.find("Background/Label", _this.onInputBtn).getComponent(cc.Label).string = '取消监听输入';
            }
            else {
                qg.offKeyboardInput();
                _this.onInputLabel.getComponent(cc.Label).string = "取消监听输入";
                cc.find("Background/Label", _this.onInputBtn).getComponent(cc.Label).string = '监听输入';
            }
        });
        this.onCompleteBtn.on(cc.Node.EventType.TOUCH_START, function () {
            var completeCb = function (res) {
                _this.onCompleteLabel.getComponent(cc.Label).string = res['value'];
            };
            if (cc.find("Background/Label", _this.onCompleteBtn).getComponent(cc.Label).string == '监听收起') {
                qg.onKeyboardComplete(completeCb);
                cc.find("Background/Label", _this.onCompleteBtn).getComponent(cc.Label).string = '取消监听收起';
            }
            else {
                qg.offKeyboardComplete();
                _this.onCompleteLabel.getComponent(cc.Label).string = "取消监听收起";
                cc.find("Background/Label", _this.onCompleteBtn).getComponent(cc.Label).string = '监听收起';
            }
        });
        this.onConfirmBtn.on(cc.Node.EventType.TOUCH_START, function () {
            var confirmCb = function (res) {
                _this.onConfirmLabel.getComponent(cc.Label).string = res['value'];
            };
            if (cc.find("Background/Label", _this.onConfirmBtn).getComponent(cc.Label).string == '监听完成') {
                qg.onKeyboardConfirm(confirmCb);
                cc.find("Background/Label", _this.onConfirmBtn).getComponent(cc.Label).string = '取消监听完成';
            }
            else {
                qg.offKeyboardConfirm();
                _this.onConfirmLabel.getComponent(cc.Label).string = "取消监听完成";
                cc.find("Background/Label", _this.onConfirmBtn).getComponent(cc.Label).string = '监听完成';
            }
        });
        this.returnBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('interface');
        });
    };
    __decorate([
        property(cc.EditBox)
    ], Keyboard.prototype, "defaultValueInput", void 0);
    __decorate([
        property(cc.EditBox)
    ], Keyboard.prototype, "maxLengthInput", void 0);
    __decorate([
        property(cc.EditBox)
    ], Keyboard.prototype, "confirmTypeInput", void 0);
    __decorate([
        property(cc.Toggle)
    ], Keyboard.prototype, "multipleToggle", void 0);
    __decorate([
        property(cc.Toggle)
    ], Keyboard.prototype, "confirmHoldToggle", void 0);
    __decorate([
        property(cc.Node)
    ], Keyboard.prototype, "showBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Keyboard.prototype, "hideBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Keyboard.prototype, "onConfirmBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Keyboard.prototype, "onInputBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Keyboard.prototype, "onCompleteBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Keyboard.prototype, "returnBtn", void 0);
    __decorate([
        property(cc.Label)
    ], Keyboard.prototype, "onConfirmLabel", void 0);
    __decorate([
        property(cc.Label)
    ], Keyboard.prototype, "onInputLabel", void 0);
    __decorate([
        property(cc.Label)
    ], Keyboard.prototype, "onCompleteLabel", void 0);
    Keyboard = __decorate([
        ccclass
    ], Keyboard);
    return Keyboard;
}(cc.Component));
exports.default = Keyboard;

cc._RF.pop();
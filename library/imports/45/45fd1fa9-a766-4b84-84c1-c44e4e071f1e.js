"use strict";
cc._RF.push(module, '45fd1+pp2ZLhITBxE5OBx8e', 'Pay');
// Script/pay/Pay.ts

"use strict";
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
/**
 * @desc: 支付
 * @Create Date: 2019-08-28 17:59:07
 * @Last Modified time: 2019-08-29 14:57:41
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Pay = /** @class */ (function (_super) {
    __extends(Pay, _super);
    function Pay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logLabel = null;
        _this.payBtn = null;
        _this.moneyInput = null;
        _this.returnBtn = null;
        return _this;
    }
    Pay.prototype.start = function () {
        var _this = this;
        this.payBtn.on(cc.Node.EventType.TOUCH_START, function () {
            // 支付之前需要先登录
            qg.login({
                success: function (res) {
                    _this.log("\u767B\u5F55\u6210\u529F: " + JSON.stringify(res.data));
                    // 向自己的服务器发送支付请求
                    _this.sendPayRequest(res.data.token);
                },
                fail: function (res) {
                    _this.log("\u767B\u5F55\u5931\u8D25: " + JSON.stringify(res));
                }
            });
        });
        this.returnBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('main');
        });
    };
    Pay.prototype.sendPayRequest = function (token) {
        var _this = this;
        var sendData = this.formatSendData(token);
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 
        // 小游戏示例专用的服务器接口，完成统一下单接口的请求，CP 不可用
        // 注：CP 需要自己搭建服务器接口，调用小游戏文档里的统一下单接口完成签名等操作后获取平台返回的时间戳、订单号、支付签名，再返回数据给小游戏发起支付
        // 注：服务器向平台请求统一下单接口完成签名等操作具体可参考 server 文件夹里的代码
        'https://jits.open.oppomobile.com/jitsopen/api/pay/demo/preOrder'
        // 'http://172.17.171.28:3000/payResult'
        );
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.setRequestHeader('charset', 'UTF-8');
        xhr.onreadystatechange = function () {
            if (xhr.status === 200) {
                // 获取服务器返回的数据后调用文档的发起支付接口
                var data = JSON.parse(xhr.response).data;
                qg.pay({
                    appId: 30173650,
                    // 登录接口返回的token
                    token: token,
                    // 时间戳
                    timestamp: data.timestamp,
                    // 订单号
                    orderNo: data.orderNo,
                    // 支付签名，需要由服务器生成向平台发起统一下单接口后返回
                    paySign: data.paySign,
                    // 成功回调函数，结果以小游戏平台通知CP的回调地址为准
                    success: function (res) {
                        _this.log(JSON.stringify(res));
                    },
                    fail: function (res) {
                        _this.log(JSON.stringify(res));
                    }
                });
            }
            else {
                _this.log(JSON.parse(xhr.response));
            }
        };
        xhr.send(JSON.stringify(sendData));
    };
    Pay.prototype.formatSendData = function (token) {
        // 统一下单必填的数据（除了sign）
        var dataObject = {
            openId: token,
            deviceInfo: '',
            model: 'PAAM00',
            ip: '10.102.217.239',
            productName: '测试',
            productDesc: 'testpay',
            count: 1,
            price: +this.moneyInput.string || 1,
            currency: 'CNY',
            attach: '',
            appVersion: '1.0.0',
            engineVersion: '1045'
        };
        console.log("--- sendData: " + JSON.stringify(dataObject));
        return dataObject;
    };
    Pay.prototype.log = function (msg) {
        console.log(msg);
        this.logLabel.getComponent(cc.Label).string = msg;
    };
    __decorate([
        property(cc.Label)
    ], Pay.prototype, "logLabel", void 0);
    __decorate([
        property(cc.Node)
    ], Pay.prototype, "payBtn", void 0);
    __decorate([
        property(cc.EditBox)
    ], Pay.prototype, "moneyInput", void 0);
    __decorate([
        property(cc.Node)
    ], Pay.prototype, "returnBtn", void 0);
    Pay = __decorate([
        ccclass
    ], Pay);
    return Pay;
}(cc.Component));
exports.default = Pay;

cc._RF.pop();
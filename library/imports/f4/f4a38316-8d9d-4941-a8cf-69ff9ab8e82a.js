"use strict";
cc._RF.push(module, 'f4a38MWjZ1JQajPaf+auOgq', 'detectFace');
// Script/detectFace/detectFace.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DrawImage = /** @class */ (function (_super) {
    __extends(DrawImage, _super);
    function DrawImage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.returnBtn = null;
        _this.bg = null;
        _this.setting = null;
        _this.startCameraToggle = null;
        _this.detectFacesToggle = null;
        _this.onActionsToggle = null;
        _this.img = null;
        _this.blink = null;
        _this.mouthAh = null;
        _this.leftBlink = null;
        _this.rightBlink = null;
        _this.poutMouth = null;
        _this.headYaw = null;
        _this.headPitch = null;
        _this.jumpEyeBrow = null;
        _this.IndianHeadYaw = null;
        _this.setBeautifyBtn = null;
        _this.smoothenInput = null;
        _this.whitenInput = null;
        _this.filterInput = null;
        _this.camera = null;
        _this.spriteFrame = null;
        _this.tex = null;
        _this.detector = null;
        _this.video = null;
        _this.frame = 0;
        _this.isStartDetect = false;
        _this.previewSize = 240;
        // ????????????
        _this.beautifyParam = {
            smoothen: 0.5,
            whiten: 0.5,
            filter: 0,
        };
        return _this;
    }
    DrawImage.prototype.onCameraErr = function (err) {
        var _this = this;
        if (err.code == -1) {
            qg.showModal({
                content: '???????????????????????????????????????????????????????????????',
                success: function (res) {
                    if (res.confirm) {
                        console.log('??????????????????');
                        _this.setAuth();
                    }
                    else if (res.cancel) {
                        console.log('??????????????????');
                    }
                }
            });
        }
        else if (err.code == -2) {
            qg.showModal({
                content: '????????????????????????????????????',
                showCancel: false,
                success: function (res) {
                    _this.bg.active = true;
                    console.log('????????????????????????????????????');
                }
            });
        }
        else if (err.code == -3) {
            qg.showModal({
                content: '?????????????????????????????????',
                showCancel: false,
                success: function (res) {
                    _this.bg.active = true;
                    console.log('?????????????????????????????????');
                }
            });
        }
        console.log('onCameraErr', err);
    };
    DrawImage.prototype.setAuth = function () {
        var _this = this;
        qg.openSetting({
            success: function (data) {
                _this.bg.active = true;
                _this.onStartCameraToggle({ isChecked: _this.startCameraToggle.isChecked });
            }
        });
    };
    DrawImage.prototype.onDestroy = function () {
        console.log('destory');
        qg.offShow(this.showCb);
        this.onAcitonsToggle({ isChecked: false });
        this.onDetectFacesToggle({ isChecked: false });
        this.onStartCameraToggle({ isChecked: false });
    };
    DrawImage.prototype.onLoad = function () {
        var _this = this;
        qg.setKeepScreenOn({
            keepScreenOn: true,
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { }
        });
        this.setting.on(cc.Node.EventType.TOUCH_START, this.setAuth);
        this.returnBtn.on(cc.Node.EventType.TOUCH_START, function () {
            _this.camera.destroy();
            _this.detector.offActions();
            _this.detector.offDetectFaces();
            qg.offShow(_this.showCb);
            cc.director.loadScene('main');
        });
        this.onStartCameraToggle({ isChecked: this.startCameraToggle.isChecked });
        this.onDetectFacesToggle({ isChecked: this.detectFacesToggle.isChecked });
        this.onAcitonsToggle({ isChecked: this.onActionsToggle.isChecked });
        // ??????????????????????????????????????????????????????????????????????????????????????????
        this.showCb = function () {
            _this.camera = qg.createCamera();
            _this.camera.start().then(function (video) {
                _this.video = video;
                _this.initCameraNode();
            }).catch(function (err) {
                // ???????????????????????????
                _this.onCameraErr(err);
                console.log(err);
            });
        };
        qg.onShow(this.showCb);
        qg.onHide(function () {
            _this.camera.destroy();
            _this.camera = null;
        });
        this.setBeautifyBtn.on(cc.Node.EventType.TOUCH_START, function () {
            _this.setBeautify();
        });
    };
    DrawImage.prototype.startDetector = function () {
        var _this = this;
        if (this.detector && this.tex) {
            this.detector.detectFaces({ data: this.video.data, width: this.video.width, height: this.video.height })
                .then(function (res) {
                if (res.code == 0) {
                    if (Array.isArray(res.data) && res.data.length > 0) {
                        res.data.forEach(function (item, index) {
                            // ???????????????????????????????????????????????????cocos????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                            // ??????????????????x???????????????????????????????????????
                            var left = (item.rect.left - _this.video.width / 2) * _this._cameraScaleY;
                            var right = (item.rect.right - _this.video.width / 2) * _this._cameraScaleY;
                            // ???????????????Y?????????????????????????????????????????????????????????????????????Y??????????????????????????????rectNode?????????????????????????????????????????????cameraNode???????????????
                            // let bottom = (-(item.rect.bottom-this.video.height)-this.video.height/2)*this._cameraScaleY 
                            // let top = (-(item.rect.top-this.video.height)-this.video.height/2)*this._cameraScaleY
                            var bottom = (_this.video.height / 2 - item.rect.bottom) * _this._cameraScaleY; // ???????????????
                            var top = (_this.video.height / 2 - item.rect.top) * _this._cameraScaleY;
                            var width = right - left;
                            var height = bottom - top;
                            // ????????????????????????????????????????????????????????????????????????
                            var rectOldNode = _this.node['_children'][index + 1];
                            var hatOldNode = rectOldNode && rectOldNode['_children'][0];
                            var faceBoxOldNode = rectOldNode && rectOldNode['_children'][1];
                            var rectNode;
                            var hatNode;
                            var faceBox;
                            // ??????????????????????????????????????????
                            if (!rectOldNode || rectOldNode['index'] != index) {
                                rectNode = new cc.Node();
                                rectNode.name = 'rectNode';
                                rectNode.index = index;
                                rectNode.addComponent(cc.Graphics);
                                rectNode.convertToWorldSpace(cc.v2(0, 0));
                                _this.node.insertChild(rectNode, index + 1);
                                _this.ctx = rectNode.getComponent(cc.Graphics);
                                hatNode = new cc.Node();
                                rectNode.insertChild(hatNode, 0);
                                hatNode.name = 'hatNode';
                                hatNode.index = index;
                                hatNode.addComponent(cc.Sprite);
                                hatNode.convertToWorldSpace(cc.v2(0, 0));
                                var hatNodeSp = hatNode.getComponent(cc.Sprite);
                                hatNodeSp.spriteFrame = new cc.SpriteFrame(_this.img);
                                hatNode.setAnchorPoint(0.5, 0.5);
                                faceBox = new cc.Node();
                                faceBox.name = 'faceBox';
                                faceBox.addComponent(cc.Label);
                                faceBox.convertToWorldSpace(cc.v2(0, 0));
                                rectNode.insertChild(faceBox, 1);
                            }
                            else {
                                rectNode = rectOldNode;
                                _this.ctx = rectNode.getComponent(cc.Graphics);
                                _this.ctx.clear();
                                hatNode = hatOldNode;
                                faceBox = faceBoxOldNode;
                            }
                            _this.ctx.lineWidth = 2;
                            _this.ctx.strokeColor = cc.Color.YELLOW;
                            _this.ctx.rect(left, top, width, height);
                            _this.ctx.stroke();
                            // hatNode.width = width/ hatNode.width
                            hatNode.y = top + 150;
                            hatNode.x = left + width / 2;
                            item.roll && hatNode.setRotation(item.roll);
                            // hatNodeSp.width = width
                            // hatNode.setScale(width / this.img.width)
                            _this.faceBoxLabel = faceBox.getComponent(cc.Label);
                            faceBox.x = left + width / 2;
                            faceBox.y = bottom - 100;
                            _this.faceBoxLabel.fontSize = 20;
                            if (item.roll) {
                                _this.faceBoxLabel.string = 'score: ' + item.score + '\n'
                                    + 'yaw: ' + item.yaw + '\n'
                                    + 'pitch: ' + item.pitch + '\n'
                                    + 'roll: ' + item.roll + '\n';
                            }
                            else {
                                _this.faceBoxLabel.string = 'score: ' + item.score;
                            }
                            // ???????????????[0, 32]
                            for (var i = 0; i <= 32; i++) {
                                _this.ctx.circle((item.point_x[i] - _this.video.width / 2) * _this._cameraScaleY, (_this.video.height / 2 - item.point_y[i]) * _this._cameraScaleY, 2);
                                _this.ctx.fillColor = cc.Color.YELLOW;
                                _this.ctx.fill();
                            }
                            // ?????????[33, 42]???[64, 71]
                            for (var i = 33; i <= 42; i++) {
                                _this.ctx.circle((item.point_x[i] - _this.video.width / 2) * _this._cameraScaleY, (_this.video.height / 2 - item.point_y[i]) * _this._cameraScaleY, 2);
                                _this.ctx.fillColor = cc.Color.BLUE;
                                _this.ctx.fill();
                            }
                            for (var i = 64; i <= 71; i++) {
                                _this.ctx.circle((item.point_x[i] - _this.video.width / 2) * _this._cameraScaleY, (_this.video.height / 2 - item.point_y[i]) * _this._cameraScaleY, 2);
                                _this.ctx.fillColor = cc.Color.BLUE;
                                _this.ctx.fill();
                            }
                            // ?????????[52, 63]
                            for (var i = 52; i <= 63; i++) {
                                _this.ctx.circle((item.point_x[i] - _this.video.width / 2) * _this._cameraScaleY, (_this.video.height / 2 - item.point_y[i]) * _this._cameraScaleY, 2);
                                _this.ctx.fillColor = cc.Color.RED;
                                _this.ctx.fill();
                            }
                            // ?????????[72, 77], [104, 105]
                            for (var i = 72; i <= 77; i++) {
                                _this.ctx.circle((item.point_x[i] - _this.video.width / 2) * _this._cameraScaleY, (_this.video.height / 2 - item.point_y[i]) * _this._cameraScaleY, 2);
                                _this.ctx.fillColor = cc.Color.GRAY;
                                _this.ctx.fill();
                            }
                            for (var i = 104; i <= 105; i++) {
                                _this.ctx.circle((item.point_x[i] - _this.video.width / 2) * _this._cameraScaleY, (_this.video.height / 2 - item.point_y[i]) * _this._cameraScaleY, 2);
                                _this.ctx.fillColor = cc.Color.GRAY;
                                _this.ctx.fill();
                            }
                            // ?????????[47, 51], [78, 83]
                            for (var i = 47; i <= 51; i++) {
                                _this.ctx.circle((item.point_x[i] - _this.video.width / 2) * _this._cameraScaleY, (_this.video.height / 2 - item.point_y[i]) * _this._cameraScaleY, 2);
                                _this.ctx.fillColor = cc.Color.GREEN;
                                _this.ctx.fill();
                            }
                            for (var i = 78; i <= 83; i++) {
                                _this.ctx.circle((item.point_x[i] - _this.video.width / 2) * _this._cameraScaleY, (_this.video.height / 2 - item.point_y[i]) * _this._cameraScaleY, 2);
                                _this.ctx.fillColor = cc.Color.GREEN;
                                _this.ctx.fill();
                            }
                            // ?????????[84, 103]
                            for (var i = 84; i <= 103; i++) {
                                _this.ctx.circle((item.point_x[i] - _this.video.width / 2) * _this._cameraScaleY, (_this.video.height / 2 - item.point_y[i]) * _this._cameraScaleY, 2);
                                _this.ctx.fillColor = cc.Color.ORANGE;
                                _this.ctx.fill();
                            }
                            // ?????????[106, 136]
                            for (var i = 106; i <= 136; i++) {
                                _this.ctx.circle((item.point_x[i] - _this.video.width / 2) * _this._cameraScaleY, (_this.video.height / 2 - item.point_y[i]) * _this._cameraScaleY, 2);
                                _this.ctx.fillColor = cc.Color.ORANGE;
                                _this.ctx.fill();
                            }
                        });
                        var rectNodeArr = [];
                        var elements = _this.node['_children'];
                        for (var f = 0, len = elements.length; f < len; f++) {
                            if (elements[f]['name'] == 'rectNode') {
                                rectNodeArr.push(elements[f]);
                            }
                        }
                        if (res.data.length < rectNodeArr.length) {
                            rectNodeArr.forEach(function (item, index) {
                                if (!res.data[index]) {
                                    _this.node.removeChild(item);
                                }
                            });
                        }
                    }
                }
                else {
                    // ????????????????????????
                    var elements = _this.node['_children'];
                    for (var i = elements.length - 1; i >= 0; i--) {
                        if (elements[i]['name'] == 'rectNode') {
                            elements.splice(i, 1);
                        }
                    }
                    // console.log('??????????????????', JSON.stringify(res))
                }
                // console.log('??????????????????', res)
            }).catch(function (err) {
                console.log('?????????????????? err', err);
            });
        }
    };
    DrawImage.prototype.update = function (td) {
        if (this.tex) {
            //??????????????????
            // ????????????
            this.tex.initWithData(this.video.data, cc.Texture2D.PixelFormat.RGBA8888, this.video.width, this.video.height);
            // ?????????????????????????????????
            this.cameraNode.width = this._curWidth;
            this.cameraNode.height = this._curHeight;
            this.frame++;
            if (this.isStartDetect) {
                this.startDetector(); //?????????????????????????????????
            }
        }
    };
    DrawImage.prototype.setBeautify = function () {
        var smoothen = this.smoothenInput.string;
        var whiten = this.whitenInput.string;
        var filter = this.filterInput.string;
        // @ts-ignore
        this.beautifyParam.smoothen = !!(+smoothen) || smoothen === '0' ? +smoothen : smoothen;
        // @ts-ignore
        this.beautifyParam.whiten = !!(+whiten) || whiten === '0' ? +whiten : whiten;
        // @ts-ignore
        this.beautifyParam.filter = !!(+filter) || filter === '0' ? +filter : filter;
        this.camera.setBeautifyParam(this.beautifyParam);
        console.log('????????????', this.beautifyParam);
    };
    DrawImage.prototype.initCameraNode = function () {
        console.log('camera.start ', this.video);
        if (!this.cameraNode) {
            // ???????????????????????????
            this.bg.active = false;
            this.cameraNode = new cc.Node();
            this.cameraNode.addComponent(cc.Sprite);
            this.node.insertChild(this.cameraNode, 0);
            this.tex = new cc.Texture2D();
            this.spriteFrame = new cc.SpriteFrame();
            this.cameraNode.getComponent(cc.Sprite).spriteFrame = this.spriteFrame;
            this.spriteFrame.setTexture(this.tex);
            // this.faceBox.addComponent(cc.Graphics)
            // ????????????
            this._cameraScaleY = this.node.height / this.video.height;
            this._curWidth = this.video.width * this._cameraScaleY;
            this._curHeight = this.node.height;
            // ????????????
            this.tex.initWithData(this.video.data, cc.Texture2D.PixelFormat.RGBA8888, this.video.width, this.video.height);
            // ?????????????????????????????????
            this.cameraNode.width = this._curWidth;
            this.cameraNode.height = this._curHeight;
        }
    };
    DrawImage.prototype.onStartCameraToggle = function (res) {
        var _this = this;
        if (res.isChecked) {
            this.camera = qg.createCamera();
            // ???????????????????????????
            // this.camera.start().then(video => {
            console.log('camera start', this.camera);
            this.bg.active = false;
            this.camera.start({ previewSize: this.previewSize }).then(function (video) {
                console.log('start cb', video);
                _this.video = video;
                _this.initCameraNode();
            }).catch(function (err) {
                // ???????????????????????????
                _this.onCameraErr(err);
                console.log(err);
            });
        }
        else {
            this.camera.destroy();
            this.camera = null;
            this.bg.active = true;
        }
    };
    DrawImage.prototype.onDetectFacesToggle = function (res) {
        var rectNode = this.node.getChildByName('rectNode');
        var faceBox = this.node.getChildByName('faceBox');
        console.log('rectnode', rectNode, faceBox);
        console.log('res.isChecked', res.isChecked);
        if (res.isChecked) {
            !this.detector && (this.detector = qg.createFaceDetector());
            rectNode && (rectNode.active = true);
            this.isStartDetect = true;
        }
        else {
            rectNode && (rectNode.active = false);
            this.detector.offDetectFaces();
            this.detector = null;
            this.isStartDetect = false;
        }
    };
    DrawImage.prototype.onAcitonsToggle = function (res) {
        var _this = this;
        if (res.isChecked) {
            this.detector.onActions(function (detectData) {
                // console.log('onActions', detectData)
            });
            this.detector.onBlink(function (detectData) {
                var n = _this.blink.getComponent(cc.Label);
                n.string = parseInt(n.string) + 1 + '';
                console.log('onBlink', detectData);
            });
            // this.detector.onBlinkLeft(detectData => {
            //   let n = this.leftBlink.getComponent(cc.Label)
            //   n.string = parseInt(n.string) + 1 + ''
            //   console.log('onBlinkLeft', detectData)
            // })
            // this.detector.onBlinkRight(detectData => {
            //   let n = this.rightBlink.getComponent(cc.Label)
            //   n.string = parseInt(n.string) + 1 + ''
            //   console.log('onBlinkRight', detectData)
            // })
            this.detector.onMouthAh(function (detectData) {
                var n = _this.mouthAh.getComponent(cc.Label);
                n.string = parseInt(n.string) + 1 + '';
                console.log('onMouthAh', detectData);
            });
            this.detector.onMouthPout(function (detectData) {
                var n = _this.poutMouth.getComponent(cc.Label);
                n.string = parseInt(n.string) + 1 + '';
                console.log('onMouthPout', detectData);
            });
            this.detector.onHeadYaw(function (detectData) {
                var n = _this.headYaw.getComponent(cc.Label);
                n.string = parseInt(n.string) + 1 + '';
                console.log('onHeadYaw', detectData);
            });
            // this.detector.onHeadYawIndian(detectData => {
            //   let n = this.IndianHeadYaw.getComponent(cc.Label)
            //   n.string = parseInt(n.string) + 1 + ''
            //   console.log('onHeadYawIndian', detectData)
            // })
            this.detector.onHeadPitch(function (detectData) {
                var n = _this.headPitch.getComponent(cc.Label);
                n.string = parseInt(n.string) + 1 + '';
                console.log('onHeadPitch', detectData);
            });
            this.detector.onBrowJump(function (detectData) {
                var n = _this.jumpEyeBrow.getComponent(cc.Label);
                n.string = parseInt(n.string) + 1 + '';
                console.log('onBrowJump', detectData);
            });
        }
        else {
            this.detector && this.detector.offActions();
        }
    };
    DrawImage.prototype.onPreviewToggle = function (res) {
        var _this = this;
        console.log('onPreviewToggle', +res.node.name);
        this.previewSize = +res.node.name;
        this.camera.resetSize(this.previewSize).then(function (res) {
            if (res.code == 0) {
                // ?????????
                console.log('????????????previewSize', _this.previewSize, _this.video, _this._cameraScaleY, _this._curWidth, _this._curHeight);
                _this._cameraScaleY = _this.node.height / _this.video.height;
                _this._curWidth = _this.video.width * _this._cameraScaleY;
                _this._curHeight = _this.node.height;
                setTimeout(function () {
                    console.log('????????????previewSize last', _this.previewSize, _this.video, _this._cameraScaleY, _this._curWidth, _this._curHeight);
                }, 1000);
            }
        }).catch(function (err) {
            // ???????????????????????????
            console.log(err);
        });
    };
    __decorate([
        property(cc.Node)
    ], DrawImage.prototype, "returnBtn", void 0);
    __decorate([
        property(cc.Node)
    ], DrawImage.prototype, "bg", void 0);
    __decorate([
        property(cc.Node)
    ], DrawImage.prototype, "setting", void 0);
    __decorate([
        property(cc.Toggle)
    ], DrawImage.prototype, "startCameraToggle", void 0);
    __decorate([
        property(cc.Toggle)
    ], DrawImage.prototype, "detectFacesToggle", void 0);
    __decorate([
        property(cc.Toggle)
    ], DrawImage.prototype, "onActionsToggle", void 0);
    __decorate([
        property(cc.Texture2D)
    ], DrawImage.prototype, "img", void 0);
    __decorate([
        property(cc.Label)
    ], DrawImage.prototype, "blink", void 0);
    __decorate([
        property(cc.Label)
    ], DrawImage.prototype, "mouthAh", void 0);
    __decorate([
        property(cc.Label)
    ], DrawImage.prototype, "leftBlink", void 0);
    __decorate([
        property(cc.Label)
    ], DrawImage.prototype, "rightBlink", void 0);
    __decorate([
        property(cc.Label)
    ], DrawImage.prototype, "poutMouth", void 0);
    __decorate([
        property(cc.Label)
    ], DrawImage.prototype, "headYaw", void 0);
    __decorate([
        property(cc.Label)
    ], DrawImage.prototype, "headPitch", void 0);
    __decorate([
        property(cc.Label)
    ], DrawImage.prototype, "jumpEyeBrow", void 0);
    __decorate([
        property(cc.Label)
    ], DrawImage.prototype, "IndianHeadYaw", void 0);
    __decorate([
        property(cc.Node)
    ], DrawImage.prototype, "setBeautifyBtn", void 0);
    __decorate([
        property(cc.EditBox)
    ], DrawImage.prototype, "smoothenInput", void 0);
    __decorate([
        property(cc.EditBox)
    ], DrawImage.prototype, "whitenInput", void 0);
    __decorate([
        property(cc.EditBox)
    ], DrawImage.prototype, "filterInput", void 0);
    DrawImage = __decorate([
        ccclass
    ], DrawImage);
    return DrawImage;
}(cc.Component));
exports.default = DrawImage;

cc._RF.pop();
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
import React, { Component } from 'react';
var WXComQRCode = /** @class */ (function (_super) {
    __extends(WXComQRCode, _super);
    function WXComQRCode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WXComQRCode.prototype.componentDidMount = function () {
        this.initWechatCode();
    };
    WXComQRCode.prototype.shouldComponentUpdate = function (nextProps) {
        var config = this.props.config;
        var nextConfig = nextProps.config;
        if (JSON.stringify(config) !== JSON.stringify(nextConfig)) {
            this.initWechatCode();
        }
        return true;
    };
    WXComQRCode.prototype.initWechatCode = function () {
        var _a = this.props.config, config = _a === void 0 ? { callbackUrl: '', appId: '', corpId: '', redirectUrl: '' } : _a;
        var redirectUrl = config.redirectUrl, callbackUrl = config.callbackUrl, appId = config.appId, corpId = config.corpId;
        // @ts-ignore
        window.WwLogin({
            id: 'wechat_work_container',
            appid: corpId,
            agentid: appId,
            redirect_uri: encodeURIComponent(redirectUrl || "https://" + callbackUrl + "/#/not-login/login/verify"),
            state: 'wx',
            href: process.env.NODE_ENV === 'production'
                ? encodeURIComponent("https://" + callbackUrl + "/qrcode.css")
                : encodeURIComponent('https://192.168.99.19:3000/qrcode.css')
        });
    };
    WXComQRCode.prototype.render = function () {
        return React.createElement("div", { id: 'wechat_work_container' });
    };
    return WXComQRCode;
}(Component));
export default WXComQRCode;

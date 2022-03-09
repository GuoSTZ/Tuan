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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
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
        return react_1.default.createElement("div", { id: 'wechat_work_container' });
    };
    return WXComQRCode;
}(react_1.Component));
exports.default = WXComQRCode;

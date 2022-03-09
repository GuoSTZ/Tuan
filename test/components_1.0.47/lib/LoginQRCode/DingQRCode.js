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
var DingQRCode = /** @class */ (function (_super) {
    __extends(DingQRCode, _super);
    function DingQRCode(props) {
        var _this = _super.call(this, props) || this;
        var _a = props.config, config = _a === void 0 ? { callbackUrl: '', appId: '' } : _a;
        var callbackUrl = config.callbackUrl, appId = config.appId;
        _this.state = {
            url: "https://" + callbackUrl + "/#/not-login/login/verify",
            goto: "https://oapi.dingtalk.com/connect/oauth2/sns_authorize?appid=" + appId + "&response_type=code&scope=snsapi_login&state=ding&redirect_uri="
        };
        return _this;
    }
    DingQRCode.prototype.componentDidMount = function () {
        this.initDingCode();
        this.bindEvent();
    };
    DingQRCode.prototype.shouldComponentUpdate = function (nextProps) {
        var config = this.props.config;
        var nextConfig = nextProps.config;
        if (JSON.stringify(config) !== JSON.stringify(nextConfig)) {
            this.initDingCode();
            this.bindEvent();
        }
        return true;
    };
    DingQRCode.prototype.initDingCode = function () {
        var _a = this.state, url = _a.url, goto = _a.goto;
        var config = this.props.config;
        // @ts-ignore
        window.DDLogin({
            id: 'ding_container',
            goto: encodeURIComponent("" + goto + encodeURIComponent(config.redirectUrl || url)),
            style: 'border:none;background-color:transparent;top:-20px',
            width: '300',
            height: '400'
        });
    };
    DingQRCode.prototype.bindEvent = function () {
        if (typeof window.addEventListener != 'undefined') {
            window.addEventListener('message', this.handleMessage.bind(this), false);
            // @ts-ignore
        }
        else if (typeof window.attachEvent != 'undefined') {
            // @ts-ignore
            window.attachEvent('onmessage', this.handleMessage.bind(this));
        }
    };
    DingQRCode.prototype.handleMessage = function (event) {
        var _a = this.state, url = _a.url, goto = _a.goto;
        var origin = event.origin;
        if (origin == 'https://login.dingtalk.com') {
            //判断是否来自ddLogin扫码事件。
            var loginTmpCode = event.data;
            //获取到loginTmpCode后就可以在这里构造跳转链接进行跳转了
            if (loginTmpCode) {
                // @ts-ignore
                window.location = "" + goto + encodeURIComponent(url) + "&loginTmpCode=" + loginTmpCode;
            }
        }
    };
    DingQRCode.prototype.render = function () {
        return react_1.default.createElement("div", { id: 'ding_container' });
    };
    return DingQRCode;
}(react_1.Component));
exports.default = DingQRCode;

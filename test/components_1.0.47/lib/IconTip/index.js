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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconTip = void 0;
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var classnames_1 = __importDefault(require("classnames"));
require("./index.css");
var IconTip = /** @class */ (function (_super) {
    __extends(IconTip, _super);
    function IconTip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prefixCls = "IconTip";
        _this.renderIconNode = function () {
            var _a = _this.props, icon = _a.icon, type = _a.type, placement = _a.placement;
            // 渲染自定义图标
            if (icon) {
                return _this.replaceElement(icon, react_1.default.createElement("span", { className: _this.prefixCls + "-icon " + _this.prefixCls + "-placement-" + placement }, icon), function () {
                    var _a;
                    return ({
                        className: classnames_1.default(_this.prefixCls + "-icon " + _this.prefixCls + "-placement-" + placement, (_a = {},
                            _a[icon.props.className] = icon.props.className,
                            _a)),
                    });
                });
            }
            return _this.renderDefaultIcon(type);
        };
        return _this;
    }
    IconTip.prototype.renderDefaultIcon = function (type) {
        var _a = this.props, placement = _a.placement, iconType = _a.iconType;
        // Icon 类名定义
        var classList = this.prefixCls + "-placement-" + placement + " " + this.prefixCls + "-icon";
        if (type) {
            classList = classList + "  " + this.prefixCls + "-icon-" + type;
        }
        else {
            classList = classList + " " + this.prefixCls + "-icon-default";
        }
        // Icon 类型定义
        var typeStr = "";
        if (iconType === 'exclamation') {
            typeStr = "exclamation-circle";
        }
        else {
            typeStr = "question-circle";
        }
        return (react_1.default.createElement(antd_1.Icon, { className: classList, type: typeStr }));
    };
    IconTip.prototype.replaceElement = function (element, replacement, props) {
        if (!react_1.isValidElement(element))
            return replacement;
        return react_1.cloneElement(element, typeof props === 'function' ? props(element.props || {}) : props);
    };
    IconTip.prototype.renderTootip = function (tip, children) {
        var tipProps = this.props.tipProps;
        return (react_1.default.createElement(antd_1.Tooltip, __assign({}, tipProps, { title: tip }), children));
    };
    IconTip.prototype.renderText = function (text, ellipsis) {
        if (typeof text === 'string' && ellipsis) {
            return (react_1.default.createElement("label", { title: text, className: "IconTip-text-label" }, text));
        }
        return text;
    };
    IconTip.prototype.renderComponent = function () {
        var _a = this.props, showIcon = _a.showIcon, text = _a.text, tip = _a.tip, placement = _a.placement, ellipsis = _a.ellipsis;
        if (showIcon === false) {
            return this.renderTootip(tip, text);
        }
        if (placement === 'left') {
            return (react_1.default.createElement(react_1.Fragment, null,
                this.renderTootip(tip, this.renderIconNode()),
                this.renderText(text, ellipsis)));
        }
        else {
            return (react_1.default.createElement(react_1.Fragment, null,
                this.renderText(text, ellipsis),
                this.renderTootip(tip, this.renderIconNode())));
        }
    };
    IconTip.prototype.render = function () {
        return (react_1.default.createElement("span", null, this.renderComponent()));
    };
    IconTip.defaultProps = {
        iconType: 'question',
        placement: 'right',
        ellipsis: false
    };
    return IconTip;
}(react_1.default.Component));
exports.IconTip = IconTip;

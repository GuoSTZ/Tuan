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
import React, { Fragment, isValidElement, cloneElement } from 'react';
import { Icon, Tooltip } from 'antd';
import classNames from 'classnames';
import './index.css';
var IconTip = /** @class */ (function (_super) {
    __extends(IconTip, _super);
    function IconTip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prefixCls = "IconTip";
        _this.renderIconNode = function () {
            var _a = _this.props, icon = _a.icon, type = _a.type, placement = _a.placement;
            // 渲染自定义图标
            if (icon) {
                return _this.replaceElement(icon, React.createElement("span", { className: _this.prefixCls + "-icon " + _this.prefixCls + "-placement-" + placement }, icon), function () {
                    var _a;
                    return ({
                        className: classNames(_this.prefixCls + "-icon " + _this.prefixCls + "-placement-" + placement, (_a = {},
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
        return (React.createElement(Icon, { className: classList, type: typeStr }));
    };
    IconTip.prototype.replaceElement = function (element, replacement, props) {
        if (!isValidElement(element))
            return replacement;
        return cloneElement(element, typeof props === 'function' ? props(element.props || {}) : props);
    };
    IconTip.prototype.renderTootip = function (tip, children) {
        var tipProps = this.props.tipProps;
        return (React.createElement(Tooltip, __assign({}, tipProps, { title: tip }), children));
    };
    IconTip.prototype.renderText = function (text, ellipsis) {
        if (typeof text === 'string' && ellipsis) {
            return (React.createElement("label", { title: text, className: "IconTip-text-label" }, text));
        }
        return text;
    };
    IconTip.prototype.renderComponent = function () {
        var _a = this.props, showIcon = _a.showIcon, text = _a.text, tip = _a.tip, placement = _a.placement, ellipsis = _a.ellipsis;
        if (showIcon === false) {
            return this.renderTootip(tip, text);
        }
        if (placement === 'left') {
            return (React.createElement(Fragment, null,
                this.renderTootip(tip, this.renderIconNode()),
                this.renderText(text, ellipsis)));
        }
        else {
            return (React.createElement(Fragment, null,
                this.renderText(text, ellipsis),
                this.renderTootip(tip, this.renderIconNode())));
        }
    };
    IconTip.prototype.render = function () {
        return (React.createElement("span", null, this.renderComponent()));
    };
    IconTip.defaultProps = {
        iconType: 'question',
        placement: 'right',
        ellipsis: false
    };
    return IconTip;
}(React.Component));
export { IconTip };

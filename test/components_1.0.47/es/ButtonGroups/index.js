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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from 'react';
import { Button, Tooltip, Menu, Icon, Dropdown, Modal } from 'antd';
import CustomButton from './Button';
var Confirm = /** @class */ (function (_super) {
    __extends(Confirm, _super);
    function Confirm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Confirm.prototype.handleConfirmClick = function () {
        var _a = this.props, title = _a.title, content = _a.content, onConfirm = _a.onConfirm, props = _a.children.props.children.props;
        return Modal.confirm({
            title: title,
            content: content,
            onOk: onConfirm,
            okText: props.okText
        });
    };
    //此处的createElement 直接用children 无法正常使用 小坑
    Confirm.prototype.render = function () {
        var children = this.props.children;
        return React.createElement(children.type, __assign(__assign({}, children.props), { onClick: this.handleConfirmClick.bind(this) }), children.props.children);
    };
    return Confirm;
}(React.Component));
var ButtonGroups = /** @class */ (function (_super) {
    __extends(ButtonGroups, _super);
    function ButtonGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // static CustomButton: typeof CustomButton;
    ButtonGroups.prototype.filterChildren = function (childrenArray) {
        return childrenArray.filter(function (it) {
            if (it.props.permission === undefined) {
                return true;
            }
            else {
                return it.props.permission && it.props.permission === true;
            }
        });
    };
    ButtonGroups.prototype.formatTooltipTitle = function (item) {
        return item.tip || item.children;
    };
    ButtonGroups.prototype.completeIconProp = function () { };
    ButtonGroups.prototype.renderNormalChild = function (it, idx) {
        var handleClick = this.props.handleClick;
        var _a = it.props, actionkey = _a.actionkey, tip = _a.tip, needTooltip = _a.needTooltip, confirm = _a.confirm, confirmTitle = _a.confirmTitle, permission = _a.permission, children = _a.children, btnProps = __rest(_a, ["actionkey", "tip", "needTooltip", "confirm", "confirmTitle", "permission", "children"]);
        var title = this.formatTooltipTitle(it.props);
        return btnProps.disabled === true
            ? React.createElement(
            //@ts-ignore
            Button, __assign(__assign({}, btnProps), { onClick: function () {
                    handleClick(actionkey);
                } }), children)
            : React.createElement(Tooltip, { key: idx, title: title }, React.createElement(
            //@ts-ignore
            Button, __assign(__assign({}, btnProps), { onClick: function () {
                    handleClick(actionkey);
                } }), children));
    };
    ButtonGroups.prototype.renderConfirmChild = function (it, idx) {
        var handleClick = this.props.handleClick;
        var _a = it.props, tip = _a.tip, needTooltip = _a.needTooltip, confirm = _a.confirm, confirmTitle = _a.confirmTitle, actionkey = _a.actionkey, children = _a.children, permission = _a.permission, otherProps = __rest(_a, ["tip", "needTooltip", "confirm", "confirmTitle", "actionkey", "children", "permission"]);
        var title = this.formatTooltipTitle(it.props);
        return React.createElement(Confirm, 
        //@ts-ignore
        {
            key: idx,
            title: !!confirmTitle ? confirmTitle : undefined,
            content: confirm,
            onConfirm: function () {
                handleClick(actionkey);
            }
        }, otherProps.disabled === true
            ? React.createElement(
            //@ts-ignore
            Button, __assign({}, otherProps), children)
            : React.createElement(Tooltip, {
                key: idx,
                title: title
            }, React.createElement(
            //@ts-ignore
            Button, __assign({}, otherProps), children)));
    };
    ButtonGroups.prototype.renderReactElement = function (it, idx) {
        var _a = it.props, disabled = _a.disabled, confirmTitle = _a.confirmTitle, confirm = _a.confirm;
        if ((confirmTitle || confirm) && !disabled) {
            return this.renderConfirmChild(it, idx);
        }
        else {
            return this.renderNormalChild(it, idx);
        }
    };
    ButtonGroups.prototype.renderButtonOnly = function () {
        var _this = this;
        var childrenArray = React.Children.toArray(this.props.children);
        return this.filterChildren(childrenArray).map(function (it, idx) {
            return _this.renderReactElement(it, idx);
        });
    };
    ButtonGroups.prototype.renderMenuChild = function (it, idx) {
        var _a = it.props, tip = _a.tip, children = _a.children;
        return React.createElement(Tooltip, Object.assign({}, { key: idx, title: tip }), React.cloneElement(it, Object.assign({}, it.props), children));
    };
    ButtonGroups.prototype.renderMenuItem = function (itemList) {
        var _this = this;
        return (React.createElement(Menu, null, itemList.map(function (it, idx) {
            return (React.createElement(Menu.Item, { key: it.props.actionkey || idx }, _this.renderReactElement(it, idx)));
        })));
    };
    ButtonGroups.prototype.renderMixButtonMenu = function () {
        var _this = this;
        var _a = this.props, children = _a.children, showSize = _a.showSize, overlayClassName = _a.overlayClassName;
        var childrenArray = this.filterChildren(React.Children.toArray(children));
        var endArray = childrenArray.splice(showSize);
        return (React.createElement(React.Fragment, null,
            childrenArray.map(function (it, idx) {
                return _this.renderReactElement(it, idx);
            }),
            endArray.length ? (React.createElement(Dropdown, { overlayClassName: overlayClassName, overlay: this.renderMenuItem(endArray) },
                React.createElement(Button, null,
                    React.createElement(Icon, { type: 'ellipsis' })))) : null));
    };
    ButtonGroups.prototype.renderChildren = function () {
        var _a = this.props, mode = _a.mode, handleClick = _a.handleClick, children = _a.children, showSize = _a.showSize, viewMode = _a.viewMode, otherProps = __rest(_a, ["mode", "handleClick", "children", "showSize", "viewMode"]);
        return (React.createElement(Button.Group, __assign({}, otherProps), mode === 'ButtonGroup'
            ? this.renderButtonOnly()
            : this.renderMixButtonMenu()));
    };
    ButtonGroups.prototype.render = function () {
        return React.createElement("div", { className: 'button-groups' }, this.renderChildren());
    };
    ButtonGroups.defaultProps = {
        showSize: 5,
        handleClick: function (actionkey) { },
        viewMode: 'text',
        mode: 'ButtonGroup'
    };
    return ButtonGroups;
}(React.Component));
export { ButtonGroups };
ButtonGroups.CustomButton = CustomButton;
export default ButtonGroups;

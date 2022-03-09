"use strict";
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
var React = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var antd_1 = require("antd");
var reactNode_1 = require("./reactNode");
function renderSwitcherIcon(prefixCls, switcherIcon, showLine, _a) {
    var isLeaf = _a.isLeaf, expanded = _a.expanded, loading = _a.loading;
    if (loading) {
        return React.createElement(antd_1.Icon, { type: "loading", className: prefixCls + "-switcher-loading-icon" });
    }
    var showLeafIcon;
    if (showLine && typeof showLine === 'object') {
        showLeafIcon = showLine.showLeafIcon;
    }
    if (isLeaf) {
        if (showLine) {
            if (typeof showLine === 'object' && !showLeafIcon) {
                return React.createElement("span", { className: prefixCls + "-switcher-leaf-line" });
            }
            return React.createElement(antd_1.Icon, { type: "file", className: prefixCls + "-switcher-line-icon" });
        }
        return null;
    }
    var switcherCls = prefixCls + "-switcher-icon";
    if (reactNode_1.isValidElement(switcherIcon)) {
        return reactNode_1.cloneElement(switcherIcon, {
            className: classnames_1.default(switcherIcon.props.className || '', switcherCls),
        });
    }
    if (switcherIcon) {
        return switcherIcon;
    }
    if (showLine) {
        return expanded ? (React.createElement(antd_1.Icon, { type: "minus-square", className: prefixCls + "-switcher-line-icon" })) : (React.createElement(antd_1.Icon, { type: "plus-square", className: prefixCls + "-switcher-line-icon" }));
    }
    return React.createElement(antd_1.Icon, { type: "caret-down", theme: 'filled', className: switcherCls });
}
exports.default = renderSwitcherIcon;

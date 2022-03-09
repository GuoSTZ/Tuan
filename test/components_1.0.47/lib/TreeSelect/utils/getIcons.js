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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var antd_1 = require("antd");
function getIcons(_a) {
    var suffixIcon = _a.suffixIcon, clearIcon = _a.clearIcon, menuItemSelectedIcon = _a.menuItemSelectedIcon, removeIcon = _a.removeIcon, loading = _a.loading, multiple = _a.multiple, prefixCls = _a.prefixCls;
    // Clear Icon
    var mergedClearIcon = clearIcon;
    if (!clearIcon) {
        mergedClearIcon = React.createElement(antd_1.Icon, { type: "close-circle", theme: 'filled' });
    }
    // Arrow item icon
    var mergedSuffixIcon = null;
    if (suffixIcon !== undefined) {
        mergedSuffixIcon = suffixIcon;
    }
    else if (loading) {
        mergedSuffixIcon = React.createElement(antd_1.Icon, { type: "loading", spin: true });
    }
    else {
        var iconCls_1 = prefixCls + "-suffix";
        mergedSuffixIcon = function (_a) {
            var open = _a.open, showSearch = _a.showSearch;
            if (open && showSearch) {
                return React.createElement(antd_1.Icon, { type: "search", className: iconCls_1 });
            }
            return React.createElement(antd_1.Icon, { type: "down", className: iconCls_1 });
        };
    }
    // Checked item icon
    var mergedItemIcon = null;
    if (menuItemSelectedIcon !== undefined) {
        mergedItemIcon = menuItemSelectedIcon;
    }
    else if (multiple) {
        mergedItemIcon = React.createElement(antd_1.Icon, { type: "check" });
    }
    else {
        mergedItemIcon = null;
    }
    var mergedRemoveIcon = null;
    if (removeIcon !== undefined) {
        mergedRemoveIcon = removeIcon;
    }
    else {
        mergedRemoveIcon = React.createElement(antd_1.Icon, { type: "close" });
    }
    return {
        clearIcon: mergedClearIcon,
        suffixIcon: mergedSuffixIcon,
        itemIcon: mergedItemIcon,
        removeIcon: mergedRemoveIcon,
    };
}
exports.default = getIcons;

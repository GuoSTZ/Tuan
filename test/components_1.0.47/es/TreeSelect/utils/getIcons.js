import * as React from 'react';
import { Icon } from 'antd';
export default function getIcons(_a) {
    var suffixIcon = _a.suffixIcon, clearIcon = _a.clearIcon, menuItemSelectedIcon = _a.menuItemSelectedIcon, removeIcon = _a.removeIcon, loading = _a.loading, multiple = _a.multiple, prefixCls = _a.prefixCls;
    // Clear Icon
    var mergedClearIcon = clearIcon;
    if (!clearIcon) {
        mergedClearIcon = React.createElement(Icon, { type: "close-circle", theme: 'filled' });
    }
    // Arrow item icon
    var mergedSuffixIcon = null;
    if (suffixIcon !== undefined) {
        mergedSuffixIcon = suffixIcon;
    }
    else if (loading) {
        mergedSuffixIcon = React.createElement(Icon, { type: "loading", spin: true });
    }
    else {
        var iconCls_1 = prefixCls + "-suffix";
        mergedSuffixIcon = function (_a) {
            var open = _a.open, showSearch = _a.showSearch;
            if (open && showSearch) {
                return React.createElement(Icon, { type: "search", className: iconCls_1 });
            }
            return React.createElement(Icon, { type: "down", className: iconCls_1 });
        };
    }
    // Checked item icon
    var mergedItemIcon = null;
    if (menuItemSelectedIcon !== undefined) {
        mergedItemIcon = menuItemSelectedIcon;
    }
    else if (multiple) {
        mergedItemIcon = React.createElement(Icon, { type: "check" });
    }
    else {
        mergedItemIcon = null;
    }
    var mergedRemoveIcon = null;
    if (removeIcon !== undefined) {
        mergedRemoveIcon = removeIcon;
    }
    else {
        mergedRemoveIcon = React.createElement(Icon, { type: "close" });
    }
    return {
        clearIcon: mergedClearIcon,
        suffixIcon: mergedSuffixIcon,
        itemIcon: mergedItemIcon,
        removeIcon: mergedRemoveIcon,
    };
}

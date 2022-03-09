import * as React from 'react';
import classNames from 'classnames';
import { Icon } from 'antd';
import { isValidElement, cloneElement } from './reactNode';
export default function renderSwitcherIcon(prefixCls, switcherIcon, showLine, _a) {
    var isLeaf = _a.isLeaf, expanded = _a.expanded, loading = _a.loading;
    if (loading) {
        return React.createElement(Icon, { type: "loading", className: prefixCls + "-switcher-loading-icon" });
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
            return React.createElement(Icon, { type: "file", className: prefixCls + "-switcher-line-icon" });
        }
        return null;
    }
    var switcherCls = prefixCls + "-switcher-icon";
    if (isValidElement(switcherIcon)) {
        return cloneElement(switcherIcon, {
            className: classNames(switcherIcon.props.className || '', switcherCls),
        });
    }
    if (switcherIcon) {
        return switcherIcon;
    }
    if (showLine) {
        return expanded ? (React.createElement(Icon, { type: "minus-square", className: prefixCls + "-switcher-line-icon" })) : (React.createElement(Icon, { type: "plus-square", className: prefixCls + "-switcher-line-icon" }));
    }
    return React.createElement(Icon, { type: "caret-down", theme: 'filled', className: switcherCls });
}

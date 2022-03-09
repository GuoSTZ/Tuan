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
import React from "react";
import RcTreeSelect, { TreeNode, SHOW_ALL, SHOW_PARENT, SHOW_CHILD, } from 'rc-tree-select';
import classNames from 'classnames';
import omit from 'rc-util/lib/omit';
import { getPrefixCls, getTransitionName, renderEmpty, renderSwitcherIcon, getIcons } from './utils';
import './style/index.less';
var SizeContext = React.createContext(undefined);
// 全局默认 direction 值
var direction = "ltr";
var InternalTreeSelect = function (_a, ref) {
    var _b, _c;
    var customizePrefixCls = _a.prefixCls, customizeSize = _a.size, _d = _a.bordered, bordered = _d === void 0 ? true : _d, className = _a.className, treeCheckable = _a.treeCheckable, multiple = _a.multiple, _e = _a.listHeight, listHeight = _e === void 0 ? 256 : _e, _f = _a.listItemHeight, listItemHeight = _f === void 0 ? 26 : _f, notFoundContent = _a.notFoundContent, switcherIcon = _a.switcherIcon, treeLine = _a.treeLine, getPopupContainer = _a.getPopupContainer, dropdownClassName = _a.dropdownClassName, _g = _a.treeIcon, treeIcon = _g === void 0 ? false : _g, transitionName = _a.transitionName, _h = _a.choiceTransitionName, choiceTransitionName = _h === void 0 ? '' : _h, _j = _a.virtual, virtual = _j === void 0 ? true : _j, _k = _a.dropdownMatchSelectWidth, dropdownMatchSelectWidth = _k === void 0 ? true : _k, props = __rest(_a, ["prefixCls", "size", "bordered", "className", "treeCheckable", "multiple", "listHeight", "listItemHeight", "notFoundContent", "switcherIcon", "treeLine", "getPopupContainer", "dropdownClassName", "treeIcon", "transitionName", "choiceTransitionName", "virtual", "dropdownMatchSelectWidth"]);
    var size = React.useContext(SizeContext);
    var prefixCls = getPrefixCls('select', customizePrefixCls);
    var treePrefixCls = getPrefixCls('select-tree', customizePrefixCls);
    var treeSelectPrefixCls = getPrefixCls('tree-select', customizePrefixCls);
    var mergedDropdownClassName = classNames(dropdownClassName, treeSelectPrefixCls + "-dropdown", (_b = {},
        _b[treeSelectPrefixCls + "-dropdown-rtl"] = direction === 'rtl',
        _b));
    var isMultiple = !!(treeCheckable || multiple);
    // ===================== Icons =====================
    var _l = getIcons(__assign(__assign({}, props), { multiple: isMultiple, prefixCls: prefixCls })), suffixIcon = _l.suffixIcon, removeIcon = _l.removeIcon, clearIcon = _l.clearIcon;
    // ===================== Empty =====================
    var mergedNotFound;
    if (notFoundContent !== undefined) {
        mergedNotFound = notFoundContent;
    }
    else {
        mergedNotFound = renderEmpty('Select');
    }
    // ==================== Render =====================
    var selectProps = omit(props, [
        'suffixIcon',
        'itemIcon',
        'removeIcon',
        'clearIcon',
        'switcherIcon',
    ]);
    var mergedSize = customizeSize || size;
    var mergedClassName = classNames(!customizePrefixCls && treeSelectPrefixCls, (_c = {},
        _c[prefixCls + "-lg"] = mergedSize === 'large',
        _c[prefixCls + "-sm"] = mergedSize === 'small',
        _c[prefixCls + "-rtl"] = direction === 'rtl',
        _c[prefixCls + "-borderless"] = !bordered,
        _c), className);
    var rootPrefixCls = getPrefixCls();
    return (React.createElement(RcTreeSelect, __assign({ virtual: virtual, dropdownMatchSelectWidth: dropdownMatchSelectWidth }, selectProps, { ref: ref, prefixCls: prefixCls, className: mergedClassName, listHeight: listHeight, listItemHeight: listItemHeight, treeCheckable: treeCheckable ? React.createElement("span", { className: prefixCls + "-tree-checkbox-inner" }) : treeCheckable, treeLine: !!treeLine, inputIcon: suffixIcon, multiple: multiple, removeIcon: removeIcon, clearIcon: clearIcon, switcherIcon: function (nodeProps) {
            return renderSwitcherIcon(treePrefixCls, switcherIcon, treeLine, nodeProps);
        }, showTreeIcon: treeIcon, notFoundContent: mergedNotFound, getPopupContainer: getPopupContainer, treeMotion: null, dropdownClassName: mergedDropdownClassName, choiceTransitionName: getTransitionName(rootPrefixCls, '', choiceTransitionName), transitionName: getTransitionName(rootPrefixCls, 'slide-up', transitionName) })));
};
var TreeSelectRef = React.forwardRef(InternalTreeSelect);
var TreeSelect = TreeSelectRef;
TreeSelect.TreeNode = TreeNode;
TreeSelect.SHOW_ALL = SHOW_ALL;
TreeSelect.SHOW_PARENT = SHOW_PARENT;
TreeSelect.SHOW_CHILD = SHOW_CHILD;
export { TreeNode };
export default TreeSelect;

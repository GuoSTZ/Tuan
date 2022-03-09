"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeNode = void 0;
var react_1 = __importDefault(require("react"));
var rc_tree_select_1 = __importStar(require("rc-tree-select"));
Object.defineProperty(exports, "TreeNode", { enumerable: true, get: function () { return rc_tree_select_1.TreeNode; } });
var classnames_1 = __importDefault(require("classnames"));
var omit_1 = __importDefault(require("rc-util/lib/omit"));
var utils_1 = require("./utils");
require("./style/index.less");
var SizeContext = react_1.default.createContext(undefined);
// 全局默认 direction 值
var direction = "ltr";
var InternalTreeSelect = function (_a, ref) {
    var _b, _c;
    var customizePrefixCls = _a.prefixCls, customizeSize = _a.size, _d = _a.bordered, bordered = _d === void 0 ? true : _d, className = _a.className, treeCheckable = _a.treeCheckable, multiple = _a.multiple, _e = _a.listHeight, listHeight = _e === void 0 ? 256 : _e, _f = _a.listItemHeight, listItemHeight = _f === void 0 ? 26 : _f, notFoundContent = _a.notFoundContent, switcherIcon = _a.switcherIcon, treeLine = _a.treeLine, getPopupContainer = _a.getPopupContainer, dropdownClassName = _a.dropdownClassName, _g = _a.treeIcon, treeIcon = _g === void 0 ? false : _g, transitionName = _a.transitionName, _h = _a.choiceTransitionName, choiceTransitionName = _h === void 0 ? '' : _h, _j = _a.virtual, virtual = _j === void 0 ? true : _j, _k = _a.dropdownMatchSelectWidth, dropdownMatchSelectWidth = _k === void 0 ? true : _k, props = __rest(_a, ["prefixCls", "size", "bordered", "className", "treeCheckable", "multiple", "listHeight", "listItemHeight", "notFoundContent", "switcherIcon", "treeLine", "getPopupContainer", "dropdownClassName", "treeIcon", "transitionName", "choiceTransitionName", "virtual", "dropdownMatchSelectWidth"]);
    var size = react_1.default.useContext(SizeContext);
    var prefixCls = utils_1.getPrefixCls('select', customizePrefixCls);
    var treePrefixCls = utils_1.getPrefixCls('select-tree', customizePrefixCls);
    var treeSelectPrefixCls = utils_1.getPrefixCls('tree-select', customizePrefixCls);
    var mergedDropdownClassName = classnames_1.default(dropdownClassName, treeSelectPrefixCls + "-dropdown", (_b = {},
        _b[treeSelectPrefixCls + "-dropdown-rtl"] = direction === 'rtl',
        _b));
    var isMultiple = !!(treeCheckable || multiple);
    // ===================== Icons =====================
    var _l = utils_1.getIcons(__assign(__assign({}, props), { multiple: isMultiple, prefixCls: prefixCls })), suffixIcon = _l.suffixIcon, removeIcon = _l.removeIcon, clearIcon = _l.clearIcon;
    // ===================== Empty =====================
    var mergedNotFound;
    if (notFoundContent !== undefined) {
        mergedNotFound = notFoundContent;
    }
    else {
        mergedNotFound = utils_1.renderEmpty('Select');
    }
    // ==================== Render =====================
    var selectProps = omit_1.default(props, [
        'suffixIcon',
        'itemIcon',
        'removeIcon',
        'clearIcon',
        'switcherIcon',
    ]);
    var mergedSize = customizeSize || size;
    var mergedClassName = classnames_1.default(!customizePrefixCls && treeSelectPrefixCls, (_c = {},
        _c[prefixCls + "-lg"] = mergedSize === 'large',
        _c[prefixCls + "-sm"] = mergedSize === 'small',
        _c[prefixCls + "-rtl"] = direction === 'rtl',
        _c[prefixCls + "-borderless"] = !bordered,
        _c), className);
    var rootPrefixCls = utils_1.getPrefixCls();
    return (react_1.default.createElement(rc_tree_select_1.default, __assign({ virtual: virtual, dropdownMatchSelectWidth: dropdownMatchSelectWidth }, selectProps, { ref: ref, prefixCls: prefixCls, className: mergedClassName, listHeight: listHeight, listItemHeight: listItemHeight, treeCheckable: treeCheckable ? react_1.default.createElement("span", { className: prefixCls + "-tree-checkbox-inner" }) : treeCheckable, treeLine: !!treeLine, inputIcon: suffixIcon, multiple: multiple, removeIcon: removeIcon, clearIcon: clearIcon, switcherIcon: function (nodeProps) {
            return utils_1.renderSwitcherIcon(treePrefixCls, switcherIcon, treeLine, nodeProps);
        }, showTreeIcon: treeIcon, notFoundContent: mergedNotFound, getPopupContainer: getPopupContainer, treeMotion: null, dropdownClassName: mergedDropdownClassName, choiceTransitionName: utils_1.getTransitionName(rootPrefixCls, '', choiceTransitionName), transitionName: utils_1.getTransitionName(rootPrefixCls, 'slide-up', transitionName) })));
};
var TreeSelectRef = react_1.default.forwardRef(InternalTreeSelect);
var TreeSelect = TreeSelectRef;
TreeSelect.TreeNode = rc_tree_select_1.TreeNode;
TreeSelect.SHOW_ALL = rc_tree_select_1.SHOW_ALL;
TreeSelect.SHOW_PARENT = rc_tree_select_1.SHOW_PARENT;
TreeSelect.SHOW_CHILD = rc_tree_select_1.SHOW_CHILD;
exports.default = TreeSelect;

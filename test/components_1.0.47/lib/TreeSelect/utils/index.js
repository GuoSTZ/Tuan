"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIcons = exports.renderSwitcherIcon = exports.renderEmpty = exports.getTransitionName = exports.getPrefixCls = void 0;
var renderEmpty_1 = __importDefault(require("./renderEmpty"));
exports.renderEmpty = renderEmpty_1.default;
var renderSwitcherIcon_1 = __importDefault(require("./renderSwitcherIcon"));
exports.renderSwitcherIcon = renderSwitcherIcon_1.default;
var getIcons_1 = __importDefault(require("./getIcons"));
exports.getIcons = getIcons_1.default;
// 类名前缀设置
var getPrefixCls = function (suffixCls, customizePrefixCls) {
    if (customizePrefixCls)
        return customizePrefixCls;
    return suffixCls ? "ant-" + suffixCls : 'ant';
};
exports.getPrefixCls = getPrefixCls;
var getTransitionName = function (rootPrefixCls, motion, transitionName) {
    if (transitionName !== undefined) {
        return transitionName;
    }
    return rootPrefixCls + "-" + motion;
};
exports.getTransitionName = getTransitionName;

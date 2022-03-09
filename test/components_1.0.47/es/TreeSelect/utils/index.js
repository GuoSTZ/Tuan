import renderEmpty from './renderEmpty';
import renderSwitcherIcon from './renderSwitcherIcon';
import getIcons from './getIcons';
// 类名前缀设置
var getPrefixCls = function (suffixCls, customizePrefixCls) {
    if (customizePrefixCls)
        return customizePrefixCls;
    return suffixCls ? "ant-" + suffixCls : 'ant';
};
var getTransitionName = function (rootPrefixCls, motion, transitionName) {
    if (transitionName !== undefined) {
        return transitionName;
    }
    return rootPrefixCls + "-" + motion;
};
export { getPrefixCls, getTransitionName, renderEmpty, renderSwitcherIcon, getIcons };

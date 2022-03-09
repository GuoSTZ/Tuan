import renderEmpty from './renderEmpty';
import renderSwitcherIcon from './renderSwitcherIcon';
import getIcons from './getIcons';
declare const getPrefixCls: (suffixCls?: string | undefined, customizePrefixCls?: string | undefined) => string;
declare const getTransitionName: (rootPrefixCls: string, motion: string, transitionName?: string | undefined) => string;
export { getPrefixCls, getTransitionName, renderEmpty, renderSwitcherIcon, getIcons };

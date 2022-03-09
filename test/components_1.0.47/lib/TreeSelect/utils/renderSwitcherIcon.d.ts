import * as React from 'react';
import { AntTreeNodeProps } from 'antd/lib/tree/Tree';
export default function renderSwitcherIcon(prefixCls: string, switcherIcon: React.ReactNode, showLine: boolean | {
    showLeafIcon: boolean;
} | undefined, { isLeaf, expanded, loading }: AntTreeNodeProps): {} | null;

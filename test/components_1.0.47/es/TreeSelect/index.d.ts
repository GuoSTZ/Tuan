import React from "react";
import { TreeNode, SHOW_ALL, SHOW_PARENT, SHOW_CHILD, TreeSelectProps as RcTreeSelectProps } from 'rc-tree-select';
import { DefaultValueType } from 'rc-tree-select/lib/interface';
import { TreeProps } from 'antd/lib/tree';
import './style/index.less';
export interface TreeSelectProps<T> extends Omit<RcTreeSelectProps<T>, 'showTreeIcon' | 'treeMotion' | 'inputIcon' | 'mode' | 'getInputElement' | 'backfill' | 'treeLine'> {
    suffixIcon?: React.ReactNode;
    size?: SizeType;
    bordered?: boolean;
    treeLine?: TreeProps['showLine'];
}
export interface RefTreeSelectProps {
    focus: () => void;
    blur: () => void;
}
declare type SizeType = 'small' | 'middle' | 'large' | undefined;
declare const TreeSelectRef: <T extends DefaultValueType>(props: TreeSelectProps<T> & {
    ref?: ((instance: RefTreeSelectProps | null) => void) | React.RefObject<RefTreeSelectProps> | null | undefined;
}) => React.ReactElement;
declare type InternalTreeSelectType = typeof TreeSelectRef;
interface TreeSelectInterface extends InternalTreeSelectType {
    TreeNode: typeof TreeNode;
    SHOW_ALL: typeof SHOW_ALL;
    SHOW_PARENT: typeof SHOW_PARENT;
    SHOW_CHILD: typeof SHOW_CHILD;
}
declare const TreeSelect: TreeSelectInterface;
export { TreeNode };
export default TreeSelect;

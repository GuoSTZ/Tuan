import * as React from 'react';
import { ButtonGroupProps } from 'antd/es/button';
import CustomButton from './Button';
interface ButtonGroupsType extends ButtonGroupProps {
    /**
     * 点击事件监听
     */
    handleClick: (actionkey: string) => void;
    /**
     * 子组件
     */
    children: React.ReactElement<CustomButton> | React.ReactElement<CustomButton>[];
    /**
     * 显示模式 ButtonGroup 和 ButtonMenu
     */
    mode: 'ButtonGroup' | 'ButtonMenu';
    /**
     * 最多显示个数
     */
    showSize: number;
    /**
     * Button 显示模式 text、icon、both
     */
    viewMode: 'text' | 'icon' | 'both';
    overlayClassName?: string;
}
export declare class ButtonGroups extends React.Component<ButtonGroupsType> {
    static CustomButton: typeof CustomButton;
    static defaultProps: {
        showSize: number;
        handleClick: (actionkey: string) => void;
        viewMode: string;
        mode: string;
    };
    filterChildren(childrenArray: any): any;
    formatTooltipTitle(item: any): string;
    completeIconProp(): void;
    renderNormalChild(it: any, idx: number): React.ReactNode;
    renderConfirmChild(it: any, idx: number): React.ReactNode;
    renderReactElement(it: any, idx: number): React.ReactNode;
    renderButtonOnly(): React.ReactNode[];
    renderMenuChild(it: any, idx: number): React.ReactNode;
    renderMenuItem(itemList: any): JSX.Element;
    renderMixButtonMenu(): React.ReactNode;
    renderChildren(): JSX.Element;
    render(): JSX.Element;
}
export default ButtonGroups;

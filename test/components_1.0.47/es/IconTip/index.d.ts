import React, { ReactNode } from 'react';
import { TooltipProps } from 'antd/lib/tooltip';
import './index.css';
declare type RenderFunction = () => React.ReactNode;
export interface IconTipProps {
    /**
     * 提示语句
     */
    tip: string | ReactNode | RenderFunction;
    /**
     * 展示文字
     */
    text?: string | ReactNode;
    /**
     * 指定展示图标的颜色，有四种选择 success，info，warning，error
     */
    type?: ColorType;
    /**
     * 展示图标为问号还是感叹号，目前仅内置该两种模式，默认为问号
     */
    iconType?: IconType;
    /**
     * 自定义图标
     */
    icon?: ReactNode;
    /**
     * ToolTip组件属性
     */
    tipProps?: TooltipProps;
    /**
     * 图标相对于展示文字的位置，有两种选择 left，rigth
     */
    placement?: IconPlacement;
    /**
     * 是否显示图标，默认显示
     */
    showIcon?: boolean;
    /**
     * 是否对文字进行溢出隐藏处理
     */
    ellipsis?: boolean;
}
interface IconTipState {
}
declare type ColorType = 'success' | 'info' | 'warning' | 'error';
declare type IconType = 'question' | 'exclamation';
declare type IconPlacement = 'left' | 'right';
declare type AnyObject = Record<any, any>;
declare type RenderProps = undefined | AnyObject | ((originProps: AnyObject) => AnyObject | undefined);
export declare class IconTip extends React.Component<IconTipProps, IconTipState> {
    prefixCls: string;
    static defaultProps: {
        iconType: string;
        placement: string;
        ellipsis: boolean;
    };
    renderDefaultIcon(type?: ColorType): ReactNode;
    replaceElement(element: ReactNode, replacement: ReactNode, props: RenderProps): ReactNode;
    renderIconNode: () => ReactNode;
    renderTootip(tip: string | ReactNode | RenderFunction, children: any): ReactNode;
    renderText(text: string | ReactNode, ellipsis?: boolean): {} | null | undefined;
    renderComponent(): ReactNode;
    render(): JSX.Element;
}
export {};

import { FunctionComponent } from 'react';
import './index.css';
interface EchartsProps {
    echartType?: 'line' | 'bar' | 'pie';
    dataInfo: any;
    columnsName: any;
    colors: string[];
    smooth?: boolean;
    isArea?: boolean;
    areaColors?: string[];
    unit?: string;
    margin?: MarginProps;
    isNeedLegendUnder?: boolean;
    peakValue?: Array<PeakInfo>;
    yPeckIndex?: number[];
    legendConfig?: LegendConfig;
    titleConfig?: TitleConfig;
    basicConfig?: BasicConfig;
    tooltipConfig?: TooltipConfig;
    axisConfig?: AxisConfig;
    markLineConfig?: MarkLineConfig;
    options?: any;
    otherProps: any;
    loading?: any;
    barMaxWidth?: any;
}
interface PeakInfo {
    peak: number;
    peakTime: string;
}
interface MarginProps {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
}
interface LegendConfig {
    show: boolean;
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
    icon?: 'circle' | 'rect' | 'roundRect' | 'triangle' | 'diamond' | 'pin' | 'arrow' | 'none';
    itemWidth?: number;
    itemHeight?: number;
    itemGap?: number;
}
interface TitleConfig {
    titleName?: string;
    showLogo?: any;
    fontSize?: number;
    fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter';
    logoWidth?: number;
    logoHeight?: number;
}
interface BasicConfig {
    backgroundColor?: string;
}
interface TooltipConfig {
    backgroundColor?: string;
    borderWidth?: number;
    textTitleColor?: string;
    textTitleWeight?: 'bold' | 'bolder' | 'light' | 'lighter' | 'normal' | number;
    textColor?: string;
    toolTipFormatter?: Function;
}
interface AxisConfig {
    xColor?: string;
    xLineShow?: boolean;
    xTickShow?: boolean;
    xTickAlign?: 'down' | 'up';
    xLabelAlign?: 'left' | 'center' | 'right';
    yColor?: string;
    yLineShow?: boolean;
    yTickShow?: boolean;
    yTickAlign?: 'left' | 'right';
    yLabelAlign?: 'left' | 'right';
    ySplitLineShow?: boolean;
    ySplitLineStyle?: 'solid' | 'dashed' | 'dotted';
    ySplitLineColor?: string;
    yMax?: number;
    yNeedUnit?: boolean;
}
interface MarkLineConfig {
    show?: boolean;
    value?: number;
    lineColor?: string;
    lineWidth?: number;
}
export declare const Echart: FunctionComponent<EchartsProps>;
export {};

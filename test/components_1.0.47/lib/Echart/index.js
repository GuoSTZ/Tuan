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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Echart = void 0;
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var echarts = __importStar(require("echarts"));
require("./index.css");
var filesize_1 = __importDefault(require("filesize"));
var size = filesize_1.default.partial({ base: 2, standard: "jedec" }); // filesize标准设置
exports.Echart = function (props) {
    var myRef = react_1.useRef(null);
    var echartType = props.echartType, dataInfo = props.dataInfo, columnsName = props.columnsName, colors = props.colors, smooth = props.smooth, unit = props.unit, options = props.options, margin = props.margin, peakValue = props.peakValue, yPeckIndex = props.yPeckIndex, otherProps = props.otherProps, isArea = props.isArea, isNeedLegendUnder = props.isNeedLegendUnder, areaColors = props.areaColors, legendConfig = props.legendConfig, titleConfig = props.titleConfig, basicConfig = props.basicConfig, tooltipConfig = props.tooltipConfig, axisConfig = props.axisConfig, markLineConfig = props.markLineConfig, loading = props.loading, barMaxWidth = props.barMaxWidth;
    var toolTipFormatter;
    var yAxisLabelFormatter;
    var series = [];
    var grid = {
        top: (margin === null || margin === void 0 ? void 0 : margin.top) || 50,
        left: (margin === null || margin === void 0 ? void 0 : margin.left) || 55,
        right: (margin === null || margin === void 0 ? void 0 : margin.right) || 30,
        bottom: (margin === null || margin === void 0 ? void 0 : margin.bottom) || 20
    };
    var legend = {
        top: (legendConfig === null || legendConfig === void 0 ? void 0 : legendConfig.top) || 2,
        right: (legendConfig === null || legendConfig === void 0 ? void 0 : legendConfig.right) || 0,
        bottom: (legendConfig === null || legendConfig === void 0 ? void 0 : legendConfig.bottom) || 0,
        left: (legendConfig === null || legendConfig === void 0 ? void 0 : legendConfig.left) || 120,
        data: columnsName,
        icon: (legendConfig === null || legendConfig === void 0 ? void 0 : legendConfig.icon) || 'rect',
        itemWidth: (legendConfig === null || legendConfig === void 0 ? void 0 : legendConfig.itemWidth) || 20,
        itemHeight: (legendConfig === null || legendConfig === void 0 ? void 0 : legendConfig.itemHeight) || 4,
        itemGap: (legendConfig === null || legendConfig === void 0 ? void 0 : legendConfig.itemGap) || 15
    };
    var titleInfo = {
        text: (titleConfig === null || titleConfig === void 0 ? void 0 : titleConfig.showLogo) ? "{logo|}{textLogo|" + ((titleConfig === null || titleConfig === void 0 ? void 0 : titleConfig.titleName) ? titleConfig === null || titleConfig === void 0 ? void 0 : titleConfig.titleName : '') + "}"
            : "{text|" + ((titleConfig === null || titleConfig === void 0 ? void 0 : titleConfig.titleName) ? titleConfig === null || titleConfig === void 0 ? void 0 : titleConfig.titleName : '') + "}",
        textStyle: {
            fontWeight: (titleConfig === null || titleConfig === void 0 ? void 0 : titleConfig.fontWeight) || 'normal',
            rich: {
                logo: {
                    height: (titleConfig === null || titleConfig === void 0 ? void 0 : titleConfig.logoHeight) || 30,
                    width: (titleConfig === null || titleConfig === void 0 ? void 0 : titleConfig.logoWidth) || 30,
                    backgroundColor: {
                        image: titleConfig === null || titleConfig === void 0 ? void 0 : titleConfig.showLogo
                    }
                },
                text: {
                    fontSize: (titleConfig === null || titleConfig === void 0 ? void 0 : titleConfig.fontSize) || 16
                },
                textLogo: {
                    fontSize: (titleConfig === null || titleConfig === void 0 ? void 0 : titleConfig.fontSize) || 16,
                    padding: [0, 0, 0, 10]
                }
            }
        }
    };
    // 处理y轴展示格式和tooltip展示格式
    var dealSomeFormatter = function () {
        if (tooltipConfig === null || tooltipConfig === void 0 ? void 0 : tooltipConfig.toolTipFormatter) {
            toolTipFormatter = tooltipConfig === null || tooltipConfig === void 0 ? void 0 : tooltipConfig.toolTipFormatter;
        }
        else {
            if (unit) {
                toolTipFormatter = function (params) {
                    var str = '';
                    str += "<span style=\"color:" + ((tooltipConfig === null || tooltipConfig === void 0 ? void 0 : tooltipConfig.textTitleColor) ? tooltipConfig === null || tooltipConfig === void 0 ? void 0 : tooltipConfig.textTitleColor : '#fff') + ";font-weight:" + ((tooltipConfig === null || tooltipConfig === void 0 ? void 0 : tooltipConfig.textTitleWeight) ? tooltipConfig === null || tooltipConfig === void 0 ? void 0 : tooltipConfig.textTitleWeight : 'normal') + "\">" + params[0].name + "</span></br>";
                    if (params.length > 0) {
                        for (var i = 0; i < params.length; i++) {
                            var val = '';
                            if (unit === 'bps') {
                                val = size(Number(params[i].value / 8)) + '/s';
                            }
                            else if (unit === 'B' || unit === 'KB' || unit === 'MB') {
                                val = size(Number(params[i].value)) + '/s';
                            }
                            else {
                                val = params[i].value + unit;
                            }
                            str += "<span style=\"display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:" + params[i].color + "\"></span>" + params[i].seriesName + "\uFF1A" + val + "</br>";
                        }
                    }
                    return str;
                };
                if ((axisConfig === null || axisConfig === void 0 ? void 0 : axisConfig.yNeedUnit) && (axisConfig === null || axisConfig === void 0 ? void 0 : axisConfig.yNeedUnit) == true) {
                    if (unit === 'bps') {
                        yAxisLabelFormatter = function (value) {
                            return size(Number(value / 8)) + '/s';
                        };
                    }
                    else if (unit === 'B' || unit === 'KB' || unit === 'MB') {
                        yAxisLabelFormatter = function (value) {
                            return size(Number(value)) + '/s';
                        };
                    }
                    else {
                        yAxisLabelFormatter = "{value}" + unit;
                    }
                }
                else {
                    yAxisLabelFormatter = "{value}";
                }
            }
            else {
                toolTipFormatter = function (params) {
                    var str = '';
                    str += params[0].name + "</br>";
                    if (params.length > 0) {
                        for (var i = 0; i < params.length; i++) {
                            str += "<span style=\"display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:" + params[i].color + "\"></span>" + params[i].seriesName + "\uFF1A" + params[i].value + "</br>";
                        }
                    }
                    return str;
                };
                yAxisLabelFormatter = "{value}";
            }
        }
    };
    // 处理y轴数据信息
    var dealSeries = function () {
        var _a;
        (_a = dataInfo === null || dataInfo === void 0 ? void 0 : dataInfo.yData) === null || _a === void 0 ? void 0 : _a.map(function (item, index) {
            var seriesObj = {
                name: columnsName === null || columnsName === void 0 ? void 0 : columnsName[index],
                type: echartType || 'line',
                smooth: smooth && smooth === true ? true : false,
                showSymbol: false,
                symbolSize: 9,
                data: (item === null || item === void 0 ? void 0 : item.data) || []
            };
            if (echartType === 'pie') {
                var yData_1 = [];
                item.data.map(function (val, index) {
                    var obj = {};
                    obj.value = val;
                    obj.name = columnsName[index];
                    yData_1.push(obj); // 数据格式是[{value:20,name:'cpu信息'}]
                });
                seriesObj.data = yData_1;
            }
            //柱状图需要设置barMaxWidth最大宽度
            if (echartType === 'bar') {
                seriesObj.barMaxWidth = barMaxWidth;
            }
            // 这里是饼图的时候，加上markline配置会报错，去除
            if (markLineConfig && (markLineConfig === null || markLineConfig === void 0 ? void 0 : markLineConfig.show) &&
                (markLineConfig === null || markLineConfig === void 0 ? void 0 : markLineConfig.show) == true &&
                echartType !== 'pie') {
                seriesObj.markLine = {
                    symbol: 'none',
                    data: [
                        {
                            type: 'average',
                            yAxis: (markLineConfig === null || markLineConfig === void 0 ? void 0 : markLineConfig.value) || 50,
                        }
                    ],
                    label: {
                        show: true,
                        formatter: "{c}" + (unit ? unit : '')
                    },
                    lineStyle: {
                        color: (markLineConfig === null || markLineConfig === void 0 ? void 0 : markLineConfig.lineColor) || '#ef6965',
                        width: (markLineConfig === null || markLineConfig === void 0 ? void 0 : markLineConfig.lineWidth) || 1.5
                    }
                };
            }
            if (isArea && isArea == true) {
                if (areaColors) {
                    seriesObj.areaStyle = {
                        color: areaColors[index],
                        opacity: 0.5,
                        origin: 'start'
                    };
                }
                else {
                    seriesObj.areaStyle = {
                        color: colors[index],
                        opacity: 0.5,
                        origin: 'start'
                    };
                }
                // seriesObj.lineStyle = {
                //   opacity: 0 // 线的边框不显示
                // }
            }
            series.push(seriesObj);
        });
    };
    // 处理option
    var dealOption = function (option) {
        var newOption = option;
        // 如果需要legend，则添加上
        if (legendConfig && legendConfig.show == true) {
            newOption = __assign(__assign({}, option), { legend: legend });
        }
        // 如果有手动修改的配置
        if (options) {
            // newOption = {...option, ...options};
            newOption = mergeO(newOption, options);
        }
        return newOption;
    };
    var isObject = function (obj) {
        return Object.prototype.toString.call(obj) === '[object Object]';
    };
    var mergeO = function (dest, src) {
        Object.keys(src).forEach(function (key) {
            var srcVal = src[key];
            var destVal = dest[key] || {};
            if (isObject(srcVal)) {
                dest[key] = mergeO(destVal, srcVal);
            }
            else if (Array.isArray(srcVal)) {
                dest[key] = srcVal.reduce(function (acc, curr, index) {
                    acc[index] = isObject(curr) ? mergeO(acc[index], curr) : curr;
                    return acc;
                }, destVal);
            }
            else {
                dest[key] = srcVal;
            }
        });
        return dest;
    };
    var chartInstance = null;
    react_1.useEffect(function () {
        dealSomeFormatter();
        dealSeries();
        // 实例化对象
        var myChart = echarts.getInstanceByDom(myRef.current);
        if (myChart) {
            chartInstance = myChart;
        }
        else {
            chartInstance = echarts.init(myRef === null || myRef === void 0 ? void 0 : myRef.current);
        }
        // 配置
        var option = {
            title: titleInfo,
            backgroundColor: (basicConfig === null || basicConfig === void 0 ? void 0 : basicConfig.backgroundColor) || 'transparent',
            grid: grid,
            tooltip: {
                trigger: 'axis',
                formatter: toolTipFormatter,
                backgroundColor: (tooltipConfig === null || tooltipConfig === void 0 ? void 0 : tooltipConfig.backgroundColor) || 'rgba(0, 0, 0, 0.5)',
                borderWidth: (tooltipConfig === null || tooltipConfig === void 0 ? void 0 : tooltipConfig.borderWidth) || 0,
                textStyle: {
                    color: (tooltipConfig === null || tooltipConfig === void 0 ? void 0 : tooltipConfig.textColor) || '#fff'
                }
            },
            color: colors,
            series: series
        };
        if (echartType !== 'pie') {
            option.xAxis = {
                type: 'category',
                boundaryGap: echartType === 'bar' ? true : false,
                axisLine: {
                    //坐标轴轴线相关设置。数学上的x轴
                    show: (axisConfig === null || axisConfig === void 0 ? void 0 : axisConfig.xLineShow) == false ? false : true,
                    lineStyle: {
                        color: (axisConfig === null || axisConfig === void 0 ? void 0 : axisConfig.xColor) || '#a19fa1' // 横坐标轴的颜色和文字颜色
                    }
                },
                axisTick: {
                    show: (axisConfig === null || axisConfig === void 0 ? void 0 : axisConfig.xTickShow) == false ? false : true,
                    inside: (axisConfig === null || axisConfig === void 0 ? void 0 : axisConfig.xTickAlign) === 'up' ? true : false //X轴刻度 false在X轴下 true在X轴上
                },
                axisLabel: {
                    // interval: 0, // 显示所有x轴的数据
                    align: (axisConfig === null || axisConfig === void 0 ? void 0 : axisConfig.xLabelAlign) || 'left'
                },
                data: (dataInfo === null || dataInfo === void 0 ? void 0 : dataInfo.xData) || []
            };
            option.yAxis = {
                type: 'value',
                axisLine: {
                    show: (axisConfig === null || axisConfig === void 0 ? void 0 : axisConfig.yLineShow) == false ? false : true,
                    lineStyle: {
                        color: (axisConfig === null || axisConfig === void 0 ? void 0 : axisConfig.yColor) || '#a19fa1'
                    }
                },
                axisLabel: {
                    formatter: yAxisLabelFormatter,
                    inside: (axisConfig === null || axisConfig === void 0 ? void 0 : axisConfig.yLabelAlign) === 'right' ? true : false //Y轴标签 false在Y轴左 true在Y轴右
                },
                axisTick: {
                    show: (axisConfig === null || axisConfig === void 0 ? void 0 : axisConfig.yTickShow) || false,
                    inside: (axisConfig === null || axisConfig === void 0 ? void 0 : axisConfig.yTickAlign) === 'left' ? false : true //Y轴刻度 false在Y轴左 true在Y轴右
                },
                splitLine: {
                    show: (axisConfig === null || axisConfig === void 0 ? void 0 : axisConfig.ySplitLineShow) == false ? false : true,
                    lineStyle: {
                        color: (axisConfig === null || axisConfig === void 0 ? void 0 : axisConfig.ySplitLineColor) || '#e6e6e6',
                        type: (axisConfig === null || axisConfig === void 0 ? void 0 : axisConfig.ySplitLineStyle) || 'solid'
                    }
                }
            };
            if (axisConfig === null || axisConfig === void 0 ? void 0 : axisConfig.yMax) {
                option.yAxis.max = axisConfig === null || axisConfig === void 0 ? void 0 : axisConfig.yMax;
            }
        }
        option = dealOption(option);
        chartInstance.setOption(option);
        window.addEventListener("resize", function () {
            chartInstance.resize();
        });
    }, [props]);
    var someInfo = function () {
        return (react_1.default.createElement("div", { className: 'someInfo' },
            peakInfo(),
            react_1.default.createElement("div", { style: { clear: 'both' } })));
    };
    var peakInfo = function () {
        return peakValue ? (react_1.default.createElement("div", { className: 'allPeak' }, peakValue === null || peakValue === void 0 ? void 0 : peakValue.map(function (peak, index) {
            return (react_1.default.createElement(antd_1.Tooltip, { placement: 'top', title: "\u53D1\u751F\u4E8E" + (peak === null || peak === void 0 ? void 0 : peak.peakTime) },
                react_1.default.createElement("div", { className: 'peakValue', onClick: function () {
                        searchPoint(index);
                    } },
                    columnsName[index],
                    "\u5CF0\u503C\uFF1A", peak === null || peak === void 0 ? void 0 :
                    peak.peak,
                    unit)));
        }))) : null;
    };
    var searchPoint = function (index) {
        if (yPeckIndex) {
            chartInstance.dispatchAction({
                type: 'showTip',
                seriesIndex: index,
                dataIndex: yPeckIndex[index]
            });
        }
    };
    var legendUnder = function () {
        return (react_1.default.createElement("div", { className: 'legendUnder' }, colors === null || colors === void 0 ? void 0 : colors.map(function (color, index) {
            return (react_1.default.createElement("span", null,
                react_1.default.createElement("span", { className: 'point', style: { backgroundColor: color } }),
                columnsName[index],
                "\u00A0\u00A0\u00A0\u00A0"));
        })));
    };
    var actions = otherProps.actions, spins = otherProps.spins;
    return (react_1.default.createElement(antd_1.Spin, { spinning: loading || false },
        someInfo(),
        react_1.default.createElement("div", { className: 'echartsNode', ref: myRef }),
        isNeedLegendUnder && isNeedLegendUnder == true ? legendUnder() : null));
};

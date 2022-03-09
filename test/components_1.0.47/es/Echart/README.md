# Echart组件

> Echart组件用于折线图、树状图、饼图的绘制。

## 简单使用

```tsx
import {Echart} from '@soc/components';
<Echart
  dataInfo={this.state.cpuInfo}
  columnsName={['CPU使用率']}
  colors={['#3385FF']}
  otherProps={this.props}/>
```

## 复杂使用

```tsx
import {Echart} from '@soc/components';
<Echart
  dataInfo={cpuInfo}
  echartType={'bar'}
  columnsName={['CPU使用率']} 
  colors={['pink']}
  smooth={true}
  isArea={true}
  areaColors={['#f8f2fa']}
  unit={'%'}
  margin={{
    top: 50,
    right: 30,
    bottom: 30,
    left: 40
  }}
  isNeedLegendUnder={true}
  markLineConfig={{
    show: true,
    value: 99,
    name: 'cpu平均值',
    lineColor: 'blue',
    lineWidth: 2
  }}
  peakValue={[{peak:90,peakTime:'2021-09-21 00:00:00'}]}
  yPeckIndex={[2]}
  legendConfig={{
    show:true,
    top: 10,
    right: 0,
    left: 150,
    bottom: 0,
    icon: 'circle',
    itemWidth: 10,
    itemHeight: 10,
    itemGap: 18
  }}
  titleConfig={{
    titleName: 'CPU使用率',
    showLogo:require('../image/cpu.png'),
    fontSize: 16,
    fontWeight: 'bolder',
    logoWidth: 25,
    logoHeight: 25
  }}
  basicConfig={{
    backgroundColor:'#ffe9db'
  }}
  tooltipConfig={{
    backgroundColor:'black',
    borderWidth: 1,
    textColor: 'green',
    textTitleColor: '#48515C',
    textTitleWeight: 'bold'
  }}
  axisConfig={{
    xLineShow: true,
    xColor: '#e3c5ed',
    xTickShow: true,
    xTickAlign: 'up',
    xLabelAlign: 'center',
    yLineShow: true,
    yColor: 'green',
    yLabelAlign: 'left',
    yTickAlign: 'right',
    ySplitLineShow: true,
    ySplitLineColor: 'orange',
    ySplitLineStyle: 'dashed',
    yMax: 100,
    yNeedUnit: true
  }}
  otherProps={props}/>
```

### dataInfo具体格式说明

1. 如果是折现图or柱状图，则参考如下：

```json
{
  "xData": [
    "15:09:30",
    "16:09:30",
    "17:09:30",
    "18:09:30",
    "19:09:30",
    "20:09:30",
    "21:09:30"
  ],
  "yData": [
    {
      "data": [
        20,
        32,
        90,
        34,
        60,
        30,
        20
      ]
    }
  ]
}
```

2. 如果是饼图，则数据格式为下：

```json
{
  "yData": [
    {
      "data": [
        20,
        32,
        90,
        34,
        60,
        30,
        20
      ]
    }
	]
}
```



## Option

|       参数        | 说明                                                         | 类型                                                         | 默认                                                         | 必填 |
| :---------------: | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ---- |
|    echartType     | 图表类型（line是折现图，bar是柱状图，pie是饼图）             | 'line' \| 'bar' \| 'pie'                                     | line                                                         | 否   |
|     dataInfo      | 图表x轴和y轴数据，具体数据格式见上述示例                     | Object                                                       | -                                                            | 是   |
|    columnsName    | 字段名称，有几个字段写几个，如["网络接收","网络发送"]        | string[]                                                     | -                                                            | 是   |
|      colors       | 每个字段对应的线条（折线or柱状）或区块（饼图）的颜色，如['#fff','red'] | string[]                                                     | -                                                            | 是   |
|      smooth       | true为曲线图，false为折线图                                  | boolean                                                      | false                                                        | 否   |
|      isArea       | true为面积图，false为线性图                                  | boolean                                                      | false                                                        | 否   |
|    areaColors     | 面积的颜色，isArea为true时生效，如['#fff','red']             | string[]                                                     | colors                                                       | 否   |
|       unit        | y轴数据单位                                                  | string                                                       | 不展示                                                       | 否   |
|      margin       | 对象类型，表示间距设置包含top,right,bottom,left,如{top:20,right:30} | MarginProps，各项参数均为number                              | {<br/>  top:50,<br/>  right:55,<br/>  bottom:30,<br/>  left:20<br/>} | 否   |
|     peakValue     | 图右上角显示峰值信息，鼠标移动上去会有峰值发生时间，示例：[{peak:90,peakTime:'2021-09-21 00:00:00'}]，有几个字段就几个对象 | Array<PeakInfo>                                              | 不展示                                                       | 否   |
|    yPeckIndex     | 在有峰值的情况下，点击峰值数轴线会自动移动展示图表最后一个峰值tooltip信息的索引值，如:[2],有几个字段就几个数值 | number[]                                                     | 不展示                                                       | 否   |
|    yPeckIndex     | 在有峰值的情况下，点击峰值数轴线会自动移动展示图表最后一个峰值tooltip信息的索引值，如:[2],有几个字段就几个数值 | number[]                                                     | 不展示                                                       | 否   |
|   legendConfig    | 对象类型，表示legend信息设置包括：{<br>  show： 是否展示legend<br/>  top： 上边距<br/>  right：右边距<br/>  bottom：下边距<br/>  left： 左边距<br/>  icon： 前缀图标类型<br/>  itemWidth：前缀图标的宽度<br/>  itemHeight：前缀图标的高度<br/>  itemGap： 每个lenged间隔的距离<br/>} | LegendConfig。其中show:boolean;<br>icon取值<br/>'circle'\|<br/>'rect'\|<br>'roundRect'\|<br/>'triangle'\|<br/>'diamond'\|<br>'pin'\|<br/>'arrow'\|<br/>'none';<br/>其余各项均为number | 不展示，<br/>展示时icon默认是'rect',<br/>top是2，<br/>right是0，<br/>bottom是0，<br/>left是120，<br/>itemWidth是20，<br/>itemHeight是4，<br/>itemGap是15 | 否   |
| isNeedLegendUnder | legend置于图表的下方，偶尔会使用                             | boolean                                                      | 默认false不展示                                              | 否   |
|    titleConfig    | 对象类型，表示标题信息设置。包括：{<br>  titleName：图表的标题<br>  showLogo： 标题所带的logo<br>  fontSize：标题字体大小<br>  fontWeight：标题字体粗细<br>  logoWidth：logo宽度<br>  logoHeight： logo高度<br>} | TitleConfig。其中<br>titleName:string;<br>showLogo:requre(url的形式);<br>fontSize: number<br>fontWeight:number或bold等<br>logoWidth: number<br>logoHight:number | 默认不展示，如果设置了标题就展示标题，如果设置了logo就展示logo | 否   |
|    basicConfig    | 对象类型，表示基础配置。包括{<br>  backgroundColor：整个echart的背景颜色<br>} | BasicConfig。其中backgroundColor:string                      | 默认白色背景                                                 | 否   |
|   tooltipConfig   | 对象类型，表示鼠标移动到图表中展示的tooltip弹框设置。包括<br>  backgroundColor：展示框的背景色<br>  borderWidth：展示框的边框大小<br>  textTitleColor：展示框中标题颜色<br>  textTitleWeight：展示框中标题的粗细<br>  textColor：展示框中字体颜色<br>} | TooltipConfig。其中<br>backgroundColor:string<br>borderWidth:number<br>textTitleColor: string<br>textTitleWeight:number<br>textColor: string | 默认背景黑色，字体白色，边框为0                              | 否   |
|    axisConfig     | 对象类型，表示xy轴的配置信息。包括{<br>  xColor：x轴的轴线及数据颜色<br>  xLineShow：是否展示x轴线，true展示<br>  xTickShow：是否x轴刻度，true展示<br>  xTickAlign：x轴刻度位置，up在轴上，down在轴下<br>  xLabelAlign：x轴数据位置,left表示数据相对刻度较左,right表示数据相对刻度较右,center表示数据相对刻度居中<br>  yColor：y轴的轴线及数据颜色<br/>  yLineShow： 是否展示y轴线，true展示<br>  yTickShow：是否x轴刻度，true展示<br>  yTickAlign：y轴刻度位置，left在轴左，right在轴右<br/>  ySplitLineShow：是否展示平行于x轴的水平线<br>  ySplitLineStyle：水平线类型，solid实线，dashed虚线，dotted斑点线<br>  ySplitLineColor：水平线颜色<br>  yMax：y轴最大值<br>  yNeedUnit：y轴数据手否展示单位<br>} | AxisConfig。其中<br>xColor:string<br>xLineShow:boolean<br>xTickShow:boolean<br>xTickAlign:'up'\|'down'<br>xLabelAlign:'left'\|'right'\|'center'<br>yColor:boolean<br>yLineShow:boolean<br>yTickShow:boolean<br>yTickAlign:'left'\|'right'<br>ySplitLineShow:boolean<br>ySplitLineStyle:'solid'\|'dashed'\|'dotted'<br>ySplitLineColor:string<br>yMax:number<br>yNeedUnit:boolean | x,y轴线显示；y刻度默认不显示，x轴刻度默认显示在x轴下方；x轴平行线默认显示为实线； | 否   |
|  markLineConfig   | 对象类型，表示基准线配置，可用于阈值类的设置。包括{<br>  show：是否展示基准线<br>  value：基准线的值<br>  lineColor：水平线颜色<br>  lineWidth：水平线宽度<br>} | MarkLineConfig。其中<br>show:boolean<br>value:number<br>lineColor:string<br>lineWidth:number | 默认不展示，展示后水平线默认为红色虚线，值为50               | 否   |
|      options      | 表示手动修改的配置，格式按照原生echarts的写法，可覆盖原有配置或当前未实现的配置。示例：options={{backgroundColor:'red'}}就可以直接覆盖背景色 | Object                                                       | -                                                            | 否   |
|      loading      | 图表区域是否加载中,示例：<br>loading={spins(actions.fetchEchartsCpu)} | boolean                                                      | false,不加载loading                                          | 否   |
|    otherProps     | 继承的父组件的props信息，后续待扩展                          | -                                                            | -                                                            | 是   |



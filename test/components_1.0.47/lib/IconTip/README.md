# IconTip 组件

> IconTip组件用于文字+带有提示语句的图标时的场景

## Usage

```tsx
import {IconTip} from "@soc/components";

class Demo extends React.Component {
  render() {
    return (
      <IconTip 
        text="测试语句"
        tip="提示语句"
        type="warnning"
      />
    )
  }
}
```

## Option

| 参数      | 说明                                                         | 类型                |
| --------- | ------------------------------------------------------------ | ------------------ |
| tip       | 提示语句                                                     | string \| ReactNode \| () => ReactNode |
| text      | 展示文字                                                     | string \| ReactNode |
| type      | 指定展示图标的颜色，有四种选择 success，info，warnning，error   | ColorType           |
| iconType  | 指定图标为问号或感叹号，目前仅内置两种模式，默认为问号            | IconType           |
| icon      | 自定义图标                                                    | ReactNode          |
| tipProps  | Tooltip组件属性                                               | TooltipProps       |
| placement | 图标相对展示文字的位置，有两种选择 left，right，默认right        | IconPlacement      |
| showIcon  | 是否显示图标，默认显示                                         | boolean            |
| ellipsis  | 是否对文字进行溢出隐藏处理                                      | boolean            |


## 2021/09/24 新增组件（v1.0.13）

1. 支持 文字+带提示语句的图标 场景
2. 自定义图标
3. 可设定图标相对文字的位置
4. 可设定四种内置颜色，取自antd
5. 可选择是否展示图标
6. 可设定文字的溢出隐藏处理

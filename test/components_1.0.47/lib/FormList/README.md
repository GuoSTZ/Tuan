# FormList 组件

动态增减表单项

## 使用方式

* 增减多列表单

```jsx
import * as React from 'react';
import { Form, Row, Col } from 'antd';

const FormView = props => {
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 },
    },
  };
  const formItemLayoutWithOutLabel = {
    wrapperCol: {
      xs: { span: 24, offset: 0 },
      sm: { span: 20, offset: 4 },
    },
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    props.form.validateFields((err: any, values: any) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  return (
    <Form className='normal-form' onSubmit={onSubmit}>
      <FormList name="ceshi" form={props.form}>
        {(field: any, operation: any) => {
          const { name, fieldName, key, index, values } = field;
          const { AddNode, RemoveNode } = operation;
          return (
            <Form.Item
              key={key}
              label={index === 0 ? "姓名" : ""}
              {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}>
              <Row>
                <Col span={10} style={{ marginRight: 8 }}>
                  <Form.Item>
                    {getFieldDecorator(`${fieldName}.firstName`, {
                      initialValue: values['firstName'],
                      key,
                      rules: [
                        { required: true, message: "请输入姓" }
                      ]
                    })(
                      <Input placeholder="姓" />
                    )}
                  </Form.Item>
                </Col>
                <Col span={10}>
                  <Form.Item>
                    {getFieldDecorator(`${fieldName}.lastName`, {
                      initialValue: values['lastName'],
                      key,
                      rules: [
                        { required: true, message: "请输入名" }
                      ]
                    })(
                      <Input placeholder="名" />
                    )}
                  </Form.Item>
                </Col>
                <Col span={3}>
                  <AddNode />
                  <RemoveNode />
                </Col>
              </Row>
            </Form.Item>
          )
        }}
      </FormList>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

cosnt App = Form.create()(FormView);

ReactDOM.render(<App />, document.getElementById('root'));
```

* 增减表单块

```jsx
import * as React from 'react';
import { Form, Row, Col } from 'antd';

const FormView = props => {
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 },
    },
  };
  const formItemLayoutWithOutLabel = {
    wrapperCol: {
      xs: { span: 24, offset: 0 },
      sm: { span: 20, offset: 4 },
    },
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    props.form.validateFields((err: any, values: any) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  return (
    <Form className='normal-form' onSubmit={onSubmit}>
      <FormList name="ceshi" form={props.form}>
        {(field: any, operation: any) => {
          const { name, fieldName, key, index, values } = field;
          const { AddNode, RemoveNode } = operation;
          return (
            <>
              <Form.Item
                key={key}
                label={"姓名"}
                {...formItemLayout}>
                <Row>
                  <Col span={10}>
                    <Form.Item>
                      {getFieldDecorator(`${fieldName}.firstName`, {
                        initialValue: values['firstName'],
                        key,
                        rules: [
                          { required: true, message: "请输入姓" }
                        ]
                      })(
                        <Input placeholder="姓" />
                      )}
                    </Form.Item>
                  </Col>
                  <Col span={10}>
                    <Form.Item>
                      {getFieldDecorator(`${fieldName}.lastName`, {
                        initialValue: values['lastName'],
                        key,
                        rules: [
                          { required: true, message: "请输入名" }
                        ]
                      })(
                        <Input placeholder="名" />
                      )}
                    </Form.Item>
                  </Col>
                </Row>
              </Form.Item>
              <Form.Item
                key={key}
                label={"年龄"}
                {...formItemLayout}>
                <Row>
                  <Col span={20}>
                    <Form.Item>
                      {getFieldDecorator(`${fieldName}.age`, {
                        initialValue: values['age'],
                        key,
                        rules: [
                          { required: true, message: "请输入年龄" }
                        ]
                      })(
                        <Input placeholder="年龄" />
                      )}
                    </Form.Item>
                  </Col>
                  <Col span={3}>
                    <AddNode />
                    <RemoveNode />
                  </Col>
                </Row>
              </Form.Item>
            </>
          )
        }}
      </FormList>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

cosnt App = Form.create()(FormView);

ReactDOM.render(<App />, document.getElementById('root'));
```


## Options

| 参数         | 说明                         | 类型                            | 默认值 |
| ------------ | --------------------------- | ------------------------------- | ------ |
| name         | 表单名称，控制子表单项name    | string                          | /      |
| form         | 父级Form表单属性form         | /                               | /      |
| addNode      | 自定义添加按钮               | string \| ReactNode             | "添加"  |
| removeNode   | 自定义删除按钮               | string \| ReactNode             | "删除"  |
| max          | 支持最大子项数量限制          | number                          | /      |
| maxErrorMsg  | 最大子项数量限制信息提示自定义 | string                          | /      |
| initialValue | 初始值设定                   | []                              | []     |
| children     | 子表单项渲染方法              | (field, operation) => ReactNode | /      |


## 2022/02/22 更新
1. 为了保证与Form组件布局相同，所以使用时需要在最外层用Form.Item做包裹处理
2. addNode和removeNode用于自定义增删节点，只需要传入相应控件即可，无需处理点击事件，FormLIist内部已做处理
3. 组件默认存在一行
4. 组件需要传入父级Form表单props中的form属性

## 2022/02/23 更新
1. 达到设定上限值后，不再隐藏添加按钮，以信息提示方式展示
2. 目前仅支持最大值的信息提示，新增属性maxErrorMsg

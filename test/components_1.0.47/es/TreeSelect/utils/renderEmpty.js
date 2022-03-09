import * as React from 'react';
import Empty from 'antd/lib/empty';
import { getPrefixCls } from './index';
var renderEmpty = function (componentName) {
    var prefix = getPrefixCls('empty');
    switch (componentName) {
        case 'Table':
        case 'List':
            return React.createElement(Empty, { image: Empty.PRESENTED_IMAGE_SIMPLE });
        case 'Select':
        case 'TreeSelect':
        case 'Cascader':
        case 'Transfer':
        case 'Mentions':
            return React.createElement(Empty, { image: Empty.PRESENTED_IMAGE_SIMPLE, className: prefix + "-small" });
        default:
            return React.createElement(Empty, null);
    }
};
export default renderEmpty;

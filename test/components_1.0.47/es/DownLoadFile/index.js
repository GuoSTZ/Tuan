import React from 'react';
import { Icon } from 'antd';
export function DownLoadFile(props) {
    var _a = props.show, show = _a === void 0 ? true : _a, url = props.url, title = props.title, className = props.className;
    return (React.createElement(React.Fragment, null, show ? (React.createElement("span", { className: className },
        React.createElement(Icon, { type: 'download', style: { marginRight: 5, color: '#1890ff' } }),
        React.createElement("a", { href: url, target: '_self' }, title))) : null));
}

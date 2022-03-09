import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';
var useDropdownView = function (_a) {
    var menuItems = _a.menuItems, className = _a.className;
    var menu = (React.createElement(Menu, null, menuItems === null || menuItems === void 0 ? void 0 : menuItems.map(function (item, index) { return (React.createElement(Menu.Item, { onClick: item.onClick, key: index }, item.title)); })));
    var DropdownView = function () { return (React.createElement(Dropdown, { overlay: menu },
        React.createElement(Icon, { type: "down", className: className }))); };
    return {
        DropdownView: DropdownView
    };
};
export default useDropdownView;

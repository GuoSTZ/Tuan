"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var useDropdownView = function (_a) {
    var menuItems = _a.menuItems, className = _a.className;
    var menu = (react_1.default.createElement(antd_1.Menu, null, menuItems === null || menuItems === void 0 ? void 0 : menuItems.map(function (item, index) { return (react_1.default.createElement(antd_1.Menu.Item, { onClick: item.onClick, key: index }, item.title)); })));
    var DropdownView = function () { return (react_1.default.createElement(antd_1.Dropdown, { overlay: menu },
        react_1.default.createElement(antd_1.Icon, { type: "down", className: className }))); };
    return {
        DropdownView: DropdownView
    };
};
exports.default = useDropdownView;

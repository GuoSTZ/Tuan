"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DownLoadFile = void 0;
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
function DownLoadFile(props) {
    var _a = props.show, show = _a === void 0 ? true : _a, url = props.url, title = props.title, className = props.className;
    return (react_1.default.createElement(react_1.default.Fragment, null, show ? (react_1.default.createElement("span", { className: className },
        react_1.default.createElement(antd_1.Icon, { type: 'download', style: { marginRight: 5, color: '#1890ff' } }),
        react_1.default.createElement("a", { href: url, target: '_self' }, title))) : null));
}
exports.DownLoadFile = DownLoadFile;

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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { createElement } from 'react';
import classNames from 'classnames';
import { Button } from 'antd';
import config from './typeConfig';
import './index.css';
var Exception = function (_a) {
    var className = _a.className, _b = _a.linkElement, linkElement = _b === void 0 ? 'a' : _b, type = _a.type, title = _a.title, desc = _a.desc, img = _a.img, actions = _a.actions, rest = __rest(_a, ["className", "linkElement", "type", "title", "desc", "img", "actions"]);
    var pageType = type && type in config ? type : '404';
    var clsString = classNames('exception', className);
    return (React.createElement("div", __assign({ className: clsString }, rest),
        React.createElement("div", { className: 'imgBlock' },
            React.createElement("div", { className: 'imgEle', style: { backgroundImage: "url(" + (img || config[pageType].img) + ")" } })),
        React.createElement("div", { className: 'content' },
            React.createElement("h1", null, title || config[pageType].title),
            React.createElement("div", { className: 'desc' }, desc || config[pageType].desc),
            React.createElement("div", { className: 'actions' }, actions ||
                createElement(linkElement, {
                    to: '/',
                    href: '/'
                }, React.createElement(Button, { type: 'primary' }, "\u8FD4\u56DE\u9996\u9875"))))));
};
export { Exception };

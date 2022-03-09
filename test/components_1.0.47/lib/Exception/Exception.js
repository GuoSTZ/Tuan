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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exception = void 0;
var react_1 = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var antd_1 = require("antd");
var typeConfig_1 = __importDefault(require("./typeConfig"));
require("./index.css");
var Exception = function (_a) {
    var className = _a.className, _b = _a.linkElement, linkElement = _b === void 0 ? 'a' : _b, type = _a.type, title = _a.title, desc = _a.desc, img = _a.img, actions = _a.actions, rest = __rest(_a, ["className", "linkElement", "type", "title", "desc", "img", "actions"]);
    var pageType = type && type in typeConfig_1.default ? type : '404';
    var clsString = classnames_1.default('exception', className);
    return (react_1.default.createElement("div", __assign({ className: clsString }, rest),
        react_1.default.createElement("div", { className: 'imgBlock' },
            react_1.default.createElement("div", { className: 'imgEle', style: { backgroundImage: "url(" + (img || typeConfig_1.default[pageType].img) + ")" } })),
        react_1.default.createElement("div", { className: 'content' },
            react_1.default.createElement("h1", null, title || typeConfig_1.default[pageType].title),
            react_1.default.createElement("div", { className: 'desc' }, desc || typeConfig_1.default[pageType].desc),
            react_1.default.createElement("div", { className: 'actions' }, actions ||
                react_1.createElement(linkElement, {
                    to: '/',
                    href: '/'
                }, react_1.default.createElement(antd_1.Button, { type: 'primary' }, "\u8FD4\u56DE\u9996\u9875"))))));
};
exports.Exception = Exception;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFount = void 0;
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var Exception_1 = require("./Exception");
function NotFount() {
    return (react_1.default.createElement(Exception_1.Exception, { type: '404', style: { minHeight: 500, height: '80%' }, linkElement: react_router_dom_1.Link }));
}
exports.NotFount = NotFount;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var useErrorList = function () {
    var ErrorList = function (props) {
        var errors = props.errors;
        return (react_1.default.createElement(react_1.default.Fragment, null, errors === null || errors === void 0 ? void 0 : errors.map(function (item, index) { return (react_1.default.createElement("div", { key: index, className: "FormList-error" }, item)); })));
    };
    return [ErrorList];
};
exports.default = useErrorList;

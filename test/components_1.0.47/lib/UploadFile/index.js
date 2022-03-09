"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var UploadFile = /** @class */ (function (_super) {
    __extends(UploadFile, _super);
    function UploadFile(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            fileList: props.value ? [props.value] : []
        };
        return _this;
    }
    UploadFile.prototype.componentWillReceiveProps = function (next) {
        if (JSON.stringify(this.props.value) !== JSON.stringify(next.value)) {
            this.setState({
                fileList: next.value ? [next.value] : []
            });
        }
    };
    UploadFile.prototype.beforeUpload = function (file, fileList) {
        this.props.onChange(file);
        return false;
    };
    UploadFile.prototype.onRemove = function () {
        this.props.onChange(undefined);
    };
    UploadFile.prototype.render = function () {
        var _a = this.props, onChange = _a.onChange, uploadText = _a.uploadText, other = __rest(_a, ["onChange", "uploadText"]);
        return (react_1.default.createElement(antd_1.Upload, __assign({}, other, { fileList: this.state.fileList, beforeUpload: this.beforeUpload.bind(this), onRemove: this.onRemove.bind(this) }),
            react_1.default.createElement(antd_1.Button, null,
                react_1.default.createElement(antd_1.Icon, { type: 'upload' }),
                " ",
                uploadText || '上传')));
    };
    return UploadFile;
}(react_1.default.Component));
exports.default = UploadFile;

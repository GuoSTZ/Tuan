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
Object.defineProperty(exports, "__esModule", { value: true });
exports.withModalOrView = exports.ModalOrView = exports.useHandleCancel = exports.ModeRoute = void 0;
var react_1 = __importStar(require("react"));
var react_router_1 = require("react-router");
var antd_1 = require("antd");
var components_1 = require("@mcfed/components");
var ModeContext = react_1.default.createContext('view');
function ModeRoute(props) {
    var mode = props.mode, restProps = __rest(props, ["mode"]);
    return (react_1.default.createElement(ModeContext.Provider, { value: mode },
        react_1.default.createElement(react_router_1.Route, __assign({}, restProps))));
}
exports.ModeRoute = ModeRoute;
exports.useHandleCancel = function (params) {
    var onCancel = params.onCancel, history = params.history;
    return react_1.useMemo(function () {
        return onCancel ||
            (function (e) {
                history === null || history === void 0 ? void 0 : history.goBack();
            });
    }, [onCancel, history]);
};
exports.ModalOrView = function ModalOrView(props) {
    var propsMode = props.mode, ModalComponent = props.ModalComponent, children = props.children, loading = props.loading, modalProps = __rest(props, ["mode", "ModalComponent", "children", "loading"]);
    var contextMode = react_1.useContext(ModeContext);
    var history = react_router_1.useHistory();
    var mode = propsMode || contextMode;
    var _a = modalProps || {}, onCancel = _a.onCancel, restProps = __rest(_a, ["onCancel"]);
    var handleCancel = exports.useHandleCancel({ onCancel: onCancel, history: history });
    if (mode === 'view') {
        return (react_1.default.createElement(components_1.Panel, __assign({}, restProps, { loading: loading, onCancel: handleCancel }), children));
    }
    if (ModalComponent) {
        return (react_1.default.createElement(ModalComponent, __assign({ visible: true, maskClosable: false }, restProps, { onCancel: handleCancel }),
            react_1.default.createElement(antd_1.Spin, { spinning: !!loading }, children)));
    }
    return null;
};
exports.ModalOrView.defaultProps = {
    ModalComponent: antd_1.Modal,
    mode: 'view'
};
function withModalOrView(modalProps) {
    return function (Component) {
        return function (props) {
            return (react_1.default.createElement(exports.ModalOrView, __assign({}, modalProps),
                react_1.default.createElement(Component, __assign({}, props))));
        };
    };
}
exports.withModalOrView = withModalOrView;

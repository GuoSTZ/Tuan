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
import React, { useContext, useMemo } from 'react';
import { Route, useHistory } from 'react-router';
import { Modal, Spin } from 'antd';
import { Panel } from '@mcfed/components';
var ModeContext = React.createContext('view');
export function ModeRoute(props) {
    var mode = props.mode, restProps = __rest(props, ["mode"]);
    return (React.createElement(ModeContext.Provider, { value: mode },
        React.createElement(Route, __assign({}, restProps))));
}
export var useHandleCancel = function (params) {
    var onCancel = params.onCancel, history = params.history;
    return useMemo(function () {
        return onCancel ||
            (function (e) {
                history === null || history === void 0 ? void 0 : history.goBack();
            });
    }, [onCancel, history]);
};
export var ModalOrView = function ModalOrView(props) {
    var propsMode = props.mode, ModalComponent = props.ModalComponent, children = props.children, loading = props.loading, modalProps = __rest(props, ["mode", "ModalComponent", "children", "loading"]);
    var contextMode = useContext(ModeContext);
    var history = useHistory();
    var mode = propsMode || contextMode;
    var _a = modalProps || {}, onCancel = _a.onCancel, restProps = __rest(_a, ["onCancel"]);
    var handleCancel = useHandleCancel({ onCancel: onCancel, history: history });
    if (mode === 'view') {
        return (React.createElement(Panel, __assign({}, restProps, { loading: loading, onCancel: handleCancel }), children));
    }
    if (ModalComponent) {
        return (React.createElement(ModalComponent, __assign({ visible: true, maskClosable: false }, restProps, { onCancel: handleCancel }),
            React.createElement(Spin, { spinning: !!loading }, children)));
    }
    return null;
};
ModalOrView.defaultProps = {
    ModalComponent: Modal,
    mode: 'view'
};
export function withModalOrView(modalProps) {
    return function (Component) {
        return function (props) {
            return (React.createElement(ModalOrView, __assign({}, modalProps),
                React.createElement(Component, __assign({}, props))));
        };
    };
}

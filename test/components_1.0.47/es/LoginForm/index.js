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
import React from 'react';
import { Button } from 'antd';
import { BaseForm } from '@mcfed/components';
var LoginForm = /** @class */ (function (_super) {
    __extends(LoginForm, _super);
    function LoginForm(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { loading: false };
        _this.handleLogin = function (e) {
            var _a;
            e.preventDefault();
            (_a = _this.form) === null || _a === void 0 ? void 0 : _a.validateFieldsAndScroll({
                force: true
            }, function (err, values) {
                if (!err) {
                    _this.saveFormAsync(values);
                }
            });
        };
        _this.state.loading = props.loading;
        return _this;
    }
    LoginForm.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.loading !== this.props.loading) {
            this.setState({
                loading: nextProps.loading
            });
        }
    };
    LoginForm.prototype.saveFormAsync = function (values) {
        var _a = this.props, onHandlePreLogin = _a.onHandlePreLogin, onHandleLogin = _a.onHandleLogin, onHandlePostLogin = _a.onHandlePostLogin;
        var formValues = onHandlePreLogin && onHandlePreLogin(values);
        new Promise(function (resolve, reject) {
            resolve(onHandleLogin && onHandleLogin(formValues));
        }).then(function (response) {
            onHandlePostLogin && onHandlePostLogin(response);
        });
    };
    LoginForm.prototype.saveFormRef = function (insta) {
        if (insta) {
            this.form = insta.props.form;
        }
    };
    LoginForm.prototype.renderBody = function () {
        var layout = this.props.layout;
        var formItemLayout = layout && layout !== 'inline'
            ? {
                labelCol: {
                    span: 8
                },
                wrapperCol: {
                    span: 24
                }
            }
            : {};
        return (React.createElement(React.Fragment, null, React.Children.map(this.props.children, function (child) {
            return child && React.cloneElement(child, __assign({}, formItemLayout));
        })));
    };
    LoginForm.prototype.renderLoginToolbar = function () {
        var loading = this.state.loading;
        var _a = this.props, footer = _a.footer, _b = _a.submitText, submitText = _b === void 0 ? 'login' : _b;
        return footer ? (footer) : (React.createElement("div", { className: 'login-submit-wrapper' },
            React.createElement(Button, { htmlType: 'submit', disabled: loading, type: 'primary' }, submitText)));
    };
    LoginForm.prototype.render = function () {
        var _a = this.props, className = _a.className, autoSubmitForm = _a.autoSubmitForm, layout = _a.layout, url = _a.url;
        var mergeClassName = "mc-login-form " + className;
        return (React.createElement(BaseForm, { action: url, method: 'post', name: 'loginForm', layout: layout, autoSubmitForm: autoSubmitForm, className: mergeClassName, onSubmit: this.handleLogin.bind(this), wrappedComponentRef: this.saveFormRef.bind(this) },
            this.renderBody(),
            this.renderLoginToolbar()));
    };
    LoginForm.defaultProps = {
        autoSubmitForm: false,
        loading: false,
        layout: 'horizontal',
        onHandlePreLogin: function (values) {
            return values;
        },
        onHandleLogin: function (formValues) {
            return formValues;
        },
        onHandlePostLogin: function (response) {
            return response;
        },
        url: '',
        footer: false
    };
    return LoginForm;
}(React.Component));
export { LoginForm };

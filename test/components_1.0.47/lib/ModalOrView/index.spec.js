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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var enzyme_1 = require("enzyme");
var react_router_dom_1 = require("react-router-dom");
var react_hooks_1 = require("@testing-library/react-hooks");
var index_1 = require("./index");
describe('useHandleCancel', function () {
    it('有onCancel', function () {
        var onCancel = jest.fn();
        var result = react_hooks_1.renderHook(function () {
            return index_1.useHandleCancel({
                onCancel: onCancel
            });
        }).result;
        var event = {
            test: 'test'
        };
        result.current(event);
        expect(onCancel).toHaveBeenCalledWith(event);
    });
    it('无onCancel', function () {
        var goBack = jest.fn();
        var result = react_hooks_1.renderHook(function () {
            return index_1.useHandleCancel({
                //@ts-ignore
                history: { goBack: goBack }
            });
        }, {
            wrapper: function (_a) {
                var children = _a.children;
                return react_1.default.createElement(react_router_dom_1.HashRouter, null, children);
            }
        }).result;
        var event = {};
        result.current(event);
        expect(goBack).toHaveBeenCalled();
    });
});
describe('ModalOrView', function () {
    function setup(props, options) {
        var defaultProps = {};
        var wrapper = enzyme_1.shallow(react_1.default.createElement(index_1.ModalOrView, __assign({}, Object.assign({}, defaultProps, props))), options);
        return {
            wrapper: wrapper
        };
    }
    it('modal模式快照', function () {
        var wrapper = setup({ mode: 'modal' }).wrapper;
        expect(wrapper).toMatchSnapshot();
    });
    it('view模式快照', function () {
        var wrapper = setup({ mode: 'view' }).wrapper;
        expect(wrapper).toMatchSnapshot();
    });
});

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
import { shallow } from 'enzyme';
import { HashRouter } from 'react-router-dom';
import { renderHook } from '@testing-library/react-hooks';
import { ModalOrView, useHandleCancel } from './index';
describe('useHandleCancel', function () {
    it('有onCancel', function () {
        var onCancel = jest.fn();
        var result = renderHook(function () {
            return useHandleCancel({
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
        var result = renderHook(function () {
            return useHandleCancel({
                //@ts-ignore
                history: { goBack: goBack }
            });
        }, {
            wrapper: function (_a) {
                var children = _a.children;
                return React.createElement(HashRouter, null, children);
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
        var wrapper = shallow(React.createElement(ModalOrView, __assign({}, Object.assign({}, defaultProps, props))), options);
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

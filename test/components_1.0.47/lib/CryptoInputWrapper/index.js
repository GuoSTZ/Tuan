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
exports.CryptoInputWrapper = void 0;
var react_1 = __importStar(require("react"));
var utils_1 = require("@soc/utils");
exports.CryptoInputWrapper = react_1.default.forwardRef(function CryptoInputWrapper(props, ref) {
    var children = props.children, value = props.value, onChange = props.onChange, encrypt = props.encrypt, decrypt = props.decrypt, cryptKey = props.cryptKey, onBlur = props.onBlur, otherProps = __rest(props, ["children", "value", "onChange", "encrypt", "decrypt", "cryptKey", "onBlur"]);
    var cryptoOnChange = useCryptoHandler({
        callback: onChange,
        encrypt: encrypt,
        cryptKey: cryptKey
    });
    var cryptoOnBlur = useCryptoHandler({
        callback: onBlur,
        encrypt: encrypt,
        cryptKey: cryptKey
    });
    var _a = useValueAndChange({
        value: value,
        onChange: cryptoOnChange,
        decrypt: decrypt,
        cryptKey: cryptKey
    }), innerValue = _a.innerValue, handleChange = _a.handleChange;
    return react_1.default.cloneElement(children, __assign(__assign({}, otherProps), { ref: ref, value: innerValue, onChange: handleChange, onBlur: cryptoOnBlur }));
});
exports.CryptoInputWrapper.defaultProps = {
    decrypt: utils_1.aesDecrypt,
    encrypt: utils_1.aesEncrypt,
    cryptKey: utils_1.aesKey
};
function useCryptoHandler(_a) {
    var callback = _a.callback, encrypt = _a.encrypt, cryptKey = _a.cryptKey;
    return react_1.useCallback(function (e) {
        var newValue = e.target.value;
        if (typeof callback === 'function') {
            // 若满足加密条件，进行加密后传递到上层组件
            if (typeof encrypt === 'function' && cryptKey && newValue) {
                callback(encrypt(newValue, cryptKey));
            }
            else {
                //@ts-ignore
                callback(newValue);
            }
        }
    }, [callback, encrypt, cryptKey]);
}
function useValueAndChange(_a) {
    var value = _a.value, onChange = _a.onChange, decrypt = _a.decrypt, cryptKey = _a.cryptKey;
    var _b = react_1.useState(value), innerValue = _b[0], setInnerValue = _b[1];
    var handleChange = react_1.useCallback(function (e) {
        var newValue = e.target.value;
        onChange && onChange(e);
        setInnerValue(newValue);
    }, [onChange]);
    react_1.useEffect(function () {
        // 若满足解密条件，进行解密后更新状态
        if (typeof decrypt === 'function' && cryptKey && value) {
            setInnerValue(decrypt(value, cryptKey));
        }
        else {
            setInnerValue(value);
        }
    }, [value]);
    return {
        innerValue: innerValue,
        handleChange: handleChange
    };
}

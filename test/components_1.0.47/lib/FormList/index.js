"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormList = void 0;
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var useErrorList_1 = __importDefault(require("./useErrorList"));
require("./index.less");
exports.FormList = react_1.forwardRef(function (props, ref) {
    var name = props.name, form = props.form, _a = props.addNode, addNode = _a === void 0 ? "添加" : _a, _b = props.removeNode, removeNode = _b === void 0 ? "删除" : _b, max = props.max, maxErrorMsg = props.maxErrorMsg, _c = props.initialValue, initialValue = _c === void 0 ? [] : _c;
    var _d = react_1.useState(0), count = _d[0], setCount = _d[1]; // 用来做计数值
    var _e = react_1.useState([0]), keys = _e[0], setKeys = _e[1];
    var _f = react_1.useState([]), errors = _f[0], setErrors = _f[1];
    var ErrorList = useErrorList_1.default()[0];
    react_1.useEffect(function () {
        // 数据回填处理
        var len = (initialValue === null || initialValue === void 0 ? void 0 : initialValue.length) || 0;
        if (len > 0) {
            setCount(len);
            var new_keys = [];
            for (var i = 0; i < len; i++) {
                new_keys.push(i);
            }
            setKeys(new_keys);
        }
    }, []);
    var getFileds = function (key) {
        var _a;
        var obj = form.getFieldValue(name) || {};
        var index = keys.indexOf(key);
        var fields = [];
        // 子项name设置为filedName.xxx时
        if (Object.prototype.toString.call(obj[index]) === '[Object Object]') {
            fields = (_a = Object.keys(obj[index] || {})) === null || _a === void 0 ? void 0 : _a.map(function (item) { return name + "." + index + "." + item; });
        }
        else { // 子项name设置为filedName时
            fields = [name + "." + index];
        }
        return fields;
    };
    // 添加子项
    var addItem = function (key) {
        if (!max || keys.length < max) {
            setKeys(keys.concat([count + 1]));
            setCount(count + 1);
        }
        else {
            setErrors([maxErrorMsg || "\u6700\u591A" + max + "\u9879"]);
        }
    };
    // 删除子项
    var removeItem = function (key) {
        // 删除节点时，被删除行的数据会出现遗留现象，因为下一行控件的id变成了被删除行控件的id
        // 故需要将下一个节点的值填入到当前删除的节点位置
        // 替代解决方案，不使用索引值作为控件id，使用key值作为控件id，这样就不需要手动设置值
        var fields = getFileds(key);
        var index = keys.indexOf(key);
        fields === null || fields === void 0 ? void 0 : fields.map(function (item) {
            var _a;
            var array = item === null || item === void 0 ? void 0 : item.split(".");
            // 获取field中索引index所在的位置
            var idx = array.indexOf(index.toString());
            array === null || array === void 0 ? void 0 : array.splice(idx, 1, index + 1);
            form === null || form === void 0 ? void 0 : form.setFieldsValue((_a = {}, _a[item] = form.getFieldValue(array.join(".")), _a));
        });
        var new_keys = keys === null || keys === void 0 ? void 0 : keys.filter(function (item) { return item !== key; });
        setKeys(new_keys);
        if (max && new_keys.length <= max) {
            setErrors([]);
        }
    };
    // 处理自定义按钮
    var fixedButton = function (key) {
        var _a, _b;
        var addNodeProps = (_a = addNode) === null || _a === void 0 ? void 0 : _a.props;
        var removeNodeProps = (_b = removeNode) === null || _b === void 0 ? void 0 : _b.props;
        var addBtn = react_1.default.isValidElement(addNode)
            ? react_1.default.cloneElement(addNode, {
                className: "FormList-add " + addNodeProps.className,
                onClick: function () {
                    addItem(key);
                    (addNodeProps === null || addNodeProps === void 0 ? void 0 : addNodeProps.onClick) && (addNodeProps === null || addNodeProps === void 0 ? void 0 : addNodeProps.onClick());
                }
            })
            : react_1.default.createElement("a", { className: 'FormList-add', onClick: function () { return addItem(key); } }, addNode);
        var removeBtn = react_1.default.isValidElement(removeNode)
            ? react_1.default.cloneElement(removeNode, {
                className: "FormList-remove " + (removeNodeProps === null || removeNodeProps === void 0 ? void 0 : removeNodeProps.className),
                onClick: function () {
                    removeItem(key);
                    (removeNodeProps === null || removeNodeProps === void 0 ? void 0 : removeNodeProps.onClick) && (removeNodeProps === null || removeNodeProps === void 0 ? void 0 : removeNodeProps.onClick());
                }
            })
            : react_1.default.createElement("a", { className: 'FormList-remove', onClick: function () { return removeItem(key); } }, removeNode);
        return {
            addBtn: addBtn,
            removeBtn: removeBtn
        };
    };
    // 渲染【删除】，【添加】按钮
    var renderOperationBtn = function (length, key, index) {
        var _a = fixedButton(key), addBtn = _a.addBtn, removeBtn = _a.removeBtn;
        var add = null;
        var remove = null;
        if (length === 1) { // 只有一项时
            add = addBtn;
        }
        else if (length === index + 1) { // 最后一项
            add = addBtn;
            remove = removeBtn;
        }
        else { // 中间项
            remove = removeBtn;
        }
        return { add: add, remove: remove };
    };
    // 渲染子项
    var getItem = function () {
        return keys === null || keys === void 0 ? void 0 : keys.map(function (key, index) {
            var field = {
                name: name,
                fieldName: name + "." + index,
                key: key,
                index: index,
                values: initialValue[key]
            };
            var _a = renderOperationBtn(keys.length, key, index), add = _a.add, remove = _a.remove;
            var operation = {
                AddNode: function () { return add; },
                RemoveNode: function () { return remove; },
            };
            return typeof props.children === 'function' ? props.children(field, operation) : null;
        });
    };
    return (react_1.default.createElement("div", { className: "FormList", ref: ref },
        getItem(),
        react_1.default.createElement(antd_1.Form.Item, null,
            react_1.default.createElement(ErrorList, { errors: errors }))));
});

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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import React, { useState } from 'react';
import { Transfer, Tree, Empty } from 'antd';
import './index.css';
var TreeNode = Tree.TreeNode;
var isChecked = function (selectedKeys, eventKey) {
    return selectedKeys.indexOf(eventKey) !== -1;
};
var handleKeys = function (onItemSelect, checkedKeys, keys, info) {
    var _a, _b;
    var eventKey = (_b = (_a = info === null || info === void 0 ? void 0 : info.node) === null || _a === void 0 ? void 0 : _a.props) === null || _b === void 0 ? void 0 : _b.eventKey;
    onItemSelect(eventKey, !isChecked(checkedKeys, eventKey));
};
/**
 * 复制自定义主键和显示内容字段，同时处理容错
 * @param node 节点对象
 * @param prop 要复制的节点对象属性
 * @param copyProp 复制到节点对象的该属性字段
 * @param tempValue 临时key值或显示内容，用来做容错处理
 */
var copyProps = function (node, prop, copyProp, tempValue) {
    if (prop) {
        if (typeof prop === 'string' && node[prop]) {
            node[copyProp] = node[prop];
        }
        else {
            node[copyProp] = tempValue;
        }
    }
    else {
        if (!node[copyProp]) {
            node[copyProp] = tempValue;
        }
    }
};
// 层级拆分
var flatten = function (customKey, label, list, array) {
    list === null || list === void 0 ? void 0 : list.forEach(function (item) {
        var node = Object.assign({}, item);
        copyProps(node, customKey, 'key', JSON.stringify(item));
        copyProps(node, label, 'title', '---');
        array.push(node);
        flatten(customKey, label, item.children, array);
    });
    return array;
};
/**
 * 当key不是主键时，复制主键到key，不用title作为显示时，复制显示值到title
 * @param data
 * @param array
 * @returns
 */
var dataCopy = function (customKey, label, data, array) {
    for (var i = 0; i < (data === null || data === void 0 ? void 0 : data.length); i++) {
        var node = Object.assign({}, data[i]);
        copyProps(node, customKey, 'key', JSON.stringify(data[i]));
        copyProps(node, label, 'title', '---');
        node.children = [];
        if (data[i].children) {
            dataCopy(customKey, label, data[i].children, node.children);
        }
        array.push(node);
    }
    return array;
};
// 右侧框显示
var renderTitle = function (label, item) {
    if (label) {
        return item.label || '---';
    }
    else {
        return item.title || '---';
    }
};
// 获取父节点key
var getParentKey = function (key, tree) {
    var parentKey;
    for (var i = 0; i < (tree === null || tree === void 0 ? void 0 : tree.length); i++) {
        var node = tree[i];
        if (node.children) {
            if (node.children.some(function (item) { return item.key === key; })) {
                parentKey = node.key;
            }
            else if (getParentKey(key, node.children)) {
                parentKey = getParentKey(key, node.children);
            }
        }
    }
    return parentKey;
};
// 遗留的问题，目前组件必须要传递listStyle属性
export var TreeTransfer = function (props) {
    var _a = useState(''), searchValue = _a[0], setSearchValue = _a[1];
    var _b = useState([]), expandedKeys = _b[0], setExpandedKeys = _b[1];
    var _c = useState(false), autoExpandParent = _c[0], setAutoExpandParent = _c[1];
    var _d = props.dataSource, dataSource = _d === void 0 ? [] : _d, _e = props.targetKeys, targetKeys = _e === void 0 ? [] : _e, customKey = props.customKey, label = props.label, restProps = __rest(props, ["dataSource", "targetKeys", "customKey", "label"]);
    // 生成树节点
    var generateTree = function (treeNodes, checkedKeys) {
        if (treeNodes === void 0) { treeNodes = []; }
        if (checkedKeys === void 0) { checkedKeys = []; }
        // @ts-ignore
        return treeNodes.map(function (_a) {
            var children = _a.children, title = _a.title, props = __rest(_a, ["children", "title"]);
            var index = title.indexOf(searchValue);
            var beforeStr = title.substr(0, index);
            var afterStr = title.substr(index + (searchValue === null || searchValue === void 0 ? void 0 : searchValue.length));
            var value = index > -1 ? (React.createElement("span", null,
                beforeStr,
                React.createElement("span", { style: { color: '#f50' } }, searchValue),
                afterStr)) : (React.createElement("span", null, title));
            return (React.createElement(TreeNode, __assign({}, props, { title: value, 
                // @ts-ignore
                disabled: checkedKeys.includes(props.key), key: props.key }), generateTree(children, checkedKeys)));
        });
    };
    var onSearch = function (direction, value) {
        if (props.onSearch) {
            props.onSearch(direction, value);
            return;
        }
        if (direction === 'left') {
            var dataList = flatten(customKey, label, dataCopy(customKey, label, dataSource, []), []);
            var keys = [];
            keys = dataList
                .map(function (item) {
                if (item.title.indexOf(value) > -1) {
                    return getParentKey(item.key, dataCopy(customKey, label, dataSource, []));
                }
                return null;
            })
                .filter(function (item, i, self) {
                return item && self.indexOf(item) === i;
            });
            setSearchValue(value);
            setExpandedKeys(keys);
            setAutoExpandParent(true);
        }
    };
    var onExpand = function (expandedKeys) {
        setExpandedKeys(expandedKeys);
        setAutoExpandParent(true);
    };
    return (React.createElement(Transfer, __assign({}, restProps, { targetKeys: targetKeys, dataSource: flatten(customKey, label, dataSource, []), className: "tree-transfer", render: renderTitle.bind(window, label), onSearch: onSearch }), function (_a) {
        var direction = _a.direction, onItemSelect = _a.onItemSelect, selectedKeys = _a.selectedKeys;
        if (direction === 'left') {
            if (!Array.isArray(dataSource) || (dataSource === null || dataSource === void 0 ? void 0 : dataSource.length) === 0) {
                return React.createElement(Empty, { className: "ant-transfer-list-body-not-found", image: Empty.PRESENTED_IMAGE_SIMPLE });
            }
            var checkedKeys = __spreadArrays(selectedKeys, targetKeys);
            return (React.createElement(Tree, { checkable: true, checkStrictly: true, expandedKeys: expandedKeys, autoExpandParent: autoExpandParent, checkedKeys: checkedKeys, onExpand: onExpand, onCheck: handleKeys.bind(window, onItemSelect, checkedKeys), onSelect: handleKeys.bind(window, onItemSelect, checkedKeys) }, generateTree(dataCopy(customKey, label, dataSource, []), targetKeys)));
        }
    }));
};

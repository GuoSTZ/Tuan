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
import React, { useState, useEffect } from 'react';
import { Transfer, Table } from 'antd';
import useDropdownView from './useDropdownVIew';
import './index.less';
var TableTransfer = function (props) {
    var _a = useState([]), dataSource = _a[0], setDataSource = _a[1]; // 全部数据 - dataSource
    var _b = useState([]), targetKeys = _b[0], setTargetKeys = _b[1]; // 右侧穿梭框内的数据
    var _c = useState([]), sourceSelectedKeys = _c[0], setSourceSelectedKeys = _c[1]; // 左侧穿梭框被勾选的数据
    var _d = useState([]), targetSelectedKeys = _d[0], setTargetSelectedKeys = _d[1]; // 右侧穿梭框被勾选的数据
    var _e = useState(1), sourcePage = _e[0], setSourcePage = _e[1]; // 左侧穿梭框当前页码
    var _f = useState(1), targetPage = _f[0], setTargetPage = _f[1]; // 右侧穿梭框当前页面
    var _g = useState({ 'left': '', 'right': '' }), filterValue = _g[0], setFilterValue = _g[1]; // 搜索框输入内容
    var _h = useState(false), showMaxError = _h[0], setShowMaxError = _h[1]; // 错误信息显示状态
    var leftColumns = props.leftColumns, rightColumns = props.rightColumns, _j = props.dataSource, _dataSource = _j === void 0 ? [] : _j, _k = props.targetKeys, _targetKeys = _k === void 0 ? [] : _k, _l = props.itemSize, itemSize = _l === void 0 ? 10 : _l, _m = props.selectedKeys, _selectedKeys = _m === void 0 ? [] : _m, _o = props.showSelectAll, showSelectAll = _o === void 0 ? true : _o, _p = props.dropdownSelectCount, dropdownSelectCount = _p === void 0 ? [] : _p, maxTargetKeys = props.maxTargetKeys, className = props.className, maxErrorMsg = props.maxErrorMsg, restProps = __rest(props, ["leftColumns", "rightColumns", "dataSource", "targetKeys", "itemSize", "selectedKeys", "showSelectAll", "dropdownSelectCount", "maxTargetKeys", "className", "maxErrorMsg"]);
    useEffect(function () {
        var _data = _dataSource.slice(0, _dataSource.length);
        // 默认为title字段处理，传入自定义render时，转化为title属性
        if (props.render) {
            _data = _data === null || _data === void 0 ? void 0 : _data.map(function (record) {
                return Object.assign({}, __assign(__assign({}, record), { title: props.render && props.render(record) }));
            });
        }
        setDataSource(_data);
        setTargetKeys(_targetKeys);
        setSourceSelectedKeys(_selectedKeys === null || _selectedKeys === void 0 ? void 0 : _selectedKeys.filter(function (item) { return !targetKeys.includes(item); }));
        setTargetSelectedKeys(_selectedKeys === null || _selectedKeys === void 0 ? void 0 : _selectedKeys.filter(function (item) { return targetKeys.includes(item); }));
    }, [_dataSource]);
    var getKeys = function (data) { return data === null || data === void 0 ? void 0 : data.map(function (item) { return item.key; }); };
    // 筛选非禁用的数据key
    var getEnabledItemKeys = function (data) {
        var keys = [];
        data === null || data === void 0 ? void 0 : data.forEach(function (item) {
            if (!item.disabled) {
                keys.push(item.key);
            }
        });
        return keys;
    };
    var getContraryKeys = function (data, keys) {
        return data.filter(function (item) { return (keys === null || keys === void 0 ? void 0 : keys.indexOf(item)) === -1; });
    };
    // 获取当页穿梭框显示的数据数组
    var getCurrentPageData = function (data, page) {
        return data === null || data === void 0 ? void 0 : data.slice((page - 1) * itemSize, page * itemSize);
    };
    // 获取筛选后穿梭框内显示的数据数组
    var getFilterData = function (direction) {
        var data = {
            'left': [],
            'right': new Array(targetKeys.length)
        };
        dataSource === null || dataSource === void 0 ? void 0 : dataSource.forEach(function (record) {
            var _a, _b, _c;
            var indexOfKey = targetKeys.indexOf(record.key);
            var isFiltered = (_b = (_a = record === null || record === void 0 ? void 0 : record.title) === null || _a === void 0 ? void 0 : _a.toUpperCase()) === null || _b === void 0 ? void 0 : _b.includes((_c = filterValue[direction]) === null || _c === void 0 ? void 0 : _c.toUpperCase());
            if (isFiltered) {
                if (indexOfKey !== -1) {
                    data['right'][indexOfKey] = record;
                }
                else {
                    data['left'].push(record);
                }
            }
        });
        return data;
    };
    // 获取筛选后穿梭框内显示的数据key值数组
    var getFilterDataKeys = function (direction, count) {
        var _a;
        var data = {
            'left': [],
            'right': new Array(targetKeys.length)
        };
        var sum = 0;
        dataSource === null || dataSource === void 0 ? void 0 : dataSource.every(function (record) {
            var _a, _b, _c;
            var indexOfKey = targetKeys.indexOf(record.key);
            var isFiltered = (_b = (_a = record === null || record === void 0 ? void 0 : record.title) === null || _a === void 0 ? void 0 : _a.toUpperCase()) === null || _b === void 0 ? void 0 : _b.includes((_c = filterValue[direction]) === null || _c === void 0 ? void 0 : _c.toUpperCase());
            var isEnabled = !(record === null || record === void 0 ? void 0 : record.disabled);
            if (direction === 'left' && typeof count === 'number' && data[direction].length >= count) {
                return false;
            }
            if (direction === 'right' && sum >= (targetKeys === null || targetKeys === void 0 ? void 0 : targetKeys.length)) {
                return false;
            }
            if (isFiltered && isEnabled) {
                if (indexOfKey !== -1) {
                    data['right'][indexOfKey] = record.key;
                    sum += 1;
                }
                else {
                    data['left'].push(record.key);
                }
            }
            return true;
        });
        // 去除empty
        if (direction === 'right') {
            data[direction] = (_a = data[direction]) === null || _a === void 0 ? void 0 : _a.filter(function (item) { return item !== null && item !== void 0 ? item : !item; });
        }
        return data;
    };
    // 全选所有
    var getSelectAll = function (direction, selectedKeys, setSelectedKeys) {
        return function () {
            var _a;
            var data = getFilterDataKeys(direction);
            if (((_a = data[direction]) === null || _a === void 0 ? void 0 : _a.length) === selectedKeys.length) {
                setSelectedKeys([]);
            }
            else {
                setSelectedKeys(data[direction]);
            }
        };
    };
    // 全选当页
    var getSelectCurrent = function (direction, page, selectedKeys, setSelectedKeys) {
        return function () {
            var data = getFilterData(direction);
            var currentPageData = getCurrentPageData(data[direction], page);
            var currentPageKeys = getEnabledItemKeys(currentPageData);
            var otherPageKeys = selectedKeys === null || selectedKeys === void 0 ? void 0 : selectedKeys.filter(function (item) { return !(currentPageKeys === null || currentPageKeys === void 0 ? void 0 : currentPageKeys.includes(item)); });
            setSelectedKeys(__spreadArrays(otherPageKeys, currentPageKeys));
        };
    };
    // 反选当页
    var getInvertCurrent = function (direction, page, selectedKeys, setSelectedKeys) {
        return function () {
            var data = getFilterData(direction);
            var currentPageData = getCurrentPageData(data[direction], page);
            var currentPageKeys = getEnabledItemKeys(currentPageData);
            var invertKeys = currentPageKeys === null || currentPageKeys === void 0 ? void 0 : currentPageKeys.filter(function (item) { return !(selectedKeys === null || selectedKeys === void 0 ? void 0 : selectedKeys.includes(item)); });
            var otherPageKeys = selectedKeys === null || selectedKeys === void 0 ? void 0 : selectedKeys.filter(function (item) { return !(currentPageKeys === null || currentPageKeys === void 0 ? void 0 : currentPageKeys.includes(item)); });
            setSelectedKeys(__spreadArrays(otherPageKeys, invertKeys));
        };
    };
    // 选中指定条数
    var getSelectCount = function (direction, count, setSelectedKeys) {
        return function () {
            var data = getFilterDataKeys(direction, count);
            setSelectedKeys(data[direction].slice(0, count));
        };
    };
    // 下拉菜单配置
    var handleDropdownConfig = function (direction, className) {
        var menuItems = [];
        var attrs = {
            'left': {
                page: sourcePage,
                keys: sourceSelectedKeys,
                setKeys: setSourceSelectedKeys
            },
            'right': {
                page: targetPage,
                keys: targetSelectedKeys,
                setKeys: setTargetSelectedKeys
            }
        };
        var defaultConfig = [
            { title: '全选所有', onClick: getSelectAll(direction, attrs[direction].keys, attrs[direction].setKeys) },
            { title: '全选当页', onClick: getSelectCurrent(direction, attrs[direction].page, attrs[direction].keys, attrs[direction].setKeys) },
            { title: '反选当页', onClick: getInvertCurrent(direction, attrs[direction].page, attrs[direction].keys, attrs[direction].setKeys) },
        ];
        menuItems.push.apply(menuItems, defaultConfig);
        var customConfig = dropdownSelectCount === null || dropdownSelectCount === void 0 ? void 0 : dropdownSelectCount.map(function (count) {
            var sum = typeof count === 'number' ? count : 0;
            return {
                title: "\u9009\u62E9" + sum + "\u9879",
                onClick: getSelectCount(direction, sum, attrs[direction].setKeys)
            };
        });
        menuItems = menuItems.concat(customConfig);
        return {
            menuItems: menuItems,
            className: className
        };
    };
    var LeftDropdown = useDropdownView(handleDropdownConfig('left', "leftDropdown  " + (showSelectAll ? 'TableTransfer-selectAll' : ''))).DropdownView;
    var RightDropdown = useDropdownView(handleDropdownConfig('right', "rightDropdown  " + (showSelectAll ? 'TableTransfer-selectAll' : ''))).DropdownView;
    // 数据转移回调
    var onChange = function (nextTargetKeys, direction, moveKeys) {
        // 当且仅当数据向右穿梭，且设定了预定上限值
        if (direction === 'right' && typeof maxTargetKeys === 'number' && maxTargetKeys >= 0) {
            // 右侧穿梭框数据数量已经达到预定上限时
            if (targetKeys.length >= maxTargetKeys) {
                setSourceSelectedKeys(moveKeys);
                setShowMaxError(true);
                return;
            }
            // 当移动后的数据数量达到预定上限时
            if ((nextTargetKeys === null || nextTargetKeys === void 0 ? void 0 : nextTargetKeys.length) > maxTargetKeys) {
                // 计算当前仍可以移动到右侧穿梭框的数据长度
                var len = maxTargetKeys - targetKeys.length;
                setSourceSelectedKeys(moveKeys.slice(len, moveKeys.length));
                var newTargetKeys = __spreadArrays(targetKeys, moveKeys.slice(0, len));
                setTargetKeys(newTargetKeys);
                setShowMaxError(true);
                if (props.onChange) {
                    props.onChange(newTargetKeys, direction, moveKeys);
                }
                return;
            }
        }
        setTargetKeys(nextTargetKeys);
        setShowMaxError(false);
        // 移动数据时产生的分页变化，需要做额外处理
        var sourceKeys = getContraryKeys(getKeys(dataSource), nextTargetKeys);
        if (nextTargetKeys.length > 0 && Math.ceil(nextTargetKeys.length / itemSize) < targetPage) {
            setTargetPage(targetPage - 1);
        }
        if (sourceKeys.length > 0 && Math.ceil(sourceKeys.length / itemSize) < sourcePage) {
            setSourcePage(sourcePage - 1);
        }
        if (props.onChange) {
            props.onChange(nextTargetKeys, direction, moveKeys);
        }
    };
    // 选中回调
    var onSelectChange = function (sourceSelectedKeys, targetSelectedKeys) {
        setSourceSelectedKeys(sourceSelectedKeys);
        setTargetSelectedKeys(targetSelectedKeys);
        if (props.onSelectChange) {
            props.onSelectChange(sourceSelectedKeys, targetSelectedKeys);
        }
    };
    // 搜索回调
    var onSearch = function (direction, value) {
        var _a;
        setFilterValue(Object.assign({}, filterValue, (_a = {}, _a[direction] = value, _a)));
        if (props.onSearch) {
            props.onSearch(direction, value);
        }
    };
    return (React.createElement("div", { className: "TableTransfer " + className },
        React.createElement(LeftDropdown, null),
        React.createElement(RightDropdown, null),
        React.createElement(Transfer, __assign({ dataSource: dataSource, targetKeys: targetKeys, 
            // 默认用title处理，可传入自定义方法做覆盖
            filterOption: function (inputValue, item) { var _a, _b; return ((_b = (_a = item === null || item === void 0 ? void 0 : item.title) === null || _a === void 0 ? void 0 : _a.toUpperCase()) === null || _b === void 0 ? void 0 : _b.indexOf(inputValue === null || inputValue === void 0 ? void 0 : inputValue.toUpperCase())) !== -1; } }, restProps, { selectedKeys: __spreadArrays(sourceSelectedKeys, targetSelectedKeys), onChange: onChange, onSelectChange: onSelectChange, onSearch: onSearch, showSelectAll: showSelectAll }), function (_a) {
            var direction = _a.direction, filteredItems = _a.filteredItems, onItemSelectAll = _a.onItemSelectAll, onItemSelect = _a.onItemSelect, listSelectedKeys = _a.selectedKeys, listDisabled = _a.disabled;
            var columns = direction === 'left' ? leftColumns : rightColumns;
            var rowSelection = {
                getCheckboxProps: function (item) { return ({ disabled: listDisabled || item.disabled }); },
                onSelect: function (_a, selected) {
                    var key = _a.key;
                    onItemSelect(key, selected);
                },
                selectedRowKeys: listSelectedKeys,
                columnWidth: 40
            };
            return (React.createElement(Table, { rowSelection: rowSelection, columns: columns, dataSource: filteredItems, size: "small", style: { pointerEvents: listDisabled ? 'none' : undefined }, onRow: function (_a) {
                    var key = _a.key, itemDisabled = _a.disabled;
                    return ({
                        onClick: function () {
                            if (itemDisabled || listDisabled)
                                return;
                            onItemSelect(key, !listSelectedKeys.includes(key));
                        },
                    });
                }, showHeader: false, pagination: {
                    pageSize: itemSize,
                    simple: true,
                    onChange: function (page, pageSize) {
                        direction === 'left' ? setSourcePage(page) : setTargetPage(page);
                    }
                } }));
        }),
        React.createElement("div", { className: "helpText " + (showMaxError ? "helpTextIn" : "helpTextOut") }, maxErrorMsg !== null && maxErrorMsg !== void 0 ? maxErrorMsg : "\u6700\u591A" + maxTargetKeys + "\u9879")));
};
export default TableTransfer;

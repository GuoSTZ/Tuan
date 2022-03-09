import React from 'react';
var useErrorList = function () {
    var ErrorList = function (props) {
        var errors = props.errors;
        return (React.createElement(React.Fragment, null, errors === null || errors === void 0 ? void 0 : errors.map(function (item, index) { return (React.createElement("div", { key: index, className: "FormList-error" }, item)); })));
    };
    return [ErrorList];
};
export default useErrorList;

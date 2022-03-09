import React, { ReactNode } from 'react';
import "./index.less";
export interface FormListProps {
    /**
     * 表单名称，控制子表单项name
     */
    name: string;
    /**
     * 父级Form表单属性form
     */
    form: any;
    /**
     * 自定义添加按钮
     */
    addNode?: string | ReactNode;
    /**
     * 自定义删除按钮
     */
    removeNode?: string | ReactNode;
    /**
     * 支持最大子项数量限制
     */
    max?: number;
    /**
     * 最大子项数量限制信息提示自定义
     */
    maxErrorMsg?: string;
    /**
     * 初始值设定
     */
    initialValue?: any[];
    /**
     * 子表单项渲染方法
     */
    children: (field: FormListFieldProps, operation: FormListOperationProps) => ReactNode;
}
export interface FormListFieldProps {
    /** FormList 表单名称 */
    name: string;
    /** 子项表单名称前缀 */
    fieldName: string;
    /** 子项key值 */
    key: number;
    /** 子项索引值 */
    index: number;
    /** 子项初始值对象 */
    values?: any;
}
export interface FormListOperationProps {
    AddNode: () => ReactNode;
    RemoveNode: () => ReactNode;
}
export declare const FormList: React.ForwardRefExoticComponent<FormListProps & React.RefAttributes<unknown>>;

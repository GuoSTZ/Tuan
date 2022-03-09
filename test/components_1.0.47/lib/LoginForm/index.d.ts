import React from 'react';
import { WrappedFormUtils } from 'antd/lib/form/Form';
export declare type FormLayout = 'horizontal' | 'inline' | 'vertical';
export interface LoginFormProps {
    autoSubmitForm?: boolean;
    locale?: any;
    loading?: boolean;
    layout?: FormLayout;
    onHandlePreLogin?: (values: any) => any;
    onHandleLogin?: (values: any) => any;
    onHandlePostLogin?: (values: any) => any;
    url: string;
    footer?: any;
    className?: string;
    submitText?: string;
}
declare class LoginForm extends React.Component<LoginFormProps> {
    form?: WrappedFormUtils;
    state: {
        loading: boolean;
    };
    static defaultProps: {
        autoSubmitForm: boolean;
        loading: boolean;
        layout: string;
        onHandlePreLogin: (values: any) => any;
        onHandleLogin: (formValues: any) => any;
        onHandlePostLogin: (response: any) => any;
        url: string;
        footer: boolean;
    };
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    handleLogin: (e: any) => void;
    saveFormAsync(values: any): void;
    saveFormRef(insta: any): void;
    renderBody(): JSX.Element;
    renderLoginToolbar(): any;
    render(): JSX.Element;
}
export { LoginForm };

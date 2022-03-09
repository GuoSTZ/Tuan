import React from 'react';
import { UploadProps } from 'antd/lib/upload';
interface UploadFileProps extends UploadProps {
    value?: any;
    onChange?: any;
    uploadText?: string;
}
declare type UploadState = {
    fileList: any[];
};
export default class UploadFile extends React.Component<UploadFileProps, UploadState> {
    constructor(props: UploadFileProps);
    componentWillReceiveProps(next: UploadFileProps): void;
    beforeUpload(file: any, fileList: any[]): boolean;
    onRemove(): void;
    render(): JSX.Element;
}
export {};

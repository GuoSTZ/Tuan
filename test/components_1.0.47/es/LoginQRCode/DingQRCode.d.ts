import { Component } from 'react';
interface DingQRCodeProps {
    config: any;
}
interface DingQRCodeState {
    url: string;
    goto: string;
}
export default class DingQRCode extends Component<DingQRCodeProps, DingQRCodeState> {
    constructor(props: DingQRCodeProps);
    componentDidMount(): void;
    shouldComponentUpdate(nextProps: DingQRCodeProps): boolean;
    initDingCode(): void;
    bindEvent(): void;
    handleMessage(event: any): void;
    render(): JSX.Element;
}
export {};

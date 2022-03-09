import { Component } from 'react';
interface WXComQRCodeProps {
    config: any;
}
export default class WXComQRCode extends Component<WXComQRCodeProps, {}> {
    componentDidMount(): void;
    shouldComponentUpdate(nextProps: WXComQRCodeProps): boolean;
    initWechatCode(): void;
    render(): JSX.Element;
}
export {};

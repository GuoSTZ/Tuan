import React, { SFC } from 'react';
import './index.css';
export interface ExceptionProps {
    type?: '403' | '404' | '500';
    title?: React.ReactNode;
    desc?: React.ReactNode;
    img?: string;
    actions?: React.ReactNode;
    linkElement?: any;
    style?: React.CSSProperties;
    className?: string;
}
declare const Exception: SFC<ExceptionProps>;
export { Exception };

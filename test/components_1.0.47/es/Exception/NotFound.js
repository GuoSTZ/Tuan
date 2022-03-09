import React from 'react';
import { Link } from 'react-router-dom';
import { Exception } from './Exception';
export function NotFount() {
    return (React.createElement(Exception, { type: '404', style: { minHeight: 500, height: '80%' }, linkElement: Link }));
}

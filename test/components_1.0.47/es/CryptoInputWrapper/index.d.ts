import React from 'react';
import { InputProps } from 'antd/lib/input';
import { aesEncrypt, aesDecrypt } from '@soc/utils';
export interface CryptoInputWrapperProps extends Pick<InputProps, 'value' | 'onChange' | 'onBlur'> {
    encrypt?: typeof aesEncrypt;
    decrypt?: typeof aesDecrypt;
    cryptKey?: string;
}
export declare const CryptoInputWrapper: React.SFC<CryptoInputWrapperProps>;

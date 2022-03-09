import React, { FC, ComponentType } from 'react';
import { RouteProps } from 'react-router';
import { ModalProps } from 'antd/lib/modal';
import { History } from 'history';
export declare type Mode = 'view' | 'modal';
interface ModeRouteProps extends RouteProps {
    mode: Mode;
}
export declare function ModeRoute(props: ModeRouteProps): JSX.Element;
export interface ModalOrViewProps extends ModalProps {
    mode?: Mode;
    loading?: boolean;
    ModalComponent?: ComponentType<ModalProps>;
}
export declare const useHandleCancel: (params: {
    onCancel?: ((e: React.MouseEvent<HTMLElement>) => void) | undefined;
    history?: History<unknown> | undefined;
}) => (e: React.MouseEvent<HTMLElement>) => void;
export declare const ModalOrView: FC<ModalOrViewProps>;
export declare function withModalOrView<T = any>(modalProps?: ModalOrViewProps): (Component: ComponentType) => (props: T) => JSX.Element;
export {};

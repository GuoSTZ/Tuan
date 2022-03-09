import { TransferProps } from 'antd/lib/transfer';
import './index.css';
export interface TreeTransferProps extends TransferProps {
    /**
     * 自定义主键字段
     */
    customKey?: string;
    /**
     * 自定义展示内容字段
     */
    label?: string;
    /**
     * 数据源，其中的数据将会被渲染到左边一栏中，targetKeys 中指定的除外。必传
     */
    dataSource: Array<any>;
    /**
     * 显示在右侧框数据的 key 集合。必传
     */
    targetKeys: Array<any>;
}
export declare const TreeTransfer: (props: TreeTransferProps) => JSX.Element;

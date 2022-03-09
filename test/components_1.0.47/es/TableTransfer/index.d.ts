import { TransferProps } from 'antd/lib/transfer';
import { ColumnProps } from 'antd/lib/table';
import './index.less';
export interface TableTransferProps extends Omit<TransferProps, "listStyle"> {
    /**
     * 左侧表格列配置
     */
    leftColumns: ColumnProps<any>[];
    /**
     * 右侧表格列配置
     */
    rightColumns: ColumnProps<any>[];
    /**
     * 每页展示条数
     */
    itemSize?: number;
    /**
     * 自定义下拉菜单选取条数
     */
    dropdownSelectCount?: number[];
    /**
     * 允许转移的最大数据量
     */
    maxTargetKeys?: number;
    /**
     * 自定义穿梭框样式
     */
    listStyle?: any;
    /**
     * 自定义报错信息
     */
    maxErrorMsg?: string;
}
declare const TableTransfer: (props: TableTransferProps) => JSX.Element;
export default TableTransfer;

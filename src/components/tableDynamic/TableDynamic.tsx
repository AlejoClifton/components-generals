import React from 'react';
import style from './tableDynamic.module.css';
import { TableBody } from './components/body/TableBody';
import { TableHeader } from './components/header/TableHeader';

interface TableDynamicProps<T extends TableItem> {
    header: IListHeader<T>[];
    items: T[];
    onEdit?: (item: T) => void;
    onDelete?: (item: T) => void;
}

const TableDynamic = <T extends TableItem>({ header, items, onEdit, onDelete }: TableDynamicProps<T>) => {
    return (
        <div className={`${style.containTable} wrapperGeneric boxShadow rounded`}>
            <table className={`${style.table}`}>
                <TableHeader<T> header={header} onEdit={onEdit} onDelete={onDelete} />
                <TableBody<T> items={items} header={header} onEdit={onEdit} onDelete={onDelete} />
            </table>
        </div>
    );
};

export default TableDynamic;

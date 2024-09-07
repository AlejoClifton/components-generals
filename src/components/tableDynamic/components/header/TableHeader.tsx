import React from 'react';
import style from './tableHeader.module.css';

interface TableHeaderProps<T> {
    header: IListHeader<T>[];
    onEdit?: (item: T) => void;
    onDelete?: (item: T) => void;
}

export const TableHeader = <T,>({ header, onEdit, onDelete }: TableHeaderProps<T>) => (
    <thead>
        <tr className={style.row}>
            {header.map((item) => (
                <th key={item.id} className={style.containTH}>
                    <div className={`dFlexRow faCenter fGap-05 ${style.tableTH}`}>
                        <p className={style.textTH}>{item.text}</p>
                    </div>
                </th>
            ))}
            {(onEdit || onDelete) && (
                <th className={style.containButton}>
                    <div className={`dFlexRow faCenter fGap-05 ${style.tableTH}`}>
                        <p className={style.textTH}>Acciones</p>
                    </div>
                </th>
            )}
        </tr>
    </thead>
);

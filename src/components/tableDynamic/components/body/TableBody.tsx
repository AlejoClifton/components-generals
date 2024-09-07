import React from 'react';
import style from './tableBody.module.css';
import { Pen, Trash } from './assets/SvgContainer';
import { useColumnsTransform } from './hooks/useColumnsTransform';

interface TableBodyProps<T extends TableItem> {
    items: T[];
    header: IListHeader<T>[];
    onEdit?: (item: T) => void;
    onDelete?: (item: T) => void;
}

export const TableBody = <T extends TableItem>({ items, header, onEdit, onDelete }: TableBodyProps<T>) => (
    <tbody>
        {items.map((item) => (
            <tr key={item.id}>
                {header.map((headerItem) => (
                    <td key={headerItem.id} className={`${style.tableTD}`}>
                        {useColumnsTransform(item, headerItem)}
                    </td>
                ))}
                {(onEdit || onDelete) && (
                    <td className={`${style.tableTD} ${style.tableButton}`}>
                        <div className={`dFlexRow fjStart faCenter`}>
                            {onEdit && (
                                <button type="button" className={`${style.button} dFlexRowDefault rounded-50`} onClick={() => onEdit(item)}>
                                    <Pen className={`${style.pen} elem-20`} />
                                </button>
                            )}
                            {onDelete && (
                                <button
                                    type="button"
                                    className={`${style.button} dFlexRowDefault rounded-50`}
                                    onClick={() => onDelete(item)}>
                                    <Trash className={`${style.trash} elem-20`} />
                                </button>
                            )}
                        </div>
                    </td>
                )}
            </tr>
        ))}
    </tbody>
);

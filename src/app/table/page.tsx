'use client';
import TableDynamic from '@/components/tableDynamic/TableDynamic';

const header: IListHeader<Items>[] = [
    { id: 1, text: 'ID', key: 'id' },
    { id: 2, text: 'Nombre', key: 'name' },
    { id: 3, text: 'Edad', key: 'age' },
    { id: 4, text: 'Email', key: 'email' },
];

const items: Items[] = [
    { id: 1, name: 'Juan Pérez', age: 30, email: 'juan@example.com' },
    { id: 2, name: 'Ana Gómez', age: 25, email: 'ana@example.com' },
    { id: 3, name: 'Carlos Martínez', age: 35, email: 'carlos@example.com' },
];

const handleEdit = (item: any) => {
    console.log('Editar:', item);
};

const handleDelete = (item: any) => {
    console.log('Eliminar:', item);
};

export default function Table() {
    return (
        <div>
            <TableDynamic header={header} items={items} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
}

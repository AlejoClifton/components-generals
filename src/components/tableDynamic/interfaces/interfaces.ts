interface IListHeader<T> {
    id: number;
    text: string;
    key: keyof T;
}

interface Items {
    id: number;
    name: string;
    age: number;
    email: string;
}

interface TableItem {
    id: string | number;
}

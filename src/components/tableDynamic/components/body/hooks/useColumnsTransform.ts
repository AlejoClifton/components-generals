import { TODO } from '@/interfaces/interfaces';
import { formatDuration } from '@/utilities/format-duration';
import { formatPrice } from '@/utilities/format-price';

export const useColumnsTransform = (item: TODO, headerItem: TODO) => {
    if (!item[headerItem.key]) {
        return '';
    }

    switch (headerItem.key) {
        case 'duration':
            return `${formatDuration(item[headerItem.key])}`;
        case 'price':
            return `${formatPrice(item[headerItem.key])}`;
        default:
            return `${item[headerItem.key]}`;
    }
};

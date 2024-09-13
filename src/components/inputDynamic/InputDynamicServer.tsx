import style from './inputDynamic.module.css';
import { InputHTMLAttributes } from 'react';

export const InputDynamicServer = ({
    autoComplete,
    className,
    id,
    name,
    placeholder = '',
    readOnly = false,
    type = 'text',
    value,
}: InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <input
            autoComplete={autoComplete}
            className={`${style.inputDynamic} ${className}`}
            id={id}
            name={name}
            placeholder={placeholder}
            readOnly={readOnly}
            type={type}
            value={value}
        />
    );
};

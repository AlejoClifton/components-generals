import style from './inputDynamic.module.css';
import { Eye, EyeOff } from './svgContain';
import { InputHTMLAttributes, useState } from 'react';

export const InputDynamicClient = ({
    className,
    id,
    name,
    onChange,
    placeholder = '',
    readOnly = false,
    type = 'text',
    value,
}: InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <input
            id={id}
            type={type}
            className={`${style.inputDynamic} ${className}`}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            readOnly={readOnly}
            value={value}
        />
    );
};

export const InputPasswordClient = ({
    className,
    id,
    name,
    onChange,
    placeholder = '',
    readOnly = false,
    type = 'text',
    value,
}: InputHTMLAttributes<HTMLInputElement>) => {
    const [inputType, setInputType] = useState(type);

    const toggleInputType = () => {
        setInputType((prevType) => (prevType === 'password' ? 'text' : 'password'));
    };

    return (
        <div className={`${style.containPassword}`}>
            <input
                id={id}
                className={`${style.inputDynamic} ${className}`}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                readOnly={readOnly}
                value={value}
                type={inputType}
            />
            <button type="button" onClick={toggleInputType} className={`${style.eyeContain} dFlexRowDefault`}>
                {inputType === 'password' ? <Eye className={`${style.icon}`} /> : <EyeOff className={`${style.icon}`} />}
            </button>
        </div>
    );
};
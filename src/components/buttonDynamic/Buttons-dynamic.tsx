'use client';
import React from 'react';
import './buttons.css';
import styles from './buttons.module.css';

const ButtonsDynamic: React.FC<ButtonsDynamicProps> = ({
    type = 'button',
    classType,
    size = 'medium',
    isLoading,
    onClick,
    children,
    disabled = false,
    ariaLabel,
}) => {
    const buttonClasses = [styles.btn, classType ? styles[classType] : '', size ? styles[size] : '', isLoading ? styles.loading : ''].join(
        ' ',
    );

    return (
        <button type={type} onClick={onClick} className={buttonClasses} disabled={disabled} aria-label={ariaLabel}>
            {children}
        </button>
    );
};

export default ButtonsDynamic;

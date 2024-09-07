import React from 'react';
import Link from 'next/link';
import styles from './links.module.css';

const LinksDynamic: React.FC<LinksDynamicProps> = ({ href, ariaLabel, children, classType, size = 'medium', disabled = false }) => {
    const linkClasses = [styles.link, classType ? styles[classType] : '', size ? styles[size] : ''].join(' ');

    return (
        <Link href={disabled ? '#' : href} className={linkClasses} aria-label={ariaLabel}>
            {children}
        </Link>
    );
};

export default LinksDynamic;

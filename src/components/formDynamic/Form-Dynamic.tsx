import React from 'react';
import style from './form.module.css';

const FormDynamic = ({ handleSubmit, children }: { handleSubmit: any, children: React.ReactNode }) => {
    return <form onSubmit={handleSubmit} className={style.form}>{children}</form>;
};

export default FormDynamic;

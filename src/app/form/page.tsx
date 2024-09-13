'use client';
import FormDynamic from '@/components/formDynamic/Form-Dynamic';
import { InputDynamicClient, InputPasswordClient } from '@/components/inputDynamic/InputDynamicClient';
import { InputDynamicServer } from '@/components/inputDynamic/InputDynamicServer';
import React, { FormEvent } from 'react';

const Form = () => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const name = formData.get('name') as string;

        console.log(name);
    };

    return (
        <div>
            <FormDynamic handleSubmit={handleSubmit}>
                <InputDynamicClient
                    id="name"
                    name="name"
                    className="inputClass"
                    placeholder="Enter your name"
                    onChange={(e) => console.log(e.target.value)}
                    value=""
                />
                <InputDynamicClient
                    id="email"
                    name="email"
                    className="inputClass"
                    placeholder="Enter your email"
                    type="email"
                    onChange={(e) => console.log(e.target.value)}
                    value=""
                />
                <InputDynamicClient
                    id="age"
                    name="age"
                    className="inputClass"
                    placeholder="Enter your age"
                    type="number"
                    onChange={(e) => console.log(e.target.value)}
                    value=""
                />
                <InputPasswordClient
                    id="password"
                    name="password"
                    className="inputClass"
                    placeholder="Enter your password"
                    onChange={(e) => console.log(e.target.value)}
                    value=""
                />
                <InputDynamicServer autoComplete="pep" id="pep" name="pep" className="inputClass" placeholder="Enter your pep" />
            </FormDynamic>
        </div>
    );
};

export default Form;

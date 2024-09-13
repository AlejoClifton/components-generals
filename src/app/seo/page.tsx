import { metadataDynamic } from '@/components/seoDynamic/metadata';
import React from 'react';

const metaData = {
    title: 'Página Secundaria de Prueba',
    description: 'Esta es la descripción de SEO de prueba para la página secundaria.',
    url: 'http://alejoclifton.com/seo/prueba',
    keywords: ['SEO', 'Next.js', 'Página secundaria'],
    imageUrl: '/images/secondary-page-image.png',
};

export const metadata = metadataDynamic(metaData);

const Seo = () => {
    return (
        <>
            <main>
                <h1>Página Secundaria</h1>
                <p>Contenido de la página secundaria...</p>
            </main>
        </>
    );
};

export default Seo;

import { Metadata } from 'next';

export const metadataStatic: Metadata = {
    title: 'Página de SEO prueba',
    description: 'Es la descripción de SEO de prueba',
    keywords: ['Next.js', 'React', 'Web Development', 'SEO', 'Prueba 1'],
    icons: {
        icon: '/images/images.png',
    },
    openGraph: {
        title: 'Página de SEO prueba',
        description: 'Es la descripción de SEO de prueba',
        url: 'http://alejoclifton.com/',
        siteName: 'Alejo Clifton página',
        images: [
            {
                url: '/images/images.png',
                width: 1200,
                height: 630,
                alt: 'Graph',
            },
        ],
        locale: 'es_ES',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        site: '@alejoclifton',
        creator: '@AlejoClifton',
        title: 'Página de SEO prueba',
        description: 'Es la descripción de SEO de prueba',
        images: ['/images/twitter.png'],
    },
    viewport: 'width=device-width, initial-scale=1',
    authors: [{ name: 'Alejo Tomás Clifton Goldney', url: 'http://alejoclifton.com/' }],
    publisher: 'Alejo Clifton',
};

interface IMetaDataDynamic {
    description: string;
    imageUrl: string;
    keywords: string[];
    title: string;
    url: string;
}

export const metadataDynamic = ({ description, imageUrl, keywords, title, url }: IMetaDataDynamic) => {
    return {
        title: title,
        description: { description },
        keywords: keywords,
        icons: {
            icon: '/images/images.png',
        },
        openGraph: {
            title: title,
            description: 'Es la descripción de SEO de prueba',
            url: url,
            siteName: 'Alejo Clifton página',
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: 'Graph',
                },
            ],
            locale: 'es_ES',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            site: '@alejoclifton',
            creator: '@AlejoClifton',
            title: title,
            description: 'Es la descripción de SEO de prueba',
            images: [imageUrl],
        },
        viewport: 'width=device-width, initial-scale=1',
        authors: [{ name: 'Alejo Tomás Clifton Goldney', url: url }],
        publisher: 'Alejo Clifton',
    };
};

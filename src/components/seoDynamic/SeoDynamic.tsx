import { Metadata } from 'next';

interface SEOProps {
    title: string;
    description: string;
    url: string;
    keywords?: string[];
    imageUrl?: string;
    locale?: string;
}

export function SeoDynamic({
    title,
    description,
    url,
    keywords = ['Next.js', 'React', 'SEO'],
    imageUrl = '/images/default-image.png',
    locale = 'es_ES',
}: SEOProps) {
    const metadata: Metadata = {
        title,
        description,
        keywords,
        icons: {
            icon: '/favicon.ico',
        },
        openGraph: {
            title,
            description,
            url,
            siteName: 'Alejo Clifton página',
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: `${title} - Open Graph Image`,
                },
            ],
            locale,
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            site: '@alejoclifton',
            creator: '@AlejoClifton',
            title,
            description,
            images: [imageUrl],
        },
        viewport: 'width=device-width, initial-scale=1',
        authors: [{ name: 'Alejo Tomás Clifton Goldney', url: 'http://alejoclifton.com/' }],
        publisher: 'Alejo Clifton',
    };

    return metadata;
}

export default SeoDynamic;

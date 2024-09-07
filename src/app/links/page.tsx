import React from 'react';
import LinksDynamic from '@/components/linksDynamic/Links-Dynamic';

const Links = () => {
    return (
        <div>
            <LinksDynamic href="/home" ariaLabel="Go to Home" size="small" classType="primary">
                Small Common
            </LinksDynamic>
            <LinksDynamic href="/home" ariaLabel="Go to Home" classType="primary">
                Medium Common
            </LinksDynamic>
            <LinksDynamic href="/home" ariaLabel="Go to Home" size="large" classType="primary">
                Large Common
            </LinksDynamic>
            <LinksDynamic href="/home" ariaLabel="Go to Home" size="small" classType="secondary">
                Link with colour Small
            </LinksDynamic>
            <LinksDynamic href="/home" ariaLabel="Go to Home" classType="secondary">
                Link with colour Medium
            </LinksDynamic>
            <LinksDynamic href="/home" ariaLabel="Go to Home" size="large" classType="secondary">
                Link with colour Large
            </LinksDynamic>
        </div>
    );
};

export default Links;

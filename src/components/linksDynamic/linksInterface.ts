interface LinksDynamicProps {
    href: string;
    ariaLabel: string;
    children: React.ReactNode;
    classType?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    isLoading?: boolean;
    disabled?: boolean;
}
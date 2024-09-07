interface ButtonsDynamicProps {
    ariaLabel: string;
    children: React.ReactNode;
    classType?: 'success' | 'warning' | 'danger' | 'info' | 'dark' | 'light';
    size?: 'small' | 'medium' | 'large';
    isLoading?: boolean;
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    type?: 'button' | 'submit' | 'reset';
}
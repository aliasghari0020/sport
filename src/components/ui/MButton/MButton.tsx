import React from 'react';
import Button from '@mui/material/Button';

interface Props {
    text: string;
    onClick?: () => void;
    color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
    variant?: 'contained' | 'outlined' | 'text';
    fullWidth?: boolean;
}

const MyButton: React.FC<Props> =
    ({text, onClick, color = 'primary', variant = 'contained', fullWidth = false,}) => {
    return (
        <Button
            onClick={onClick}
            color={color}
            variant={variant}
            fullWidth={fullWidth}
            className="rounded-lg shadow-md transition-all "
        >
            {text}
        </Button>
    );
};

export default MyButton;

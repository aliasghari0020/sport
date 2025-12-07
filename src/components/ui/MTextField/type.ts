import React from "react";

export interface MyTextFieldProps {
    label?: string;
    value?: string;
    select?: boolean;
    placeholder?: string;
    type?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    fullWidth?: boolean;
    error?: boolean;
    helperText?: string;
}
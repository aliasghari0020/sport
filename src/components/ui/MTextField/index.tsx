import React from "react";
import {TextField} from "@mui/material";
import type {MyTextFieldProps} from "./type.ts";



const MyTextField:
    React.FC<MyTextFieldProps> = ({label,value, placeholder, type = "text", onChange, fullWidth = true, error = false, helperText}) => {
    return (
        <div className="my-text-field">
            <TextField
                label={label}
                value={value}
                placeholder={placeholder}
                type={type}
                onChange={onChange}
                fullWidth={fullWidth}
                error={error}
                helperText={helperText}
                variant="outlined"
                className="rounded-md"
            />
        </div>
    );
};

export default MyTextField;

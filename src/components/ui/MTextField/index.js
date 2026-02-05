import { jsx as _jsx } from "react/jsx-runtime";
import { TextField } from "@mui/material";
const MyTextField = ({ label, value, placeholder, type = "text", onChange, fullWidth = true, error = false, helperText }) => {
    return (_jsx("div", { className: "my-text-field", children: _jsx(TextField, { label: label, value: value, placeholder: placeholder, type: type, onChange: onChange, fullWidth: fullWidth, error: error, helperText: helperText, variant: "outlined", className: "rounded-md" }) }));
};
export default MyTextField;

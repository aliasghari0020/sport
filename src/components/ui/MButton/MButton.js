import { jsx as _jsx } from "react/jsx-runtime";
import Button from '@mui/material/Button';
const MyButton = ({ text, onClick, color = 'primary', variant = 'contained', fullWidth = false, }) => {
    return (_jsx(Button, { onClick: onClick, color: color, variant: variant, fullWidth: fullWidth, className: "rounded-lg shadow-md transition-all ", children: text }));
};
export default MyButton;

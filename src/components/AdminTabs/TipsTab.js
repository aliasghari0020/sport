import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Paper, Typography, TextField, Button, Box, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDiet } from "../../context/DietContext";
const TipsTab = () => {
    const { dispatch, state } = useDiet();
    const [items, setItems] = useState(state.tips?.items || [""]);
    const handleChange = (index, value) => {
        const updated = [...items];
        updated[index] = value;
        setItems(updated);
    };
    const handleAddItem = () => setItems([...items, ""]);
    const handleDeleteItem = (index) => {
        const updated = items.filter((_, i) => i !== index);
        setItems(updated.length ? updated : [""]); // اگر همه حذف شدند یک آیتم خالی بذار
    };
    const handleSave = () => {
        dispatch({ type: "SET_TIPS", payload: { title: "نکات و توصیه‌های هپی‌ریتم", items } });
    };
    return (_jsxs(Paper, { sx: { p: 3 }, children: [_jsx(Typography, { variant: "h6", fontWeight: "bold", mb: 2, children: "\u0646\u06A9\u0627\u062A \u0648 \u062A\u0648\u0635\u06CC\u0647\u200C\u0647\u0627\u06CC \u0647\u067E\u06CC\u200C\u0631\u06CC\u062A\u0645" }), items.map((item, index) => (_jsxs(Box, { display: "flex", alignItems: "center", gap: 1, mb: 2, children: [_jsx(TextField, { fullWidth: true, label: `آیتم ${index + 1}`, value: item, onChange: (e) => handleChange(index, e.target.value) }), _jsx(IconButton, { color: "error", onClick: () => handleDeleteItem(index), "aria-label": "\u062D\u0630\u0641 \u0622\u06CC\u062A\u0645", children: _jsx(DeleteIcon, {}) })] }, index))), _jsxs(Box, { display: "flex", gap: 2, children: [_jsx(Button, { variant: "outlined", onClick: handleAddItem, children: "\u0627\u0641\u0632\u0648\u062F\u0646 \u0622\u06CC\u062A\u0645" }), _jsx(Button, { variant: "contained", onClick: handleSave, children: "\u0630\u062E\u06CC\u0631\u0647 \u0646\u06A9\u0627\u062A \u0648 \u062A\u0648\u0635\u06CC\u0647\u200C\u0647\u0627" })] })] }));
};
export default TipsTab;

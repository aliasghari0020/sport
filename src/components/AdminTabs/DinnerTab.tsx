import React, { useState } from "react";
import { Paper, Typography, TextField, Button, Box, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDiet } from "../../context/DietContext";

const DinnerTab: React.FC = () => {
    const { dispatch, state } = useDiet();
    const [items, setItems] = useState<string[]>(state.dinner?.items || [""]);

    const handleChange = (index: number, value: string) => {
        const updated = [...items];
        updated[index] = value;
        setItems(updated);
    };

    const handleAddItem = () => setItems([...items, ""]);

    const handleDeleteItem = (index: number) => {
        const updated = items.filter((_, i) => i !== index);
        setItems(updated.length ? updated : [""]);
    };

    const handleSave = () => {
        dispatch({ type: "SET_DINNER", payload: { title: "شام", items } });
    };

    return (
        <Paper sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight="bold" mb={2}>
                 منوی شام
            </Typography>

            {items.map((item, index) => (
                <Box key={index} display="flex" alignItems="center" gap={1} mb={2}>
                    <TextField
                        fullWidth
                        label={`آیتم ${index + 1}`}
                        value={item}
                        onChange={(e) => handleChange(index, e.target.value)}
                    />
                    <IconButton
                        color="error"
                        onClick={() => handleDeleteItem(index)}
                        aria-label="حذف آیتم"
                    >
                        <DeleteIcon />
                    </IconButton>
                </Box>
            ))}

            <Box display="flex" gap={2}>
                <Button variant="outlined" onClick={handleAddItem}>
                    افزودن آیتم
                </Button>
                <Button variant="contained" onClick={handleSave}>
                    ذخیره شام
                </Button>
            </Box>
        </Paper>
    );
};

export default DinnerTab;

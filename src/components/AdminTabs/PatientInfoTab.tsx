import React, { useState, useEffect } from "react";
import {
    Box,
    TextField,
    MenuItem,
    Button,
    Typography,
    Paper,
} from "@mui/material";
import { useDiet } from "../../context/DietContext";
import type { PatientInfo } from "../../context/dietReducer";
import { useNavigate } from "react-router-dom";

const PatientInfoTab: React.FC = () => {
    const { state, dispatch } = useDiet(); // گرفتن state از context
    const navigate = useNavigate();

    // مقدار اولیه از context می‌آید تا بعد از submit یا تغییر تب ریست نشود
    const [formData, setFormData] = useState<PatientInfo>(
        state.patient || {
            name: "",
            age: 0,
            weight: 0,
            height: 0,
            skeletonType: "",
            fatStatus: "",
            bodyFatPercent: 0,
            idealWeightDiff: 0,
            bmi: 0,
            activityLevel: "",
            waist: 0,
            abdomen: 0,
            hip: 0,
            wrist: 0,
            thigh: 0,
            arm: 0,
            neck: 0,
        }
    );

    // اگر state.context تغییر کند، فرم هم به روز شود
    useEffect(() => {
        if (state.patient) {
            setFormData(state.patient);
        }
    }, [state.patient]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: !isNaN(parseFloat(value)) ? parseFloat(value) : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch({ type: "SET_PATIENT", payload: formData });
        // navigate("/"); // اگر میخوای در همین تب بمونی، کامنت کن
    };

    return (
        <Paper elevation={2} sx={{ p: 4, maxWidth: 600, mx: "auto" }}>
            <Typography variant="h6" align="center" fontWeight="bold" mb={3}>
                فرم اطلاعات بیمار
            </Typography>

            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
                <TextField label="نام" name="name" value={formData.name} onChange={handleChange} size="small" />
                <TextField label="سن" name="age" type="number" value={formData.age || ""} onChange={handleChange} size="small" />
                <TextField label="قد (cm)" name="height" type="number" value={formData.height || ""} onChange={handleChange} size="small" />
                <TextField label="وزن (kg)" name="weight" type="number" value={formData.weight || ""} onChange={handleChange} size="small" />
                <TextField label="درصد چربی بدن" name="bodyFatPercent" type="number" value={formData.bodyFatPercent || ""} onChange={handleChange} size="small" />
                <TextField label="اختلاف با وزن ایده‌آل" name="idealWeightDiff" type="number" value={formData.idealWeightDiff || ""} onChange={handleChange} size="small" />
                <TextField label="BMI" name="bmi" type="number" value={formData.bmi || ""} onChange={handleChange} size="small" />

                <TextField select label="نوع استخوان‌بندی" name="skeletonType" value={formData.skeletonType} onChange={handleChange} size="small">
                    <MenuItem value="">انتخاب کنید</MenuItem>
                    <MenuItem value="ریز">ریز</MenuItem>
                    <MenuItem value="متوسط">متوسط</MenuItem>
                    <MenuItem value="درشت">درشت</MenuItem>
                </TextField>

                <TextField select label="وضعیت توده چربی" name="fatStatus" value={formData.fatStatus} onChange={handleChange} size="small">
                    <MenuItem value="">انتخاب کنید</MenuItem>
                    <MenuItem value="کم">کم</MenuItem>
                    <MenuItem value="نرمال">نرمال</MenuItem>
                    <MenuItem value="زیاد">زیاد</MenuItem>
                </TextField>

                <TextField select label="فعالیت بدنی" name="activityLevel" value={formData.activityLevel} onChange={handleChange} size="small">
                    <MenuItem value="">انتخاب کنید</MenuItem>
                    <MenuItem value="کم">کم</MenuItem>
                    <MenuItem value="متوسط">متوسط</MenuItem>
                    <MenuItem value="زیاد">زیاد</MenuItem>
                </TextField>

                <TextField label="دور کمر (cm)" name="waist" type="number" value={formData.waist || ""} onChange={handleChange} size="small" />
                <TextField label="دور شکم (cm)" name="abdomen" type="number" value={formData.abdomen || ""} onChange={handleChange} size="small" />
                <TextField label="دور لگن (cm)" name="hip" type="number" value={formData.hip || ""} onChange={handleChange} size="small" />
                <TextField label="دور مچ (cm)" name="wrist" type="number" value={formData.wrist || ""} onChange={handleChange} size="small" />
                <TextField label="دور ران (cm)" name="thigh" type="number" value={formData.thigh || ""} onChange={handleChange} size="small" />
                <TextField label="دور بازو (cm)" name="arm" type="number" value={formData.arm || ""} onChange={handleChange} size="small" />
                <TextField label="دور گردن (cm)" name="neck" type="number" value={formData.neck || ""} onChange={handleChange} size="small" />

                <Button type="submit" variant="contained" fullWidth sx={{ mt: 1 }}>
                    ذخیره اطلاعات
                </Button>
            </Box>
        </Paper>
    );
};

export default PatientInfoTab;

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Box, TextField, MenuItem, Button, Typography, Paper, } from "@mui/material";
import { useDiet } from "../../context/DietContext";
import { useNavigate } from "react-router-dom";
const PatientInfoTab = () => {
    const { state, dispatch } = useDiet(); // گرفتن state از context
    const navigate = useNavigate();
    // مقدار اولیه از context می‌آید تا بعد از submit یا تغییر تب ریست نشود
    const [formData, setFormData] = useState(state.patient || {
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
    });
    // اگر state.context تغییر کند، فرم هم به روز شود
    useEffect(() => {
        if (state.patient) {
            setFormData(state.patient);
        }
    }, [state.patient]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: !isNaN(parseFloat(value)) ? parseFloat(value) : value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: "SET_PATIENT", payload: formData });
        // navigate("/"); // اگر میخوای در همین تب بمونی، کامنت کن
    };
    return (_jsxs(Paper, { elevation: 2, sx: { p: 4, maxWidth: 600, mx: "auto" }, children: [_jsx(Typography, { variant: "h6", align: "center", fontWeight: "bold", mb: 3, children: "\u0641\u0631\u0645 \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0628\u06CC\u0645\u0627\u0631" }), _jsxs(Box, { component: "form", onSubmit: handleSubmit, sx: { display: "flex", flexDirection: "column", gap: 2 }, children: [_jsx(TextField, { label: "\u0646\u0627\u0645", name: "name", value: formData.name, onChange: handleChange, size: "small" }), _jsx(TextField, { label: "\u0633\u0646", name: "age", type: "number", value: formData.age || "", onChange: handleChange, size: "small" }), _jsx(TextField, { label: "\u0642\u062F (cm)", name: "height", type: "number", value: formData.height || "", onChange: handleChange, size: "small" }), _jsx(TextField, { label: "\u0648\u0632\u0646 (kg)", name: "weight", type: "number", value: formData.weight || "", onChange: handleChange, size: "small" }), _jsx(TextField, { label: "\u062F\u0631\u0635\u062F \u0686\u0631\u0628\u06CC \u0628\u062F\u0646", name: "bodyFatPercent", type: "number", value: formData.bodyFatPercent || "", onChange: handleChange, size: "small" }), _jsx(TextField, { label: "\u0627\u062E\u062A\u0644\u0627\u0641 \u0628\u0627 \u0648\u0632\u0646 \u0627\u06CC\u062F\u0647\u200C\u0622\u0644", name: "idealWeightDiff", type: "number", value: formData.idealWeightDiff || "", onChange: handleChange, size: "small" }), _jsx(TextField, { label: "BMI", name: "bmi", type: "number", value: formData.bmi || "", onChange: handleChange, size: "small" }), _jsxs(TextField, { select: true, label: "\u0646\u0648\u0639 \u0627\u0633\u062A\u062E\u0648\u0627\u0646\u200C\u0628\u0646\u062F\u06CC", name: "skeletonType", value: formData.skeletonType, onChange: handleChange, size: "small", children: [_jsx(MenuItem, { value: "", children: "\u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F" }), _jsx(MenuItem, { value: "\u0631\u06CC\u0632", children: "\u0631\u06CC\u0632" }), _jsx(MenuItem, { value: "\u0645\u062A\u0648\u0633\u0637", children: "\u0645\u062A\u0648\u0633\u0637" }), _jsx(MenuItem, { value: "\u062F\u0631\u0634\u062A", children: "\u062F\u0631\u0634\u062A" })] }), _jsxs(TextField, { select: true, label: "\u0648\u0636\u0639\u06CC\u062A \u062A\u0648\u062F\u0647 \u0686\u0631\u0628\u06CC", name: "fatStatus", value: formData.fatStatus, onChange: handleChange, size: "small", children: [_jsx(MenuItem, { value: "", children: "\u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F" }), _jsx(MenuItem, { value: "\u06A9\u0645", children: "\u06A9\u0645" }), _jsx(MenuItem, { value: "\u0646\u0631\u0645\u0627\u0644", children: "\u0646\u0631\u0645\u0627\u0644" }), _jsx(MenuItem, { value: "\u0632\u06CC\u0627\u062F", children: "\u0632\u06CC\u0627\u062F" })] }), _jsxs(TextField, { select: true, label: "\u0641\u0639\u0627\u0644\u06CC\u062A \u0628\u062F\u0646\u06CC", name: "activityLevel", value: formData.activityLevel, onChange: handleChange, size: "small", children: [_jsx(MenuItem, { value: "", children: "\u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F" }), _jsx(MenuItem, { value: "\u06A9\u0645", children: "\u06A9\u0645" }), _jsx(MenuItem, { value: "\u0645\u062A\u0648\u0633\u0637", children: "\u0645\u062A\u0648\u0633\u0637" }), _jsx(MenuItem, { value: "\u0632\u06CC\u0627\u062F", children: "\u0632\u06CC\u0627\u062F" })] }), _jsx(TextField, { label: "\u062F\u0648\u0631 \u06A9\u0645\u0631 (cm)", name: "waist", type: "number", value: formData.waist || "", onChange: handleChange, size: "small" }), _jsx(TextField, { label: "\u062F\u0648\u0631 \u0634\u06A9\u0645 (cm)", name: "abdomen", type: "number", value: formData.abdomen || "", onChange: handleChange, size: "small" }), _jsx(TextField, { label: "\u062F\u0648\u0631 \u0644\u06AF\u0646 (cm)", name: "hip", type: "number", value: formData.hip || "", onChange: handleChange, size: "small" }), _jsx(TextField, { label: "\u062F\u0648\u0631 \u0645\u0686 (cm)", name: "wrist", type: "number", value: formData.wrist || "", onChange: handleChange, size: "small" }), _jsx(TextField, { label: "\u062F\u0648\u0631 \u0631\u0627\u0646 (cm)", name: "thigh", type: "number", value: formData.thigh || "", onChange: handleChange, size: "small" }), _jsx(TextField, { label: "\u062F\u0648\u0631 \u0628\u0627\u0632\u0648 (cm)", name: "arm", type: "number", value: formData.arm || "", onChange: handleChange, size: "small" }), _jsx(TextField, { label: "\u062F\u0648\u0631 \u06AF\u0631\u062F\u0646 (cm)", name: "neck", type: "number", value: formData.neck || "", onChange: handleChange, size: "small" }), _jsx(Button, { type: "submit", variant: "contained", fullWidth: true, sx: { mt: 1 }, children: "\u0630\u062E\u06CC\u0631\u0647 \u0627\u0637\u0644\u0627\u0639\u0627\u062A" })] })] }));
};
export default PatientInfoTab;

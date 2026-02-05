import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import { useDiet } from "../../context/DietContext";
import { Box, Paper, Typography } from "@mui/material";
const HomePage = () => {
    const { state } = useDiet();
    const patient = state.patient;
    const pageRef = useRef(null);
    if (!patient) {
        return (_jsx(Box, { sx: {
                p: 4,
                textAlign: "center",
                fontFamily: "Vazirmatn, sans-serif",
                direction: "rtl",
            }, children: _jsx(Typography, { children: "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0647\u0646\u0648\u0632 \u0648\u0627\u0631\u062F \u0646\u0634\u062F\u0647" }) }));
    }
    return (_jsx(Box, { sx: {
            fontFamily: "Vazirmatn, sans-serif",
            direction: "rtl",
            minHeight: "100vh",
            py: 6,
            position: "relative",
            overflow: "hidden",
        }, children: _jsxs("div", { ref: pageRef, style: { position: "relative" }, children: [_jsxs(Paper, { elevation: 0, sx: {
                        p: 2,
                        borderRadius: "20px",
                        background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.4)",
                        boxShadow: `
                            inset 0 0.125em 0.125em rgba(0, 0, 0, 0.05),
                            inset 0 -0.125em 0.125em rgba(255, 255, 255, 0.1),
                            0 0.25em 0.125em -0.125em rgba(0, 0, 0, 0.2),
                            0 0 0.1em 0.25em inset rgba(255, 255, 255, 0.1)
                        `,
                        textAlign: "center",
                        transition: "all 0.3s ease",
                        flex: 1,
                    }, className: "flex justify-between w-[52%] items-center gap-2", children: [_jsxs(Typography, { variant: "h4", color: "#fff", fontWeight: "bold", children: ["\u0628\u0631\u0646\u0627\u0645\u0647 \u0631\u0698\u06CC\u0645 \u0686\u0631\u0628\u06CC\u200C\u0633\u0648\u0632: ", patient.name] }), _jsx("div", { children: _jsx("img", { className: "w-[100px]", src: "../../../public/assets/image/3b7d7948-aa9e-4af2-b143-2ca30ee79ccf.png", alt: "" }) })] }), _jsxs("div", { className: "grid grid-cols-2 gap-20 items-center", children: [_jsx("div", { children: _jsx("img", { className: "w-[500px]", src: "../../../public/assets/image/0d8baeb6-0a34-46c5-87c0-c16d39230fdc.png", alt: "" }) }), _jsx(Paper, { elevation: 0, sx: {
                                p: 8,
                                borderRadius: "20px",
                                background: "linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05))",
                                backdropFilter: "blur(10px)",
                                WebkitBackdropFilter: "blur(10px)",
                                border: "1px solid rgba(255,255,255,0.4)",
                                boxShadow: `
                                inset 0 0.125em 0.125em rgba(0, 0, 0, 0.05),
                                inset 0 -0.125em 0.125em rgba(255, 255, 255, 0.5),
                                0 0.25em 0.125em -0.125em rgba(0, 0, 0, 0.2),
                                0 0 0.1em 0.25em inset rgba(255, 255, 255, 0.2)
                            `,
                                textAlign: "center",
                                transition: "all 0.3s ease",
                                flex: 1,
                            }, children: _jsxs(Box, { className: "grid grid-cols-2 gap-6 text-white text-start", children: [_jsxs(Typography, { className: "!text-xl", children: ["\u0648\u0632\u0646: ", _jsxs("span", { className: "font-bold", children: [patient.weight, " kg"] })] }), _jsxs(Typography, { className: "!text-xl", children: ["\u0627\u062E\u062A\u0644\u0627\u0641 \u0628\u0627 \u0648\u0632\u0646 \u0627\u06CC\u062F\u0647\u200C\u0622\u0644:", " ", _jsx("span", { className: "font-bold", children: patient.idealWeightDiff })] }), _jsxs(Typography, { className: "!text-xl", children: ["\u0642\u062F: ", _jsxs("span", { className: "font-bold", children: [patient.height, " cm"] })] }), _jsxs(Typography, { className: "!text-xl", children: ["\u062F\u0631\u0635\u062F \u0686\u0631\u0628\u06CC \u0628\u062F\u0646:", " ", _jsxs("span", { className: "font-bold", children: [patient.bodyFatPercent, "%"] })] }), _jsxs(Typography, { className: "!text-xl", children: ["\u0644\u06AF\u0646: ", _jsxs("span", { className: "font-bold", children: [patient.waist, " cm"] })] }), _jsxs(Typography, { className: "!text-xl", children: ["\u0646\u0648\u0639 \u0627\u0633\u062A\u062E\u0648\u0627\u0646\u200C\u0628\u0646\u062F\u06CC:", " ", _jsx("span", { className: "font-bold", children: patient.skeletonType })] }), _jsxs(Typography, { className: "!text-xl", children: ["\u0634\u06A9\u0645: ", _jsxs("span", { className: "font-bold", children: [patient.abdomen, " cm"] })] }), _jsxs(Typography, { className: "!text-xl", children: ["\u0641\u0639\u0627\u0644\u06CC\u062A \u0628\u062F\u0646\u06CC:", " ", _jsx("span", { className: "font-bold", children: patient.activityLevel })] }), _jsxs(Typography, { className: "!text-xl", children: ["\u0628\u0627\u0632\u0648: ", _jsxs("span", { className: "font-bold", children: [patient.arm, " cm"] })] }), _jsxs(Typography, { className: "!text-xl", children: ["\u0648\u0636\u0639\u06CC\u062A \u062A\u0648\u062F\u0647 \u0686\u0631\u0628\u06CC:", " ", _jsx("span", { className: "font-bold", children: patient.fatStatus })] }), _jsxs(Typography, { className: "!text-xl", children: ["\u06AF\u0631\u062F\u0646: ", _jsxs("span", { className: "font-bold", children: [patient.neck, " cm"] })] }), _jsxs(Typography, { className: "!text-xl", children: ["BMI: ", _jsx("span", { className: "font-bold", children: patient.bmi })] })] }) })] })] }) }));
};
export default HomePage;

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Paper, Typography, Box } from "@mui/material";
import { useDiet } from "../../context/DietContext";
const BreakfastSection = () => {
    const { state } = useDiet();
    const items = state.snacks?.items || [];
    return (_jsx(Paper, { sx: { p: 2, mb: 2, background: "transparent", boxShadow: "none", minHeight: '100vh', display: 'flex', alignItems: 'center' }, children: _jsxs("div", { className: "flex w-full justify-between itmes-center gap-10", children: [_jsxs(Box, { sx: { lineHeight: 1.8, flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'space-between' }, children: [_jsx(Typography, { variant: "h2", textAlign: "center", className: "text-white !font-black", mb: 1, children: "\u0645\u06CC\u0627\u0646\u200C\u0648\u0639\u062F\u0647 \u0647\u067E\u06CC\u200C\u0631\u06CC\u062A\u0645" }), items.map((item, i) => (_jsx("div", { style: {
                                padding: "10px",
                                borderRadius: "20px",
                                background: "rgba(255,255,255,0.1)",
                                backdropFilter: "blur(10px)",
                                WebkitBackdropFilter: "blur(10px)",
                                border: "1px solid rgba(255,255,255,0.4)",
                                boxShadow: `
                                                inset 0 0.125em 0.125em rgba(0, 0, 0, 0.05),
                                                inset 0 -0.125em 0.125em rgba(255, 255, 255, 0.1),
                                                0 0.25em 0.125em -0.125em rgba(0, 0, 0, 0.2),
                                                0 0 0.1em 0.25em inset rgba(255, 255, 255, 0.1)
                                                `,
                                transition: "all 0.3s ease",
                                color: "#fff",
                            }, children: _jsxs(Typography, { className: " !text-2xl ", children: [" ", item] }, i) })))] }), _jsx("img", { className: 'w-[500px]', src: "../../../public/assets/image/ChatGPT%20Image%20Nov%2010,%202025,%2010_27_04%20AM.png", alt: "" })] }) }));
};
export default BreakfastSection;

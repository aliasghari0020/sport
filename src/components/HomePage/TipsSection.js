import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Paper, Typography, Box } from "@mui/material";
import { useDiet } from "../../context/DietContext";
const BreakfastSection = () => {
    const { state } = useDiet();
    const items = state.tips?.items || [];
    return (_jsx(Paper, { sx: { p: 2, mb: 2, background: "transparent", boxShadow: "none", minHeight: '100vh', display: 'flex', alignItems: 'center' }, children: _jsxs("div", { className: "flex w-full justify-between items-center gap-10", children: [_jsx("img", { className: 'w-[500px]  !bg-[transparent];', src: "../../../public/assets/image/63ccc589-63a7-47dd-b470-3ded85c39066.png", alt: "" }), _jsxs(Box, { sx: {
                        lineHeight: 1.8,
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px',
                        justifyContent: 'space-between'
                    }, children: [_jsx(Typography, { variant: "h2", textAlign: "center", className: "text-white !font-black", mb: 1, children: "\u0646\u06A9\u0627\u062A\u200C\u0648\u200C\u062A\u0648\u0635\u06CC\u0647\u200C\u0647\u0627\u06CC \u0647\u067E\u06CC\u200C\u0631\u06CC\u062A\u0645" }), items.map((item, i) => (_jsx("div", { style: {
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
                            }, children: _jsxs(Typography, { className: " !text-2xl ", children: [" ", item] }, i) })))] })] }) }));
};
export default BreakfastSection;

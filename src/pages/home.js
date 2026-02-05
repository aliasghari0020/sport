import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useDiet } from "../context/DietContext";
import { Box, Button } from "@mui/material";
import BreakfastSection from "../components/HomePage/BreakfastSection";
import LunchSection from "../components/HomePage/LunchSection";
import SnacksSection from "../components/HomePage/SnacksSection";
import DrinksSection from "../components/HomePage/DrinksSection";
import TipsSection from "../components/HomePage/TipsSection";
import DefaultLayout from "../layouts/DefaultLayout";
import InfoBox from "../components/HomePage/InfoBox";
import DinnerSection from "../components/HomePage/DinnerSection";
import DietSpecsSection from "../components/HomePage/DietSpecsSection";
const HomePage = () => {
    const { state } = useDiet();
    const patient = state.patient;
    const pageRef = useRef(null);
    const handlePrint = useReactToPrint({
        contentRef: pageRef,
        documentTitle: patient ? `DietPlan_${patient.name}` : "DietPlan",
    });
    if (!patient) {
        return (_jsx(Box, { sx: { p: 4, textAlign: "center", fontFamily: "Vazirmatn, sans-serif" }, children: "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0628\u06CC\u0645\u0627\u0631 \u0647\u0646\u0648\u0632 \u0648\u0627\u0631\u062F \u0646\u0634\u062F\u0647" }));
    }
    return (_jsx(DefaultLayout, { children: _jsxs(Box, { sx: { fontFamily: "Vazirmatn, sans-serif", direction: "rtl" }, children: [_jsx("style", { children: `
                    
          @font-face {
            font-family: 'Vazirmatn';
            src: url('https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/fonts/webfonts/Vazirmatn-Regular.woff2') format('woff2');
          }
          @media print {
            body {
              direction: rtl !important;

              font-family: 'Vazirmatn', sans-serif !important;
            }
          }
        ` }), _jsxs("div", { ref: pageRef, className: 'px-10 ', style: {
                        background: "#350b51",
                    }, children: [_jsx(InfoBox, {}), _jsx(BreakfastSection, {}), _jsx(LunchSection, {}), _jsx(DinnerSection, {}), _jsx(DrinksSection, {}), _jsx(SnacksSection, {}), _jsx(TipsSection, {}), _jsx(DietSpecsSection, {})] }), _jsx(Box, { sx: { textAlign: "center", mt: 3 }, children: _jsx(Button, { variant: "contained", onClick: handlePrint, sx: {
                            backgroundColor: "#3b82f6",
                            px: 3,
                            py: 1,
                            fontWeight: "bold",
                            fontFamily: "Vazirmatn, sans-serif",
                        }, children: "\u062F\u0627\u0646\u0644\u0648\u062F / \u0686\u0627\u067E PDF" }) })] }) }));
};
export default HomePage;

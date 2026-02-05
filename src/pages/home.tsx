import React, {useRef} from "react";
import {useReactToPrint} from "react-to-print";
import {useDiet} from "../context/DietContext";
import {Box, Button} from "@mui/material";

import BreakfastSection from "../components/HomePage/BreakfastSection";
import LunchSection from "../components/HomePage/LunchSection";
import SnacksSection from "../components/HomePage/SnacksSection";
import DrinksSection from "../components/HomePage/DrinksSection";
import TipsSection from "../components/HomePage/TipsSection";

import DefaultLayout from "../layouts/DefaultLayout";
import InfoBox from "../components/HomePage/InfoBox";
import DinnerSection from "../components/HomePage/DinnerSection";
import DietSpecsSection from "../components/HomePage/DietSpecsSection";

const HomePage: React.FC = () => {
    const {state} = useDiet();
    const patient = state.patient;
    const pageRef = useRef<HTMLDivElement>(null);

    const handlePrint = useReactToPrint({
        contentRef: pageRef,
        documentTitle: patient ? `DietPlan_${patient.name}` : "DietPlan",
    });

    if (!patient) {
        return (
            <Box sx={{p: 4, textAlign: "center", fontFamily: "Vazirmatn, sans-serif"}}>
                اطلاعات بیمار هنوز وارد نشده
            </Box>
        );
    }

    return (
        <DefaultLayout>
            <Box sx={{fontFamily: "Vazirmatn, sans-serif", direction: "rtl"}}>
                <style>
                    {`
                    
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
        `}
                </style>
                <div ref={pageRef}  className='px-10 '
                     style={{
                         background: "#350b51",

                     }}>
                    <InfoBox/>
                    <BreakfastSection/>
                    <LunchSection/>
                    <DinnerSection/>
                    <DrinksSection/>
                    <SnacksSection/>
                    <TipsSection/>
                    <DietSpecsSection/>
                </div>

                <Box sx={{textAlign: "center", mt: 3}}>
                    <Button
                        variant="contained"
                        onClick={handlePrint}
                        sx={{
                            backgroundColor: "#3b82f6",
                            px: 3,
                            py: 1,
                            fontWeight: "bold",
                            fontFamily: "Vazirmatn, sans-serif",
                        }}
                    >
                        دانلود / چاپ PDF
                    </Button>
                </Box>
            </Box>
        </DefaultLayout>

    );
};

export default HomePage;

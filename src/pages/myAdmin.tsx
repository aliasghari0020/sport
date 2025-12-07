import DefaultLayout from "../layouts/DefaultLayout.tsx";
import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import PatientInfoTab from "../components/AdminTabs/PatientInfoTab.tsx";
import BreakfastTab from "../components/AdminTabs/BreakfastTab.tsx";
import LunchTab from "../components/AdminTabs/LunchTab.tsx";
import DinnerTab from "../components/AdminTabs/DinnerTab.tsx";
import DrinksTab from "../components/AdminTabs/DrinksTab.tsx";
import SnackTab from "../components/AdminTabs/SnackTab.tsx";
import TipsTab from "../components/AdminTabs/TipsTab.tsx";
import DietSpecsTab from "../components/AdminTabs/DietSpecsTab.tsx";


const AdminTabs: React.FC = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabIndex(newValue);
    };

    return (
        <DefaultLayout>
        <Box sx={{ width: "100%", maxWidth: 1800, mx: "auto", mt: 3 }}>
            <Tabs
                value={tabIndex}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="diet plan tabs"
                sx={{
                    borderBottom: 1,
                    borderColor: "divider",
                    "& .MuiTab-root": { fontWeight: "bold", fontFamily: "Vazirmatn" },
                }}
            >
                <Tab label="اطلاعات بیمار" />
                <Tab label="صبحانه" />
                <Tab label="ناهار" />
                <Tab label="شام" />
                <Tab label=" خوراکی های مجاز" />
                <Tab label="میان وعده" />
                <Tab label="نکات و توصیه‌ها" />
                <Tab label="مشخصات رژیم اصولی" />
            </Tabs>
            <Box sx={{ mt: 3 }}>
                {tabIndex === 0 && <PatientInfoTab />}
                {tabIndex === 1 && <BreakfastTab />}
                {tabIndex === 2 && <LunchTab />}
                {tabIndex === 3 && <DinnerTab />}
                {tabIndex === 4 && <DrinksTab />}
                {tabIndex === 5 && <SnackTab />}
                {tabIndex === 6 && <TipsTab />}
                {tabIndex === 7 && <DietSpecsTab />}
            </Box>
        </Box>
        </DefaultLayout>
    );
};

export default AdminTabs;

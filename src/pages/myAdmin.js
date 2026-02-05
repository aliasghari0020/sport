import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import DefaultLayout from "../layouts/DefaultLayout";
import { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import PatientInfoTab from "../components/AdminTabs/PatientInfoTab";
import BreakfastTab from "../components/AdminTabs/BreakfastTab";
import LunchTab from "../components/AdminTabs/LunchTab";
import DinnerTab from "../components/AdminTabs/DinnerTab";
import DrinksTab from "../components/AdminTabs/DrinksTab";
import SnackTab from "../components/AdminTabs/SnackTab";
import TipsTab from "../components/AdminTabs/TipsTab";
import DietSpecsTab from "../components/AdminTabs/DietSpecsTab";
const AdminTabs = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const handleChange = (event, newValue) => {
        setTabIndex(newValue);
    };
    return (_jsx(DefaultLayout, { children: _jsxs(Box, { sx: { width: "100%", maxWidth: 1800, mx: "auto", mt: 3 }, children: [_jsxs(Tabs, { value: tabIndex, onChange: handleChange, variant: "scrollable", scrollButtons: "auto", "aria-label": "diet plan tabs", sx: {
                        borderBottom: 1,
                        borderColor: "divider",
                        "& .MuiTab-root": { fontWeight: "bold", fontFamily: "Vazirmatn" },
                    }, children: [_jsx(Tab, { label: "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0628\u06CC\u0645\u0627\u0631" }), _jsx(Tab, { label: "\u0635\u0628\u062D\u0627\u0646\u0647" }), _jsx(Tab, { label: "\u0646\u0627\u0647\u0627\u0631" }), _jsx(Tab, { label: "\u0634\u0627\u0645" }), _jsx(Tab, { label: " \u062E\u0648\u0631\u0627\u06A9\u06CC \u0647\u0627\u06CC \u0645\u062C\u0627\u0632" }), _jsx(Tab, { label: "\u0645\u06CC\u0627\u0646 \u0648\u0639\u062F\u0647" }), _jsx(Tab, { label: "\u0646\u06A9\u0627\u062A \u0648 \u062A\u0648\u0635\u06CC\u0647\u200C\u0647\u0627" }), _jsx(Tab, { label: "\u0645\u0634\u062E\u0635\u0627\u062A \u0631\u0698\u06CC\u0645 \u0627\u0635\u0648\u0644\u06CC" })] }), _jsxs(Box, { sx: { mt: 3 }, children: [tabIndex === 0 && _jsx(PatientInfoTab, {}), tabIndex === 1 && _jsx(BreakfastTab, {}), tabIndex === 2 && _jsx(LunchTab, {}), tabIndex === 3 && _jsx(DinnerTab, {}), tabIndex === 4 && _jsx(DrinksTab, {}), tabIndex === 5 && _jsx(SnackTab, {}), tabIndex === 6 && _jsx(TipsTab, {}), tabIndex === 7 && _jsx(DietSpecsTab, {})] })] }) }));
};
export default AdminTabs;

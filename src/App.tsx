import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { muiTheme } from "./assets/styles/muiTheme";
import { pages } from "./pages/pagesLoader";
import { DietProvider } from "./context/DietContext";

export default function App() {
    return (
        <ThemeProvider theme={muiTheme}>
            <CssBaseline />
            <DietProvider>
                <div dir="rtl">
                    <Router>
                        <Routes>
                            {pages.map(({ path, element: Page }) => (
                                <Route key={path} path={path} element={<Page />} />
                            ))}
                        </Routes>
                    </Router>
                </div>
            </DietProvider>
        </ThemeProvider>
    );
}

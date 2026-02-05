import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { muiTheme } from "./assets/styles/muiTheme";
import { pages } from "./pages/pagesLoader";
import { DietProvider } from "./context/DietContext";
export default function App() {
    return (_jsxs(ThemeProvider, { theme: muiTheme, children: [_jsx(CssBaseline, {}), _jsx(DietProvider, { children: _jsx("div", { dir: "rtl", children: _jsx(Router, { children: _jsx(Routes, { children: pages.map(({ path, element: Page }) => (_jsx(Route, { path: path, element: _jsx(Page, {}) }, path))) }) }) }) })] }));
}

import { jsx as _jsx } from "react/jsx-runtime";
export default function DefaultLayout({ children }) {
    return (_jsx("div", { className: "flex flex-col min-h-screen bg-gray-50 text-gray-800", children: _jsx("main", { className: "flex-1 container mx-auto p-6", children: children }) }));
}

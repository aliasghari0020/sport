import { jsx as _jsx } from "react/jsx-runtime";
export default function DefaultLayout({ children }) {
    return (_jsx("div", { className: "flex flex-col   ", children: _jsx("main", { className: "", children: children }) }));
}

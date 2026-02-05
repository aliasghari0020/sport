import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useReducer } from "react";
import { dietReducer, initialState } from "./dietReducer";
const DietContext = createContext(null);
export const DietProvider = ({ children }) => {
    const [state, dispatch] = useReducer(dietReducer, initialState);
    return (_jsx(DietContext.Provider, { value: { state, dispatch }, children: children }));
};
export const useDiet = () => useContext(DietContext);

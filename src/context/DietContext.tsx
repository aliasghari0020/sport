import React, { createContext, useContext, useReducer } from "react";
import { dietReducer, initialState } from "./dietReducer";

const DietContext = createContext<any>(null);

export const DietProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(dietReducer, initialState);

    return (
        <DietContext.Provider value={{ state, dispatch }}>
            {children}
        </DietContext.Provider>
    );
};

export const useDiet = () => useContext(DietContext);

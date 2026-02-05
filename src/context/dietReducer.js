export const initialState = JSON.parse(localStorage.getItem("dietState") ||
    JSON.stringify({
        patient: null,
        breakfast: null,
        lunch: null,
        dinner: null,
        snacks: null,
        drinks: null,
        tips: null,
        dietSpecs: null, // اضافه شد
    }));
export const dietReducer = (state, action) => {
    let newState = state;
    switch (action.type) {
        case "SET_PATIENT":
            newState = { ...state, patient: action.payload };
            break;
        case "SET_BREAKFAST":
            newState = { ...state, breakfast: action.payload };
            break;
        case "SET_LUNCH":
            newState = { ...state, lunch: action.payload };
            break;
        case "SET_DINNER":
            newState = { ...state, dinner: action.payload };
            break;
        case "SET_SNACKS":
            newState = { ...state, snacks: action.payload };
            break;
        case "SET_DRINKS":
            newState = { ...state, drinks: action.payload };
            break;
        case "SET_TIPS":
            newState = { ...state, tips: action.payload };
            break;
        case "SET_DIET_SPECS":
            newState = { ...state, dietSpecs: action.payload }; // اضافه شد
            break;
        case "RESET_ALL":
            newState = initialState;
            break;
        default:
            return state;
    }
    // ذخیره در localStorage
    localStorage.setItem("dietState", JSON.stringify(newState));
    return newState;
};

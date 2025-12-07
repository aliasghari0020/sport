// src/context/dietReducer.ts
export type PatientInfo = {
    name: string;
    age: number;
    weight: number;
    height: number;

    skeletonType: string;
    fatStatus: string;
    bodyFatPercent: number;
    idealWeightDiff: number;
    bmi: number;
    activityLevel: string;
    waist: number;
    abdomen: number;
    hip: number;
    wrist: number;
    thigh: number;
    arm: number;
    neck: number;
};


export type MealSection = {
    title: string;
    items: string[];
};

// 🔹 مدل داده نکات و توصیه‌ها
export type TipsSection = {
    tips: string[];
};

// 🔹 مدل داده مشخصات رژیم اصولی تغذیه
export type DietSpecsSection = {
    items: string[];
};

// 🔹 مدل داده کل رژیم
export type DietState = {
    patient: PatientInfo | null;
    breakfast: MealSection | null;
    lunch: MealSection | null;
    dinner: MealSection | null;
    snacks: MealSection | null;
    drinks: MealSection | null;
    tips: TipsSection | null;
    dietSpecs: DietSpecsSection | null; // اضافه شد
};

export type DietAction =
    | { type: "SET_PATIENT"; payload: PatientInfo }
    | { type: "SET_BREAKFAST"; payload: MealSection }
    | { type: "SET_LUNCH"; payload: MealSection }
    | { type: "SET_DINNER"; payload: MealSection }
    | { type: "SET_SNACKS"; payload: MealSection }
    | { type: "SET_DRINKS"; payload: MealSection }
    | { type: "SET_TIPS"; payload: TipsSection }
    | { type: "SET_DIET_SPECS"; payload: DietSpecsSection } // اضافه شد
    | { type: "RESET_ALL" };

export const initialState: DietState = JSON.parse(
    localStorage.getItem("dietState") ||
    JSON.stringify({
        patient: null,
        breakfast: null,
        lunch: null,
        dinner: null,
        snacks: null,
        drinks: null,
        tips: null,
        dietSpecs: null, // اضافه شد
    })
);

export const dietReducer = (state: DietState, action: DietAction): DietState => {
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

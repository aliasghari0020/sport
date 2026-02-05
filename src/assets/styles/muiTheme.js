import { createTheme } from "@mui/material/styles";
export const muiTheme = createTheme({
    direction: "rtl",
    typography: {
        fontFamily: "IRANSans, Vazirmatn, Roboto, sans-serif",
    },
    components: {
        MuiInputBase: {
            styleOverrides: {
                input: {
                    textAlign: "right",
                },
            },
        },
    },
    palette: {
        primary: { main: "#770da6" },
    },
});

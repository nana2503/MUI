import { red } from "@mui/material/colors";
import { createTheme } from "@mui/system";

export const theme = createTheme({
    palette: {
        primary: {
            main: "1760a6",
            light: "skyblue"
        },
        secondary: {
            main: "15c630"
        },
        otherColor: {
            main: red[300]
        }
    }
})
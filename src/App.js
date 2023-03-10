import { Feed } from "./component/Feed";
import { Sidebar } from "./component/Sidebar";
import { Rightbar } from "./component/Rightbar";
import { Box, Container, createTheme, Stack, ThemeProvider } from "@mui/material";
import { Navbar } from "./component/Navbar";
import { Add } from './component/Add';
import { useState } from "react";
function App() {
  const [mode, setMode] = useState("light")
  const darkTheme = createTheme({
    palette:{
      mode: mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar />
      <Stack direction="row" justifyContent="space-between">
        <Sidebar setMode={setMode} mode={mode}/>
        <Feed />
        <Rightbar />
      </Stack>
      <Add/>
    </Box>
    </ThemeProvider>
  );
}

export default App;

import "./App.css";
import { DemoForm } from "./Forms/demoForm";
import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
function App() {
  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: 'Inter',
        textTransform: 'none',
      },
    },
  })
  const layout = window.innerWidth >= 500 ? {width:"80%",marginLeft:"10%"}:{width:"100%"}
  return (
    <ThemeProvider theme={theme}>
    <Box style={layout}>
      <DemoForm />
    </Box>
    </ThemeProvider>
  );
}

export default App;

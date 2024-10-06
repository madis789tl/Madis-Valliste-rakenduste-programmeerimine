import "./App.css";
import Cats from "./components/Cats";
import Todo from "./components/ToDo";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { red, blue } from "@mui/material/colors";


const Theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  },
});

const doTheme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Cats />
      </ThemeProvider>
      <hr />
      <ThemeProvider theme={doTheme}>
        <Todo />
      </ThemeProvider>
    </>
  );
}

export default App;

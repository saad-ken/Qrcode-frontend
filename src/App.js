import { ThemeProvider } from "styled-components";
import Qrcard from "./components/Qrcard";

const theme = {
  color: {
    white: "hsl(0, 0%, 100%)",
    lightgray: "hsl(212, 45%, 89%)",
    grayishblue: " hsl(220, 15%, 55%)",
    darkblue: "hsl(218, 44%, 22%)",
  },
  mobile: "768px",
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Qrcard />
      </>
    </ThemeProvider>
  );
}

export default App;

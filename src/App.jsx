import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import GlobalStyle from "./styles/globals";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { Provider } from "react-redux"; 
import store from "./store";

function App() {
  return (
    <Router>
      <GlobalStyle></GlobalStyle>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Routes></Routes>
        </ThemeProvider>
      </Provider>
    </Router>
  );
}

export default App;        
   
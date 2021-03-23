import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import { theme } from "./ui/Theme";
import Home from "./pages/Home";
import Services from "./pages/Services";
import CustomSoftware from "./pages/CustomSoftware";
import MobileApps from "./pages/MobileApps";
import Websites from "./pages/Websites";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Services">
            <Services />
          </Route>
          <Route exact path="/CustomSoftware">
            <CustomSoftware />
          </Route>
          <Route exact path="/MobileApps">
            <MobileApps />
          </Route>
          <Route exact path="/Websites">
            <Websites />
          </Route>
          <Route
            exact
            path="/Revolution"
            component={() => <div>Revolution</div>}
          />
          <Route exact path="/About" component={() => <div>About</div>} />
          <Route exact path="/Contact" component={() => <div>Contact</div>} />
          <Route exact path="/Estimate" component={() => <div>Estimate</div>} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

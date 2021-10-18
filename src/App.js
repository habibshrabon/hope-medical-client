import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./componets/Home/Home";
import Header from "./componets/Header/Header";
import Footer from "./componets/Footer/Footer";
import Services from "./componets/Services/Services";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

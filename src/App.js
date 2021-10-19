import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./componets/Home/Home";
import Header from "./componets/Header/Header";
import Footer from "./componets/Footer/Footer";
import Services from "./componets/Services/Services";
import Doctors from "./componets/Doctors/Doctors";
import Appointment from "./componets/Appointment/Appointment";
import NotFound from "./componets/NotFound/NotFound";
import AuthProvider from "./context/AuthProvider";
import Login from "./componets/Login/Login";
import PrivateRoute from "./componets/PrivateRoute/PrivateRoute";
import Details from "./componets/Details/Details/Details";
import Register from "./componets/Register/Register";

function App() {
  return (
    <div className="App bg-color">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/doctors">
              <Doctors />
            </Route>
            <PrivateRoute path="/services">
              <Services />
            </PrivateRoute>
            <Route path="/appointment">
              <Appointment />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <PrivateRoute path="/details/:id">
              <Details />
            </PrivateRoute>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

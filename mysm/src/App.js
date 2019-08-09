import React from "react";
import "./App.css";
import { LoginListProvider } from "./LoginListContext";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from "./SignIn";
import Registration from "./Registration";
function App() {
  return (
    <LoginListProvider>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path={"/"} component={Registration} />
            <Route exact path={"/signin"} component={SignIn} />
            <Route exact path={"/r"} component={Registration} />
          </Switch>
        </BrowserRouter>
      </div>
    </LoginListProvider>
  );
}

export default App;

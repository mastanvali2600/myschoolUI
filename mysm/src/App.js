import React from "react";
import "./App.css";
import DailogSelect from "./DailogSelect";
import { LoginListProvider } from "./LoginListContext";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from "./SignIn";
import select from "./select";
function App() {
  return (
    <LoginListProvider>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path={"/"} component={select} />
            <Route exact path={"/signin"} component={SignIn} />
          </Switch>
        </BrowserRouter>
      </div>
    </LoginListProvider>
  );
}

export default App;

import React from "react";
import "./App.css";
import DailogSelect from "./DailogSelect";
import { LoginListProvider } from "./LoginListContext";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from "./SignIn";
function App() {
  return (
    <LoginListProvider>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path={"/"} component={DailogSelect} />
            <Route exact path={"/signin"} component={SignIn} />
          </Switch>
        </BrowserRouter>
      </div>
    </LoginListProvider>
  );
}

export default App;

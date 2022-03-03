import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import React from 'react'

function App() {
  return (
    <>
      <h1>Hello from Yelp probably</h1>
      <Switch>
        <Route path='/login'>
          <LoginFormPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;

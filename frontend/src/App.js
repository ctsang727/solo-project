import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import * as sessionActions from "./store/session";
import Splashpage from "./components/SplashPage/";
import BusinessDetail from "./components/BusinessDetail";
import NewBusinessForm from "./components/NewBusinessFolder/NewBusinessForm";
import EditBusinessForm from "./components/EditBusinessForm";
import NewReviewForm from "./components/NewReviewForm";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      
        <Switch>
          <Route exact path='/'>
            <Splashpage isLoaded={isLoaded} />
          </Route>
          <Route path='/login'>
          <Navigation isLoaded={isLoaded} />
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
            </Route>
          <Route exact path= '/business/:id'>
            <BusinessDetail />
            </Route>
          <Route path= '/new'>
            <NewBusinessForm />
            </Route>
          <Route path= '/business/edit/:id'>
            <EditBusinessForm />
            </Route>
          <Route path= '/reviews/new/:id'>
            <NewReviewForm/>
          </Route>
        </Switch>
      
    </>
  )};


export default App;

/* old return statement following instructions wk15 hw for friday
  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <Splashpage />
          </Route>
          <Route path='/login'>
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )}
    </>
  );
}
*/
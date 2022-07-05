import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import * as sessionActions from "./store/session";
import Splashpage from "./components/SplashPage/";
import BusinessDetail from "./components/BusinessPage/BusinessDetail";
import NewBusinessForm from "./components/NewBusinessFolder/NewBusinessForm";
import EditBusinessForm from "./components/EditBusinessFolder/EditBusinessForm"
import NewReviewForm from "./components/NewReviewFolder/NewReviewForm";
import AllBuinessesPage from "./components/AllBusinessesPage/AllBusinesses";
import Search from "./components/SearchBar/Search";
import TestPhoto from "./components/TestPhoto/TestPhoto";

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
          <Navigation isLoaded={isLoaded} />
          <SignupFormPage />
        </Route>
        <Route exact path='/business/:id'>
          <Navigation isLoaded={isLoaded} />
          <BusinessDetail />
        </Route>
        <Route path='/new'>
          <Navigation isLoaded={isLoaded} />
          <NewBusinessForm />
        </Route>
        <Route path='/business/edit/:id'>
          <Navigation isLoaded={isLoaded} />
          <EditBusinessForm />
        </Route>
        <Route path='/reviews/new/:id'>
          <Navigation isLoaded={isLoaded} />
          <NewReviewForm />
        </Route>
        <Route path='/test'>
          <Navigation isLoaded={isLoaded}/>
          <TestPhoto />
        </Route>
        <Route path='/all'>
          <Navigation isLoaded={isLoaded} />
          <AllBuinessesPage />
        </Route>
      </Switch>

    </>
  )
};


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
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import SplashPage from './components/SplashPage';
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Cards from './components/Cards';
import CreateCard from './components/CreateCard';
import DeleteCard from './components/DeleteCard';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path='/' exact>
            <SplashPage/>
          </Route>
          <Route path='/cards' exact>
            <Cards/>
          </Route>
          <Route path='/cards/new' exact>
            <CreateCard/>
          </Route>
          <Route path='/cards/:cardId/delete' exact>
            <DeleteCard/>
          </Route>
          <Route>
            <h1>404: Your Stoat is in another castle</h1>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;

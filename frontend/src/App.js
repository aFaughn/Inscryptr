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
import CardDetails from "./components/CardDetails";
import Tribes from './components/Tribes';
import TribeCollection from './components/TribeCollection';
import CreateTribe from "./components/CreateTribe";
import TribeEdit from  './components/TribeEdit';
import stoat from './stoat';

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
          <Route path='/cards/:cardId' exact>
            <CardDetails/>
          </Route>
          <Route path='/tribes' exact>
            <Tribes/>
          </Route>
          <Route path='/tribes/:tribeId/cards' exact>
            <TribeCollection/>
          </Route>
          <Route path='/tribes/new' exact>
            <CreateTribe/>
          </Route>
          <Route path='/tribes/:tribeId' exact>
            <TribeEdit/>
          </Route>
          <Route>
            <h1>error 404: Total Misplay</h1>
            <br></br>
            <div style={{border: 0}}><img style={{width: 400, height: 500 }} src='https://i.imgur.com/K3ofSsS.png' alt='stoat'></img></div>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;

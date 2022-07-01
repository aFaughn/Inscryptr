import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
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

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  const sessionUser = useSelector(state => state.session.user);
  const loggedIn = !!sessionUser
  console.log(loggedIn);


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
            {loggedIn ? <Cards/> : <Redirect to='/' />}
          </Route>
          <Route path='/cards/new' exact>
          {loggedIn ? <CreateCard/> : <Redirect to='/' />}
          </Route>
          <Route path='/cards/:cardId' exact>
          {loggedIn ? <CardDetails/> : <Redirect to='/' />}
          </Route>
          <Route path='/tribes' exact>
          {loggedIn ? <Tribes/> : <Redirect to='/' />}
          </Route>
          <Route path='/tribes/:tribeId/cards' exact>
          {loggedIn ? <TribeCollection/> : <Redirect to='/' />}
          </Route>
          <Route path='/tribes/new' exact>
          {loggedIn ? <CreateTribe/> : <Redirect to='/' />}
          </Route>
          <Route path='/tribes/:tribeId' exact>
          {loggedIn ? <TribeEdit/> : <Redirect to='/' />}
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

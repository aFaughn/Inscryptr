import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Redirect, Link } from "react-router-dom";
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


  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
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
            <h1 id='bad_route_header'>error 404: Total Misplay</h1>
            <Link to='/'><h1 id='bad_route_header'>◀ Go Back</h1></Link>
            <div id='bad_route_wrapper'><img style={{width: 400, height: 600 }} src='https://i.imgur.com/oQCUo0E.png' alt='stoat'></img></div>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;

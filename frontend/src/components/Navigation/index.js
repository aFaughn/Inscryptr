import React, {useState, useEffect} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormPage from '../LoginFormPage';
import SignupFormPage from '../SignupFormPage';
import './Navigation.css';

function Navigation({ isLoaded }){
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [credential, setCredential] = useState('Leshy')
  const [password, setPassword] = useState('password')
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();

  const handleClick = async (e) => {
    e.preventDefault();
      dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  function openLoginModal() {
    setShowLogin(true);
    setShowSignup(false)
  }
  function openSignupModal() {
    setShowSignup(true);
    setShowLogin(false);
  }

  function closeModals() {
    setShowLogin(false)
    setShowSignup(false)
  }

  useEffect(() => {
    if (sessionUser) history.push('/cards')
  },[sessionUser])


  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
      <li><ProfileButton user={sessionUser} /></li>
      <li><NavLink to='/cards'>Cards</NavLink></li>
      <li><NavLink to='/tribes'>Tribes</NavLink></li>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <button id='login-signup-button' onClick={openLoginModal}>Log In</button>
        <button id='login-signup-button' onClick={openSignupModal}>Sign Up</button>
        <button onClick={handleClick}>Demo User</button>
      </>
    );
  }

  return (
    <>
      <ul id='nav-container'>
        <li>
          <NavLink exact to="/">Home</NavLink>
        </li>
          {isLoaded && sessionLinks}
      </ul>
      {showLogin && (
          <div id='modalBackground'>
            <LoginFormPage/>
            <div id='modal-button-container'>
              <button className='modal-buttons' onClick={closeModals}>Close</button>
              <button className='modal-buttons' onClick={openSignupModal}>Sign Up</button>
            </div>
          </div>
        )}
        {showSignup && (
          <div id='modalBackground'>
            <SignupFormPage/>
            <div id='modal-button-container'>
              <button className='modal-buttons' onClick={closeModals}>Close</button>
              <button className='modal-buttons' onClick={openLoginModal}>Login</button>
            </div>
          </div>
        )}
    </>
  );
}

export default Navigation;

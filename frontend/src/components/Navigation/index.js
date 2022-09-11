import React, {useState, useEffect} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
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

  useEffect(() => {
    if (sessionUser) history.push('/cards')
  },[sessionUser])


  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
      <ProfileButton user={sessionUser} />
      <NavLink to='/cards'>Cards</NavLink>
      <NavLink to='/tribes'>Tribes</NavLink>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
        <button onClick={handleClick}>Demo User</button>
      </>
    );
  }

  return (
    <ul id='nav-container'>
      <li>
        <NavLink exact to="/">Home</NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;

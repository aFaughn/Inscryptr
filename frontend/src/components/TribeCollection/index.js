import { useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import { Link } from 'react-router-dom';
import './index.css';

const TribeCollection = () => {
    // Create a thunk that fetches all cards with the matching tribe id
    // add thunk to root reducer
    //display cards in this component

    const dispatch = useDispatch();
    const history = useHistory();
    const cards = useSelector(state=>state.cards.cards);
    const sessionUser = useSelector(state => state.session.user);
    if (!sessionUser) {
        history.push('/');
    }
    // useEffect(() => {
    //     dispatch(getAllCards())
    // },[dispatch])
    return (
        <div>
            <div className='Cards-Container'>
                <h1>Cards Belonging to the Tribe: PLACEHOLDER</h1>
                <div className='cards-wrapper'>
                </div>
            </div>
        </div>
    )
}

export default TribeCollection

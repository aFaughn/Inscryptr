import { useDispatch, useSelector } from 'react-redux';
import {useEffect} from 'react';
import {getAllCards} from '../../store/cards';

const Cards = () => {
    //What needs to happen here:
    //Create an action to Load X
    //Create a Route that fetches all cards from the DB X
    //Create a thunk that sends a Fetch to backend for cards

    /* Upon page load, For each card recieved from the backend (map)
    create a div for that card, with an edit and delete button. */

    //TODO: useSelector to access state and map each card out to a div.
    const dispatch = useDispatch();
    // const cardSelector = useSelector(state => state.cards)
    const cards = useSelector(state=>console.log('state',state));

    useEffect(() => {
        dispatch(getAllCards())
    },[dispatch])

    return (
        <div>
            <div className='Cards-Container'>
                <h1>Hello from Cards</h1>
            </div>
        </div>
    )
}

export default Cards

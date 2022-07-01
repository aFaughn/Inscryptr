import { useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
// import {useHistory} from 'react-router-dom';
import {getAllCards} from '../../store/cards';
import { Link } from 'react-router-dom';
import './index.css';

const Cards = () => {
    //What needs to happen here:
    //Create an action to Load X
    //Create a Route that fetches all cards from the DB X
    //Create a thunk that sends a Fetch to backend for cards

    /* Upon page load, For each card recieved from the backend (map)
    create a div for that card, with an edit and delete button. */

    //TODO: useSelector to access state and map each card out to a div.
    const dispatch = useDispatch();
    // const history = useHistory();
    const cards = useSelector(state=>state.cards.cards);
    // const sessionUser = useSelector(state => state.session.user);
    //Send user packing if their not logged in
    // if (!sessionUser) {
    //     history.push('/');
    // }

    useEffect(() => {
        dispatch(getAllCards())
    },[dispatch])
    return (
        <div>
            <div className='Cards-Container'>
                <h1>Cards</h1>
                <div className='cards-wrapper'>
                <div className='create-new-card'><Link to='/cards/new'>+</Link></div>
                {cards.map((card) => (
                    <div className='card' key={card.id}>
                        {`${card.name}, ${card.cost} ${card.costType}`}
                        <Link to={`/cards/${card.id}`}><img alt={card.name} className='cardArt' src={card.imageUrl}></img></Link>
                        <div className='edit'><Link to={`/cards/${card.id}`}>Edit</Link></div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default Cards

import { useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
// import {useHistory} from 'react-router-dom';
import {getAllCards} from '../../store/cards';
import { Link } from 'react-router-dom';
import CardSearch from '../CardSearch/CardSearch';
import './index.css';

const Cards = () => {
    const dispatch = useDispatch();
    const cards = useSelector(state=>state.cards.cards);

    useEffect(() => {
        dispatch(getAllCards())
    },[dispatch])
    return (
        <div id='/cards'>
            <div id='searchComponentWrapper'>
                <CardSearch/>
            </div>
            <div className='Cards-Container'>
                <div className='cards-wrapper'>
                <Link className='create-new-card' to='/cards/new'><img alt='addNewCard' src='https://i.imgur.com/hpG52bc.png'></img></Link>
                {cards.map((card) => (
                    <div className='card' key={card.id}>
                        <Link to={`/cards/${card.id}`}><img alt={card.name} className='cardArt' onError={(e) => e.target.src = 'https://i.imgur.com/lJrAYOk.png'} src={card.imageUrl}></img></Link>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default Cards

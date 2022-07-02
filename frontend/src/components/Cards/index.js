import { useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
// import {useHistory} from 'react-router-dom';
import {getAllCards} from '../../store/cards';
import { Link } from 'react-router-dom';
import './index.css';

const Cards = () => {
    const dispatch = useDispatch();
    const cards = useSelector(state=>state.cards.cards);

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
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default Cards

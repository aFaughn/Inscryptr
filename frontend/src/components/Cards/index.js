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

    const flip1 = new Audio('/sound/cardflips/flip1.wav')
    const flip2 = new Audio('/sound/cardflips/flip2.wav')
    const flip3 = new Audio('/sound/cardflips/flip3.wav')
    const flip4 = new Audio('/sound/cardflips/flip4.wav')
    const flip5 = new Audio('/sound/cardflips/flip5.wav')
    const flips = []
    flips.push(flip1, flip2, flip3, flip4, flip5)
    const GetRandomFlip = (max) => {
        return Math.floor(Math.random() * max)
    }

    useEffect(() => {
        dispatch(getAllCards())
    },[dispatch])
    return (
        <div id='cardsRoute'>
            <div id='searchComponentWrapper'>
                <CardSearch/>
            </div>
            <div className='Cards-Container'>
                <div className='cards-wrapper'>
                <Link className='create-new-card' to='/cards/new'><img alt='addNewCard' src='https://i.imgur.com/hpG52bc.png'></img></Link>
                {cards.map((card) => (
                    <div className='cardContainer'  onMouseEnter={() => flips[GetRandomFlip(flips.length)].play()}>
                        <div className='card' key={card.id}>
                            <Link to={`/cards/${card.id}`}><img alt={card.name} className='cardArt' onError={(e) => e.target.src = 'https://i.imgur.com/lJrAYOk.png'} src={card.imageUrl}></img></Link>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default Cards

import { useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';
import {fetchOneTribe} from '../../store/tribes';
import {getCardsByTribeId} from '../../store/cards';
import './index.css';

const TribeCollection = () => {

    const dispatch = useDispatch();
    const tribeId = useParams();

    useEffect(() => {
        dispatch(fetchOneTribe(tribeId.tribeId))
        dispatch(getCardsByTribeId(tribeId.tribeId));
    },[dispatch, tribeId.tribeId])

    const cards = useSelector(state=>state.cards.cards);
    const tribes = useSelector(state=>state.tribes.tribes)

    return (
        <div>
            <div className='Cards-Container'>
                <h1>{`Cards Belonging to the Tribe: ${tribes.map(tribe => (tribe.title))}`}</h1><Link to='/tribes'>Back</Link>
                <div className='cards-wrapper'>
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

export default TribeCollection

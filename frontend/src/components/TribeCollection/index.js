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
                <h1 className='collection-header'>{`Cards Belonging to the Tribe: ${tribes.map(tribe => (tribe.title))}`}</h1><Link to='/tribes'><p className='go-back'>Back to Tribes</p></Link>
                <div className='tribe-cards-wrapper'>
                {cards.map((card) => (
                    <div id='tribe-specific-card' className='card' key={card.id}>
                        <Link to={`/cards/${card.id}`}>
                            <img alt={card.name} id='tribe-card-art' className='cardArt' src={card.imageUrl}></img>
                        </Link>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default TribeCollection

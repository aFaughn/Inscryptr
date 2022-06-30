import { useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';
import {getAllTribes} from '../../store/tribes';
import {getCardsByTribeId} from '../../store/cards';
import './index.css';

const TribeCollection = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const tribeId = useParams();
    console.log(tribeId)
    useEffect(() => {
        dispatch(getCardsByTribeId(tribeId.tribeId));
        dispatch(getAllTribes())
    },[dispatch])



    const cards = useSelector(state=>state.cards.cards);
    const tribes = useSelector(state=>state.tribes.tribes)
    // const sessionUser = useSelector(state => state.session.user);
    // if (!sessionUser) {
    //     history.push('/');
    // }

    const tribe = tribes.find(tribe => tribe.id == tribeId.tribeId)
    const card = cards.find(card => card.tribeId == tribeId.tribeId);

    return (
        <div>
            <div className='Cards-Container'>
                <h1>{`Cards Belonging to the Tribe: ${tribe.title}`}</h1>
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

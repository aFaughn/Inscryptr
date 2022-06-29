import {useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {getOneCard} from '../../store/cards';
import {useParams, useHistory} from 'react-router-dom';
import { deleteOneCard } from '../../store/cards';

const CardDetails = () => {
    const {cardId} = useParams();
    const dispatch = useDispatch();
    const cards = useSelector(state=>state.cards.cards);
    const history = useHistory();

    useEffect(() => {
        dispatch(getOneCard(cardId))
    },[dispatch, cardId])

    const handleClick = async () => {
        dispatch(deleteOneCard(cardId));
        history.push('/cards');
    }



    return (
    <>
        <h1>Hello from Card Details</h1>

        <div>
            {cards.map((card) => (
                <ul key={card.userId}>
                    <li key={card.id}>{card.name}</li>
                    <li key={card.cost}>{card.cost}</li>
                    <li key={card.costType}>{card.costType}</li>
                    <li key={card.createdAt}>{card.createdAt}</li>
                    <li key={card.tribeId}>{card.tribeId}</li>
                </ul>
                ))}
        </div>
        <div><button onClick={handleClick}>Delete This Card?</button></div>
    </>
)
}

export default CardDetails;

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { deleteOneCard } from '../../store/cards';
import { useParams, useHistory } from 'react-router-dom';

const DeleteCard = () => {
    const cardId = useParams();
    const dispatch = useDispatch();
    const history = useHistory()

    console.log(cardId)
    useEffect(() => {
        dispatch(deleteOneCard(cardId))
    },[dispatch])
    history.push('/cards');
    return null
}

export default DeleteCard;

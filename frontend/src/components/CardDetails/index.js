import {useEffect, useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {getOneCard} from '../../store/cards';
import {useParams, useHistory} from 'react-router-dom';
import { deleteOneCard, editOneCard } from '../../store/cards';
import {getAllTribes} from '../../store/tribes';

const CardDetails = () => {
    const {cardId} = useParams();
    const dispatch = useDispatch();
    const cards = useSelector(state=>state.cards.cards);
    const tribes = useSelector(state=>state.tribes.tribes);
    const userId = useSelector(state => state.session.user.id)
    const history = useHistory();

    const [name, setName] = useState('');
    const [cost, setCost] = useState(0);
    const [costType, setCostType] = useState('blood');
    const [tribe, setTribe] = useState(0);
    const [image, setImage] = useState('https://i.imgur.com/lJrAYOk.png');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState([]);
    const [formVisible, setFormVisible] = useState(false)
    const [ destructuredCard ] = cards;


    //TODO restrict edit button to owner of card

    //Fetches card stats
    useEffect(() => {
        dispatch(getOneCard(cardId))
        dispatch(getAllTribes())
    },[dispatch, cardId])

    //Handles delete button click
    const handleClick = async () => {
        await dispatch(deleteOneCard(cardId));
        setTimeout(history.push('/cards'), 1000);
    }

    //Displays the form to edit the card.
    const showForm = () => {
        if (formVisible === false) {
            setFormVisible(true);
        } else {
            setFormVisible(false);
        }
    }
    // Dispatches to edit card ///////////////////////////////////////////////////////
    const onSubmit = async (e) => {
        e.preventDefault()

        const payload = {
            id: destructuredCard.id,
            userId,
            name,
            cost,
            costType,
            tribe,
            image,
            description
        }
        console.log(payload);

        let createdCard = await dispatch(editOneCard(payload));
        setFormVisible(false);
        if (createdCard) {
            history.push(`/cards`)
        }
    }

    //Form Validations /////////////////////////////////////////////////
    useEffect(() => {
        const errors = [];
        if (name.length < 2) {
            errors.push('Name must be at least 2 characters long')
        } else if (name.length > 25) {
            errors.push('Name must be fewer than 25 characters')
        }
        if (cost > 6) {
            errors.push('Cost may be no more than 6')
        } else if (cost < 0) {
            errors.push('Cost must be 0 or greater')
        }
        if (description.length > 256) {
            errors.push('Description may be no longer than 256 Characters')
        }
        setErrors(errors);
    }, [name, cost, description])

    // JSX ////////////////////////////////////////////////////////////
    return (
    <>
        <h1>Hello from Card Details</h1>

        <div>
            {cards.map((card) => (
                <ul key={card.id}>
                    <li>Name: {card.name}</li>
                    <li>Cost: {card.cost} {card.costType}</li>
                    <li>Description: {card.description}</li>
                    <li>Created: {card.createdAt.slice(0,10)}</li>
                    <li>Tribe: {card.tribeId}</li>
                </ul>
                ))}
        </div>
        <div><button onClick={handleClick}>Delete This Card?</button></div>
        <div><button onClick={showForm}>Edit This Card</button></div>
        <div hidden={formVisible} className='form'>
            <form
            hidden={formVisible}
            className='new-card-form'
            onSubmit={onSubmit}>
                <ul className='errors'>
                    {errors.map(error => (
                        <li key={error}>{error}</li>
                    ))}
                </ul>
                <input type='hidden' name='_csrf'></input>
                <label>Enter a name</label>
                <input
                type='text'
                name='name'
                value={name}
                onChange={((e) => setName(e.target.value))}>
                </input>
                <label>Enter a cost</label>
                <input
                type='number'
                name='cost'
                value={cost}
                onChange={(e) => setCost(e.target.value)}
                ></input>
                <label>Cost Type</label>
                <select
                value={costType}
                onChange={(e) => setCostType(e.target.value)}>
                    <option value='blood'>Blood</option>
                    <option value='bones'>Bones</option>
                    <option value='energy'>Energy</option>
                </select>
                <label>Tribe</label>
                <select
                value={tribe}
                onChange={(e) => setTribe(e.target.value)}>
                    {tribes.map(tribe => (
                        <option key={tribe.id} value={tribe.id}>{tribe.title}</option>
                    ))}
                </select>
                <label>Image URL</label>
                <input
                type='text'
                value={image}
                name='image'
                onChange={(e) => setImage(e.target.value)}>
                </input>
                <label>Description</label>
                <input
                type='text'
                value={description}
                name='description'
                onChange={(e)=>setDescription(e.target.value)}></input>
                <button type='submit' disabled={!!errors.length}>Update</button>
                </form>
        </div>
    </>
)
}

export default CardDetails;

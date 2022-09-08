import {useEffect, useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {getOneCard} from '../../store/cards';
import {useParams, useHistory} from 'react-router-dom';
import { deleteOneCard, editOneCard } from '../../store/cards';
import {getAllTribes} from '../../store/tribes';
import HandleCostType from './HandleCostType';
import Comments from '../Comments';
import './index.css';

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
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState([]);
    const [formVisible, setFormVisible] = useState(false)
    const [ destructuredCard ] = cards;

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
            console.log('Making form visible')
            setFormVisible(true);
        } else {
            console.log('Hiding form')
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
        if (tribe === 0) {
            errors.push('Please select a tribe')
        }
        setErrors(errors);
    }, [name, cost, description, tribe])


    // Close Edit Card Modal //////////////////////////////
    function closeModal(e) {
        e.preventDefault()
        setFormVisible(false)
    }


    // JSX ////////////////////////////////////////////////////////////
    return (
    <>
        <div id='cardDetailsWrapper'>
            <div className='card-details'>
                {cards.map((card) => (
                    <>
                    <img onError={(e) => e.target.src = 'https://i.imgur.com/lJrAYOk.png'} id='detailImg' alt='card Art' src={card.imageUrl}></img>
                    <ul key={card.id} id='details-container'>
                        <li id='card-name' className='card-li'>{card.name}</li>
                        <li id='card-cost' className='card-li'><HandleCostType card={card}/></li>
                        <li id='description' className='card-li'>Description: {card.description}</li>
                        <div className='card-tiny-details'>
                            <li className='card-li'>Created: {card.createdAt.slice(0,10)}</li>
                            <li className='card-li'>Tribe: {card.tribeId}</li>
                        </div>
                    </ul>
                    </>
                    ))}
            </div>
            <div id='detail-buttons'>
                <div><button className='delete' onClick={handleClick}>Delete This Card?</button></div>
                <div><button className='reveal' onClick={showForm}>Edit This Card</button></div>
            </div>
        </div>
            { formVisible && (
            <div id='edit-card-form' className='form'>
                <form
                className='new-card-form'
                onSubmit={onSubmit}>
                    <ul className='errors'>
                        {errors.map(error => (
                            <li key={error}>{error}</li>
                            ))}
                    </ul>
                    <input type='hidden' name='_csrf'></input>
                    <div className='inputFields'>
                        <div className='modify-field'>
                            <label>Enter a name *</label>
                            <input
                            type='text'
                            name='name'
                            value={name}
                            onChange={((e) => setName(e.target.value))}>
                            </input>
                        </div>
                        <div className='modify-field'>
                            <label>Enter a cost *</label>
                            <input
                            type='number'
                            name='cost'
                            value={cost}
                            onChange={(e) => setCost(e.target.value)}
                            ></input>
                        </div>
                        <div className='modify-field'>
                            <label>Cost Type *</label>
                            <select
                            value={costType}
                            onChange={(e) => setCostType(e.target.value)}>
                                <option value='blood'>Blood</option>
                                <option value='bones'>Bones</option>
                                <option value='energy'>Energy</option>
                            </select>
                        </div>
                        <div className='modify-field'>
                            <label>Tribe *</label>
                            <select
                            value={tribe}
                            onChange={(e) => setTribe(e.target.value)}>
                                <option disabled >Select Tribe...</option>
                                {tribes.map(tribe => (
                                    <option key={tribe.id} value={tribe.id}>{tribe.title}</option>
                                    ))}
                            </select>
                        </div>
                        <div className='modify-field'>
                            <label>Image URL</label>
                            <input
                            type='text'
                            value={image}
                            name='image'
                            onChange={(e) => setImage(e.target.value)}>
                            </input>
                        </div>
                        <div className='modify-field'>
                            <label>Description</label>
                            <input
                            type='text'
                            value={description}
                            name='description'
                            onChange={(e)=>setDescription(e.target.value)}></input>
                        </div>
                    </div>
                    <div id='buttons'>
                        <button onClick={closeModal} className='submit'>Cancel</button><button className='submit' type='submit' disabled={!!errors.length}>Update</button>
                    </div>
                </form>
            </div>
            )}
            <div>
                <Comments id={cardId}/>
            </div>
    </>
)
}

export default CardDetails;

import {useEffect, useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';
import {fetchOneTribe, editTribeThunk} from '../../store/tribes';
import './index.css';

const TribeEdit = () => {
    const {tribeId} = useParams();
    const dispatch = useDispatch();
    const tribes = useSelector(state=>state.tribes.tribes);
    const history = useHistory();
    const userId = useSelector(state => state.session.user.id)

    const [name, setName] = useState('');
    const [image, setImage] = useState('https://i.imgur.com/lJrAYOk.png');
    const [errors, setErrors] = useState([]);
    const [formVisible, setFormVisible] = useState(false)
    const [ destructuredTribe ] = tribes;

    //TODO restrict edit button to owner of card

    //Fetches card stats
    useEffect(() => {
        dispatch(fetchOneTribe(tribeId))
    },[dispatch, tribeId])

    //Displays the form to edit the tribe.
    const showForm = () => {
        if (formVisible === false) {
            setFormVisible(true);
        } else {
            setFormVisible(false);
        }
    }
    // Dispatches to edit tribe ///////////////////////////////////////////////////////
    const onSubmit = async (e) => {
        e.preventDefault()

        const payload = {
            id: destructuredTribe.id,
            userId,
            name,
            image,
        }
        console.log(payload);

        let editTribe = await dispatch(editTribeThunk(payload));
        setFormVisible(false);
        if (editTribe) {
            history.push(`/tribes`)
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
        setErrors(errors);
    }, [name])

    // JSX ////////////////////////////////////////////////////////////
    return (
    <>

        <div className='tribe-details'>
            {tribes.map((tribe) => (
                <ul key={tribe.id}>
                    <li className='tribe-li'>Title: {tribe.title}</li>
                    <li className='tribe-li'>Icon: {tribe.tribeIcon}</li>
                </ul>
                ))}
        </div>
        <div><button className='edit-tribe' onClick={showForm}>Edit This Tribe</button></div>
        <div hidden={formVisible} className='form'>
            <form
            hidden={formVisible}
            className='edit-tribe-form'
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
                <label>Image URL</label>
                <input
                type='text'
                value={image}
                name='image'
                onChange={(e) => setImage(e.target.value)}>
                </input>
                <button type='submit' className='delete' disabled={!!errors.length}>Update</button>
                </form>
        </div>
    </>
)
}

export default TribeEdit;

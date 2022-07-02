import {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {createNewTribe} from '../../store/tribes';
import './index.css';

const CreateTribe = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const userId = useSelector(state => state.session.user.id)

    const [name, setName] = useState('');
    const [image, setImage] = useState('https://i.imgur.com/lJrAYOk.png');
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        const errors = [];
        if (name.length < 2) {
            errors.push('Name must be at least 2 characters long')
        } else if (name.length > 25) {
            errors.push('Name must be fewer than 25 characters')
        }
        setErrors(errors);
    }, [name])


    const onSubmit = async (e) => {
        e.preventDefault()
        /*
        What needs to happen to go further:

        - Assign all values from the form to a variable and send it
          to the DB through a thunk
        - Thunk needs to send a POST to /api/cards
        - Route needs to handle data being sent
        - Redirect the user to the /cards page.
        */

        const payload = {
            userId,
            name,
            image,
        }
        console.log(payload);

        let createdTribe = await dispatch(createNewTribe(payload));
        if (createdTribe) {
            history.push(`/tribes`)
        }
    }

    return (
        <>
        <h1>Hello from Create Tribe component</h1>
        <form
        className='new-tribe-form'
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
            <button className='submit' type='submit' disabled={!!errors.length}>Create New Card</button>
        </form>
        </>
    )
}

export default CreateTribe;

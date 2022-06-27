import {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom'

const CreateCard = () => {
    const history = useHistory();

    const [name, setName] = useState('');
    const [cost, setCost] = useState(0);
    const [costType, setCostType] = useState('blood');
    const [tribe, setTribe] = useState(null);
    const [image, setImage] = useState('https://i.imgur.com/lJrAYOk.png');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState([]);

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


    const onSubmit = (e) => {
        e.preventDefault()
        return null;
    }

    return (
        <>
        <h1>Hello from Create Card component</h1>
        <form
        className='new-card-form'
        onSubmit={onSubmit}>
            <ul className='errors'>
                {errors.map(error => (
                    <li key={error}>{error}</li>
                ))}
            </ul>
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
            <select
            value={tribe}
            onChange={(e) => setTribe(e.target.value)}>
                <option value={tribe}>PLACEHOLDER</option>
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
            <button type='submit' disabled={!!errors.length}>Create New Card</button>
        </form>
        </>
    )
}

export default CreateCard;

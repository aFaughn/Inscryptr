import { getAllTribes } from "../../store/tribes"
import { useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getAllCards} from '../../store/cards';
import { Link } from 'react-router-dom';
import './index.css';

const Tribes = () => {
    const dispatch = useDispatch();
    const tribes = useSelector(state=>state.tribes.tribes);
    useEffect(() => {
        dispatch(getAllTribes())
    },[dispatch])
    return (
        <div>
            <div className='Tribes-Container'>
                <h1>Tribes</h1>
                <div className='tribe-wrapper'>
                    <div className='create-new-tribe'><Link to='/tribes/new'>+</Link></div>\
                    {tribes.map((tribe) => (
                    <div className='tribe' key={tribe.id}>
                        {`${tribe.title}`}
                        <Link to={`/tribes/${tribe.id}/cards`}><img alt={tribe.name} className='tribeArt' src={tribe.tribeIcon}></img></Link>
                        <div className='edit'><Link to={`/tribes/${tribe.id}`}>Edit</Link></div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default Tribes;

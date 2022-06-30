import { getAllTribes } from "../../store/tribes"
import { useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getAllCards} from '../../store/cards';
import { Link } from 'react-router-dom';
import './index.css';

const Tribes = () => {
    const dispatch = useDispatch();
    const cards = useSelector(state=>state.cards.cards);
    useEffect(() => {
        dispatch(getAllCards())
    },[dispatch])
    return (
        <div>
            <div className='Tribes-Container'>
                <h1>Hello from Cards</h1>
                <div className='tribe-wrapper'>
                    <div className='create-new-tribe'><Link to='/cards/new'>+</Link></div>
                </div>
            </div>
        </div>
    )
}

export default Tribes;

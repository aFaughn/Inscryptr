import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getAllComments} from '../../store/comments';
import './index.css'

function Comments(id) {
    return (
        <h1>Hello from Comments</h1>
    )
}

export default Comments

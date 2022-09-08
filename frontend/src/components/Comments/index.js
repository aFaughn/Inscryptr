import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getAllComments} from '../../store/comments';
import './index.css'

function Comments({id}) {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllComments())
    },[dispatch])

    const comments = useSelector(state => state.comments.comments)


    return (
        <div id='comments-component-wrapper'>
            <h1>Comments</h1>
            {comments.map(comment => (
                <>
                <div>
                    <p>{comment.userId}</p>
                    <p>{comment.comment}</p>
                </div>
                </>
            ))}
        </div>
    )
}

export default Comments

import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {deleteOneComment, getAllComments} from '../../store/comments';
import CreateComment from '../CreateComment';
import './index.css'

function Comments({id}) {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllComments())
    },[dispatch])

    async function handleDelete(comment) {
        await dispatch(deleteOneComment(comment))
        await dispatch(getAllComments())
    }

    const comments = useSelector(state => state.comments.comments)
    const userId = useSelector(state => state.session.user.id)
    return (
        <div id='comments-component-wrapper'>
            <h1>Comments</h1>
            <CreateComment cardId={id}/>
            {comments.map(comment => (
                <>
                <div key={comment.id}>
                    <p>{comment.userId}</p>
                    <p>{comment.comment}</p>
                    {comment.userId === userId && (
                        <>
                            <button onClick={(e) => handleDelete(comment)}>Delete</button>
                            <button>Edit</button>
                        </>
                    )}
                </div>
                </>
            ))}
        </div>
    )
}

export default Comments

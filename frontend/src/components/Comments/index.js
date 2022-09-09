import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {deleteOneComment, getAllComments, editOneComment} from '../../store/comments';
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

    const [showEdit, setShowEdit] = useState(false)
    const [commentBody, setCommentBody] = useState('')
    const [commentId, setCommentId] = useState(null)

    function toggleEdit(comment) {
        setCommentBody(comment.comment);
        if (!showEdit) {
            setShowEdit(true)
            setCommentId(comment.id)
        } else {
            setShowEdit(false)
        }
    }

    async function submitEdit(e, commentId) {
        e.preventDefault();
        const payload = {
            id: commentId,
            userId,
            cardId: id,
            comment: commentBody
        }
        await dispatch(editOneComment(payload))
        .then(setShowEdit(false))
        .then(e.target.value = '')
        .then(dispatch(getAllComments()))
    }


    return (
        <div id='comments-component-wrapper'>
            <h1>Comments</h1>
            <CreateComment cardId={id}/>
            {comments.map(comment => (
                <>
                <div className='comment-container' key={comment.id}>
                    <p>{comment.userId}</p>
                    <p>{showEdit && comment.id === commentId ? <textarea value={commentBody} onChange={(e) => setCommentBody(e.target.value)}></textarea> : comment.comment}</p>
                    {showEdit && comment.id === commentId ? <button onClick={(e) => submitEdit(e, comment.id)}>Update</button> : <></>}
                    {comment.userId === userId && (
                        <>
                            <button onClick={(e) => handleDelete(comment)}>Delete</button>
                            <button onClick={(e) => toggleEdit(comment)}>Edit</button>
                        </>
                    )}
                </div>
                </>
            ))}
        </div>
    )
}

export default Comments

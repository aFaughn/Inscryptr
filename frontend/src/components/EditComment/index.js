import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { editOneComment, getAllComments } from '../../store/comments'
import './index.css'

function EditComment({comment}) {

    const dispatch = useDispatch();
    const history = useHistory();
    const [commentBody, setCommentBody] = useState(comment.comment)


    function handleClick(e) {
        const payload = {
            userId: comment.userId,
            comment: commentBody
        }
        e.preventDefault()
        dispatch(editOneComment(payload))
        dispatch(getAllComments())
    }

    return (
        <>
            <form>
                <label>Comment</label>
                <textarea value={commentBody} onChange={(e) => setCommentBody(e.target.value)}></textarea>
                <button type='submit' onClick={(e) => handleClick(e)}>Submit Changes</button>
                <button onClick={(e) => history.push(`/cards/${comment.cardId}`)}>Cancel</button>
            </form>
        </>
    )
}

export default EditComment

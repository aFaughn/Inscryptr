import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { createNewComment, getAllComments } from '../../store/comments';
import './index.css'

function CreateComment({cardId}) {
    const userId = useSelector(state => state.session.user.id)
    const history = useHistory()
    const dispatch = useDispatch()
    const [commentBody, setCommentBody] = useState('');

    async function handleClick(e) {
        e.preventDefault();
        const comment = {
            userId,
            comment: commentBody,
            cardId
        }
        await dispatch(createNewComment(comment))
        .then(setCommentBody(''))
        dispatch(getAllComments())
    }


    return (
        <form
        id='new-comment-form'
        action='POST'
        method=''>
            <textarea id='new-comment-textarea' placeholder={'Click here and start typing'}value={commentBody} onChange={(e) => setCommentBody(e.target.value)}></textarea>
            <button disabled={!commentBody.length} onClick={handleClick} type='submit'>Submit</button>
        </form>
    )
}

export default CreateComment

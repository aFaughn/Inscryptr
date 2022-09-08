import {csrfFetch } from './csrf';

const LOAD_COMMENT = 'comments/loadComment'
const DELETE_COMMENT = 'comments/deleteComment'
const EDIT_COMMENT = 'comments/editComment'
const CREATE_COMMENT = 'comments/createComment'

const loadAllComments = (comments) => {
    return {
        type: LOAD_COMMENT,
        comments
    }
}

const createComment = (comment) => {
    return {
        type: CREATE_COMMENT,
        comment
    }
}

const editComment = (comment) => {
    return {
        type: EDIT_COMMENT,
        comment
    }
}

const deleteComment = (comment) => {
    return {
        type: DELETE_COMMENT,
        comment
    }
}

export const getAllComments = () => async (dispatch) => {
    const response = await fetch(`/api/comments`)

    if (response.ok) {
        const comments = await response.json();
        dispatch(loadAllComments(comments))
        return response;
    } else {
        return await response.json()
    }
}

export const createNewComment = (comment) => async (dispatch) => {
    const response = await csrfFetch(`/api/comments`, {
        method: 'POST',
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify(comment)
    })
    if (response.ok) {
        const comments = await response.json();
        await dispatch(createComment(comment))
        return comments;
    }
}

export const editOneComment = (comment) => async (dispatch) => {
    const response = await csrfFetch(`/api/comments/${comment.id}`, {
        method: 'PATCH',
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(comment)
    })

    if (response.ok) {
        const comment = await response.json();
        dispatch(editComment(comment))
        return comment;
    }
}

export const deleteOneComment = (comment) => async (dispatch) => {
    const response = await csrfFetch(`/api/comments/${comment.id}`, {
        method: 'DELETE',
    })
    if (response.ok) {
        dispatch(deleteComment())
    } else {
        console.log('Failed to delete comment')
    }
}
// Reducer

const InitialState = {
    comments: []
}

const commentReducer = (state = InitialState, action) => {
    switch (action.type) {
        case LOAD_COMMENT: return {
        ...state, comments: [...action.comments]
        }
        case CREATE_COMMENT: return {
            ...state
        }
        case DELETE_COMMENT: return {
            ...state,
        }
        case EDIT_COMMENT: return {
            ...state
        }
        default:
            return state;
    }
}

export default commentReducer;

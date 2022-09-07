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

export const createNewCard = (card) => async (dispatch) => {
    const response = await csrfFetch(`/api/cards`, {
        method: 'POST',
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify(card)
    })
    if (response.ok) {
        const cards = await response.json();
        await dispatch(createCard(card))
        return cards;
    }
}

export const editOneCard = (card) => async (dispatch) => {
    const response = await csrfFetch(`/api/cards/${card.id}`, {
        method: 'PUT',
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(card)
    })

    if (response.ok) {
        const cards = await response.json();
        dispatch(editCard(cards))
        return card;
    }
}

export const deleteOneCard = (card) => async (dispatch) => {
    const response = await csrfFetch(`/api/cards/${card}`, {
        method: 'DELETE',
    })

    if (response.ok) {
        const cards = await response.json();
        dispatch(deleteCard())
        console.log(cards);
    } else {
        console.log('Well ____ ... uh oh.')
    }
}

export const getCardsByTribeId = (tribeId) => async (dispatch) => {
    const response = await fetch(`/api/tribes/${tribeId}/cards`)

    if (response.ok) {
        const cards = await response.json();
        dispatch(getTribecards(cards))
        return response
    } else {
        return await response.json()
    }
}


// Reducer

const InitialState = {
    cards: []
}

const cardReducer = (state = InitialState, action) => {
    switch (action.type) {
        case LOAD_COMMENT: return {
        ...state, cards: [...action.cards]
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

export default cardReducer;

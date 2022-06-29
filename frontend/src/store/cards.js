import {csrfFetch } from './csrf';

const LOAD_CARD = 'cards/loadCard'
const DELETE_CARD = 'cards/deleteCard'
const EDIT_CARD = 'cards/editCard'
const CREATE_CARD = 'cards/createCard'
const LOAD_ONE_CARD = 'cards/loadOneCard'

const loadAllCards = (cards) => {
    return {
        type: LOAD_CARD,
        cards
    }
}

const loadOneCard = (card) => {
    return {
        type: LOAD_ONE_CARD,
        card
    }
}
const createCard = (card) => {
    return {
        type: CREATE_CARD,
        card
    }
}

const editCard = (card) => {
    return {
        type: EDIT_CARD,
        card
    }
}

const deleteCard = (card) => {
    return {
        type: DELETE_CARD,
        card
    }
}


export const getAllCards = () => async (dispatch) => {
    const response = await fetch(`/api/cards`)

    if (response.ok) {
        const cards = await response.json();
        dispatch(loadAllCards(cards))
        return response;
    } else {
        return await response.json()
    }
}

export const getOneCard = (card) => async (dispatch) => {
    const response = await fetch(`/api/cards/${card}`)

    if (response.ok) {
        const cards = await response.json();
        dispatch(loadOneCard(cards))
        return response;
    } else {
        return await response.json();
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

// export const editCard = () => async (dispatch) => {
//     const response = await fetch(`/api/cards`)

//     if (response.ok) {
//         const cards = await response.json();
//         dispatch(loadCards(cards))
//     }
// }
export const deleteOneCard = (card) => async (dispatch) => {
    const response = await csrfFetch(`/api/cards/${card}`, {
        method: 'DELETE',
    })

    if (response.ok) {
        const cards = await response.json();
        dispatch(deleteCard(cards))
    } else {
        console.log(response)
    }
}

// Reducer

const InitialState = {
    cards: []
}

const cardReducer = (state = InitialState, action) => {
    switch (action.type) {
        case LOAD_CARD: return {
        ...state, cards: [...action.cards]
        }
        case CREATE_CARD: return {
            ...state
        }
        case DELETE_CARD: return {
            ...state
        }
        case LOAD_ONE_CARD: return {
            ...state, cards: [...action.card]
        }
        default:
            return state;
    }
}

export default cardReducer;

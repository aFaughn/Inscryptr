import {csrfFetch } from './csrf';

const LOAD_TRIBE = 'tribes/loadTribe'
const CREATE_TRIBE = 'tribes/createTribe'
const EDIT_TRIBE = 'tribes/editTribe'
const LOAD_ONE_TRIBE = 'tribes/loadOneTribe'

const loadTribes = (tribes) => {
    return {
        type: LOAD_TRIBE,
        tribes
    }
}

const loadOneTribe = (tribe) => {
    return {
        type: LOAD_ONE_TRIBE,
        tribe
    }
}

const createTribe = (tribe) => {
    return {
        type: CREATE_TRIBE,
        tribe
    }
}

const editTribe = (tribe) => {
    return {
        type: EDIT_TRIBE,
        tribe
    }
}

export const getAllTribes = () => async (dispatch) => {
    const response = await fetch('/api/tribes')

    if (response.ok) {
        const tribes = await response.json();
        dispatch(loadTribes(tribes))
        return response
    } else {
        return await response.json();
    }
}

export const createNewTribe = (tribe) => async (dispatch) => {
    const response = await csrfFetch('/api/tribes', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(tribe)
    })

    if (response.ok) {
        const tribes = await response.json();
        await dispatch(createTribe(tribe))
        return tribes;
    }
}

export const fetchOneTribe = (tribe) => async (dispatch) => {
    const response = await fetch(`/api/tribes/${tribe}`)

    if (response.ok) {
        const tribes = await response.json();
        dispatch(loadOneTribe(tribes))
        return response;
    } else {
        return await response.json();
    }
}

export const editTribeThunk = (stats) => async (dispatch) => {
    const response = await csrfFetch(`/api/tribes/${stats.id}`, {
        method: 'PUT',
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(stats)
    })

    if (response.ok) {
        const tribes = await response.json();
        dispatch(editTribe(tribes))
        return tribes;
    }
}


const InitialState = {
    tribes: []
}

//TODO Add this reducer to the root reducer in ./store/store.js
const tribeReducer = (state = InitialState, action) => {
    switch (action.type) {
        case LOAD_TRIBE: return {
            ...state, tribes: [...action.tribes]
        }
        case CREATE_TRIBE: return {
            ...state
        }
        case LOAD_ONE_TRIBE: return {
            ...state, tribes: [...action.tribe]
        }
        default: {
            return state;
        }
    }
}

export default tribeReducer;

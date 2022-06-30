import {csrfFetch } from './csrf';

const LOAD_TRIBE = 'tribes/loadTribe'
const DELETE_TRIBE = 'tribes/deleteTribe'
const CREATE_TRIBE = 'tribes/createTribe'
// const EDIT_TRIBE = 'tribes/editTribe'

const loadTribes = (tribes) => {
    return {
        type: LOAD_TRIBE,
        tribes
    }
}

const loadOneTribe = (tribe) => {
    return {
        type: LOAD_TRIBE,
        tribe
    }
}

const createTribe = (tribe) => {
    return {
        type: CREATE_TRIBE,
        tribe
    }
}

const deleteTribe = (tribe) => {
    return {
        type: DELETE_TRIBE,
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

const InitialState = {
    tribes: []
}

//TODO Add this reducer to the root reducer in ./store/store.js
const tribeReducer = (state = InitialState, action) => {
    switch (action.type) {
        case LOAD_TRIBE: return {
            ...state, tribes: [...action.tribes]
        }
        default: {
            return state;
        }
    }
}

export default tribeReducer;

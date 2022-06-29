import {csrfFetch } from '/csrf';

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

const createTribe = () => {
    return {
        type: CREATE_TRIBE,
        tribe
    }
}

const deleteTribe = () => {
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


//TODO Add this reducer to the root reducer in ./store/store.js

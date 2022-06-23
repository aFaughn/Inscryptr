const LOAD = 'cards/LOAD'
const DELETE = 'cards/DELETE'
const EDIT = 'cards/EDIT'
const CREATE = 'cards/CREATE'

const load = (card) => {
    return {
        type: LOAD_CARD,
        card
    }
}

export const getAllCards = () => async (dispatch) => {
    const response = await fetch(`/api/cards`)

    if (response.ok) {
        const cards = await response.json();
        dispatch(load(cards))
    }
}

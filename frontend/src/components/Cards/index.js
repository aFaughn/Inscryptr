import { useDispatch } from 'react-redux';


const Cards = () => {
    //What needs to happen here:
    //Create an action to Load X
    //Create a Route that fetches all cards from the DB X
    //Create a thunk that sends a Fetch to backend for cards

    /* Upon page load, For each card recieved from the backend (map)
    create a div for that card, with an edit and delete button. */

    //TODO: useSelector to access state and map each card out to a div.
    const dispatch = useDispatch();



    return (
        <div>
            <div className='Cards-Container'>

            </div>
        </div>
    )
}

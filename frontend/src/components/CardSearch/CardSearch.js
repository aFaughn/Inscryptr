import {useState} from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom'
import './CardSearch.css';

function CardSearch() {
    const [searchResults, setSearchResults] = useState([])

    const allCards = useSelector(state => state.cards)
    const cards = Object.values(allCards)[0]

    let search = []
    const handleSearch = (e) => {
        if (e.target.value) {
            search = cards.filter(card => {
                if (card.name.toLowerCase().includes(e.target.value.toLowerCase())) {
                    return true
                }
            })
        }
        setSearchResults(search)
    }



    return (
        <div id='searchContainer'>
            <div className='SearchBanner'>
                <h1>Search For A Card</h1>
            </div>
            <div>
                <input type='text' className='searchBar' onChange={handleSearch}></input>
            </div>
            <div id='results-wrapper'>
                <div id='results'>
                    <ul id='searchResultsUl'>
                    {!!searchResults.length && searchResults.map(result => (
                        <Link className='searchLink' to={`/cards/${result.id}`}>
                            <div className='result'>
                                <p id='resName'>{result.name}</p>
                                <p id='resCost'>{'🩸'.repeat(result.cost)}</p>
                            </div>
                        </Link>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CardSearch;

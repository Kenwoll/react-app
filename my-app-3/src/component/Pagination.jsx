import react from 'react'
import "../styles/Movies.css"

const Pagination = ({ moviesPerPage, totalMovies, paginate}) => {

    function addClass(event) {
        event.currentTarget.classList.add('active-btn');
    };

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <footer>
            <div className='btns'>
                {pageNumbers.map(number => (
                    <button 
                        onClick={() => {paginate(number); addClass()}} key={number}>
                        <span>{number}</span>
                    </button>
                ))}
            </div>
        </footer>
    );
}

export default Pagination
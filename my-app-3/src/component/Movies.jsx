import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "../styles/Movies.css"
import Pagination from "./Pagination"
import { NavLink } from "react-router-dom";
import { GrFormPrevious, GrFormNext} from "react-icons/gr";

// export default function Movies() {

//     const [data, setData] = useState([]);

//     const loadMovieData = async () => {
//         return await axios
//             .get("http://localhost:8000/Movies?_page=1")
//             .then((response) => setData(response.data))
//             .catch((err) => console.log(err))
//     };

//     useEffect(() => {
//         loadMovieData();
//     }, []);

//     console.log("data", data[0].Poster_Link)

//     return (
//         <div>
//             {data && (
//                 <ul>
//                     {data.map(movie => (
//                     <img src={movie.Poster_Link}></img>
//                     ))}
//                 </ul>
//             )}
//       </div>  
//     );
// }

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [moviesPerPage, setMoviesPerPage] = useState(50);
  
    const fetchData = () => {
      fetch("http://localhost:8000/Movies")
        .then(response => {
          return response.json()
        })
        .then(data => {
          setMovies(data)
        })
    }
  
    useEffect(() => {
      fetchData()
    }, [])


    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovie = movies.slice(indexOfFirstMovie, indexOfLastMovie)

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }


    console.log(currentMovie);
  
    return (
      <div className='Movies'>
        {movies && (
            <div className='movie-container'>
                {currentMovie.map(movie => (
                  <NavLink to={`/movies/${movie.id}`}>
                    <div key={movie.id} className='movie-item'>
                        <img src={movie.Poster_Link.split('V1_')[0] + "SX300.jpg"}></img>
                        <div className='img-desc'>
                            <div className='content'>
                                <h3>{movie.Series_Title}</h3>
                                <p>IMDB {movie.IMDB_Rating}</p>
                                <p>{movie.Genre}</p>
                                <p>{movie.Runtime}</p>
                                <p>{movie.Overview.substring(0, 96)}...</p>
                                {/* <NavLink to={`/movies/${movie.id}`}>show more</NavLink> */}
                            </div>
                        </div>
                    </div>
                  </NavLink>
                ))}
            </div>
        )}

        <Pagination moviesPerPage={moviesPerPage} totalMovies={movies.length} paginate={paginate} />
      </div>
    )
  }
  
  export default Movies



  {/* <footer>
            <div className='btns'>
                <button><GrFormPrevious className='arrow' /></button>
                <button><span>1</span></button>
                <button className='active-btn'><span>2</span></button>
                <button><span>3</span></button>
                <button><GrFormNext className='arrow'/></button>
            </div>
        </footer> */}


import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { AiFillStar } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import "../styles/MovieDetails.css"

const MovieDetails = () => {

    const {id} = useParams()
    const [movieData, setMovieData] = useState([]);

  
    const fetchData = () => {
      fetch(`http://localhost:8000/Movies/${id}`)
        .then(response => {
          return response.json()
        })
        .then(data => {
          setMovieData(data)
        })
    }
  
    useEffect(() => {
      fetchData()
    }, [])

    console.log(movieData);
    const genres = String(movieData.Genre).split(", ")
    console.log(genres);


    return (
        <div className='movie-data'>
            {movieData && (
                <div className='movie-data-cont'>
                    <header className='top-cont'>
                        <div className='title'>
                            <h1>{movieData.Series_Title}</h1>
                        </div>
                        <div className='head-info'>
                            <p className="runtime">{movieData.Runtime}</p>
                            <p>R<BsDot />Y</p>
                            <p className="year">{movieData.Released_Year}</p>
                        </div>
                    </header>
                    <div className='main-cont'>
                        <div className='cont-left'>
                            <div className='hero'>
                                {/* <img src={movieData.Poster_Link.split('V1_')[0] + "SX300.jpg"} alt="" /> */}
                                <img src={String(movieData.Poster_Link).split('V1_')[0] + "SX300.jpg"} alt="" />
                            </div>
                            <div className='rating'>
                                <span>IMDB</span>
                                <AiFillStar className='star'/>
                                <span>{movieData.IMDB_Rating}/10</span>
                            </div>
                        </div>
                        <div className="cont-right">
                            <div className="detailed-info">
                                <h3 className='director'>Director {movieData.Director}</h3>
                                <div className='genre'>
                                    {genres.map(genre => (
                                        <div className='genres'>
                                            <span>{genre}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className='overview'>
                                    <h3>Overview</h3>
                                    <div className="text">
                                        {movieData.Overview}
                                    </div>
                                </div>
                                <div className='stat-info'>
                                    <p>Metascore: {movieData.Meta_score}</p>
                                    <p>Gross: {movieData.Gross}</p>
                                    <p>Certificate: {movieData.Certificate}</p>
                                </div>
                            </div>
                            <div className="actors">
                            <h3>Actors</h3>
                            <p>{movieData.Star1}</p>
                            <p>{movieData.Star2}</p>
                            <p>{movieData.Star3}</p>
                            <p>{movieData.Star4}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MovieDetails
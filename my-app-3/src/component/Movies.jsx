import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "../styles/Movies.css"

export default function Movies() {

    const [data, setData] = useState([]);

    const loadMovieData = async () => {
        return await axios
            .get("http://localhost:8000/Movies?_page=1")
            .then((response) => setData(response.data))
            .catch((err) => console.log(err))
    };

    useEffect(() => {
        loadMovieData();
    }, []);

    console.log("data", data)

    return (
        <div className='Movies'>
            <footer>
                <nav classname="pagination" aria-label="Page navigation example">
                    <ul class="pagination">
                    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                </nav> 
            </footer>    
        </div>
        
    );
}


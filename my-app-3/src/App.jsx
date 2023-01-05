import React from 'react'
import Home from "./component/Home"
import Contact from "./component/Contact"
import Movies from "./component/Movies"
import MovieDetails from "./component/MovieDetails"
import ".//styles/App.css"
import { GrFormPrevious, GrFormNext } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="nav">
          <div className='logo'>
            <span>Logo</span>
          </div>
          <div className='links'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/movies">Movies</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </nav>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

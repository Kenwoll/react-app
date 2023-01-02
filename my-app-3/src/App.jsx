import React from 'react'
import Home from "./component/Home"
import Contact from "./component/Contact"
import Movies from "./component/Movies"
import ".//styles/App.css"
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from 'react'
import { BrowserRouter as Router, Routes, Route, Redirect } from "react-router-dom"
import './styles/index.scss'

// CONTAINERS
import Navbar from './components/Navbar'

// CONTAINERS
import Home from './containers/Home'

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
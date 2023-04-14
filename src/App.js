import React from 'react'
import { BrowserRouter as Router, Routes, Route, Redirect } from "react-router-dom"
import './styles/index.scss'

// CONTAINERS
import Home from './containers/Home'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
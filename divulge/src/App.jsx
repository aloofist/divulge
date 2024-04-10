import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Intro, Gallery, Generate, User } from './Pages'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/generate" element={<Generate/>}/>
        <Route path="/user" element={<User/>}/>
      </Routes>
    </Router>
  )
}

export default App

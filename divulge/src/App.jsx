import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Intro, Gallery, Generate, User, SignUp, Login } from './Pages'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/generate" element={<Generate/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  )
}

export default App

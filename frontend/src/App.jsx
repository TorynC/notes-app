import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"


const routes = (
  <Router>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/login"  element={<Login/>}/>
      <Route path="/signup"  element={<Signup/>}/>
      <Route path="/" element={<Login/>}/>
    </Routes>
  </Router>
);

const App = () => {
  return (
    <div>
      {routes}
    </div>
  )

}

export default App
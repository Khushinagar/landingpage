import React from 'react'
import '../styles/app.scss'
// import Header from '../componets/Header'
import Home from './Home'
import { BrowserRouter as Router ,   Routes, Route } from 'react-router-dom'
import Contact from './Contact'
import Destination from './Destination'
import Blog from './Blog'
import Login from './Login'
import Signup from './Signup'
const App = () => {
  return (
    <Router>
     <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/Destination' element={<Destination />} /> 
    <Route path='/Contact Us' element={<Contact />} /> 
    <Route path='/Blog' element={<Blog />} /> 
   <Route path='/login' element={<Login />} />
   <Route path='/signup' element={<Signup />} />

      </Routes> 
      
    </Router>
  )
}

export default App
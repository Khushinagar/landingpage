import React, { useEffect, useState } from 'react'
import '../styles/app.scss'
import Home from './Home'
import { BrowserRouter as Router ,   Routes, Route } from 'react-router-dom'
import Contact from './Contact'
import Destination from './Destination'
import Blog from './Blog'
import Profile from './Profile'
import PrivateRouteLayout from '../PrivateRouteLayout'

const App = () => {
  return (
     <Router>
     <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Contact Us' element={<Contact />} /> 
          <Route path='/Blog' element={<Blog />} /> 
          <Route path='/profile' element={<Profile />} />
          <Route element={<PrivateRouteLayout/>}>
              <Route path='/destination' element={<Destination />} />
          </Route>
      </Routes> 
      </Router>
  )
}
export default App
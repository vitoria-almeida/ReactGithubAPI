import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Home from './pages/home'
import Card from './repo/card'
import Repositories from './repo/repositories'

function Routess() {
    return (
      <>
        <BrowserRouter>
          <Routes>
              <Route path='/' exact element={<Home/>}/>  
              <Route path='/repositories' element={<Repositories/>}/>   
              <Route path='/card' element={<Card/>}/> 
          </Routes>
        </BrowserRouter>
      </>
    )
  }

export default Routess
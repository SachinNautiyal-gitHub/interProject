import React from 'react'
import Home from './component/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EditCourse from './component/EditCourse'

const App = () => {
  return (
   <>

   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/edituser' element={<EditCourse/>}/>
   </Routes>
   </BrowserRouter>

    </>
  )
}

export default App

import React, { useContext } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import NavBar from '../components/NavBar'
import Error from '../pages/Error'
import Home from '../pages/Home'
import Rooms from '../pages/Rooms'
import SingleRoom from '../pages/SingleRoom'

const AppRouter = () => {
  return (
    <div>
        <Router>
            <NavBar/>
            <Routes>
                <Route path="*" element={<Error/>}/>
                <Route exact path='/'  element={<Home/>}/>
                <Route path='/rooms' element={<Rooms/>}/>
                <Route path='/rooms/:slug' element={<SingleRoom/>}/>
            </Routes>
            
        </Router>
    </div>
  )
}

export default AppRouter
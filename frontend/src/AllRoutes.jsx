import React from 'react'
import {Routes,Route} from "react-router-dom";
import About from './About';
import Mushroom from './Components/MushroomCard';


const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/mushitem' element={<Mushroom/>}/>
    </Routes>
    
  )
}

export default AllRoutes

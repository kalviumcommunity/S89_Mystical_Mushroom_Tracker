import React from 'react'
import {Routes,Route} from "react-router-dom";
import About from './About';
import Mushroom from './Components/MushroomCard';
import EntityList from './Components/EntityList';
import AddMushrooms from './Components/AddMushroomForm';


const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/mushitem' element={<Mushroom/>}/>
        <Route path='entitieslist' element={<EntityList/>}/>
        <Route path='AddList' element={<AddMushrooms/>}/>
    </Routes>
    
  )
};

export default AllRoutes

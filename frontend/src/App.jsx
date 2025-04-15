import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AllRoutes from './AllRoutes'
import NavBar from './Components/NavBar'

function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <AllRoutes/>
      </BrowserRouter>
    </>
  )
}

export default App

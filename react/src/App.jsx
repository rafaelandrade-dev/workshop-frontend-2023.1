import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import axios from 'axios'

import NavSide from './components/NavSide/NavSide'
import Home from './components/Início/Home'
import Galeria from './components/Galeria/Galeria'
import Episodios from './components/Episódios/Episodios'


function App() {

  return (
    <>
    <Router>

    <NavSide/>

      <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/galeria" element={<Galeria/>}/>
          <Route path="/episodios" element={<Episodios/>}/>

      </Routes>


    </Router>
    </>
  )
}

export default App

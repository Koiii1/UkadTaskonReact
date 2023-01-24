import {Container} from "react-bootstrap"
import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Animes from "./pages/Animes"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"

import './App.css';


function App() {

  return (
<>
  <Navbar/>
   <Container>
    <Routes>
      <Route path="/" element={<Home/>} ></Route>
      <Route path="/animes" element={<Animes/>} ></Route>
    </Routes>
   </Container>
   <Footer/>
</>
  )
}

export default App;

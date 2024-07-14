import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Event from './pages/Event'
import Signin from "./pages/Signin"
import SIgnup from "./pages/SIgnup"
import Header from "./components/Header"
function App() {
  return (
    <>
  <BrowserRouter>
  <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/event' element={<Event/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signup' element={<SIgnup/>}/>
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App

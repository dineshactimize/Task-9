import PrimarySearchAppBar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import { Route, Routes } from 'react-router'
import Movies from './pages/Movies'
import Events from './pages/Events'


const App = () => {
  return (
    <>
      <PrimarySearchAppBar/>
         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/movies/:id' element={<Movies/>}/>
          <Route path='/events/:id' element={<Events/>}/>
         </Routes>
        <Footer/>
    
     
    </>
  )
}

export default App

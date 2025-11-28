import React from 'react'
import PrimarySearchAppBar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import { Route, Routes } from 'react-router'
import Movies from './pages/Movies'
import RajuWedsRambaiCard from './pages/Events'
import Events from './pages/Events'
// import { css } from '@emotion/react'

const App = () => {
  return (
    <>
      <PrimarySearchAppBar/>
      {/* <Events/> */}
         {/* <Home/> */}
         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/movies/:id' element={<Movies/>}/>
          <Route path='/events' element={<Events/>}/>
          {/* <Route path='/' element={<Home/>}/>
          <Route path='/' element={<Home/>}/> */}
         </Routes>
        <Footer/>
    
     
    </>
  )
}

export default App

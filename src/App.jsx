import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Shop from './pages/Shop'
import SingleProductPage from './pages/SingleProductPage'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import ProtectedRoute from './components/ProtectedRoute';



const App = () => {
  return (
    <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>} ></Route>
        <Route path='/shop' element={<Shop/>} ></Route>
         <Route path="/product/:id" element={<SingleProductPage />} />
        <Route path='/about' element={<About/>} ></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/cart' element={ <ProtectedRoute><Cart/> </ProtectedRoute>} ></Route>
        </Routes>
   <Footer/>
   </BrowserRouter>
   </>
  )
}

export default App

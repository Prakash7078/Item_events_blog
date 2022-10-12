import React from 'react'
import Header from './components/Header'
import { Route, Routes,BrowserRouter } from 'react-router-dom'
import About from './components/About'
import Asider from './components/Asider'
import './App.css'
import Footer from './components/Footer'
function App() {
  return (
    <div className='container'>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Asider/>}/>
          <Route path='/About' element={<About/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
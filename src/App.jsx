import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import React from 'react'
import HomePage from './pages/home/HomePage'
import LoginPage from './pages/login/LoginPage'
import RegisterPage from './pages/register/RegisterPage'
import Footer from './components/footer/Footer'
import Navigation from './components/navigation/Navigation'

function App() {

  return (
   <Router>
    <Navigation />
      <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/register' element={<RegisterPage/>} />
      </Routes>
      <Footer />
   </Router>
  )
}

export default App

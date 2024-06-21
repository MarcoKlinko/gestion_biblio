import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import "bootstrap/dist/css/bootstrap.css"
import React from 'react'
import HomePage from './pages/home/HomePage'
import LoginPage from './pages/login/LoginPage'
import RegisterPage from './pages/register/RegisterPage'
import Footer from './components/footer/Footer'
import Navigation from './components/navigation/Navigation'
import BookPage from './pages/books/BookPage'

function App() {

  return (
   <Router>
    <Navigation />
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/books' element={<BookPage/>} />
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/register' element={<RegisterPage/>} />
        </Routes>
      <Footer />
   </Router>
  )
}

export default App

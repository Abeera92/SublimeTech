import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

// import NotFound from './pages/NotFound'
import './App.css'
import Footer from './Component/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'

export default function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <Link to="/dashboard" className="nav-link">Dashboard</Link>
      </nav>

      {/* Main Content */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}
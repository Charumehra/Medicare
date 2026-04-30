import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './navbar'
import Home from './Home'
import HospitalDetail from './HospitalDetail'
import Booking from './Booking'

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hospital/:id" element={<HospitalDetail />} />
          <Route path="/hospital/:id/book" element={<Booking />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

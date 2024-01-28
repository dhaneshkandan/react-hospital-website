import React from "react"
import './App.css'
import { BrowserRouter } from "react-router-dom"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Treatment from "./pages/treatment/Treatment"
import Contact from "./pages/contact/Contact"
import Replacement from "./pages/replacement/Replacement"
import Hip from "./pages/hipreplace/Hip"
import Booking from "./components/booking/Booking"
function App() {
 
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/treatment" element={<Treatment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/joint-replacement" element={<Replacement />} />
        <Route path="/hip-replacement" element={<Hip />} />
        <Route path="/appointment" element={<Booking />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

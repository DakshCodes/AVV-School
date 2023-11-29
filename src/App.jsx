import React from "react"
import { Routes, Route } from 'react-router-dom'
import Head from "./components/Head/Head"
import Home from "./pages/Home/Home"
import './App.css';
import Gallery from "./pages/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Features from "./pages/Features/Features";

function App() {

  return (
    <>
      <Head />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

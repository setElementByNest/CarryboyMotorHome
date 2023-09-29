import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Headtext from './components/Headtext'
import Contents from './components/Contents'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Nav />
      <Headtext />
      <Contents />
      <Footer />
    </>
  )
}

export default App

import React from 'react'
import Header from './components/Header'
import Our from './pages/Our'
import About from './pages/About'
import Off from './pages/Off'
import Chef from './pages/Chef'
import Menu from './pages/Menu'
import Gallery from './pages/Gallery'
import Table from './components/Table'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Header/>
      <Our/>
      <About/>
      <Off/>
      <Chef/>
      <Menu/>
      <Gallery/>
      <Table/>
      <Contact/>
      <Footer/>
    </div>
  )
}


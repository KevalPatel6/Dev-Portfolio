import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './styles/App.css'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {


  return (
    <>
     <header className = 'header-container'>
      <Header/>
     </header>
    <main className = 'main-content'>
      <Outlet/>
    </main>
    <footer className='footer-container'>
      <Footer/>
    </footer>
    </>
  )
}

export default App

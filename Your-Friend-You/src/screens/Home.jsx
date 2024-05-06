import React from 'react'
import '../style.css'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Sobre from '../components/Sobre'
import Footer from '../components/Footer'

function Home() {
  return (
    <main>
        <Header />
        <Banner />
        <Sobre />
        <Footer />
    </main>
  )
}

export default Home

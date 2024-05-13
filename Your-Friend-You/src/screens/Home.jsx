import React from 'react'
import '../style.css'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Sobre from '../components/Sobre'
import Footer from '../components/Footer'
import Nos from '../components/Nos'
import SobreNos from '../components/SobreNos'

function Home() {
  return (
    <main>
        <Header />
        <Banner />
        <Sobre />
        <SobreNos />
        <Nos />
        <Footer />
    </main>
  )
}

export default Home

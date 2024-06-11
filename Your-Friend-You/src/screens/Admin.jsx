import React from 'react'
import '../style.css'
import Header from '../components/Header'
import AdminS from '../components/AdminS'
import Footer from '../components/Footer'

export default function Admin() {
    return(
        <main>
            <Header/>
            <AdminS/>
            <Footer/>
        </main>
    )
}
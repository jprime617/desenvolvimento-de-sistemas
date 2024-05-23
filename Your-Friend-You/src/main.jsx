import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import AboutUs from './screens/AboutUs.jsx'
import Login from './screens/Login.jsx'
import Blog from './screens/Blog.jsx'
import Cadastro from './screens/Cadastro.jsx'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sobre" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)

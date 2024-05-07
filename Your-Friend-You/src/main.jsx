import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import AboutUs from './screens/AboutUs.jsx'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sobre" element={<AboutUs />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)

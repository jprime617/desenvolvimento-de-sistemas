import React from 'react'
import '../style.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BlogS from '../components/BlogS'
import EditBlog from '../components/EditBlog'




function Blog() {
  return (
    <main>
        <Header />
        <BlogS />
        <EditBlog/>
        <Footer />
    </main>
  )
}

export default Blog
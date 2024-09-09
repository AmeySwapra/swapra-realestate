import React from 'react'
import Header from '../components/common/Header'
import MainBlog from '../components/MainBlog'
import Footer from '../components/common/Footer'
import ScrollToTop from '../components/common/ScrollToTop'
function BlogPage() {
  return (
    <>
      <Header/>
      <ScrollToTop/>
      <MainBlog/>
      <Footer/>
    </>
  )
}

export default BlogPage
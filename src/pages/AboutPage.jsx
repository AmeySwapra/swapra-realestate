import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import AboutPageDetails from '../components/AboutPageDetails'
import ScrollToTop from '../components/common/ScrollToTop'

function AboutPage() {
  return (
    <>
      <Header/>
      <ScrollToTop/>
      <AboutPageDetails/>
      <Footer/>
    </>
  )
}

export default AboutPage
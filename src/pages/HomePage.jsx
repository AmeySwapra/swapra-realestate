import React from 'react'
import Header from '../components/common/Header'
import AboutUs from '../components/AboutUs'
import Property from '../components/Property'
import Blog from '../components/Blog'
import Testimonial from '../components/Testimonial'
import ContactInfo from '../components/ContactInfo'
import Footer from '../components/common/Footer'
import ServicesOverview from '../components/ServiceOverview'
import ScrollToTop from '../components/common/ScrollToTop'
import Banner from '../components/Banner'
function HomePage() {
  return (
    <>
      <Header/>
      <ScrollToTop/>
      <Banner/>
      <AboutUs/>
      <ServicesOverview/>
      <Property/>
      <Blog/>
      <Testimonial/>
      <ContactInfo/>
      <Footer/>
    </>
  )
}

export default HomePage
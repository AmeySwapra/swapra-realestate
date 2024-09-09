import React from 'react'
import Header from '../components/common/Header'
import PropertyGrid from '../components/PropertyGrid'
import Footer from '../components/common/Footer'
import ScrollToTop from '../components/common/ScrollToTop'

function PropertyPage() {
  return (
    <>
      <Header/>
      <ScrollToTop/>
      <PropertyGrid/>
      <Footer/>
    </>
  )
}

export default PropertyPage
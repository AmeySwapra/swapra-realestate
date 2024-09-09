import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import PropertyDetail from '../components/PropertyDetail'
import ScrollToTop from '../components/common/ScrollToTop'

function SinglePropertyPage() {
  return (
    <>
       <Header/>
       <ScrollToTop/>
       <PropertyDetail/>
       <Footer/>
    </>
  )
}

export default SinglePropertyPage
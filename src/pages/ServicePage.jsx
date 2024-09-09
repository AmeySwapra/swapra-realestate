import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import ServiceDetail from '../components/ServiceDetail'
import ScrollToTop from '../components/common/ScrollToTop'

function ServicePage() {
  return (
    <>
      <Header/>
      <ScrollToTop/>
      <ServiceDetail/>
      <Footer/>
    </>
  )
}

export default ServicePage

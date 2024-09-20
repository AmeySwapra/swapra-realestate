import React from 'react'
import Header from '../components/common/Header'
import Profile from '../components/Profile'
import Footer from '../components/common/Footer'
import ScrollToTop from '../components/common/ScrollToTop'
function ProfilePage() {
  return (
    <>
      <Header/>
      <ScrollToTop/>
      <Profile/>
      <Footer/>
    </>
  )
}

export default ProfilePage
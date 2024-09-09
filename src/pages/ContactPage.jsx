import React from 'react';
import Header from '../components/common/Header';
import ContactUs from '../components/ContactUs';
import Footer from '../components/common/Footer';
import ScrollToTop from '../components/common/ScrollToTop';


const ContactPage = () => {
  return (
    <>
      <Header/>
      <ScrollToTop/>
      <ContactUs/>
      <Footer/>
    </>
  );
};

export default ContactPage;

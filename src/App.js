import React from 'react'
import Header from './components/common/Header';
import AboutUs from './components/AboutUs';
import Blog from './components/Blog';
import Property from './components/Property';
import Testimonial from './components/Testimonial';
import ContactInfo from './components/ContactInfo';
import Footer from './components/common/Footer';

function App() {
  return (
    <>
       <Header/>
       <AboutUs/>
       <Blog/>
       <Property/>
       <Testimonial/>
       <ContactInfo/>
       <Footer/>
    </>
  );
}

export default App;

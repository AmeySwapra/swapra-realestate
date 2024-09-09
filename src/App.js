import React from 'react'
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage'
import SingleBlogPage from './pages/SingleBlogPage'
import ContactPage from './pages/ContactPage'
import PropertyPage from './pages/PropertyPage';
import SinglePropertyPage from './pages/SinglePropertyPage';
import ServicePage from './pages/ServicePage';


function App() {
  return (
    <>
        <BrowserRouter>
           <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/about-us' element={<AboutPage/>} />
              <Route path='/blog' element={<BlogPage/>} />
              <Route path='/single-blog/:id' element={<SingleBlogPage/>}/>
              <Route path='/contact' element={<ContactPage/>}/>
              <Route exact path="/properties" element={<PropertyPage/>} />
              <Route path="/property/:id" element={<SinglePropertyPage/>} />
              <Route path='/service' element={<ServicePage/>} />
           </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;

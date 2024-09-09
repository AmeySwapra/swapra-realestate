import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import BlogDetail from '../components/BlogDetail';
import ScrollToTop from '../components/common/ScrollToTop';


const SingleBlogPage = () => {
  return (
    <>
      <Header/>
      <ScrollToTop/>
      <BlogDetail/>
      <Footer/>
    </>
  );
};

export default SingleBlogPage;
  
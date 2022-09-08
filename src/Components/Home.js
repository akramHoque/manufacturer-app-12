import React from 'react';
import AutoPlay from './AutoCarusel/AutoCausel';
import Banner from './Banner/Banner';
import BusinessSummary from './BusinessSummery/BusinessSummery';
import Contact from './Contact/Contact';
import Products from './Equipment/Products';
import Review from './Review/Review';
import Footer from './Shared/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <BusinessSummary></BusinessSummary>
     <Products></Products>
      <Review></Review>
      <AutoPlay></AutoPlay>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
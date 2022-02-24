import React from 'react';
import AboutUs from '../components/AboutUs/AboutUs';
import ContactUs from '../components/ContactUs/ContactUs';
import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import WhyUs from '../components/WhyUs/WhyUs';

const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <WhyUs />
      <ContactUs />
    </>
  );
};

export default Home;

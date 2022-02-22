import Navbar from './components/Navbar/Navbar';
import Bookings from './components/Bookings/Bookings';
import Hero from './components/Hero/Hero';
import AboutUs from './components/AboutUs/AboutUs';
import Services from './components/Services/Services';
import WhyUs from './components/WhyUs/WhyUs';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Bookings />
      <Hero />
      <AboutUs />
      <Services />
      <WhyUs />
      <ContactUs />
      <Footer />
    </>
  );
};

export default App;

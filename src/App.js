import Navbar from './components/Navbar/Navbar';
import Bookings from './components/Bookings/Bookings';
import { useLocation } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import { Route, Routes } from 'react-router';
import CheckRooms from './pages/CheckRooms';
import SelectRoom from './pages/SelectRoom';

const App = () => {
  const location = useLocation();
  return (
    <>
      <Navbar />
      {location.pathname === '/' ? <Bookings /> : ''}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/check-rooms' element={<CheckRooms />} />
        <Route path='/select-room' element={<SelectRoom />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

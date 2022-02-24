import Navbar from './components/Navbar/Navbar';
import Bookings from './components/Bookings/Bookings';

import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import { Route, Routes } from 'react-router';
import CheckRooms from './pages/CheckRooms';
import SelectRoom from './pages/SelectRoom';

const App = () => {
  return (
    <>
      <Navbar />
      <Bookings />
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

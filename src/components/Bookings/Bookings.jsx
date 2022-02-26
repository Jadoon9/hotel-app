import { useState } from 'react';
import { Link } from 'react-router-dom';
import './bookings.styles.css';
import Input from '../UI/Input/Input';
import Dropdown from '../UI/Dropdown/Dropdown';
import calenderIcon from '../../assets/homepageassets/Icon awesome-calendar-alt-1.svg';
import bookingIcon from '../../assets/homepageassets/Group 251.svg';

const Bookings = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [rooms, setRooms] = useState('');
  const [adults, setAdults] = useState('');
  const [children, setChildren] = useState('');
  const [bookNow, setBookNow] = useState(true);

  const checkInHandler = (e) => {
    setCheckIn(e.target.value);
  };
  const checkOutHandler = (e) => {
    setCheckOut(e.target.value);
  };
  const roomsHandler = (e) => {
    setRooms(e.target.value);
  };
  const adultsHandler = (e) => {
    setAdults(e.target.value);
  };
  const childrenHandler = (e) => {
    setChildren(e.target.value);
  };

  const bookNowHandler = () => {
    setBookNow(!bookNow);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log('submitted');
  };

  return (
    <>
      <div className='container bookings'>
        {bookNow && (
          <form
            onSubmit={formSubmitHandler}
            className={bookNow ? 'slide-right' : ''}
          >
            <div className='bookings-container'>
              <Input
                className='input'
                type='date'
                label='Check-in'
                value={checkIn}
                handleChange={checkInHandler}
                icon={calenderIcon}
                bookings='true'
              />

              <Input
                className='input'
                type='date'
                label='Check-out'
                value={checkOut}
                handleChange={checkOutHandler}
                icon={calenderIcon}
                bookings='true'
              />
              <Dropdown
                label='Rooms'
                handleClick={roomsHandler}
                value={rooms}
                bookings='true'
              />

              <Dropdown
                label='Adults'
                handleClick={adultsHandler}
                value={adults}
                bookings='true'
              />
              <Dropdown
                label='Children'
                handleClick={childrenHandler}
                value={children}
                bookings='true'
              />

              <Link to='/check-rooms' className='booking-btn'>
                Check Rates
              </Link>
              <a href='#' className='modify-booking'>
                Modify Booking
              </a>
            </div>
          </form>
        )}
        <div className='book-now' onClick={bookNowHandler}>
          <button type='submit' className='book-now-btn'>
            <img className='booking-icon' src={bookingIcon} alt='' />
            <h2 className='book-now-text'>Book Now</h2>
          </button>
        </div>
      </div>
    </>
  );
};

export default Bookings;

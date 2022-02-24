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

  const checkInHandler = (e) => {
    setCheckIn(e.target.value);
  };

  const checkOutHandler = (e) => {
    setCheckOut(e.target.value);
  };

  return (
    <>
      <div className='container bookings'>
        <div className='bookings-container'>
          <Input
            className='input'
            type='date'
            label='Check-in'
            value={checkIn}
            handleChange={checkInHandler}
            icon={calenderIcon}
          />

          <Input
            className='input'
            type='date'
            label='Check-out'
            value={checkOut}
            handleChange={checkOutHandler}
            icon={calenderIcon}
          />
          <Dropdown label='Rooms' />
          <Dropdown label='Adults' />
          <Dropdown label='Children' />
          <Link to='/check-rooms' className='booking-btn'>
            Check Rates
          </Link>
          <a href='#' className='modify-booking'>
            Modify Booking
          </a>
        </div>
      </div>
      <div className='book-now'>
        {/* <img className='booking-icon' src={bookingIcon} alt='' /> */}
      </div>
    </>
  );
};

export default Bookings;

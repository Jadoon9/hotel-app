import { useState } from 'react';

import './your-data.styles.css';
import Input from '../../UI/Input/Input';
import Dropdown from '../../UI/Dropdown/Dropdown';
import calenderIcon from '../../../assets/homepageassets/Icon awesome-calendar-alt.svg';

const YourData = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [rooms, setRooms] = useState('');
  const [adults, setAdults] = useState('');
  const [children, setChildren] = useState('');

  const checkInHandler = (e) => {
    setCheckIn(e.target.value);
  };
  const checkOutHandler = (e) => {
    setCheckOut(e.target.value);
  };
  const roomsHandler = (e) => {
    setRooms(e.target.value);
  };
  const adultsInHandler = (e) => {
    setAdults(e.target.value);
  };
  const childrenHandler = (e) => {
    setChildren(e.target.value);
  };

  return (
    <div className='your-data'>
      <form>
        <Input
          label='Check In'
          handleChange={checkInHandler}
          value={checkIn}
          type='date'
          icon={calenderIcon}
        />
        <Input
          label='Check Out'
          handleChange={checkOutHandler}
          value={checkOut}
          type='date'
          icon={calenderIcon}
        />
        <Dropdown label='Rooms' handleChange={roomsHandler} value={rooms} />
        <Dropdown
          label='Adults'
          handleChange={adultsInHandler}
          value={adults}
        />
        <Dropdown
          label='Children'
          handleChange={childrenHandler}
          value={children}
        />

        <button className='rates-btn'>Check Rates</button>
      </form>
    </div>
  );
};

export default YourData;

import { useLocation } from 'react-router';
import RoomCard from '../../UI/Card/RoomCard';
import './rooms.styles.css';

import roomImage from '../../../assets/page3assets/paul-postema-mr0Dp231IEw-unsplash-1.png';

const Rooms = () => {
  const location = useLocation();
  return (
    <div className='rooms-section'>
      <div className='selected-rooms'>
        <p>
          <span className='room-selected-text'>Selected </span> Room{' '}
          <strong>0</strong> of <span className='rooms-selected'>1</span>
        </p>
      </div>

      {location.pathname === '/select-room' && (
        <div className='selected-rooms-amount'>
          <p>Selected Rooms</p>
          <div className='selected-room-type'></div>
          <div className='selected-room-confirm'>
            <p>
              Total Cost <span className='room-rent'>Rs. 4,000</span>{' '}
            </p>
            <button className='selected-rooms-confirm-booking'>
              Confirm Booking
            </button>
          </div>
        </div>
      )}

      <div className='rooms'>
        <RoomCard
          image={roomImage}
          price='2,000'
          text=' Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
          title='Simple Room'
          person='2'
        />
        <RoomCard
          image={roomImage}
          price='2,000'
          text=' Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
          title='Delux Room'
          person='4'
        />
        <RoomCard
          image={roomImage}
          price='2,000'
          text=' Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
          title='Luxury Room'
          person='6'
        />
      </div>
    </div>
  );
};

export default Rooms;

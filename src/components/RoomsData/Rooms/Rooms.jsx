import { useLocation } from 'react-router';
import RoomCard from '../../UI/Card/RoomCard';
import './rooms.styles.css';

import roomImage from '../../../assets/page3assets/paul-postema-mr0Dp231IEw-unsplash-1.png';

const ROOMS_DATA = [
  {
    id: 1,
    image: roomImage,
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit',
    title: 'Simple Room',
    person: '2',
    price: '2000',
  },
  {
    id: 2,
    image: roomImage,
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit',
    title: 'Delux Room',
    person: '4',
    price: '2000',
  },
  {
    id: 3,
    image: roomImage,
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit',
    title: 'Luxury Room',
    person: '6',
    price: '2000',
  },
];

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
        {ROOMS_DATA.map((room) => (
          <div key={room.id}>
            <RoomCard
              id={room.id}
              image={room.image}
              price={room.price}
              text={room.text}
              price={room.price}
              title={room.title}
              person={room.person}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;

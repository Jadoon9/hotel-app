import RoomCard from '../../UI/Card/RoomCard';
import './rooms.styles.css';

import roomImage from '../../../assets/homepageassets/paul-postema-mr0Dp231IEw-unsplash.png';

const Rooms = () => {
  return (
    <div className='rooms-section'>
      <div className='selected-rooms'>
        <p>
          <span className='room-selected-text'>Selected </span> Room{' '}
          <strong>0</strong> of <span className='rooms-selected'>1</span>
        </p>
      </div>
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

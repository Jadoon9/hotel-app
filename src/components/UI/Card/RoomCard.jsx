import { useLocation } from 'react-router';

import './room-card.styles.css';
import personIcon from '../../../assets/page2assets/Icon awesome-user-alt.svg';
import toilet from '../../../assets/page2assets/toilet-1.svg';
import wifi from '../../../assets/page2assets/wifi-1.svg';
import addIcon from '../../../assets/page2assets/Group 797.svg';
import minusIcon from '../../../assets/page3assets/Group 802.svg';
import { Link } from 'react-router-dom';

const RoomCard = ({ image, price, text, title, person }) => {
  const location = useLocation();
  return (
    <div className='room-card'>
      <div className='room-card-image'>
        <img src={image} alt='' />
        <h3 className='room-card-image-title'>{title}</h3>
      </div>

      <div className='room-card-head'>
        <h3>
          <span className='room-card-price'>Rs. {price}</span> / Night
        </h3>
        <div className='room-card-person-info'>
          <img src={personIcon} alt='' />
          <p className='room-card-person'>{person}</p>
        </div>
      </div>

      <div className='room-card-description'>
        <p>{text}</p>
      </div>

      <div className='room-card-info'>
        <div className='toilets'>
          <img className='room-card-info-icon' src={toilet} alt='' />
          <h3>Attached Toilets</h3>
        </div>
        <div className='free-wifi'>
          <img className='room-card-info-icon' src={wifi} alt='' />
          <h3>Free Wifi</h3>
        </div>
        <a href='#' type='button'>
          More
        </a>
      </div>

      <div
        className={`${
          location.pathname === '/select-room' ? 'select-rooms' : 'check-rooms'
        }`}
      >
        <p>Select Rooms</p>
        <div className='rooms-count'>
          {location.pathname === '/select-room' && (
            <Link to='/check-rooms'>
              <img className='minus-logo' src={minusIcon} alt='' />
            </Link>
          )}
          <p>00</p>
          <Link to='/select-room'>
            <img src={addIcon} alt='' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;

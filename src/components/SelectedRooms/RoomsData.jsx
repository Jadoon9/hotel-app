import './rooms-data.styles.css';
import YourData from './YourData/YourData';
import Rooms from './Rooms/Rooms';

const RoomsData = () => {
  return (
    <div className='rooms-data container'>
      <YourData />
      <Rooms />
    </div>
  );
};

export default RoomsData;

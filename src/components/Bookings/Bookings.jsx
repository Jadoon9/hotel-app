import './bookings.styles.css';
import Input from '../UI/Input/Input';

const Bookings = () => {
  return (
    <div className='container bookings'>
      <Input className='input' type='date' label='Check-in' />
      <Input className='input' type='text' label='Check-out' />
      <Input className='input' type='number' label='Rooms' />
      <Input className='input' type='number' label='Adults' />
      <Input className='input' type='number' label='Children' />
    </div>
  );
};

export default Bookings;

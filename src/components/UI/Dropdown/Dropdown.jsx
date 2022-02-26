import './dropdown.styles.css';

const Dropdown = ({ label, handleClick, bookings }) => {
  return (
    <div className='drp-group'>
      <label
        htmlFor='dropdown'
        className={`${bookings ? ' booking-label-color' : 'label'}`}
      >
        {label}
      </label>
      <select className='dropdown' id='dropdown' onChange={handleClick}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
      </select>
    </div>
  );
};

export default Dropdown;

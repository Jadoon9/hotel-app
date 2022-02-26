import './input.styles.css';

const Input = ({ label, handleChange, icon, bookings, ...otherProps }) => {
  return (
    <div className='input-group'>
      <label className={`${bookings ? ' booking-label-color' : 'label'}`}>
        {label}
      </label>
      <div className='input-group-icon'>
        <input className='input' onChange={handleChange} {...otherProps} />
        {icon && <img src={icon} className='input-icon' />}
      </div>
    </div>
  );
};

export default Input;

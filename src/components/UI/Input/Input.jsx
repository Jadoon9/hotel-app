import './input.styles.css';

const Input = ({ label, handleChange, icon, ...otherProps }) => {
  return (
    <div className='input-group'>
      <label className='label'>{label}</label>
      <input onChange={handleChange} {...otherProps} />
      {icon && <img src={icon} className='input-icon' />}
    </div>
  );
};

export default Input;

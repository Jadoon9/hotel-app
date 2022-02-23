import './input.styles.css';

const Input = ({ label, handleChange, ...otherProps }) => {
  return (
    <div className='input-group'>
      <label className='label'>{label}</label>
      <input onChange={handleChange} {...otherProps} />
    </div>
  );
};

export default Input;

import './dropdown.styles.css';

const Dropdown = ({ label, handleClick }) => {
  return (
    <div className='drp-group'>
      <label htmlFor='dropdown' className='label'>
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

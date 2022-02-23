import './navbar.styles.css';
import logo from '../../assets/homepageassets/marcopolo png-1.png';

const Navbar = () => {
  return (
    <div className='navbar container'>
      <div>
        <img className='logo' src={logo} alt='' />
      </div>
      <nav className='nav-items'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>About Us</a>
        </li>
        <li>
          <a href='#'>Services</a>
        </li>
        <li>
          <a href='#'>Contact Us</a>
        </li>
      </nav>
    </div>
  );
};

export default Navbar;

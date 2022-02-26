import './navbar.styles.css';
import logo from '../../assets/homepageassets/marcopolo png-1.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar container'>
      <div className='navbar-logo'>
        <Link to='/'>
          <img className='logo' src={logo} alt='' />
        </Link>
      </div>
      <div className='nav'>
        <nav className='nav-items'>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#about'>About Us</a>
          </li>
          <li>
            <a href='#services'>Services</a>
          </li>
          <li>
            <a href='#contact'>Contact Us</a>
          </li>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

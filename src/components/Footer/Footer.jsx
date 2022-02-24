import './footer.styles.css';
import logo from '../../assets/homepageassets/marcopolo white2-1.png';
import phone from '../../assets/homepageassets/Icon material-local-phone.svg';
import mail from '../../assets/homepageassets/Icon material-mail.svg';
import location from '../../assets/homepageassets/Icon material-location-on-1.svg';
import twitter from '../../assets/homepageassets/Component 38 – 1.svg';
import facebook from '../../assets/homepageassets/Icon awesome-facebook-square-1.svg';
import linkedIn from '../../assets/homepageassets/Icon awesome-linkedin-1.svg';
import instagram from '../../assets/homepageassets/Component 39 – 1.svg';

const Footer = () => {
  return (
    <>
      <div className='footer container'>
        <div className='footer-left'>
          <img className='footer-logo' src={logo} alt='' />
          <p className='footer-left-description'>
            It's a long established fact that a reader will be distracted
          </p>
        </div>

        <div className='footer-center'>
          <h3 className='footer-center-title'>Quick Links</h3>
          <a href='#'>Home</a>
          <a href='#about'>About us</a>
          <a href='#contact'>Contact us</a>
          <a href='#faq'>Faq's</a>
        </div>

        <div className='footer-right'>
          <h3 className='footer-right-title'>Contact Us</h3>
          <div className='footer-right-contact-details'>
            <img className='footer-icon' src={phone} alt='' />
            <p>0900-78601</p>
          </div>

          <div className='footer-right-contact-details'>
            <img className='footer-icon' src={mail} alt='' />
            <p>marcopolo#gmail.com</p>
          </div>

          <div className='footer-right-contact-details'>
            <img className='footer-icon' src={location} alt='' />
            <p>Kalam, Pakistan</p>
          </div>

          <div className='footer-right-contact-details'>
            <img className='footer-icon' src={twitter} alt='' />
            <img className='footer-icon' src={facebook} alt='' />
            <img className='footer-icon' src={instagram} alt='' />
            <img className='footer-icon' src={linkedIn} alt='' />
          </div>
        </div>
      </div>

      <div className='footer-rights'>
        <p>Marcopolo Hotel. All rights reserved</p>
      </div>
    </>
  );
};

export default Footer;

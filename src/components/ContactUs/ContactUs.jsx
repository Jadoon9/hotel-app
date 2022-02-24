import { useState } from 'react';

import './contactUs.styles.css';
import Input from '../UI/Input/Input';

const ContactUs = () => {
  const [name, setName] = useState('');

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  return (
    <div className='section container contact'>
      <h1 className='section-title'>Get In Touch</h1>

      <div className='section-container'>
        <div className='section-left'>
          <h3 className='section-container-title'>Send Us a Message</h3>

          <form className='section-form'>
            <div className='input-group'>
              <label className='input-label' htmlFor='name'>
                Name
              </label>
              <input className='form-input' type='text' id='name' />
            </div>
            <div className='input-group'>
              <label className='input-label' htmlFor='number'>
                Phone No
              </label>
              <input className='form-input' type='text' id='number' />
            </div>
            <div className='input-group'>
              <label className='input-label' htmlFor='email'>
                Email
              </label>
              <input className='form-input' type='email' id='email' />
            </div>

            <div className='textarea'>
              <label htmlFor='form-label' className='input-label'>
                Message
              </label>
              <textarea
                className='form-textarea'
                name=''
                id='form-textarea'
              ></textarea>
            </div>

            <div className='form-actions'>
              <a href='#' type='button' className='clear-btn'>
                Clear
              </a>
              <button className='send-message-btn'>Send Message</button>
            </div>
          </form>
        </div>

        <div className='section-right'>
          <h3 className='section-container-title'>Contact Details</h3>
          <div className='section-address'>
            <h3>Address</h3>
            <p>701-B, Workshop Rd, Kalam, Pakistan</p>
          </div>
          <div className='section-contact'>
            <p>
              <span>Tel :</span> 090078601
            </p>
            <p>
              <span>Fax :</span> 090078601
            </p>
            <p>
              <span>Email :</span> marcopolo@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

import { useState } from 'react';

import './contactUs.styles.css';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const phoneChangeHandler = (e) => {
    setPhone(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const messageChangeHandler = (e) => {
    setMessage(e.target.value);
  };

  const clearHandler = () => {
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(name, phone, email, message);
  };

  return (
    <div className='section container contact' id='contact'>
      <h1 className='section-title'>Get In Touch</h1>

      <div className='section-container'>
        <div className='section-left'>
          <h3 className='section-container-title'>Send Us a Message</h3>

          <form className='section-form' onSubmit={formSubmitHandler}>
            <div className='input-group'>
              <label className='input-label' htmlFor='name'>
                Name
              </label>
              <input
                className='form-input'
                type='text'
                id='name'
                onChange={nameChangeHandler}
                value={name}
              />
            </div>
            <div className='input-group'>
              <label className='input-label' htmlFor='number'>
                Phone No
              </label>
              <input
                className='form-input'
                type='text'
                id='number'
                onChange={phoneChangeHandler}
                value={phone}
              />
            </div>
            <div className='input-group'>
              <label className='input-label' htmlFor='email'>
                Email
              </label>
              <input
                className='form-input'
                type='email'
                id='email'
                onChange={emailChangeHandler}
                value={email}
              />
            </div>

            <div className='textarea'>
              <label htmlFor='form-label' className='input-label'>
                Message
              </label>
              <textarea
                className='form-textarea'
                name=''
                id='form-textarea'
                onChange={messageChangeHandler}
                value={message}
              ></textarea>
            </div>

            <div className='form-actions'>
              <a
                href='#'
                type='button'
                className='clear-btn'
                onClick={clearHandler}
              >
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

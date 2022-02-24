import React from 'react';
import './why-us-card.styles.css';

const WhyUsCard = ({ image, title }) => {
  return (
    <div className='why-us-card'>
      <div className='icon-bg'>
        <img className='icon' src={image} alt='' />
      </div>
      <p className='why-us-card-title'>{title}</p>
    </div>
  );
};

export default WhyUsCard;

import './why-us.styles.css';
import WhyUsCard from './WhyUsCard';

// * Show case images
import showImg1 from '../../assets/homepageassets/proxyclick-visitor-management-system-VnACB-m22es-unsplash (1)-1.png';
import showImg2 from '../../assets/homepageassets/NoPath - Copy (12)-1.png';
import showImg3 from '../../assets/homepageassets/NoPath - Copy (13)-1.png';
import showImg4 from '../../assets/homepageassets/NoPath.png';

// * Logos for cards
import icon1 from '../../assets/homepageassets/Icon awesome-broom-1.svg';
import icon2 from '../../assets/homepageassets/Icon awesome-money-bill-wave-alt-1.svg';
import icon3 from '../../assets/homepageassets/Icon material-laptop.svg';
import icon4 from '../../assets/homepageassets/Component 36 – 1.svg';
import icon5 from '../../assets/homepageassets/Icon metro-language-1.svg';

const WhyUs = () => {
  return (
    <div className='section container why-us'>
      <h1 className='section-title'>WHY US?</h1>

      <div className='why-us-content'>
        <div>
          <div className='why-us-left'>
            <div className='pair1'>
              <img className='showImg' src={showImg1} alt='' />
              <img className='showImg img2' src={showImg2} alt='' />
            </div>
            <div className='pair2'>
              <img className='showImg' src={showImg3} alt='' />
              <img className='showImg img2' src={showImg4} alt='' />
            </div>
          </div>
        </div>

        <div className='why-us-right'>
          <WhyUsCard image={icon1} title='High Standards of Cleanliness ' />
          <WhyUsCard image={icon2} title='Prices you cant beat ' />
          <WhyUsCard image={icon3} title='Manage your bookings online ' />
          <WhyUsCard image={icon4} title='Booking is safe ' />
          <WhyUsCard image={icon5} title='They can speak 3 languages' />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;

import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../../assets/homepageassets/nick-karvounis-Ciqxn7FE4vE-unsplash-1.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper';

import './slider.styles.css';

const swiperData = [
  {
    id: 1,
    image: img1,
    description1: 'Charming Small Town',
    description2: 'Charming Small Town',
  },
  {
    id: 2,
    image: img1,
    description1: 'Charming Small Town',
    description2: 'Charming Small Town',
  },
  {
    id: 3,
    image: img1,
    description1: 'Charming Small Town',
    description2: 'Charming Small Town',
  },
];

const Slider = () => {
  return (
    <div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className='swiper'
      >
        {swiperData.map((item) => (
          <SwiperSlide className='swiper-slide' key={item.id}>
            <img src={item.image} />
            <p className='swiper-description1'>{item.description1}</p>
            <p className='swiper-description2'>{item.description2}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;

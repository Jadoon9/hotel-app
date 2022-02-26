import './aboutUs.styles.css';
import Slider from '../UI/Slider/Slider';

const AboutUs = () => {
  return (
    <div className='section about' id='about'>
      <h1 className=' section-title section-title-after'>Our Hotel</h1>
      <p className='section-description'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, cumque.
        Optio labore natus dolore illo dolor quasi laudantium commodi? Molestias
        rerum optio accusantium blanditiis rem cumque neque odio aliquam? Vero.
      </p>
      <Slider />
    </div>
  );
};

export default AboutUs;

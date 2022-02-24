import Card from '../UI/Card/Card';
import './services.styles.css';
import image1 from '../../assets/homepageassets/shawnanggg-nmpW_WwwVSc-unsplash-1.png';
import image2 from '../../assets/homepageassets/roberto-nickson-emqnSQwQQDo-unsplash-1.png';
import image3 from '../../assets/homepageassets/patrick-tomasso-GXXYkSwndP4-unsplash-1.png';
import downArrow from '../../assets/homepageassets/Icon feather-chevron-down.svg';

const Services = () => {
  return (
    <div className='section services' id='services'>
      <h1 className='section-title'>Our Services</h1>
      <p className='section-description'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro tenetur,
        fugiat nisi sed architecto ad quos ut, ipsa odit cum, voluptate
        similique illum sequi modi unde mollitia id ducimus sint.
      </p>
      <div className='cards'>
        <Card
          image={image1}
          name='Lake View'
          title='Restaurant'
          description='is simply dummy text of the printing and typesetting industry. '
        />
        <Card
          image={image2}
          name='Luxury Rooms'
          title='Hotel'
          description='is simply dummy text of the printing and typesetting industry. '
        />
        <Card
          image={image3}
          name='Live Kitchen'
          title='Continental Cuisine'
          description='is simply dummy text of the printing and typesetting industry. '
        />
      </div>
      <div className='btn-group'>
        <button className='services-btn'>See All</button>
        {/* <img className='btn-down' src={downArrow} alt='' /> */}
      </div>
    </div>
  );
};

export default Services;

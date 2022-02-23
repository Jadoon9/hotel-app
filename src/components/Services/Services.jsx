import Card from '../UI/Card/Card';
import './services.styles.css';
import image1 from '../../assets/homepageassets/shawnanggg-nmpW_WwwVSc-unsplash-1.png';

const Services = () => {
  return (
    <div className='section'>
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
          description='dummy text for the restaurant card '
        />
      </div>
    </div>
  );
};

export default Services;

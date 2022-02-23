import './card.styles.css';

const Card = ({ image, name, title, description }) => {
  return (
    <div className='card'>
      <img src={image} alt='' className='card-image' />
      <div className='card_content'>
        <h3 className='card_name'>{name}</h3>
        <h2 className='card_title'>{title}</h2>
        <p className='card_description'>{description}</p>
      </div>
    </div>
  );
};

export default Card;

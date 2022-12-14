import './introduction.css';
import image from '../../assets/images/person.png';

interface Introduction {
  description: string;
  name: string;
}

const Introduction = ({ description, name }: Introduction) => {

  return (
    <div id='introduction' className='introduction'>
      <div className='intro-container'>
        <div className='intro-title'> Delicous cake for everyone </div>
        <div className='intro-description'>{description}</div>
        <div className='intro-author'>
          <span> Prepared by: </span>
          <img className="image" src={image} alt={name} />
        </div>
      </div>
    </div>
  )
}

export default Introduction
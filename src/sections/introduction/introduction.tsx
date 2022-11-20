import './introduction.css';
import image from '../../assets/images/person.png';

interface Introduction {
  description: string;
  name: string;
  pageName: string;
}

const Introduction = ({ description, name, pageName }: Introduction) => {

  return (
    <div className='introduction' key={pageName}>
      <div className='image-container'>
        <img
          className="image"
          src={image}
          alt={name}
        />
      </div>
      <div className='content'>
          <div className='name'> {name} </div>
          <div className='description'> {description}</div>
      </div>
    </div>
  )
}

export default Introduction
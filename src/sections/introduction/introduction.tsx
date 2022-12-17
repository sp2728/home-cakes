import './introduction.css';
import image from '../../assets/images/person.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface Introduction {
  description: string;
  name: string;
}

const Introduction = ({ description, name }: Introduction) => {

  return (
    <Container fluid id='introduction' className='introduction'>
      <Row>
        <Col sm='auto' lg={8}>
          <Col className='intro-title'> Delicous cake for everyone </Col>
          <Col className='intro-description'>{description}</Col>
          <div className='intro-author'>
            <span> Prepared by: </span>
            <img className="image" src={image} alt={name} />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Introduction;
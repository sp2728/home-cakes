import { Button, Card } from 'react-bootstrap';
import './categories.css';

import layeredCake from '../../assets/images/layered_cake.jpg';
import rightArrow from '../../assets/images/right-arrow.svg';
import { cakeTypes } from '../../constants';


interface Props {
  items: Item[],
  title: string,
  description: string;
}

interface Item {
  title: string;
  src: string;
}

const Categories = ({ items, title, description }: Props) => {
  
  const Item = (item: Item) => {

    let image : any = cakeTypes[item.src];
  
  return  <Card className='categories-card'>
      <Card.Img className='categories-image' variant="top" src={image} />
      <Card.Body className='categories-body'>
        <Card.Title className='chocolate-text bold'>{item.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="">Read More <span><img width='25px' src={rightArrow}/></span></Button>
      </Card.Body>
    </Card>
  }
  return (
    <div id='products' className='categories'>
      <div className='categories-title'> {title} </div>
      <div className='categories-description'> {description}</div>
      <div className='scrolling-wrapper'>
        {items.map((item) => <Item {...item} key={item.title}/>)}
      </div>
    </div>
  )
}

export default Categories
import React from 'react'
import { Button, Card } from 'react-bootstrap';
import './categories.css';

interface Props {
  pageName: string;
  items: Item[]
}

interface Item {
  title: string;
}

const Categories = ({ pageName, items }: Props) => {

  const Item = (item: Item) => (
    <Card className='categories-card'>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  )
  return (
    <div className='categories' id={pageName}>
      <div className='scrolling-wrapper'>
        {items.map((item) => <Item {...item}/>)}
      </div>
    </div>
  )
}

export default Categories
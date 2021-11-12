import React from 'react';
import {Button} from 'react-bootstrap'

const Card = (props) => {

  const card = props.card;
  const courseTotal = card.reduce((sum,course)=>sum + course.price,0)
  const tax = courseTotal/10
  return (
    <div>
      <h1 className="item">Total item order: {card.length}</h1>
      <h2>price: {courseTotal}</h2>
      <h2>Tax: {tax}</h2>
      <h2>Total amount: {courseTotal+tax}</h2>
      <Button variant="success">Placr Order</Button>
    </div>
  );
};

export default Card;
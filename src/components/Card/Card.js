import React from 'react';
import {Button} from 'react-bootstrap'
import './Card.css'

const Card = (props) => {

  const card = props.card;
  const courseTotal = card.reduce((sum,course)=>sum + course.price,0)
  const tax = courseTotal/10
  return (
    <div className="card">
      <h1 className="item">Total item order: {card.length}</h1>
      <h2 className="item">price: {courseTotal}</h2>
      <h2 className="item">Tax: {tax}</h2>
      <h2 className="item">Total amount: {courseTotal+tax}</h2>
      <Button variant="success">Place Order</Button>
    </div>
  );
};

export default Card;
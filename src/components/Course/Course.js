import React from 'react';
import "./Course.css"
import {Button} from 'react-bootstrap'

const Course = (props) => {

  const { name, instructor, price, image } = props.course

  return (
    <div className="course">
      <div >
        <img src={image} alt="" />
      </div>
      <div>
        <h2 className="name">Course Title: {name}</h2>
        <h2>Instructor: {instructor}</h2>
        <h2 className="price">Price: {price}</h2>
        <Button variant="warning" onClick={()=>(props.handleButton(props.course))}>Enroll Now</Button>
      </div>



    </div>
  );
};

export default Course;
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
      <div className="content">
        <h2 className="name">Course Title: {name}</h2>
        <h2 className="name">Instructor: {instructor}</h2>
        <h2 className="name">Price: {price}</h2>
        <Button className="button" variant="warning" onClick={()=>(props.handleButton(props.course))}>Enroll Now</Button>
      </div>



    </div>
  );
};

export default Course;
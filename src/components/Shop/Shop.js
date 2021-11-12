import React, { useState } from 'react';
import './Shop.css'
import courseData from '../../fakeData/CourseData';
import Card from '../Card/Card';
import Course from '../Course/Course';

const Shop = () => {

  const [course,setCourse]=useState(courseData)

  const [card,setCard]=useState([])
  
  const handleButton=((course)=>{
    const newCard = [...card,course]
    setCard(newCard)
  })

  return (
    <div className="shop">
      <div className="course-container">
        {
          course.map((course)=>(
            <Course course={course} handleButton={handleButton}></Course>
          ))
        }
      </div>

      <div className="card-container">
        <Card card={card}/>
      </div>

    </div>
  );
};

export default Shop;
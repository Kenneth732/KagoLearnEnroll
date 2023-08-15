import React from 'react';
import './Home.css';
import Courses from '../Courses/Courses';


function Home() {
  return (
    <div >
      <div className='Text-Box'>
        <h1>Welcome to Elegance in Fashion</h1>
        <p>
          Discover the artistry of style and elegance with our exquisite collection of fashion designs. Immerse yourself in a world of luxury fabrics, intricate details, and timeless beauty.
        </p>
        <a href='/' className='btn-Explore-Collections'>
          Explore Collections
        </a>
      </div>
      <Courses />
    </div>
  );
}

export default Home;



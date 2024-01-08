import React from 'react'
import './landingCss/projects.css';
import {Image1}  from '../../assets/imgs/HomePage';

const Projects = () => {
    return (
      
      <>
      <div className='root'>
        <figure>
                <img src={Image1} alt="Mountains" />
                <figcaption>The Day</figcaption>
            </figure>
            <figure>
                <img src={Image1} />
                <figcaption>The Night</figcaption>
            </figure>
    </div>
    <div className='root root2'>
    <figure>
                <img src={Image1} alt="Mountains" />
                <figcaption>The Day</figcaption>
            </figure>
            <figure>
                <img src={Image1} />
                <figcaption>The Night</figcaption>
            </figure>
    </div>
     <div className='but'>
     <button><span>Read More </span><i></i></button>
     </div>
    

      </>
    )
}

export default Projects

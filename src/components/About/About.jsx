import React from 'react';
import "./About.css";
import { assets } from '../../assets/assets';

const About = () => {
  return (
    <div className='about-container'>
      <h1>About Us <p></p></h1>
      <div className='about'>
        <div className='about-left-side'>
          <img src={assets.image3} alt="" className='about-img1'/>
          <img src={assets.image2} alt="" className='about-img2'/> <br />
          <img src={assets.image1} alt="" className='about-img2'/>
          <img src={assets.image4} alt="" className='about-img1'/>
        </div>
        <div className='about-right-side'>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, dicta, repellendus dolores minima quisquam sapiente excepturi cupiditate quam quibusdam porro libero placeat accusamus eius aliquid cumque omnis quo quod deleniti, pariatur laudantium molestiae laboriosam! Illum itaque explicabo autem ipsum ad eum aliquam commodi accusamus expedita doloribus tempora, perspiciatis eos excepturi quo et quos vel fugit? Vero aliquam sunt dolores ipsam repellat odit a dolore porro ducimus deserunt, quam incidunt blanditiis!</p>
            <button>Read Full Details</button>
        </div>
      </div>
    </div>
  )
}

export default About
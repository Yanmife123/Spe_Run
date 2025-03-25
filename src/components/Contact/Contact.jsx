import React from 'react';
import './Contact.css'
import { assets } from '../../assets/assets';

const Contact = () => {
  return (
    <div className='contact-container'>
        <h1>Contact Us <p></p></h1>
        <div className='contact'>
            <div className='contact-left-side'>
                <img src={assets.image6} alt="" />
            </div>
            <div className='contact-right-side'>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sequi perferendis alias corporis quis aperiam dolorum minima dignissimos, accusantium nisi numquam mollitia omnis repellendus autem! Sapiente voluptas rerum vero eveniet!</h4>
                <button>Contact Form</button>
            </div>
        </div>
    </div>
  )
}

export default Contact
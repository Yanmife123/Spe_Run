import React from 'react'
import './Events.css';
import { assets } from '../../assets/assets';

const Events = () => {
    return (
        <div className='event-container'>
            <h1>Events <p></p></h1>
            <div className='events'>
                <div className='event-left-side'>
                    <img src={assets.image8} alt="" className='event-img1' />
                    <img src={assets.image5} alt="" className='event-img2' /> <br />
                    <img src={assets.image14} alt="" className='event-img2' />
                    <img src={assets.image7} alt="" className='event-img1' />
                </div>
                <div className='event-right-side'>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, dicta, repellendus dolores minima quisquam sapiente excepturi cupiditate quam quibusdam porro libero placeat accusamus eius aliquid cumque omnis quo quod deleniti, pariatur laudantium molestiae laboriosam! Illum itaque explicabo autem ipsum ad eum aliquam commodi accusamus expedita doloribus tempora, perspiciatis eos excepturi quo et quos vel fugit? Vero aliquam sunt dolores ipsam repellat odit a dolore porro ducimus deserunt, quam incidunt blanditiis!</p>
                    <button>View All Events</button>
                </div>
            </div>
        </div>
    )
}

export default Events
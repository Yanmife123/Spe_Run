import React from 'react';
import "./Introduction.css"
import { assets } from '../../assets/assets';

const Introduction = () => {
    return (
        <div className='intro-container'>
            <h1>Introduction <p></p></h1>
            <div className='intro'>
                <div className='intro-left-side'>
                    <img src={assets.logo4} alt="" />
                </div>
                <div className='intro-right-side'>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio exercitationem deserunt reprehenderit odio consequatur vel. Quasi minima praesentium doloremque odit quibusdam quia illum nulla sint assumenda! Quisquam excepturi, temporibus sint porro, tempore officiis sequi dolor minima sed exercitationem harum minus aspernatur, culpa libero rerum animi magnam itaque! Nostrum voluptate libero impedit a illum corporis aut. Et sunt dolorem suscipit autem, adipisci rerum debitis fugiat aperiam ab omnis? Corrupti ducimus, quisquam odio quae vel libero cum eaque ipsam perferendis maxime ad, dignissimos expedita incidunt sequi non earum eos corporis esse fugit, odit ipsa placeat possimus ratione? Laudantium nisi quod et animi!</h4>
                </div>
            </div>
        </div>
    )
}

export default Introduction
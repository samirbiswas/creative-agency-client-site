import React from 'react';
import netflex from '../../../images/logos/netflix.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import airbnb from '../../../images/logos/airbnb.png';
import slack from '../../../images/logos/slack.png';
import './Brand.css'
const Brand = () => {
    return (
        <div className='container'>
            <div className="row d-flex justify-content-between brand-images mt-5 ">
            
            <img src={slack} className="img-fluid" alt=""></img>
            <img src={google} className="img-fluid" alt=""></img>
            <img src={uber} className="img-fluid" alt=""></img>
            <img src={netflex} className="img-fluid" alt=""></img>
            <img src={airbnb} className="img-fluid" alt=""></img>
            
            </div>
        </div>
    );
};

export default Brand;
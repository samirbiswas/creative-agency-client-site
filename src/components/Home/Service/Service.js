import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
import { AnimationWrapper } from 'react-hover-animation';

const Service = (props) => {
    
    const {title, picture, description,id} = props.service;
   
    return (
       
        <div className="card shadow-sm text-center " >
            <Link to={`/customar/${id}`} style={{ textDecoration: 'none' }}>
            <AnimationWrapper animationConfig={{
        duration: 500,
        }}config={{
            color: {
            initial: 'black',
            onHover: '#FFA500',

        },
      }}>
            <div className="card-body">
              <img className="mx-0" src={picture} alt="" width="60"/>
            </div>
            <div className="align-items-center">
                <div>
                    <h6 className="text-secondary">{title}</h6>
                    <p className="m-0">{description}</p>
                </div>
            </div>

            </AnimationWrapper>
            </Link>
            
       </div>
      
    );
};

export default Service;
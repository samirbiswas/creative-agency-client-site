import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = (props) => {
    
    const {title, picture, description,id} = props.service;
    console.log(title);
    return (
       
        <div className="card shadow-sm text-center " >
            <Link to={`/customar/${id}`}>
            <div className="card-body">
                
            <img className="mx-0" src={picture} alt="" width="60"/>
                
            </div>
            
            <div className="align-items-center">
                <div>
                    <h6 className="text-primary">{title}</h6>
                    <p className="m-0">{description}</p>
                </div>
            </div>
            </Link>
            
       </div>
        
    );
};

export default Service;
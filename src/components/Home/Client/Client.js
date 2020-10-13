import React from 'react';

const Client = (props) => {
    console.log(props);
    const {name,picture, description,designation} = props.clint;
    return (
        <div className="card shadow-sm text-center">
            <div className="card-body d-flex">
            <img className="mx-0" src={picture} alt="" width="60"/>

            <div className='pl-3 pt-1 pb-1 '>
            <h5 className="text-primary">{name}</h5>
            <h6 className="text-secondary">{designation}</h6>
            </div>
                
            </div>
            <div className='pl-4 text-justify'>
                
                    <p>{description}</p>
               
            </div>
       </div>
    );
};

export default Client;
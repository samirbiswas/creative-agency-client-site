import React from 'react';

const Client = (props) => {
    console.log(props.client);
    const {riviewName,photoURL,riviewTitle,riviewDes} = props.client;
    return (
        <div className='col-md-4'>
        <div className="card">
            <div className="card-body d-flex">
            <img className="mx-0" src={photoURL} alt="" width="60"/>
            <div className='pl-3 pt-1 pb-1 '>
            <h5 className="text-primary">{riviewName}</h5>
            <h6 className="">{riviewTitle}</h6>
            
            </div>
           
            </div>
            <div className='pl-4 text-justify'>
                
                    <p>{riviewDes}</p>
               
            </div>
       </div>
       </div>
    );
};

export default Client;
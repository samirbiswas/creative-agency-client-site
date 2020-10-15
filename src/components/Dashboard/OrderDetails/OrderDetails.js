import React from 'react';

const OrderDetails = (props) => {
    const {picture,title,description} =props.order;
    return (
      
            <div className="col-md-5 col-sm-8 shadow-lg ml-2 bg-white rounded">
               <img style={{height:'50px'}} src={picture} alt=""/>
               
               <h6>{title}</h6>
                <p>{description}</p>
               
            </div>
    
    );
};

export default OrderDetails;
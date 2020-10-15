import React from 'react';

const OrderDetails = (props) => {
    const {picture,title,description} =props.order;
    return (
      
            <div className="col-md-6 col-sm-8 p-3 shadow-lg mb-5 bg-white rounded">
               <img style={{height:'50px'}} src={picture} alt=""/>
               
               <h6>{title}</h6>
                <p>{description}</p>
               
            </div>
       
    );
};

export default OrderDetails;
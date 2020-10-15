import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Sitebar = () => {
   
    
   
    return (
            <div className='container'>
                <Link> <p>Add Order</p></Link>
                <Link to='/order'> <p>Order List</p></Link>
                <Link to='/review'> <p>Review</p></Link>
            </div>
    );
};

export default Sitebar;
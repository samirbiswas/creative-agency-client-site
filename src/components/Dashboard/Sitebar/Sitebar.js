import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Sitebar = () => {
   
    
   
    return (
            <div className='container'>
                
                <Link to='/order'> <p className='text-light'>Order List</p></Link>
                <Link to='/review'> <p className='text-light'>Review</p></Link>
                  <Link to='/addAdmin'> <p className='text-light'>Add Admin</p></Link>
            </div>
    );
};

export default Sitebar;
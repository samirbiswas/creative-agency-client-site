import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Sitebar = () => {
   
    const [loggesinUser, setLoggedInUser] = useContext(UserContext);

    const [admin, setAdmin] = useState([])

    useEffect(() => {
        fetch('https://fast-temple-74960.herokuapp.com/admin?email='+loggesinUser.email)
            .then(res => res.json())
            .then(result => setAdmin(result))
    }, [])


    return (
            <div className='container'>
                
               <ul style={{listStyleType: 'none'}}>
               { admin.length ?
               
               <div>
                    <li>
                        <Link to='/serviceList'> <p className='text-light'>Service List</p></Link>
                    </li>

                        <li>
                            <Link to='/addService'> <p className='text-light'>Add Service</p></Link>
                        </li>

                            <li>
                                <Link to='/addAdmin'> <p className='text-light'>Add Admin</p></Link>
                            </li>
                    </div>        
                         :
                    <div>
                        <li>
                            <Link to='/order'> <p className='text-light'>Order List</p></Link>
                        </li>
                            <li>
                                <Link to='/review'> <p className='text-light'>Review</p></Link>
                            </li>
                            </div>
                    }
                        </ul>
            </div>
    );
};

export default Sitebar;
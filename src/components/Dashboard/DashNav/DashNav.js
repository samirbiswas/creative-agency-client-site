import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';
const DashNav = () => {
    const [loggesinUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className='container d-flex'>
            <img className='logo-settings' src={logo} alt=""/>
            <p className='ml-auto p-2'>{loggesinUser.name}</p>
        </div>
    );
};

export default DashNav;
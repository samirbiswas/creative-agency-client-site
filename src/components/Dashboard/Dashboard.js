import React from 'react';
import Customar from './Customar/Customar';
import DashNav from './DashNav/DashNav';
import New from './New/New';
import Sitebar from './Sitebar/Sitebar';

const Dashboard = () => {
    return (
        <div className='container'>
           <DashNav></DashNav>

            <div className='row'>
                <div className="col-md-4 bg-secondary">
                     <Sitebar></Sitebar>
                </div>
         
                <div className="col-md-8">

                <Customar></Customar>
                <New path='/order'></New>
                </div>
                
            </div>
          
        </div>
    );
};

export default Dashboard;
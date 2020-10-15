import React from 'react';
import AddOrder from './AddOrder/AddOrder';
import AddOrderList from './AddOrderList/AddOrderList';
import DashNav from './DashNav/DashNav';
import Sitebar from './Sitebar/Sitebar';

const Dashboard = () => {
    return (
        <div className='container'>
           <DashNav></DashNav>

            <div className='row'>
                <div className="col-md-4 bg-secondary ">
                     <Sitebar></Sitebar>
                </div>

                    <div className="col-md-8">
                        <AddOrder></AddOrder>
                    </div>
                </div>
          </div>
        
    );
};

export default Dashboard;
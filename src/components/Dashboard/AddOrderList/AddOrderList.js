import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import DashNav from '../DashNav/DashNav';
import OrderDetails from '../OrderDetails/OrderDetails';
import Sitebar from '../Sitebar/Sitebar';

const AddOrderList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [order, setOrder] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/order?email=' + loggedInUser.email)
        .then(res=>res.json())
        .then(result=>{
            setOrder(result)
        })

    },[])
    return (
        <section className='container'>
            <DashNav></DashNav>
            <div className="row">
                <div  style={{backgroundColor:'#DDDDDD',height:'400px'}} className="col-md-4">
                <Sitebar></Sitebar>
                </div>
            
            <div className="col-md-8">
                <div className="row m-1">
                               
                               {
                                   order.map(or=> <OrderDetails key ={or._id} order={or}></OrderDetails> )
                               }
                           </div>
                    </div>
            
                        
                     </div>
    </section>
    );
};

export default AddOrderList;
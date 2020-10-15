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
        <section>
        <div className="row">
            <div className="col-md-2 col-sm-6 col-12">
             <DashNav></DashNav>
             <Sitebar></Sitebar>
            </div>
            <div className="col-md-6 col-sm-12 col-12 d-flex justify-content-center">
                
                <section >
                    <div className="container">
                        <h5 className="text-center text-primary mb-5">Order</h5>
                        
                             <div className="row p-3">
                               
                                {
                                    order.map(or=> <OrderDetails key ={or._id} order={or}></OrderDetails> )
                                }
                            </div>
                        
                    </div>
                </section>


            </div>
        </div>
    </section>
    );
};

export default AddOrderList;
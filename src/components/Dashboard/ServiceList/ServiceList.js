import React, { useEffect, useState } from 'react';
import DashNav from '../DashNav/DashNav';
import Sitebar from '../Sitebar/Sitebar';

const ServiceList = () => {
    const [allOrder, setAllOrderList] = useState([])

    useEffect(() => {
        fetch('https://fast-temple-74960.herokuapp.com/Allorder')
            .then(res => res.json())
            .then(result => setAllOrderList(result))
    }, [])

    return (
        <section className='container'>
        
        <DashNav></DashNav>
            
             <div className="row">

             <div style={{backgroundColor:'#DDDDDD',height:'auto',}} className="col-md-3 ml-2 mt-4 ">
                 <Sitebar></Sitebar>
                 </div>
        
       
            <div className="col-md-8 mt-4">

            <table class="table table-striped row">

                <div className="col-md-12">
                <thead>
                   
                   <tr>
                       <th scope="col">Name</th>
                       <th scope="col">Email ID</th>
                       <th scope="col">Sevice</th>
                       <th scope="col">Project Detail</th>
                       <th scope="col">Status</th>
                   </tr>
                    </thead>
               <tbody>
               { allOrder.map( or=>
                   <tr>
                       <th >{or.name}</th>
                       <td>{or.email}</td>
                       <td>{or.title}</td>
                        <td >{or.description}</td>
                       <td>Pending</td>
                   </tr>
                  
                   )}
               </tbody>
                </div>
                </table>
          
                
            
            </div>
            </div>
       
      </section>
    );
};

export default ServiceList;
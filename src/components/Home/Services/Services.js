import React, { useEffect, useState } from 'react';

import Service from '../Service/Service';
import Data from '../../../FakaData'
const Services = () => {
    const [servicess,setServicess] = useState(Data);
    // const [addService,setAddService] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:5000/service')
    //         .then(res => res.json())
    //         .then(data => setAddService(data))
    // }, [])

    return (
        <section id='servicss' style={{marginTop:'80px'}}>
        <div className="container">
            <div className="section-header text-center">
                 <h3 style={{color:'#2D2D2D'}}>Provide awesome <span style={{color:'#7AB259'}}>services</span></h3>
                
            </div>
            <div style={{marginTop:'80px'}} className= 'card-deck' >
          
                 {
                    servicess.map(service=> <Service key={service.id} service={service}></Service>)
                 }

            </div>

        </div>
    </section>
    );
};

export default Services;
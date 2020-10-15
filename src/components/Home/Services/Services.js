import React, { useState } from 'react';
// import design from '../../../images/icons/service1.png';
// import graphics from '../../../images/icons/service2.png';
// import development from '../../../images/icons/service3.png';
import Service from '../Service/Service';
import Data from '../../../FakaData'
const Services = () => {
    const [servicess,setServicess] = useState(Data);
  
    return (
        <section style={{marginTop:'80px'}}>
        <div className="container">
            <div className="section-header text-center">
                 <h3 className="text-primary ">Provide awesome <span>services</span></h3>
                
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
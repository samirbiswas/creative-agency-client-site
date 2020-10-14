import React from 'react';
import design from '../../../images/icons/service1.png';
import graphics from '../../../images/icons/service2.png';
import development from '../../../images/icons/service3.png';
import Service from '../Service/Service';
const Services = () => {
    const servicess=[{
        id:1,
        title:'Web & Mobile design',
        picture:design,
        description:'We craft hello hello We craft hello hello  stunning and amazing web UI, using a well drrafted UX to fit your product.'
    },
    {   id:2,
        title:'Graphic design',
        picture:graphics,
        description:'Amazing flyers, social media posts and brand representations that would make your brand stand out..'
    },
    {   id:3,
        title:'Web development',
        picture:development,
        description:' With well written codes, we build amazing apps for all platforms, mobile and web apps in general.'
    },

]
    return (
        <section style={{marginTop:'100px'}}>
        <div className="container">
            <div className="section-header text-center">
                 <h2 className="text-primary ">Provide awesome <span>services</span></h2>
                
            </div>
            <div style={{marginTop:'100px'}} className= 'card-deck' >
                 {
                    servicess.map(service=> <Service key={service.id} service={service}></Service>)
                 }
            </div>
        </div>
    </section>
    );
};

export default Services;
import React from 'react';
import customer1 from '../../../images/customer-1.png';
import customer2 from '../../../images/customer-2.png';
import customer3 from '../../../images/customer-3.png'
import Client from '../Client/Client';
const Clients = () => {
    const clients=[{
        name:'Nasa Patrik',
        picture:customer1,
        designation:'CEO, Manpol',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat'
    },
    {
        name:'Mirium Barron',
        picture:customer2,
        designation:'CTO, Manpol',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat'
    },
    {
        name:'Brai Malone',
        picture:customer3,
        designation:'CEO, Manpol',
        description:'Lorem ipsum dolor sit amet, consectetur  elit. Purus commodo ipsum duis laoreet maecenas. Feugiat'
    },

]
            return (
                <section style={{marginTop:'5%'}}>
                <div className="container">
                    <div className="section-header text-center">
                         <h2 className="text-primary ">Clients Feedback</h2>
                        
                    </div>
                    <div style={{marginTop:'100px'}} className= 'card-deck' >
                         {
                            clients.map(clint=> <Client key={clint.name} clint={clint}></Client>)
                         }
                    </div>
                </div>
            </section>
            );
        };

export default Clients;
import React, { useEffect, useState } from 'react';
import Client from '../Client/Client';


const Clients = () => {
const [reviewData, setReviewData] = useState([]);

useEffect(() => {
    fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data => setReviewData(data))
}, [])


            return (
                <section style={{marginTop:'5%'}}>
                <div className="container">
                    <div className="section-header text-center">
                         <h2 className="text-primary ">Clients Feedback</h2>
                        
                    </div>
                    <div style={{marginTop:'100px'}}>
                         <div className="row">
                         {
                            reviewData.map(client=> <Client key={client._id} client={client}></Client>)
                         }
                         </div>
                    </div>
                </div>
            </section>
            );
        };

export default Clients;
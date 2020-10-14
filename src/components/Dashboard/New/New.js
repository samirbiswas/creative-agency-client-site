import React, { useEffect, useState } from 'react';

const New = () => {
    const [volunteerInfo, setVolunteerInfo ] =useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/showVolunteer')
        .then(res=>res.json())
        .then(result=>{
            setVolunteerInfo(result)
        })

    },[])
    return (
        <div>
            {
                volunteerInfo.map(vt=>  <li>{vt.email}</li> )
            }
        </div>
    );
};

export default New;
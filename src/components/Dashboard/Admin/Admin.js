import React from 'react';
import { useForm } from 'react-hook-form';
import DashNav from '../DashNav/DashNav';
import Sitebar from '../Sitebar/Sitebar';

const Admin = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        fetch('http://localhost:5000/adminAdd',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
                        'Accept': 'application/json' },
            body: JSON.stringify(data)
            
        })
        .then(res=>res.json())
        .then(result=>{
         if(result){
             alert("Email send Successfully");
         }
          
        })
                
        }
    return (
        <section className='container'>
            <DashNav></DashNav>
            <div className="row">

            <div style={{backgroundColor:'#DDDDDD',height:'200px',}} className="col-md-4 ">
                 <Sitebar></Sitebar>
                 </div>
                 <div className="col-md-8">

                 <form onSubmit={handleSubmit(onSubmit)}>
                    <input id="email" name="email" placeholder='Enter mail' className="form-control" ref={register({ required: true })}/>
                    <br/>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>



                 </div>

            </div>

        </section>
    );
};

export default Admin;
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import {useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import Data from '../../../FakaData';
const AddOrder = () => {
    
    
    const [loggesinUser, setLoggedInUser] = useContext(UserContext);
    const {id} = useParams();
    const value = Data.find(dt=> dt.id && dt.id.toString() === id.toString());
    const { register, handleSubmit } = useForm();
   
  const onSubmit = (data) => {
    const details = {picture: value.picture, ...data};
    fetch('http://localhost:5000/addData',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
                    'Accept': 'application/json' },
        body: JSON.stringify(details)
        
    })
    .then(res=>res.json())
    .then(result=>{
     if(result){
         alert("data send Successfully");
     }
      
    })
  };

    return (
        <div className='container'>
            
            <div >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input id="inputName" name="name" placeholder='Enter Your Name' className="form-control" ref={register({ required: true })}/>
                    <br/>
                    <input value={loggesinUser.email} id="email" name="email" placeholder="Your Email" className="form-control" ref={register({ required: true })}/>
                    <br/>
                    <input value={value.title} id="title" name="title" placeholder="Your Subject" className="form-control" ref={register({ required: true })}/>
                    <br/>
                    <textarea value={value.description} id="des" name="description" placeholder="Your Project Details" className="form-control" ref={register({ required: true })}/>
                    <br/>
                    <input id="price" name="price" placeholder="price" className="form-control" ref={register({ required: true })}/>
                    <br/>
                    <level>Upload File</level>
                    <br/>
                    <input id="file" type='file' name="file" placeholder="upload file" className="form-control-file"/>
                    <br/>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

            </div>
        
    );
};

export default AddOrder;
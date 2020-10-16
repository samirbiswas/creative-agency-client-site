import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import DashNav from '../DashNav/DashNav';
import Sitebar from '../Sitebar/Sitebar';

const Review = () => {
    const [loggesinUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data)=>{
        const reviewData = {...data, ...loggesinUser};
            
        fetch('https://fast-temple-74960.herokuapp.com/addreview',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
                    'Accept': 'application/json' },
        body: JSON.stringify(reviewData)
        
    })
    .then(res=>res.json())
    .then(result=>{
     if(result){
         alert("review data send Successfully");
     }
      
    })
            
    }
    return (
      <section className='container'>
        
        <DashNav></DashNav>
            
             <div className="row">

             <div style={{backgroundColor:'#DDDDDD',height:'200px',}} className="col-md-4 ml-2 mt-4 ">
                 <Sitebar></Sitebar>
                 </div>
        
       
            <div className="col-md-7 mt-4">
          
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input id="inputName" name="riviewName" placeholder='Your Name' className="form-control" ref={register({ required: true })}/>
                    <br/>
                    <input id="title" name="riviewTitle" placeholder="Company's Name Designation" className="form-control" ref={register({ required: true })}/>
                    <br/>
                    <textarea id="des" name="riviewDes" placeholder="Description" className="form-control" ref={register({ required: true })}/>
                    <br/>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            
            </div>
            </div>
       
      </section>
    );
};

export default Review;
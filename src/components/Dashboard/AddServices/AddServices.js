import React, { useState } from 'react';
import DashNav from '../DashNav/DashNav';
import Sitebar from '../Sitebar/Sitebar';


const AddServices = () => {
   
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFile = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
    formData.append('file', file);
    formData.append('title', info.title);
    formData.append('description', info.description)


  fetch('https://fast-temple-74960.herokuapp.com/addService', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.error(error)
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
          
            <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                
                                <input onBlur={handleBlur} type="text" className="form-control" name="title" placeholder="Enter Title" />
                            </div>
                        
                            <div className="form-group">
                               
                                <input onBlur={handleBlur} type="text" className="form-control" name="description" placeholder="Description" />
                            </div>
                            <div className="form-group">
                                
                                <input onChange={handleFile} type="file" className="form-control" name="image"placeholder="Upload Image" />
                            </div>
                            <button type="submit" className="btn btn-dark">Submit</button>
                 </form>
            
            </div>
            </div>
       
      </section>
    )
};

export default AddServices;
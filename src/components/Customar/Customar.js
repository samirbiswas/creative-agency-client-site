import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logos/logo.png';
import './Customer.css';

const Customar = () => {
    const [loggesinUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    const {title} = useParams();
    
    
  const onSubmit = (data) => {
    console.log(data);
  };
    return (
        <div className='container'>
            <div className='d-flex '>
                <img className='logo-settings ' src={logo} alt=""/>
                <p className='ml-auto p-2'>{loggesinUser.name}</p>
            </div>

            <div className='row'>
                <div className="col-md-3 site-bar">
                    <Link className="nav-link" >Order</Link>
                    <Link className="nav-link" >Service List</Link>
                    <Link className="nav-link" >Review</Link>
                </div>

                    <div className="col-md-9">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input value={loggesinUser.name} id="inputName" name="name" className="form-control" ref={register({ required: true })}/>
                    <br/>
                    <input value={loggesinUser.email} id="email" name="email" placeholder="Your Email" className="form-control" ref={register({ required: true })}/>
                    <br/>
                    <input value={title} id="subject" name="subject" placeholder="Your Subject" className="form-control" ref={register({ required: true })}/>
                    <br/>
                    <textarea id="project" name="project" placeholder="Your Project Details" className="form-control" ref={register({ required: true })}/>
                    <br/>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

                    </div>


            </div>

            
        </div>
    );
};

export default Customar;
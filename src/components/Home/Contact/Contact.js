import React from 'react';
import Footer from '../Footer/Footer';
import './Contact.css'
const Contact = () => {
    return (
        <section className='cotact-detail '>
            <div className="container mt-5">
            <div className="row mt-5">
                <div className="col-md-4 mt-5">
                    <h3>Let us handle your project, professionally.</h3>
                    <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                </div>
                <div className="col-md-7 offset-md-1 mt-5">
                <form>
                <div class="form-group">
                    
                    <input type="text" class="form-control" id="exampleInputEmail" placeholder="Your email address"/>
                    
                </div>
                <div class="form-group">
                
                    <input type="text" class="form-control" id="exampleInputName" placeholder="Your name"/>
                </div>
                <div class="form-group">
                
                <textarea style={{height:'150px'}} type="text" class="form-control" id="exampleInputName" placeholder="Your message"/>
            </div>
                
                <button type="submit" class="btn btn-primary">Send</button>
                </form>
                </div>
            </div>
            </div>
            <Footer></Footer>
        </section>
    );
};

export default Contact;
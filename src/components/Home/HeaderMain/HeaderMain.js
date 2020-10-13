import React from 'react';
import frame from '../../../images/logos/Frame.png'
const HeaderMain = () => {
    return (
        <div className='container'>
            <div className="row d-flex align-items-center">
                <div className="col-md-4 pl-5">
                        <h1>Let’s Grow Your Brand To The Next Level</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                             Purus commodo ipsum duis laoreet maecenas. Feugiat</p>
                        <button type="button" className="btn btn-primary">Primary</button>
                </div>
                <div className="col-md-6 offset-md-1 mt-5">
                    <img className="img-fluid" style={{height:'auto'}} src={frame} alt=""/>
                    
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;
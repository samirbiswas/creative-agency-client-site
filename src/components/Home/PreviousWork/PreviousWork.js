import React from 'react';
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from '../../../images/carousel-3.png'
const PreviousWork = () => {
    return (
        <div classNameName='container'>
            <div className='mt-5 mb-5'>
                <h3 className='text-center'>This Is Our Previous Work History</h3>
            </div>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img style={{height:'400px'}} className="d-block w-100  img-fluid" src={carousel1} alt="First-slide" />
    </div>
    <div className="carousel-item">
      <img style={{height:'400px'}} className="d-block w-100  img-fluid" src={carousel2} alt="Second-slide" />
    </div>
    <div className="carousel-item">
      <img style={{height:'400px'}} className="d-block w-100 img-fluid" src={carousel3} alt="Third-slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="false"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="false"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
        </div>
    );
};

export default PreviousWork;
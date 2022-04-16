import React from 'react';

const Expert = ({expert}) => {
    const {name,img}=expert;
    return (
        
        <div className=" g-5 col-sm-12 col-md-6 col-lg-4 mt-0">
            
            <div className='card' style={{width: "18rem"}}>
        <img src={img} className="card-img-top" alt="..."/>
          <h5 className="card-title text-center mt-2">{name}</h5>
          <p className="card-text p-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">More Details</a>
        </div>
        </div>
    
            
       
    );
};

export default Expert;
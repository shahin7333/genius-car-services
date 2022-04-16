import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {id,name,img,description,price}=service;
    const navigate=useNavigate();
    const naviGateToServiceDetail= id =>{
navigate(`/service/${id}`)
    }
    return (
        <div  className='service'>
            <img src={img} alt=""/>
            <h2 className='mt-3'>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => naviGateToServiceDetail(id)} className='border-0 p-2 px-5 bg-primary text-white rounded-pill' type="submit">Book: {name}</button>
        </div>
    );
};

export default Service;
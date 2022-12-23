import React from 'react';
import ServicesData from './ServicesData';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
  const {id}=useParams()
  const {img,service,describe}=ServicesData[id];
  return (
    <div className='App'>
      <h1>{service}</h1>
      <div>
        <p>{describe}</p>
        <img src={img} alt="" />
      </div>
    </div>
  )
}

export default ServiceDetail;
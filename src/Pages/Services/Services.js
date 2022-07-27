import React, { useEffect } from 'react';
import { useState } from "react";
import Service from '../Service/Service';
import './Services.css'
import line2 from "../../assets/Line 2.png";
import line3 from "../../assets/Line 3.png";
import line4 from "../../assets/Line 4.png";
import plantlogo from "../../assets/fa_space-shuttle.png";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
      fetch('services.json')
      .then(res=> res.json())
      .then(data => setServices(data))
    }, [])

    return (
        <div className='container services mb-5 pb-5'>
          <div className="py-5 services-page-logo">
            <div className="d-flex align-items-center ">
              <div>
                <img src={line2} alt="" className="d-block mb-1 line" />
                <img src={line3} alt="" className="d-block mb-1 line" />
                <img src={line4} alt="" className="d-block line" />
              </div>
              <div>
                <img src={plantlogo} alt="" className="ms-2 plantlogo" />
              </div>
            </div>
          </div>
          <div className='text-center mt-4 mb-5 services-title'>
            <h3 className='services-title1'>Services</h3>
            <h2 className='services-title2'>We provides services to our clients</h2>
          </div>
          <div className='row row-cols-1 row-cols-md-3 g-5 mb-5'>
            {
              services.map(service => <Service key={service.id} service={service}></Service>)
            }
          </div>
        </div>
    );
};

export default Services;
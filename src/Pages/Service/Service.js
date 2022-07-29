import React from "react";
import "./Service.css";

const Service = ({ service }) => {
  const { img, description, name } = service;
  return (
    <div class="single-service">
      <div class="col ">
        <div class="card h-100">
          <img src={img} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title text-center service-title mt-2 mb-2">
              {name}
            </h5>
            <p class="card-text px-2">{description}</p>
            <div className="pb-5 service text-center">
              <button>More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

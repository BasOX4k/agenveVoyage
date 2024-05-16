import Form from "../form/Form";
import "./voyageCardDetail.css";

// import React from 'react';
export default function VoyageCardDetail({ nom, description, image, dateDepart }) {
  // const {nom, description} = props
  return (
    <div className="voyage-card-detail d-flex  ">
      <div>
      <div
          className="voyage-card-image-detail"
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
        <p className="voyage-card-nom">{nom}</p>
        <p>{dateDepart}</p>
        <p className="voyage-card-description-detail">{description}</p>

        
      </div>
      <div><Form
      className="m-3"
      /></div>
    </div>
  );
}

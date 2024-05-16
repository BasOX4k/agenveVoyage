"use client"
import React from "react";
import "./voyageCardTeaser.css"

export default function VoyageCardTeaser({nom, description, image}) {
    
    return(
        <div className="voyage-card-teaser">
        
            
            <img className="voyage-card-image" src={image} alt={nom} />
            <p className="voyage-card-nom">{nom}</p>
            <a className="voyage-card-description">{description}</a>
            <p className="button">Détail</p>
        </div>

    
    );

}
"use client"
import React from "react";
import "./voyageCardTeaser.css"

export default function VoyageCardTeaser({nom, description, image, categorie}) {
    // const {nom, description, image} = props;
    return(
        <div className="voyage-card-teaser">
            
            <img src={image} alt={nom} width={250} height={250} border-radius={10}/>
            <p>{nom}</p>
            <p>{description}</p>
            <p>{categorie}</p>
            {/* <p>{props.localisation}</p> */}
        </div>
    );

}
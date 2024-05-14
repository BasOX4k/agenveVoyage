"use client"
import React from "react";
import "./voyageCardTeaser.css"

export default function VoyageCardTeaser(props) {
    const {nom, description} = props;
    return(
        <div className="voyage-card-teaser">
            
            {/* <img src={props.image} alt={props.alt} /> */}
            <h2>{nom}</h2>
            <h3>{description}</h3>
            {/* <p>{props.localisation}</p> */}
        </div>

    );}
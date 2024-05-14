"use client"
import React from "react";
import "./destinationCardTeaser.css"

export default function DestinationCardTeaser(props) {
    const {nom} = props;
    return(
        <div className="destination-card-teaser">
            {/* <img src={props.image} alt={props.alt} /> */}
            <h3>{nom}</h3>
            {/* <p>{props.localisation}</p> */}
        </div>

    );}
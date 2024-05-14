"use client"
import Link from "next/link";
import "./destinationList.css";
import DestinationCardTeaser from "../destinationCardTeaser/DestinationCardTeaser";


export default function DestinationList(props) {
    const {destinations} = props
    return (
        <div>
            {props.destinations && (
                <ul className="destination-list">
                    {props.destinations.map((destination, index) => ( 
                    <Link key={index} href={"/destination/"+ destination.id}>
                        <li>
                            <DestinationCardTeaser 
                            nom={destination.nom} 
                            />    
                        </li>
                        </Link>
               
                    ))}</ul>
                    )}
        </div>
    );
}
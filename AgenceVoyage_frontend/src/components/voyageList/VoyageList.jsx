"use client"
import Link from "next/link";
import "./voyageList.css";
import VoyageCardTeaser from "../voyageCardTeaser/VoyageCardTeaser";


export default function VoyageList(props) {
    const {voyages} = props
    return (
        <div>
            {props.voyages && (
                <ul className="voyage-list">
                    {props.voyages.map((voyage, index) => ( 
                    <Link key={index} href={"/voyage/"+ voyage.id}>
                        <li>
                            <VoyageCardTeaser 
                            nom={voyage.nom}
                            description={voyage.description} 
                            image={voyage.image}
                            categorie={voyage.categorie}
                            />    
                        </li>
                        </Link>
               
                    ))}</ul>
                    )}
        </div>
    );
}
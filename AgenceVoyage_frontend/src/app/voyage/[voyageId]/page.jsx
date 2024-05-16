"use client"

import "./page.css";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

import VoyageCardDetail from "@/components/voyageCardDetail/VoyageCardDetail";
import From from "@/components/form/Form";
import Form from "@/components/form/Form";


export default function VoyageDetail (props) {
    

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [voyage, setVoyage]= useState(null);
    console.log(props.params.voyageId);
    useEffect(() => {
        const   fetchData = async () => {
        try {
                
           const response = await fetch("http://127.0.0.1:8000/api/voyage/" + props.params.voyageId);
           
           const data = await response.json();
                setLoading(false);
                setVoyage(data);
                ;

            } catch (error) {
                setError(true);

                setLoading(false);
            } };
            

            fetchData();
        }, [props.params.voyageId]);

    return (
        <div>
            <Navbar />

            {loading &&!error && <div>Chargement ...</div>}
            {!loading && !error && voyage && (
                <VoyageCardDetail 
                nom={voyage.nom}
                description={voyage.description}
                image={voyage.image}
                dateDepart={voyage.dateDepart}
                />
            )}
            {!loading && error && <div>Une erreur est survenue</div>}

            <div>
            </div>
            </div>
            
    );
}


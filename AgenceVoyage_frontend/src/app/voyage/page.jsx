"use client"
import './page.css';
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import VoyageList from "@/components/voyageList/VoyageList";
export default function Voyage() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [voyages, setVoyages] = useState([]);
    
    
    useEffect(() => {
        const   fetchData = async () => {
        try {
                
           const response = await fetch("http://127.0.0.1:8000/api/voyages");
           const data = await response.json();
                setLoading(false);
                setVoyages(data);
                ;

            } catch (error) {
                setError(true);

                setLoading(false);
            } };

            fetchData();
        }, []);

    return (
        <>
        <Navbar />
        <p>Page Voyage</p>

        {/* Afficher la liste des destinations */}
        {loading && !error && <div>Loading...</div>}
        {!loading && !error && voyages &&  <VoyageList voyages={voyages} />}
        {!loading && error && <div>Une erreur est survenue</div>}
        </>
    );
}
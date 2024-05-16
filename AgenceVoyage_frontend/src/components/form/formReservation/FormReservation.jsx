"use client"
import './formReservation.css'
export default function FormReservation(){
return(
<form className="form">
    <p className="title">Contact </p>
    <p className="message">Veuillez remplir ce formulaire afin de prendre contact avec l'agence. ;-) </p>
        <div className="flex">
        <label>
            <input className="input" type="text" placeholder="" required=""/>
            <span>Nom
            </span>
        </label>

        <label>
            <input className="input" type="text" placeholder="" required=""/>
            <span>Prénom</span>
        </label>
    </div>  
            
    <label>
        <input className="input" type="email" placeholder="" required=""/>
        <span>Email</span>
    </label> 

    <label>
        <input className="input" type="integer" placeholder="" required=""/>
        <span>Telephone</span>
    </label> 
    
    <label>
        <input className="input-message" type="text" placeholder="" required=""/>
        <span>Message</span>
    </label>
    <button className="submit">Submit</button>
</form>
)}
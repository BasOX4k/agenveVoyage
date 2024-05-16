"use client"
import './form.css'
export default function Form(){
return(
<form className="form">
    <p className="title">Réservation </p>
    <p className="message">Veuillez remplir ce formulaire </p>
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
    <button className="submit">Submit</button>
</form>
)}
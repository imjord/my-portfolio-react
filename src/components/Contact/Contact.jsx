import react, { useState } from "react";
import './Contact.scss'


export default function Contact() {

    const [message,setMessage] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault();
        setMessage(true)
    }

    return (
        <div className="Contact" id="Contact">
            <div className="left">
                <img src="assets/handshake.PNG" alt="" />
            </div>
            <div className="right"><h2>Contact</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Email"/>
                <textarea placeholder="Message"></textarea>
                <button type="submit">Send</button>
                {message && <span> Thank you for trying but this is still a W.I.P :) </span>}
            </form></div>
            
        </div>
    )
}
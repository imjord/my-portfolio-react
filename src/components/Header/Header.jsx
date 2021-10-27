import react from "react";
import "./Header.scss"
import {Person, Mail} from "@material-ui/icons"


export default function Header( { menuOpen, setMenuOpen } ) {
    return (
        <div className={"header " + (menuOpen && "active")}>
            <div className="Wrapper">
                <div className="Left">
                    <a href="#Intro" className="Logo">Imjord Portfolio </a>
                    <div className="itemContainer">
                    <Person className="icon" />
                    <span> https://github.com/imjord </span>
                    </div>
                    <div className="itemContainer">
                    <Mail className="icon" />
                    <span> dean.jay.goat@gmail.com </span>
                    </div>
                </div>
                <div className="Right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span> 
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>

            </div>

        </div>
    )
}
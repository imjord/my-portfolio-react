import react, { useEffect, useRef } from "react";
import './Intro.scss'
import {init} from "ityped";


  // strings: ["Console.log('hello world');", "My name is Jordan Harper", "Im a Full Stack Web Developer!"]

export default function Intro() {
    const myElement = useRef();

    useEffect(() => {
        init(myElement.current, {
            showCursor: false,
            backDelay: 1500,
            backSpeed: 60,
          
            strings: ["Developer", "Engineer", "Enthusiast"]
        })
    }, [])
    return (
        <div className="Intro" id="Intro">
            <div className="left">
            <div className="imageContainer">
                <img src="assets/me.png" alt=""/>
            </div>
            </div>
            <div className="right">
                <div className="wrapper" >
                    <h2> Hello my name is </h2>
                    <h1> Jordan Harper </h1>
                    <h3> Im a Full Stack Web <span ref={myElement}></span> </h3>
                </div>
                <a href="#Portfolio">
                    <img src="assets/wiz.png" alt="" />
                </a>
            </div>
        </div>
    )
}
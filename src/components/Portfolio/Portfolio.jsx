import react, { useState, useEffect} from "react";
import './Portfolio.scss'
import PortfolioList from "../PortfolioList/PortfolioList";
import {
    groupProjects,
    soloProjects,
    featuredProjects
 } from "../../myProjectData"


export default function Portfolio() {

    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);

    const list = [
        {
        id:"featured",
        title:"Featured Projects",
        },
        {
            id:"group",
            title:"Group Projects"
        },
        {
            id:"solo",
            title:"Solo Projects"
        }
    ];

    useEffect(()=>{
        switch(selected){
            case "featured":
                setData(featuredProjects)
                break;
            case "group":
                setData(groupProjects)
                break;
            case "solo":
                setData(soloProjects)
                break;
                default:
                    setData(featuredProjects)
        }
    }, [selected])

    return (
        <div className="Portfolio" id="Portfolio">
            <h1> Portfolio </h1>
            <ul>
                {list.map((item)=> (
                    <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
                ))}
            
            </ul>
            <div className="container">
                {data.map((d) => (
                    <div className="item">
                    <img src={d.img} alt="" />
                    <h3>{d.title}</h3>

                </div>
                ))}
            
               
            </div>

        </div>
    )
}
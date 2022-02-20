import "./portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList";
import {useState} from "react";
import {useEffect} from "react";
import {
    featuredPortfolio,
    gamedevPortfolio,
    mathematicsPortfolio,
    systemsPortfolio,
    webdevPortfolio
} from "../../data";

export default function Portfolio()
{
    const [selected, setSelected] = useState("math");
    const [data, setData] = useState([]);

    const list = [
        {
            id: "gamedev",
            title: "Game Dev",
        },
        {
            id: "math",
            title: "Mathematics",
        },
        {
            id: "systems",
            title: "Systems",
        },
        {
            id: "web",
            title: "Coursework",
        },
    ];

    useEffect(()=>{
        switch(selected){
            case "math":
                setData(mathematicsPortfolio)
                break;
            case "systems":
                setData(systemsPortfolio)
                break;
            case "gamedev":
                setData(gamedevPortfolio)
                break;
            case "web":
                setData(webdevPortfolio)
                break;
        }
    },[selected])

    return(
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item=>(
                    <PortfolioList
                        title={item.title}
                        active={selected===item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                    {data.map(d=>(
                        <a href={d.link}>
                        <div className="item">
                            <img src={d.img} alt=""/>
                            <h3>{d.title}</h3>
                        </div>
                        </a>
                    ))}

            </div>
        </div>
    )
}
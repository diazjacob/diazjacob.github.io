import "./intro.scss";
import {ArrowDownward} from "@material-ui/icons";
import {init} from 'ityped';
import {useEffect, useRef} from "react";

export default function Intro() {
    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 26,
            typeSpeed: 120,
            cursorChar: "_",
            strings: ["Programming", "Calculus", "Algorithms", "Physics", "Databases", "Game Design",
                "Machine Learning","3D Modelling", "Computer Hardware", "Statistics", "Shaders", "Algebra", "AI", "Analysis"],
        });
    },[]);

    return(
        <div className="intro" id="intro">

            <div className="left">
                <div className="imgContainer">
                    <img src={process.env.PUBLIC_URL + '/assets/mandle2.png'} alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Jacob Diaz</h1>
                    <h3>And I study <span ref={textRef}></span></h3>
                    <a href="#portfolio">
                        <ArrowDownward className="icon"/>
                    </a>
                </div>

            </div>

        </div>
    )
}
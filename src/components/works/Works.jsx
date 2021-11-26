import "./works.scss"
import {MobileFriendly, ArrowForward, ArrowBack} from "@material-ui/icons"
import {useState} from "react";

export default function Works()
{
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: 1,
            icon: <MobileFriendly/>,
            title: "My Title1",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet tortor in tellus maximus vulputate. Suspendisse potenti. Donec eu metus ac velit facilisis luctus at eu orci.",
            img: "https://fractalfoundation.org/wp-content/uploads/2009/01/xoasjs-300x263.png",
        },
        {
            id: 2,
            icon: <MobileFriendly/>,
            title: "My Title2",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet tortor in tellus maximus. Suspendisse potenti. Donec eu metus ac velit facilisis luctus at eu orci.",
            img: "https://fractalfoundation.org/wp-content/uploads/2009/01/xoasjs-300x263.png",
        },
        {
            id: 3,
            icon: <MobileFriendly/>,
            title: "My Title3",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet tortor in tellus maximus vulputate. Suspendisse potenti. Donec eu metus ac velit facilisis luctus at eu orci.",
            img: "https://fractalfoundation.org/wp-content/uploads/2009/01/xoasjs-300x263.png",
        },
    ];

    const handleClick = (way) =>{
        way === "left"
            ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2)
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide+1 : 0)
        console.log("Clicked Slider arrow")
    }

    //This all handles weird edge cases where you can leave windows off screen
    //when going to mobile mode

    const handleResize = () =>{
        if(window.screen.width < 768){
            setCurrentSlide(0);
        }
    }

    window.addEventListener('resize', handleResize);
    //window.onresize = handleResize();



    return(
        <div className="works" id="works">
            <div
                className="slider"
                style={{
                    transform: `translateX(-${currentSlide * 100}vw)`
                }}
            >
                {data.map((d)=>(
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    {d.icon}
                                </div>
                                <h2>{d.title}</h2>
                                <p>
                                    {d.desc}
                                </p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt=""/>
                        </div>
                    </div>
                </div>
                ))}
            </div>
                <div className="arrow left" onClick={()=>handleClick("left")}>
                    <ArrowBack className="arr"/>
                </div>
                <div className="arrow right" onClick={()=>handleClick("right")}>
                    <ArrowForward className="arr"/>
                </div>
        </div>
    )
}
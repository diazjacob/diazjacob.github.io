import "./topbar.scss"
import {Person, Adb, Mail, Code, Functions} from "@material-ui/icons"

export default function Topbar({menuOpen, setMenuOpen})
{
    return(
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Jacob Diaz</a>
                    <div className="itemContainer">
                        <Functions className="icon"/>
                        <span> Mathematics</span>
                    </div>
                    <div className="itemContainer">
                        <Code  className="icon"/>
                        <span> Computer Science </span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
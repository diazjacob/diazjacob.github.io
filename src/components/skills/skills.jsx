import "./skills.scss"
import {ArrowForward} from "@material-ui/icons"

export default function Skills()
{
    const list = [
        {
            id: "1",
            name: "Java",
            img: process.env.PUBLIC_URL + 'https://img.icons8.com/color/240/000000/java-coffee-cup-logo--v1.png',
            effect: "",
        },
        {
            id: "2",
            name: "C",
            img: process.env.PUBLIC_URL + 'https://img.icons8.com/color/240/000000/c-programming.png',
            effect: "",
        },
        {
            id: "3",
            name: "C++",
            img: process.env.PUBLIC_URL + 'https://img.icons8.com/color/240/000000/c-plus-plus-logo.png',
            effect: "",
        },
        {
            id: "4",
            name: "C#",
            img: process.env.PUBLIC_URL + 'https://img.icons8.com/color/240/000000/c-sharp-logo.png',
            effect: "",
        },
        {
            id: "5",
            name: "R",
            img: process.env.PUBLIC_URL + 'https://img.icons8.com/external-becris-flat-becris/256/000000/external-r-data-science-becris-flat-becris.png',
            effect: "",
        },
        {
            id: "6",
            name: "Git",
            img: process.env.PUBLIC_URL + 'https://img.icons8.com/color/240/000000/git.png',
            effect: "",
        },
        {
            id: "7",
            name: "Python",
            img: process.env.PUBLIC_URL + 'https://img.icons8.com/color/240/000000/python--v1.png',
            effect: "",
        },
        {
            id: "8",
            name: "LaTeX",
            img: process.env.PUBLIC_URL + 'https://img.icons8.com/color/240/000000/latex.png',
            effect: "",
        },
        {
            id: "9",
            name: "VR",
            img: process.env.PUBLIC_URL + 'https://img.icons8.com/nolan/256/oculus.png',
            effect: "",
        },
        {
            id: "10",
            name: "HLSL",
            img: process.env.PUBLIC_URL + '/assets/hlsl.png',
            effect: "",
        },
        {
            id: "11",
            name: "HTML",
            img: process.env.PUBLIC_URL + 'https://img.icons8.com/color/240/000000/html-5--v1.png',
            effect: "",
        },
        {
            id: "12",
            name: "CSS",
            img: process.env.PUBLIC_URL + 'https://img.icons8.com/color/240/000000/css3.png',
            effect: "",
        },
        {
            id: "13",
            name: "JavaScript",
            img: process.env.PUBLIC_URL + 'https://img.icons8.com/color/240/000000/javascript--v1.png',
            effect: "",
        },
        {
            id: "14",
            name: "OpenGL",
            img: process.env.PUBLIC_URL + '/assets/opengl.png',
            effect: "",
        },
        {
            id: "15",
            name: "Unix",
            img: process.env.PUBLIC_URL + '/assets/unix.png',
            effect: "",
        },
        {
            id: "16",
            name: "Visual Studio",
            img: process.env.PUBLIC_URL + 'https://img.icons8.com/fluency/240/000000/visual-studio-2019.png',
            effect: "",
        },
        {
            id: "17",
            name: "Unity",
            img: process.env.PUBLIC_URL + 'https://img.icons8.com/ios-filled/250/000000/unity.png',
            effect: "",
        },
        {
            id: "18",
            name: "Blender",
            img: process.env.PUBLIC_URL + 'https://img.icons8.com/color/240/000000/blender-3d.png',
            effect: "",
        },
        {
            id: "19",
            name: "Premier Pro",
            img: process.env.PUBLIC_URL + 'https://img.icons8.com/color/240/000000/adobe-premiere-pro--v1.png',
            effect: "",
        },
        {
            id: "20",
            name: "Jet Brains",
            img: process.env.PUBLIC_URL + 'https://resources.jetbrains.com/storage/products/company/brand/logos/jb_beam.svg',
            effect: "",
        },
        {
            id: "20",
            name: "React",
            img: process.env.PUBLIC_URL + 'https://img.icons8.com/color/240/000000/react-native.png',
            effect: "",
        },
        {
            id: "20",
            name: "Android Studio",
            img: process.env.PUBLIC_URL + 'https://img.icons8.com/fluency/240/000000/android-studio--v2.png',
            effect: "",
        },
        {
            id: "20",
            name: "MIPS",
            img: process.env.PUBLIC_URL + '/assets/mips.png',
            effect: "",
        },
        {
            id: "20",
            name: "Julia",
            img: process.env.PUBLIC_URL + '/assets/julia.svg',
            effect: "",
        },
        {
            id: "20",
            name: "Prolog",
            img: process.env.PUBLIC_URL + '/assets/prolog.png',
            effect: "",
        },
        {
            id: "20",
            name: "Photoshop",
            img: process.env.PUBLIC_URL + 'https://img.icons8.com/color/240/000000/adobe-photoshop--v1.png',
            effect: "",
        },
    ];

    return(
        <div className="testimonials" id="testimonials">
            <h1>Skills</h1>
            <div className="container">
                {list.map((d)=>(
                <div className="card"  id={d.effect}>
                    <div className="top">
                        <div className="img">
                            <img src={d.img} className="user"/>
                        </div>
                    </div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                    </div>
                </div>
                ))}
            </div>

        </div>
    )
}
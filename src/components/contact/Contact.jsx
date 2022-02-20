import "./contact.scss"
import {QuestionAnswer} from "@material-ui/icons";
import {useState} from "react";
import axios from "axios";
import { database } from "../../firebase"
import {collection, addDoc} from "firebase/firestore";
import { sendEmail } from "../../index"



export default function Contact()
{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [messageSent, setMessageSent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            name: name,
            email: email,
            message: message,
        }

        const docRef = await addDoc(collection(database, "contacts"),
            data).then(() => {
            setMessageSent(true);
            //alert("Email sent.");
        }).catch((error) => {
            alert(error.message);
        });

        setName("");
        setEmail("");
        setMessage("");
    }

    return(
        <div className="contact" id="contact">
            <div className="left">
                <img src={process.env.PUBLIC_URL + '/assets/computer.svg'} method='POST'/>
            </div>
            <div className="right">
                <div className="formBox">
                    <h2>Contact.</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            value={name} placeholder="Name"
                            type="text"
                            onChange={(e) => {setName(e.target.value)}}
                            required/>
                        <input
                            value={email} placeholder="Email"
                            type="email"
                            onChange={(e) => {setEmail(e.target.value)}}
                            required/>
                        <textarea
                            value={message}
                            placeholder="Message"
                            type="text"
                            onChange={(e) => {setMessage(e.target.value)}}
                            required/>
                        <button type="Submit">Send</button>
                        {messageSent && <span>Thanks! I'll reply soon.</span>}
                    </form>
                </div>
            </div>
        </div>
    )
}




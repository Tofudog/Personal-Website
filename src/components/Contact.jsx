import emailjs from '@emailjs/browser';
import { useState } from "react";
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from "./../../constants.jsx";

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const Send = () => {
        var templateParams = {
            name: name,
            email: email,
            message: message
        };
        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY).then(
            (response) => {
                alert("Sent message to Leonardo de Farias 😀");
                console.log('SUCCESS!', response.status, response.text);
            },
            (error) => {
                alert("Message was unfortunately NOT sent to Leonardo de Farias 😞");
                console.log('FAILED...', error);
            },
        );
    };

  return (
    <>
        <div>
            <div>
                <label className="input validator">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                        >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                        </g>
                    </svg>
                    <input
                        type="text"
                        required
                        placeholder="Name"
                        pattern="[A-Za-z][A-Za-z0-9\- ]*"
                        minlength="2"
                        maxlength="500"
                        title="Only letters, numbers or dash"
                        onChange={handleNameChange}
                    />
                </label>
            </div>
            <br></br>
            <div>
                <label className="input validator">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                        >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                        </g>
                    </svg>
                    <input
                        type="text"
                        required
                        placeholder="Email"
                        pattern="x /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g"
                        minlength="3"
                        maxlength="30"
                        title="Only letters, numbers or dash"
                        onChange={handleEmailChange}
                    />
                </label>
            </div>
            <br></br>
            <div>
                <label className="input validator h-30">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                        >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                        </g>
                    </svg>
                    <input
                        type="text"
                        required
                        placeholder="Message"
                        pattern="[A-Za-z][A-Za-z0-9\-]*"
                        minlength="3"
                        maxlength="250"
                        title="Only letters, numbers or dash"
                        onChange={handleMessageChange}
                    />
                </label>
            </div>
            <br></br>
            <div>
                <button onClick={() => Send()}>Send Message</button>
            </div>
        <br></br><br></br>
        </div>
    </>
  );
};

export default Contact;
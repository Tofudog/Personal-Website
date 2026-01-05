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
            <div className="space-y-5 max-w-xl mx-auto">
                <div className="flex items-center gap-3 border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-primary transition">
                    <svg className="h-5 w-5 opacity-60" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19a6 6 0 10-6 0" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12a4 4 0 100-8 4 4 0 000 8z" />
                    </svg>

                    <input
                    type="text"
                    required
                    placeholder="Your name"
                    minLength={2}
                    maxLength={500}
                    className="w-full outline-none bg-transparent"
                    onChange={handleNameChange}
                    />
                </div>
                <div className="flex items-center gap-3 border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-primary transition">
                    <svg className="h-5 w-5 opacity-60" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l9 6 9-6" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 8v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8" />
                    </svg>

                    <input
                    type="email"
                    required
                    placeholder="Email address"
                    className="w-full outline-none bg-transparent"
                    onChange={handleEmailChange}
                    />
                </div>
                <div className="flex gap-3 border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-primary transition items-start">
                    <svg className="h-5 w-5 opacity-60 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h8M8 14h5" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4-.8L3 20l1.2-3A7.94 7.94 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>

                    <textarea
                    required
                    placeholder="Your message..."
                    minLength={5}
                    maxLength={500}
                    rows={4}
                    className="w-full resize-none outline-none bg-transparent"
                    onChange={handleMessageChange}
                    />
                </div>
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
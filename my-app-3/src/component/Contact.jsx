import React from "react";
import  "../styles/Contact.css";
import { useState } from "react"

function Contact(){

    const [fullName, setFullName] = useState('')
    const [subject, setSubject] = useState('')
    const [mail, setMail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const post = { fullName, subject, mail, message } 

        fetch('http://localhost:8000/Messages', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(post)
        }).then(() => {
            console.log('new post added', post);
        })
    };

    return (
    <body className="body">
        <div className="contact-form" >
            <h2>Contact Me</h2>
            <form action="#" methods="post" onSubmit={handleSubmit}>
            <label for="full name">Full Name:</label ><br />
            <input type="text" name="full name" value={fullName} placeholder="Enter your full name" onChange={(e) => setFullName(e.target.value)} /><br />

            <label for="subject ">Subject:</label><br />
            <input type="text" name="subject" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} /><br />

            <label for="email">Email:</label><br />
            <input type="email" name="email" placeholder="Enter your email address" value={mail} onChange={(e) => setMail(e.target.value)} /><br />

            <label for="message">Message:</label><br />
            <textarea id="message " name="subject" placeholder="Write your message here..." value={message} onChange={(e) => setMessage(e.target.value)}></textarea><br />

            <input type="submit" value="Send" />
        </form>
        </div>
    </body>
    
    );
}

export default Contact;

import React, { useState } from 'react'

function ContactForm() {

    const [ formState, setFormState] = useState({ name: '', email: '', message: '' })
    const { name, email, message } = formState;

    function handleChange(e) {
        setFormState({ ...formState, [e.target.name]: e.target.value })
    }
    console.log(formState)

    function handleSubmit (e) {
        e.preventDefault();
        console.log(formState);
    }
    return (
        <section>
            <h1>Contact Me</h1>
            <form id="contact-form">
                <div>
                    <label htmlFor="name"> Name:</label>
                    <input type="text" defaulValue={name} name="name" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email"defaultValue={email} name="email" onChange={handleChange}/>
               </div>
               <div>
                <label htmlFor="message">Message: </label>
                <textarea name="message" defaultValue={message} onChange={handleChange} rows="5"/>
                <button type="submit">Submit</button>
               </div>
            </form>
        </section>
    );
}


export default ContactForm;
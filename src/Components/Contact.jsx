import React from 'react';

const Contact = () => {
    return (
        <div className="p-10" id='contact'>
        <h2 className="text-4xl font-semibold">Contact Me</h2>
        <form className="mt-6">
            <input
            type="text"
            placeholder="Name"
            className="block w-full p-3 border rounded mb-4"
            />
            <input
            type="email"
            placeholder="Email"
            className="block w-full p-3 border rounded mb-4"
            />
            <textarea
            placeholder="Your Message"
            className="block w-full p-3 border rounded mb-4"
            ></textarea>
            <button className="btn">Send Message</button>
        </form>
        </div>
    );
};

export default Contact;

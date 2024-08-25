import React, { useState } from 'react';

const Contact = () => {
    const [feedback, setFeedback] = useState('');  // State to manage user feedback

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        fetch('https://formspree.io/f/xblrqvek', {
            method: 'POST',
            body: JSON.stringify({
                name: formData.get('name'),
                email: formData.get('email'),
                message: formData.get('message')
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.text())
        .then(result => {
            setFeedback('Message sent successfully!');  // Show success feedback
        })
        .catch(error => {
            setFeedback('Failed to send message. Please try again.');  // Show error feedback
        });
    };

    return (
        <div className="p-10" id='contact'>
            <h2 className="text-4xl font-semibold">Contact Me</h2>
            <form onSubmit={handleSubmit} className="mt-6">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="block w-full p-3 border rounded mb-4"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="block w-full p-3 border rounded mb-4"
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    className="block w-full p-3 border rounded mb-4"
                    required
                ></textarea>
                <button 
                    className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                    type="submit"
                >
                    Send Message
                </button>
            </form>

            {/* Feedback Message */}
            {feedback && (
                <p className={`mt-4 p-2 text-center rounded ${feedback.includes('successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {feedback}
                </p>
            )}
        </div>
    );
};

export default Contact;

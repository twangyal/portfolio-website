import React from 'react';

const Sidebar = () => {
    return (
        <div className="fixed right-0 top-0 h-full w-64 bg-gray-800 text-white flex flex-col items-center p-6">
        <h2 className="text-3xl font-bold mb-6">Navigation</h2>
        <ul className="space-y-4">
            <li>
            <a href="#home" className="hover:underline">Home</a>
            </li>
            <li>
            <a href="#about" className="hover:underline">About Me</a>
            </li>
            <li>
            <a href="#experience" className="hover:underline">Experience</a>
            </li>
            <li>
            <a href="#projects" className="hover:underline">Projects</a>
            </li>
            <li>
            <a href="#contact" className="hover:underline">Contact</a>
            </li>
        </ul>
        </div>
    );
};

export default Sidebar;

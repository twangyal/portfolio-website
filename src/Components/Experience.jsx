import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <div className="p-10" id='experience'>
        <h2 className="text-4xl font-semibold">Experience</h2>
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="mt-4 p-6 bg-white shadow-lg rounded-lg"
        >
            <h3 className="text-2xl">Cornerstone Community Consultants</h3>
            <h3 className="text-l">Lead Software Developer</h3>
            <p className="mt-2">Developed visually pleasing and responsive pages by implementing designs from Figma using frameworks like
                Tailwind and React • Expanded and improved customer outreach in local businesses by implementing custom designed websites and by 
                refining their codebase and design of previous website • Coordinated a successful project by managing and on-boarding a team of 
                software developers, resulting in 50% more contributions and significant improvements in workflow and collaboration
            </p>
        </motion.div>
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="mt-4 p-6 bg-white shadow-lg rounded-lg"
        >
            <h3 className="text-2xl">Finxerunt</h3>
            <h3 className="text-l">Web Developer</h3>
            <p className="mt-2">Improved site functionality and achieve significant cost savings for Finxerunt and its sister organization, ISL, 
                by transitioning from SquareSpace to self-hosted platforms using HTML, CSS, and JavaScript • As part of a team, refactored 
                codebase to reduce lines of codes by 70% by utilizing Vue.js, creating a more reader-friendly environment.
            </p>
        </motion.div>
        </div>
    );
};

export default Experience;

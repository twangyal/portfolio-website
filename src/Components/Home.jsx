import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-screen flex flex-col justify-center items-center"
        id = "home"
        >
        <h1 className="text-5xl font-bold">Tsering Wangyal</h1>
        <p className="text-xl mt-4">Software Developer | UCSD Student</p>
        <div className="mt-6">
            <a href="/resume.pdf" download className="btn">Download Resume</a>
        </div>
        </motion.div>
    );
};

export default Home;

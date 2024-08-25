import React from 'react';

const About = () => {
    return (
        <div className="p-10" id='about'>
        <h2 className="text-4xl font-semibold">About Me</h2>
        <p className="mt-4 text-xl">
            Hello! I'm currently a 3rd year Mathematics-Computer Science student at UCSD. 
            I'm passionate about making games and applications that are both fun and useful. I love seeing what
            technology is capable of and how it can be used to create beautiful and functional applications.
            I have experience with full-stack development and am always looking to learn new technologies. 
            
        </p>
        <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="hover:bg-gray-200 p-4 rounded">
            <h3 className="text-2xl">Languages</h3>
            <p>Experience with HTML/CSS/JS, Python, C#, Java, Swift, R, C, Go</p>
            </div>
            <div className="hover:bg-gray-200 p-4 rounded">
            <h3 className="text-2xl">Frontend</h3>
            <p>Experience with HTML/CSS/JS, React, Vue, Next.js, Tailwind</p>
            </div>
            <div className="hover:bg-gray-200 p-4 rounded">
            <h3 className="text-2xl">Backend</h3>
            <p>Experience with Python's Django, FastAPI, Flask, and SQLchemy. Have used Node.js, PostgreSQl, C#'s .NET</p>
            </div>
            <div className="hover:bg-gray-200 p-4 rounded">
            <h3 className="text-2xl">Tools</h3>
            <p>Experience with using engines like Unity and Unreal Engine. Also, experienced with AWS, Git, and design apps like Figma, Blender</p>
            </div>
        </div>
        </div>
    );
};

export default About;

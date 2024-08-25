import React from 'react';

const Projects = () => {
    return (
        <div className="p-10" id='projects'>
        <h2 className="text-4xl font-semibold">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="p-4 bg-gray-100 rounded-lg hover:shadow-lg">
                <h3 className="text-2xl">IrvineHacks Winner- Split It!</h3>
                <p>•Created an app that splits bills in a more sensible way, reducing hassle for both servers and customers.</p>
                <p>•Took part in designing UI in Figma for a more intuitive user-friendly experience.</p>
                <p>•Utilized React frontend, Django backend, and PostgreSQL and integrated with Square API.</p>
                <a href="https://ics.uci.edu/2024/02/14/13-teams-recognized-at-irvinehacks-2024/" className="text-blue-500">View Article</a>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg hover:shadow-lg">
                <h3 className="text-2xl">Sparrow</h3>
                <p>•Created a game in Unity that emulate real-life scenarios, which serves to help players learn a new language.</p>
                <p>•Create natural language behavior in NPCs by utilizing a form of multi-threaded Pyaudio, OpenAI's Whisper,
                Gemini, and Fetch.ai.</p>
                <p>•Designed and developed a city environment in which players can interact with.</p>
                <a href="https://github.com/twangyal/Sparrow" className="text-blue-500">View Repo</a>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg hover:shadow-lg">
                <h3 className="text-2xl">Paper Trader</h3>
                <p>•Utilized Twelve Data's websocket api to capture data and used FastAPI to broadcast data in order to create a
                real-time stock trading simulator.</p>
                <p>•Employed a postgres database to store user data and queried them to convey financial data to end users.</p>
                <p>•Researched terms, other brokerage applications, and Highcharts to deliver accurate and convenient information to
                users.</p>
                <a href="https://github.com/twangyal/simtrade" className="text-blue-500">View Repo</a>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg hover:shadow-lg">
                <h3 className="text-2xl">Treasure Hunt</h3>
                <p>Find gems randomly hidden across the map. Created a detailed map, smooth animations, and
                music to create an immersive experience.</p>
                <a href="https://tseringw.itch.io/stickera" className="text-blue-500">View Game</a>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg hover:shadow-lg">
                <h3 className="text-2xl">Christmas V Halloween</h3>
                <p>Defend the tree from halloween monsters. Utilized a physics engine and raycasting
                create a collision detection system for this 3rd person shooter.</p>
                <a href="https://tseringw.itch.io/christmas-v-halloween" className="text-blue-500">View Game</a>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg hover:shadow-lg">
                <h3 className="text-2xl">Stickera</h3>
                <p>A demo of a pokemon-style game where you can fight sticker monsters with your apple sticker monster.
                Employed photon framework to enable co-op gameplay and made use of coroutines for the combat system.</p>
                <a href="https://tseringw.itch.io/stickera" className="text-blue-500">View Game</a>
            </div>
        </div>
        </div>
    );
};

export default Projects;

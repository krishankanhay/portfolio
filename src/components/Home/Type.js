import React from 'react'
import Typewriter from 'typewriter-effect';

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Full-Stack Develoger",
                    "AI/ML Engineer",
                    "Cyber Security Engineer",
                    "Data Science Engineer",
                    "IoT & Robotics Engineer"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;

import React from 'react'
import { Card } from 'react-bootstrap';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Hi Everyone, I am <span className="purple">Krishan Kanhay </span>
                        from <span className="purple"> Bihar, India.</span>
                        <br />
                        As a Web Developer with a strong command of the MERN stack, I bring a proven track record of delivering results through my passion for learning and innovation. With a can-do attitude and a dedication to self-motivation, I thrive in dynamic, rapidly-changing environments. My extensive project portfolio encompasses cutting-edge technologies such as React, JavaScript, CSS, machine learning, and NLP. My ability to excel in multitasking, coupled with a commitment to delivering projects ahead of schedule, has consistently set me apart. I'm a fast learner with an unwavering enthusiasm for staying at the forefront of the industry. Let's connect and explore how my skills and expertise can contribute to your team's success."ork even under dynamic, rapid-moving situations.
                        <br />
                        <br />
                        Apart from coding, some other activities that I love to do!
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> Gymnastic
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Yoga
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> meditation
                        </li>
                    </ul>
                    <p style={{ color: "rgb(149, 89, 181)" }}>
                        "Balancing the lines of code with the lines of life, where every bug is a new opportunity to debug existence."{" "}
                    </p>
                    <footer className="blockquote-footer">Krishan_Kanhay</footer>
                </blockquote>
            </Card.Body>
        </Card>
    )
}

export default AboutCard;



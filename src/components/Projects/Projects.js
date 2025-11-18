import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import ProjectCards from './ProjectCards';
import ecom from "../../assets/Projects/ecom.png"
import reactblog from "../../assets/Projects/reactblog.png";
import foodapp from "../../assets/Projects/foodapp.png"
import dgclock from "../../assets/Projects/dgclock.png";
import redux from "../../assets/Projects/redux.png";
import weather from "../../assets/Projects/weather.png";
import Footer from '../Footer';

function Projects() {
    return (
        <section>
            <Container fluid className="project-section">
                <Container>
                    <h1 className="project-heading">
                        My Recent <strong className="purple">Works </strong>
                    </h1>
                    <p style={{ color: "white" }}>
                        Here are a few projects I've worked on recently.
                    </p>

                    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                        <Col md={4} className="project-card">
                            <ProjectCards
                                imgPath={ecom}
                                isBlog={false}
                                title="E-commerce"
                                description="An E-commerce website, specially designed for people who love to shop sitting at home with just one click. In Which User and Admin both can access the website. This project is built by using ReactJS, CSS, NodeJS and MongoDB as a database."
                                ghLink="#"
                                demoLink="#"
                            />
                        </Col>

                        <Col md={4} className="project-card">
                            <ProjectCards
                                imgPath={reactblog}
                                isBlog={false}
                                title="Personal Blog"
                                description="I've created a blogging website featuring trending topics from a variety of domains, including Bollywood, Hollywood, the latest advancements in technology, and mouthwatering food recipes. This project was developed using React, incorporating the Context API, and styled using CSS with styled-components.."
                                ghLink="#"
                                demoLink="#"
                            />
                        </Col>

                        <Col md={4} className="project-card">
                            <ProjectCards
                                imgPath={foodapp}
                                isBlog={false}
                                title="FoodRecipe App"
                                description="I've designed a website that an extensive collection of recipes, complete with step-by-step instructions for each dish. These recipes have been sourced and integrated into the platform via an external API. Users can search for specific items and even save their favourite recipes for future reference. And also User can add their own recipes"
                                ghLink="#"
                                demoLink="#"
                            />
                        </Col>

                        <Col md={4} className="project-card">
                            <ProjectCards
                                imgPath={dgclock}
                                isBlog={false}
                                title="Digital clock and Alarm"
                                description="This project is a dynamic digital clock in which the user can see the real time and also set the alarm. And according to the set time the images will change. This project was developed using Html, CSS and JavaScript"
                                ghLink="#"
                                demoLink="#"
                            />
                        </Col>


                        <Col md={4} className="project-card">
                            <ProjectCards
                                imgPath={redux}
                                isBlog={false}
                                title="Redux Shopping Card"
                                description="An website, created by using Redux which is one of the best for state  management and data flow librery. You can shop electrical products online."
                                ghLink="#"
                                demoLink="#"
                            />
                        </Col>

                        <Col md={4} className="project-card">
                            <ProjectCards
                                imgPath={weather}
                                isBlog={false}
                                title="Weather App"
                                description="I've created a straightforward application for retrieving weather information for any global location. This app utilizes a weather API to fetch the necessary data."
                                ghLink="#"
                                demoLink="#"
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Footer />
        </section>
    )
}

export default Projects;

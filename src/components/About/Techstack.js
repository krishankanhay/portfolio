import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { DiBootstrap, DiCss3, DiGit, DiHtml5, DiJavascript1, DiMongodb, DiNodejs, DiPython, DiReact } from 'react-icons/di';
import { SiCplusplus, SiExpress, SiNextdotjs, SiRedux, SiTypescript, SiVite, SiWebpack } from 'react-icons/si';

function Techstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons" >
                <DiJavascript1 />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <DiNodejs />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <DiReact />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <DiHtml5 />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <DiCss3 />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <DiMongodb />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <DiGit />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiRedux />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <DiBootstrap />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiVite />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiWebpack />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <DiPython />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiCplusplus />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiNextdotjs />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiTypescript />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiExpress />
            </Col>

        </Row>
    )
}

export default Techstack;




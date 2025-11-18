import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { DiVisualstudio } from 'react-icons/di';
import { SiNetlify, SiPostman, SiSlack, SiVercel } from 'react-icons/si';

function Toolstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

            <Col xs={4} md={2} className="tech-icons">
                <DiVisualstudio />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiPostman />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiNetlify />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiVercel />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiSlack />
            </Col>

        </Row>
    )
}

export default Toolstack;

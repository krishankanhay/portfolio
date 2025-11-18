import React, { useEffect, useState } from 'react'
import { Button, Container, Row } from 'react-bootstrap';
import { AiOutlineDownload } from 'react-icons/ai';
import Footer from '../Footer';
import { Document, Page, pdfjs } from 'react-pdf';
import pdf from "../../assets/Krishan-Kanhay.pdf";
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;


function Resume() {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);


    return (
        <section>
            <Container fluid className="resume-section">
                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <Button
                        variant="primary"
                        href={pdf}
                        target="_blank"
                        style={{ maxWidth: "250px" }}>
                        <AiOutlineDownload />
                        &nbsp; Download CV
                    </Button>
                </Row>

                <Row className="resume">
                    <Document file={pdf} className="d-flex justify-content-center">
                        <Page pageNumber={1} scale={width > 786 ? 1.5 : 0.6} />
                    </Document>
                </Row>

                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <Button
                        variant="primary"
                        href={pdf}
                        target="_blank"
                        style={{ maxWidth: "250px" }}>
                        <AiOutlineDownload />
                        &nbsp; Download CV
                    </Button>
                </Row>
            </Container>
            <Footer />
        </section>
    )
}

export default Resume;






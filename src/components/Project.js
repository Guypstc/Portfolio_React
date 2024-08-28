import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Image1 from '../assets/image/Bg_skills_img.png';

export const Project = () => {
    const projects = [
        {
        title: "Business Startup",
        description: "Desing & Development",
        imgURL: Image1,
        },
        {
        title: "Business Startup",
        description: "Desing & Development",
        imgURL: Image1,
        },
        {
        title: "Business Startup",
        description: "Desing & Development",
        imgURL: Image1,
        },
        {
        title: "Business Startup",
        description: "Desing & Development",
        imgURL: Image1,
        },
        {
        title: "Business Startup",
        description: "Desing & Development",
        imgURL: Image1,
        },
        {
        title: "Business Startup",
        description: "Desing & Development",
        imgURL: Image1,
        },
    ];

  return (
    <section className='project' id='project'>
        <Container>
            <Row>
                <Col>
                    <h2>Project</h2>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

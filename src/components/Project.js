import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Image1 from '../assets/image/Img-pj1.png';
import colorSharp from '../assets/image/Bg_skills_img.png';

import { ProjectCard } from './ProjectCard';

export const Project = () => {
    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgURL: Image1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgURL: Image1,
        }
    ];

    return (
        <section className='project' id='projects'>
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit non distinctio quae fugit qui eligendi neque, ullam dolore eaque labore sit cum necessitatibus, id quo itaque odio quos? Adipisci, dolorem.</p>
                        <Row>
                            {
                                projects.map((project, index) => {
                                    return (
                                        <ProjectCard key={index} {...project} />
                                    )
                                })
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
            
        </section>
    );
};
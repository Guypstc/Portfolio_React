import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

import { Col, Container, Row } from 'react-bootstrap';
import Image1 from '../assets/image/Img_pj1.png';
import Image2 from '../assets/image/Img_pj3-1.png';
import Image3 from '../assets/image/Img-pj1.png';
import colorSharp from '../assets/image/Bg_skills_img.png';

import { ProjectCard } from './ProjectCard';

export const Project = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // ระยะเวลาแอนิเมชัน (1 วินาที)
          once: true, // ทำงานแค่ครั้งเดียวเมื่อ scroll ผ่าน
        });
      }, []);
    const projects = [
       
        {
            title: "E-commerce WebApp",
            description: "An all-in-one platform for buying and selling products. Browse categories, manage your cart",
            
            imgURL: Image2,
        },
        {
            title: "Web-Design",
            description: "Design & Development",
            imgURL: Image3,
        },
        {
            title: "Web-Portfolio",
            description: "Design & Development",
            
            imgURL: Image1,
        }
    ];

    return (
        <section className='project' id='projects'>
            <Container>
                <Row data-aos="fade-up">
                    <Col>
                        <h2>Projects</h2>
                        <Row className='row' data-aos="fade-up">
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
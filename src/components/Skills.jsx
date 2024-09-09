import { Container, Row, Col, Card } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

//Skill img
import img_css from '../assets/image/css.png';
import img_html from '../assets/image/html.png';
import img_js from '../assets/image/js.png';
import img_react from '../assets/image/react.png';
import img_boots from '../assets/image/bootstrap.png';
import img_php from '../assets/image/php.png';
import img_node from '../assets/image/node-js.png';
import img_sql from '../assets/image/sql.png';
import img_c from '../assets/image/c++.png';
import img_java from '../assets/image/java.png';
import img_tail from '../assets/image/tailwind_img.png';

export const Skills = () => {
  // ใช้ useEffect ภายในฟังก์ชัน component
  useEffect(() => {
    AOS.init({
      duration: 1000, // ระยะเวลาแอนิเมชัน (1 วินาที)
      once: true, // ทำงานแค่ครั้งเดียวเมื่อ scroll ผ่าน
    });
  }, []);

  const skills = [
    { img: img_css, title: "CSS", des: "Advance" },
    { img: img_html, title: "HTML", des: "Advance" },
    { img: img_js, title: "Javascript", des: "Advance" },
    { img: img_react, title: "React", des: "Intermediate" },
    { img: img_boots, title: "Bootstrap", des: "Advance" },
    { img: img_tail, title: "Tailwind CSS", des: "Advance" },
    { img: img_php, title: "PHP", des: "Advance" },
    { img: img_node, title: "Node.js", des: "Beginner" },
    { img: img_sql, title: "SQL", des: "Intermediate" },
    { img: img_c, title: "C++", des: "Beginner" },
    { img: img_java, title: "Java", des: "Beginner" }
  ];

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2 data-aos="fade-up">Skills</h2>
              <Row className="skills-grid">
                {skills.map((skill, index) => (
                  <Col key={index} className="mb-4"  data-aos="fade-up" > 
                    <Card className="skill-card" >
                      <Card.Img variant="top" src={skill.img} />
                      <Card.Body>
                        <Card.Title className="skill-title">{skill.title}</Card.Title>
                        <p className="skill-desc">{skill.des}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
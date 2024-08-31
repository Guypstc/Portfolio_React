import { Container, Row, Col, Card } from "react-bootstrap";

//Skill img
import img_css from '../assets/image/css.png';
import img_html from '../assets/image/html.png';
import img_js from '../assets/image/js.png';
import img_react from '../assets/image/react.png';
import img_boots from '../assets/image/bootstrap.png';
import img_php from '../assets/image/php.png';
import img_node from '../assets/image/node.png';
import img_sql from '../assets/image/sql.png';
import img_c from '../assets/image/c++.png';
import img_java from '../assets/image/java.png';

export const Skills = () => {
    const skills = [
        { img: img_css, title: "CSS", des: "Advance" },
        { img: img_html, title: "HTML" },
        { img: img_js, title: "Javascript" },
        { img: img_react, title: "React" },
        { img: img_boots, title: "Bootstrap" },
        { img: img_php, title: "PHP" },
        { img: img_node, title: "Node.js" },
        { img: img_sql, title: "SQL" },
        { img: img_c, title: "C++" },
        { img: img_java, title: "Java" }
    ];

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit non distinctio quae fugit qui eligendi neque, ullam dolore eaque labore sit cum necessitatibus.</p>
                            <Row className="skills-grid"> 
                                {skills.map((skill, index) => (
                                    <Col key={index}  className="mb-4">
                                        <Card className="skill-card">
                                            <Card.Img variant="top" src={skill.img} />
                                            <Card.Body>
                                                <Card.Title className="skill-title">{skill.title}</Card.Title>

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
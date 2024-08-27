import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Frontend_img from '../assets/image/Frontend_img.png';
import Backend_img from '../assets/image/Backend_img.png';
import Database_img from '../assets/image/Database_img.png';
import Program_img from '../assets/image/Programing_img.png';
import Framework_img from '../assets/image/Framework_img.png';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit non distinctio quae fugit qui eligendi neque, ullam dolore eaque labore sit cum necessitatibus, id quo itaque odio quos? Adipisci, dolorem.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={Frontend_img} alt="Image" />
                                    <h5>FrontEnd</h5>
                                </div>
                                <div className="item">
                                    <img src={Backend_img} alt="Image" />
                                    <h5>BackEnd</h5>
                                </div>
                                <div className="item">
                                    <img src={Database_img} alt="Image" />
                                    <h5>Database</h5>
                                </div>
                                <div className="item">
                                    <img src={Framework_img} alt="Image" />
                                    <h5>Framework</h5>
                                </div>
                                <div className="item">
                                    <img src={Program_img} alt="Image" />
                                    <h5>Program</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowDownCircle } from 'react-bootstrap-icons';
import HeadderImg from "../assets/image/Headder.png";
import MouseFollower from "./Banner_Mouse";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Front-end Developer", "Back-end Developer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-item-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>{`Hi I'm Prasittichai `}</h1>
            <h1>
              <span className="text-rotate">
                <span className="wrap">{text}</span>
              </span>
            </h1>
            <p>
              I am interested in Web Developer. I am
              seeking a challenging role at an organization where I can apply my
              programming skills to contribute effectively. I am ready to
              continuously improve myself.
            </p>
            <button onClick={() => console.log("download")}>
              Download Resume<ArrowDownCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <MouseFollower />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

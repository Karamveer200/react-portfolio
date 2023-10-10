import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import myFace from '../assets/img/myFace.jpg';
export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ['Software', 'Frontend', 'Full-Stack'];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='aligh-items-center'>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <h1>{`Hi! I'm Karamveer,`} </h1>
                  <h1>
                    <span
                      className='txt-rotate'
                      dataPeriod='500'
                      data-rotate='[ "Software", "Frontend", "Full-Stack" ]'
                    >
                      <span className='wrap'>{text}</span>
                    </span>
                  </h1>
                  <h1>{`Developer`}</h1>

                  <p>
                    As a Software Developer, I build and maintain applications with cutting edge tech stack and
                    enforce an efficient app lifecycle. I am highly proficient in many latest technologies
                    including React, JavaScript, Node.js, TypeScript, Jest testing etc. and have had exposure in
                    cutting-edge tools like Google Cloud's App Engine and Secret Manager, GitHub with a track
                    record of successful CI/CD integration
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={`${isVisible ? 'animate__animated animate__zoomIn' : ''}`}>
                  <img src={myFace} alt='Header Img' className='bannerPic' />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

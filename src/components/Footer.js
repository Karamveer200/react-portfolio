import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import githubIcon from '../assets/img/github-mark-white.svg';

export const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row className='align-items-center'>
          <Col size={12} sm={6}>
            <img src={logo} alt='Logo' />
          </Col>
          <Col size={12} sm={6} className='text-center text-sm-end'>
            <div className='social-icon'>
              <p>Portfolio By - </p>

              <a href='https://github.com/judygab/web-dev-projects' target='_blank' rel='noreferrer'>
                <img src={githubIcon} alt='Icon' />
              </a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

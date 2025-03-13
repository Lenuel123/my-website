
import { Facebook, Gesture, Instagram, Twitter, YouTube } from '@mui/icons-material';
import { Container, Typography } from '@mui/material';
import React from 'react';
import { Col, Row } from 'reactstrap';

const Footer = () => {

  return (
    <div style={{ backgroundColor: '#0061fe', padding: '30px' }}>
      <Container maxWidth="md">
        <Row>
          <Col xs="12" md="12" lg="1" xl="1" />
          <Col xs="12" md="12" lg="2" xl="4">
            <div className='d-flex align-items-center text-white'>
              <Gesture sx={{ fontSize: '40px', marginRight: '10px', display: { xs: 'none', md: 'flex' } }} />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                Gestures
              </Typography>
            </div>
          </Col>

          <Col xs="12" md="12" lg="3" xl="4" />

          <Col xs="12" md="12" lg="2" xl="3">
            <div className='small text-white'><b>Gesture Links</b></div>
            <div><span className='small text-white'>Home</span></div>
            <div><span className='small text-white'>About</span></div>
            <div><span className='small text-white'>Features</span></div>
            <div><span className='small text-white'>Contact Us</span></div>
          </Col>
        </Row>

        <Row className='small text-muted'>
          <Col xs="12" md="12" lg="1" xl="1" />
          <Col xs="12" md="12" lg="3" xl="4">
            <div className='text-white'>Copyright© All rights reserved.</div>
          </Col>
          <Col xs="12" md="12" lg="3" xl="4">
            <span className='small text-white'>
              <Facebook className='footer-icon' />
            </span> &nbsp;

            <span className='small text-white'>
              <Twitter className='footer-icon' />
            </span> &nbsp;

            <span className='small text-white'>
              <Instagram className='footer-icon' />
            </span> &nbsp;

            <span className='small text-white'>
              <YouTube className='footer-icon' />
            </span> &nbsp;
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default Footer;

import { Container, Typography } from '@mui/material'
import React from 'react'
import { Col, Row } from 'reactstrap'
import home1 from '../assets/home1.png'
import wave from '../assets/wave.png'
import wave1 from '../assets/wave1.png'
import { isMobile } from 'react-device-detect'

const Home = () => {

    return (
        <div style={{ height: '100vh', backgroundColor: '', position: 'relative' }}>
            <img src={wave1} width={'100%'} style={{ position: 'absolute', top: 0 }} />
            <div className='d-flex justify-content-center align-items-center h-100' >
                <Container maxWidth="xl">
                    <Row>
                        <Col sx={{ xs: '12', md: '6', lg: '6' }}>
                            <Typography
                                variant="h4"
                                sx={{
                                    mt: !isMobile ? 10 : 0,
                                    mb: 3,
                                    fontWeight: 700,
                                    lineHeight: '3rem',
                                    color: '#0061fe',
                                    textDecoration: 'none',
                                    zIndex: 1
                                }}
                            >
                                Revolutionizing Drawing<br /> Through Automation
                            </Typography>

                            <Typography
                                variant="h6"
                                sx={{
                                    mb: 3,
                                    fontFamily: 'monospace',
                                    lineHeight: '2rem',
                                    color: '#000',
                                    textDecoration: 'none',
                                    zIndex: 1
                                }}
                                data-aos="fade-right"
                            >
                                <span>Turn Your Sketches into <span style={{ color: '#0061fe' }}><b>Digital Masterpieces</b></span> Effortlessly!</span>
                            </Typography>

                            <Typography
                                variant="h6"
                                sx={{
                                    fontFamily: 'monospace',
                                    lineHeight: '2rem',
                                    color: '#000',
                                    textDecoration: 'none',
                                    zIndex: 1
                                }}
                                data-aos="fade-right"
                            >
                                Gestures is an AI-powered platform that transforms your manual sketches into refined digital drawings in seconds.
                            </Typography>
                        </Col>

                        {!isMobile &&
                            <Col sx={{ xs: '12', md: '6', lg: '6' }}>
                                <div className='d-flex justify-content-center'>
                                    <img src={home1} height={'80%'} width={'80%'} data-aos="fade-left" />
                                </div>
                            </Col>
                        }
                    </Row>
                </Container>
            </div>
            <img src={wave} width={'100%'} style={{ position: 'absolute', bottom: 0 }} />
        </div>
    )
}

export default Home
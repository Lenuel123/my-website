import { Container, Typography } from '@mui/material'
import React from 'react'
import { Col, Row } from 'reactstrap'
import home1 from '../assets/home1.png'
import wave from '../assets/wave.png'
import wave1 from '../assets/wave1.png'

const Home = () => {

    return (
        <div style={{ height: '90vh', backgroundColor: '' }}>
            <img src={wave1} width={'100%'} style={{ position: 'absolute', top: 0 }} />
            <div className='d-flex justify-content-center align-items-center h-100' >
                <Container maxWidth="xl">
                    <Row>
                        <Col sx={{ xs: '12', md: '6', lg: '6' }}>
                            <Typography
                                variant="h4"
                                noWrap
                                sx={{
                                    mt: 10,
                                    mb: 3,
                                    display: { xs: 'none', md: 'flex' },
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
                                noWrap
                                sx={{
                                    mb: 3,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    lineHeight: '2rem',
                                    color: '#000',
                                    textDecoration: 'none',
                                    zIndex: 1
                                }}
                            >
                                <span>Turn Your Sketches into <span style={{ color: '#0061fe'}}><b>Digital Masterpieces</b></span> Effortlessly!</span>
                            </Typography>

                            <Typography
                                variant="h6"
                                noWrap
                                sx={{
                                    mb: 3,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    lineHeight: '2rem',
                                    color: '#000',
                                    textDecoration: 'none',
                                    zIndex: 1
                                }}
                            >
                                Gestures is an AI-powered platform that transforms your manual sketches<br/> into refined digital drawings in seconds.
                            </Typography>
                        </Col>

                        <Col sx={{ xs: '12', md: '6', lg: '6' }}>
                        <div className='d-flex justify-content-center'>
                            <img src={home1} height={'80%'} width={'80%'} />
                        </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <img src={wave} width={'100%'} style={{ position: 'absolute', bottom: 0 }} />
        </div>
    )
}

export default Home
import { Looks3Rounded, Looks4Rounded, Looks5Rounded, Looks6Rounded, LooksOneRounded, LooksTwoRounded } from '@mui/icons-material'
import { Avatar, Card, Container, Typography } from '@mui/material'
import React from 'react'
import { Badge, Col, Row } from 'reactstrap'
import bear from '../../assets/bear.png'
import cat from '../../assets/cat.png'
import chicken from '../../assets/chicken.png'
import dog from '../../assets/dog.png'
import panda from '../../assets/panda.png'
import wave2 from '../../assets/wave2.png'
import wave3 from '../../assets/wave3.png'
import '../../styles/features.css'
import { isMobile } from 'react-device-detect'

const Features = () => {

    return (
        <div style={{ height: '100%', backgroundColor: '', position: 'relative' }}>
            <img src={wave2} width={'100%'} style={{ position: 'absolute', top: 0 }} />
            <Container maxWidth="lg" sx={{ pt: !isMobile ? 40 : 15, pb: !isMobile ? 50 : 15 }}>
                <Typography
                    variant="h4"
                    sx={{
                        mb: 3,
                        fontWeight: 700,
                        lineHeight: '3rem',
                        color: '#0061fe',
                        textDecoration: 'none',
                    }}
                >
                    How it Works?
                </Typography>

                <Row>
                    <Col sx={{ xs: '12', md: '6', lg: '6' }}>
                        <Card sx={{ p: 2, px: 3, borderRadius: '15px' }} data-aos="fade-up-right">
                            <div className='d-flex align-items-center'>
                                <LooksOneRounded fontSize='large' sx={{ color: '#0061fe', marginRight: '5px' }} />
                                <h5 className='text-uppercase' style={{ margin: 0, color: '#0061fe' }}><b>Upload or Draw</b></h5>
                            </div>
                            <Typography
                                variant="h6"
                                sx={{
                                    mb: 3,
                                    fontFamily: 'monospace',
                                    lineHeight: '1.5rem',
                                    color: '#000',
                                    textDecoration: 'none',
                                    zIndex: 1,
                                    alignItems: 'justify'
                                }}
                            >
                                Users can either upload a manual sketch or create a new one using the platform’s digital tools.
                            </Typography>
                        </Card>
                    </Col>
                    {!isMobile && <Col sx={{ xs: '12', md: '6', lg: '6' }} />}
                </Row>
                <br/>

                <Row>
                {!isMobile && <Col sx={{ xs: '12', md: '6', lg: '6' }} />}
                    <Col sx={{ xs: '12', md: '6', lg: '6' }}>
                        <Card sx={{ p: 2, px: 3, borderRadius: '15px' }} data-aos="fade-up-left">
                            <div className='d-flex align-items-center'>
                                <LooksTwoRounded fontSize='large' sx={{ color: '#0061fe', marginRight: '5px' }} />
                                <h5 className='text-uppercase' style={{ margin: 0, color: '#0061fe' }}><b>AI Processing</b></h5>
                            </div>
                            <Typography
                                variant="h6"
                                sx={{
                                    mb: 3,
                                    fontFamily: 'monospace',
                                    lineHeight: '1.5rem',
                                    color: '#000',
                                    textDecoration: 'none',
                                    zIndex: 1,
                                    alignItems: 'justify'
                                }}
                            >
                                The AI analyzes the sketch, detects edges, and enhances details while preserving artistic intent.
                            </Typography>
                        </Card>
                    </Col>
                </Row>
                <br/>

                <Row>
                    <Col sx={{ xs: '12', md: '6', lg: '6' }}>
                        <Card sx={{ p: 2, px: 3, borderRadius: '15px' }} data-aos="fade-up-right">
                            <div className='d-flex align-items-center'>
                                <Looks3Rounded fontSize='large' sx={{ color: '#0061fe', marginRight: '5px' }} />
                                <h5 className='text-uppercase' style={{ margin: 0, color: '#0061fe' }}><b>Style Selection</b></h5>
                            </div>
                            <Typography
                                variant="h6"
                                sx={{
                                    mb: 3,
                                    fontFamily: 'monospace',
                                    lineHeight: '1.5rem',
                                    color: '#000',
                                    textDecoration: 'none',
                                    zIndex: 1,
                                    alignItems: 'justify'
                                }}
                            >
                                Choose from different artistic styles, line weights, or shading techniques to personalize the output.
                            </Typography>
                        </Card>
                    </Col>
                    {!isMobile && <Col sx={{ xs: '12', md: '6', lg: '6' }} />}
                </Row>
                <br/>

                <Row>
                {!isMobile && <Col sx={{ xs: '12', md: '6', lg: '6' }} />}
                    <Col sx={{ xs: '12', md: '6', lg: '6' }}>
                        <Card sx={{ p: 2, px: 3, borderRadius: '15px' }} data-aos="fade-up-left">
                            <div className='d-flex align-items-center'>
                                <Looks4Rounded fontSize='large' sx={{ color: '#0061fe', marginRight: '5px' }} />
                                <h5 className='text-uppercase text-truncate' style={{ margin: 0, color: '#0061fe' }}><b>Refinement & Customization</b></h5>
                            </div>
                            <Typography
                                variant="h6"
                                sx={{
                                    mb: 3,
                                    fontFamily: 'monospace',
                                    lineHeight: '1.5rem',
                                    color: '#000',
                                    textDecoration: 'none',
                                    zIndex: 1,
                                    alignItems: 'justify'
                                }}
                            >
                                Adjust AI-generated details, fine-tune elements, or manually edit parts of the sketch.
                                Keep different elements separate for easier editing, allowing users to modify specific parts of the artwork.
                            </Typography>
                        </Card>
                    </Col>
                </Row>
                <br/>

                <Row>
                    <Col sx={{ xs: '12', md: '6', lg: '6' }}>
                        <Card sx={{ p: 2, px: 3, borderRadius: '15px' }} data-aos="fade-up-right">
                            <div className='d-flex align-items-center'>
                                <Looks5Rounded fontSize='large' sx={{ color: '#0061fe', marginRight: '5px' }} />
                                <h5 className='text-uppercase text-truncate' style={{ margin: 0, color: '#0061fe' }}><b>Preview & Adjustments</b></h5>
                            </div>
                            <Typography
                                variant="h6"
                                sx={{
                                    mb: 3,
                                    fontFamily: 'monospace',
                                    lineHeight: '1.5rem',
                                    color: '#000',
                                    textDecoration: 'none',
                                    zIndex: 1,
                                    alignItems: 'justify'
                                }}
                            >
                                View the enhanced sketch before finalizing, making any necessary modifications.
                            </Typography>
                        </Card>
                    </Col>
                    {!isMobile && <Col sx={{ xs: '12', md: '6', lg: '6' }} />}
                </Row>
                <br/>

                <Row>
                {!isMobile && <Col sx={{ xs: '12', md: '6', lg: '6' }} />}
                    <Col sx={{ xs: '12', md: '6', lg: '6' }}>
                        <Card sx={{ p: 2, px: 3, borderRadius: '15px' }} data-aos="fade-up-left">
                            <div className='d-flex align-items-center'>
                                <Looks6Rounded fontSize='large' sx={{ color: '#0061fe', marginRight: '5px' }} />
                                <h5 className='text-uppercase' style={{ margin: 0, color: '#0061fe' }}><b>Export & Share</b></h5>
                            </div>
                            <Typography
                                variant="h6"
                                sx={{
                                    mb: 3,
                                    fontFamily: 'monospace',
                                    lineHeight: '1.5rem',
                                    color: '#000',
                                    textDecoration: 'none',
                                    zIndex: 1,
                                    alignItems: 'justify'
                                }}
                            >
                                Download the final artwork in high resolution, export it in multiple formats, or share it directly to social media or design tools.
                            </Typography>
                        </Card>
                    </Col>
                </Row>

                <Typography
                    variant="h4"
                    sx={{
                        mt: !isMobile ? 15 : 10,
                        fontWeight: 700,
                        lineHeight: '3rem',
                        color: '#0061fe',
                        textDecoration: 'none',
                    }}
                >
                    Who It’s For?
                </Typography>

                <Typography
                    variant="h6"
                    sx={{
                        mb: 5,
                        fontFamily: 'monospace',
                        lineHeight: '1.5rem',
                        color: '#000',
                        textDecoration: 'none',
                        zIndex: 1
                    }}
                >
                    Explore creative opportunities tailored for different professionals.
                </Typography>

                <Row>
                    <Col data-aos="fade-up">
                        <center>
                            <Avatar
                                alt="Artists"
                                src={bear}
                                sx={{ width: 56, height: 56 }}
                            />
                            <Badge color="primary">Artists</Badge>
                        </center>
                    </Col>

                    <Col data-aos="fade-up">
                        <center>
                            <Avatar
                                alt="Designers"
                                src={cat}
                                sx={{ width: 56, height: 56 }}
                            />
                            <Badge color="success">Designers</Badge>
                        </center>
                    </Col>

                    <Col data-aos="fade-up">
                        <center>
                            <Avatar
                                alt="Architects"
                                src={chicken}
                                sx={{ width: 56, height: 56 }}
                            />
                            <Badge color="warning">Architects</Badge>
                        </center>
                    </Col>

                    <Col data-aos="fade-up">
                        <center>
                            <Avatar
                                alt="Educators"
                                src={dog}
                                sx={{ width: 56, height: 56 }}
                            />
                            <Badge color="secondary">Educators</Badge>
                        </center>
                    </Col>

                    <Col data-aos="fade-up">
                        <center>
                            <Avatar
                                alt="Hobbyists"
                                src={panda}
                                sx={{ width: 56, height: 56 }}
                            />
                            <Badge color="danger">Hobbyists</Badge>
                        </center>
                    </Col>
                </Row>
            </Container>
            <img src={wave3} width={'100%'} style={{ position: 'absolute', bottom: 0 }}/>
        </div>
    )
}

export default Features
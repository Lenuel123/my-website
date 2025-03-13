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

const Features = () => {

    return (
        <div style={{ height: '100%', backgroundColor: '', position: 'relative' }}>
            <img src={wave2} width={'100%'} style={{ position: 'absolute', top: 0 }} />
            <Container maxWidth="lg" sx={{ pt: 40, pb: 50 }}>
                <Typography
                    variant="h4"
                    sx={{
                        mb: 3,
                        display: { xs: 'none', md: 'flex' },
                        fontWeight: 700,
                        lineHeight: '3rem',
                        color: '#0061fe',
                        textDecoration: 'none',
                        textAlign: 'center'
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
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    lineHeight: '1.5rem',
                                    color: '#000',
                                    textDecoration: 'none',
                                    zIndex: 1
                                }}
                            >
                                Users can either upload a manual sketch or create a new one using the platform’s digital tools.
                            </Typography>
                        </Card>
                    </Col>
                    <Col sx={{ xs: '12', md: '6', lg: '6' }} />
                </Row>

                <Row>
                    <Col sx={{ xs: '12', md: '6', lg: '6' }} />
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
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    lineHeight: '1.5rem',
                                    color: '#000',
                                    textDecoration: 'none',
                                    zIndex: 1
                                }}
                            >
                                The AI analyzes the sketch, detects edges, and enhances details while preserving artistic intent.
                            </Typography>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col sx={{ xs: '12', md: '6', lg: '6' }}>
                        <Card sx={{ p: 2, px: 3, borderRadius: '15px' }} data-aos="fade-up-right">
                            <div className='d-flex align-items-center'>
                                <Looks3Rounded fontSize='large' sx={{ color: '#0061fe', marginRight: '5px' }} />
                                <h5 className='text-uppercase' style={{ margin: 0, color: '#0061fe' }}><b>Style Selection (Optional)</b></h5>
                            </div>
                            <Typography
                                variant="h6"
                                sx={{
                                    mb: 3,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    lineHeight: '1.5rem',
                                    color: '#000',
                                    textDecoration: 'none',
                                    zIndex: 1
                                }}
                            >
                                Choose from different artistic styles, line weights, or shading techniques to personalize the output.
                            </Typography>
                        </Card>
                    </Col>
                    <Col sx={{ xs: '12', md: '6', lg: '6' }} />
                </Row>

                <Row>
                    <Col sx={{ xs: '12', md: '6', lg: '6' }} />
                    <Col sx={{ xs: '12', md: '6', lg: '6' }}>
                        <Card sx={{ p: 2, px: 3, borderRadius: '15px' }} data-aos="fade-up-left">
                            <div className='d-flex align-items-center'>
                                <Looks4Rounded fontSize='large' sx={{ color: '#0061fe', marginRight: '5px' }} />
                                <h5 className='text-uppercase' style={{ margin: 0, color: '#0061fe' }}><b>Refinement & Customization</b></h5>
                            </div>
                            <Typography
                                variant="h6"
                                sx={{
                                    mb: 3,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    lineHeight: '1.5rem',
                                    color: '#000',
                                    textDecoration: 'none',
                                    zIndex: 1
                                }}
                            >
                                Adjust AI-generated details, fine-tune elements, or manually edit parts of the sketch.
                                Keep different elements separate for easier editing, allowing users to modify specific parts of the artwork.
                            </Typography>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col sx={{ xs: '12', md: '6', lg: '6' }}>
                        <Card sx={{ p: 2, px: 3, borderRadius: '15px' }} data-aos="fade-up-right">
                            <div className='d-flex align-items-center'>
                                <Looks5Rounded fontSize='large' sx={{ color: '#0061fe', marginRight: '5px' }} />
                                <h5 className='text-uppercase' style={{ margin: 0, color: '#0061fe' }}><b>Preview & Adjustments</b></h5>
                            </div>
                            <Typography
                                variant="h6"
                                sx={{
                                    mb: 3,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    lineHeight: '1.5rem',
                                    color: '#000',
                                    textDecoration: 'none',
                                    zIndex: 1
                                }}
                            >
                                View the enhanced sketch before finalizing, making any necessary modifications.
                            </Typography>
                        </Card>
                    </Col>
                    <Col sx={{ xs: '12', md: '6', lg: '6' }} />
                </Row>

                <Row>
                    <Col sx={{ xs: '12', md: '6', lg: '6' }} />
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
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    lineHeight: '1.5rem',
                                    color: '#000',
                                    textDecoration: 'none',
                                    zIndex: 1
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
                        mt: 15,
                        display: { xs: 'none', md: 'flex' },
                        fontWeight: 700,
                        lineHeight: '3rem',
                        color: '#0061fe',
                        textDecoration: 'none',
                        textAlign: 'center'
                    }}
                >
                    Who It’s For?
                </Typography>

                <Typography
                    variant="h6"
                    sx={{
                        mb: 5,
                        display: { xs: 'none', md: 'flex' },
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
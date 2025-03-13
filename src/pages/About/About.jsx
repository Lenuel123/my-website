import { Container, Typography } from '@mui/material'
import React from 'react'
import banner from '../../assets/banner.webp'


const About = () => {

    return (
        <div style={{
            height: '100vh',
            backgroundImage: `url(${banner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}>
            <div className='d-flex justify-content-center align-items-center h-100 w-100'>
                <Container maxWidth="lg">
                    <div style={{ backgroundColor: 'rgba(0,0,0,.9)', borderRadius: '15px', padding: '30px' }} data-aos="fade-up"
                        data-aos-anchor-placement="center-center">
                        <Typography
                            variant="h4"
                            noWrap
                            sx={{
                                mb: 3,
                                display: { xs: 'none', md: 'flex' },
                                fontWeight: 700,
                                lineHeight: '3rem',
                                color: '#fff',
                                textDecoration: 'none',
                            }}
                        >
                            About Us
                        </Typography>

                        <Typography
                            variant="h6"
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                lineHeight: '2rem',
                                color: '#fff',
                                textDecoration: 'none',
                            }}
                        >
                            Our platform is designed to foster creativity and artistic growth among students and teenagers. We provide engaging tutorials, hands-on projects, and interactive tools that make learning digital art and design both fun and accessible. Whether you're a beginner or an aspiring artist, our community-driven space offers the resources and inspiration you need to explore your artistic potential and bring your ideas to life.
                        </Typography>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default About
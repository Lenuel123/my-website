import { Container, Typography } from '@mui/material'
import React from 'react'
import contact from '../../assets/contact.jpg'
import { Col, Row } from 'reactstrap'
import { isMobile } from 'react-device-detect'


const ContactUs = () => {

    return (
        <div style={{ height: '100%', backgroundColor: '', position: 'relative' }}>
            <Container maxWidth="lg">
                <Row>
                    <Col xs="12" md="6" lg="6">
                        <Typography
                            variant="h4"
                            sx={{
                                mt: !isMobile ? 20 : 10,
                                mb: 3,
                                display: { xs: 'flex', md: 'flex' },
                                fontWeight: 700,
                                lineHeight: '3rem',
                                color: '#0061fe',
                                textDecoration: 'none',
                                textAlign: 'center'
                            }}
                        >
                            Contact Us
                        </Typography>

                        <Typography
                            variant="h6"
                            sx={{
                                display: { xs: 'flex', md: 'flex' },
                                fontFamily: 'monospace',
                                lineHeight: '2rem',
                                color: '#',
                                textDecoration: 'none',
                            }}
                             data-aos="fade-right"
                        >
                        Have questions or need assistance? We're here to help! Whether you're looking for support, collaboration opportunities, or just want to share feedback, feel free to reach out to us.
                        </Typography>
                    </Col>

                    <Col xs="12" md="6" lg="6">
                    {!isMobile && <img src={contact} height={'100%'} style={{ position: 'absolute', top: 0 }}  data-aos="fade-left" />}
                    </Col>
                </Row>


            </Container>
        </div>
    )
}

export default ContactUs
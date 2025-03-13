import { Container, Typography } from '@mui/material'
import React from 'react'
import contact from '../assets/contact.jpg'
import { Col, Row } from 'reactstrap'


const ContactUs = () => {

    return (
        <div style={{ height: '100vh', backgroundColor: '', position: 'relative' }}>
            <Container maxWidth="lg">
                <Row>
                    <Col>
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
                            Contact Us
                        </Typography>
                    </Col>

                    <Col>
                        <img src={contact} height={'40%'} style={{ position: 'absolute', top: 0 }} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ContactUs
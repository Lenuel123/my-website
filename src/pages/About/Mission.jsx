import { Container, Typography } from '@mui/material'
import React from 'react'

const Mission = () => {

    return (
        <div style={{ height: '100%', backgroundColor: '' }}>
            <Container maxWidth="lg">
                <Typography
                    variant="h4"
                    sx={{
                        my: 10,
                        display: { xs: 'none', md: 'flex' },
                        fontWeight: 700,
                        lineHeight: '3rem',
                        color: '#000',
                        textDecoration: 'none',
                        textAlign: 'center'
                    }}
                >
                    <span>
                        <span data-aos="fade-right">
                        Our mission is to <span className='text-primary'>bridge the gap</span> between <span className='text-success'>traditional and digital art</span> by
                        </span>
                        <span data-aos="fade-left">
                        <span className='text-warning'> automating</span> tedious sketching processes.
                        </span>
                    </span>
                </Typography>
            </Container>
        </div>
    )
}

export default Mission
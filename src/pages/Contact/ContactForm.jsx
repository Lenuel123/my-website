import { Button, Container, Typography } from "@mui/material";
import { useState } from "react";
import { isMobile } from "react-device-detect";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
    };

    return (
        <div style={{ height: '100%', backgroundColor: '', padding: !isMobile ? '50px' : '20px' }}>
            <Container maxWidth="sm">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3" data-aos="fade-up">
                        <div>
                            <b>Full Name <span className="text-danger">*</span></b>
                        </div>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Your full name"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-100 mt-1 p-3 border rounded-md focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>

                    <div className="mb-3" data-aos="fade-right">
                        <div>
                            <b>E-mail <span className="text-danger">*</span></b>
                        </div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your e-mail address"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-100 mt-1 p-3 border rounded-md focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>

                    <div className="mb-3" data-aos="fade-left">
                        <div>
                            <b>Message <span className="text-danger">*</span></b>
                        </div>
                        <textarea
                            name="message"
                            placeholder="Your question about our services"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-100 mt-1 p-3 border rounded-md focus:ring focus:ring-blue-300"
                            rows="4"
                            required
                        />
                    </div>

                    <center>
                        <Button sx={{
                            backgroundColor: '#0061fe',
                            color: '#fff',
                            px: 3,
                            py: 1,
                            fontWeight: 700,
                            borderRadius: '50px',
                            textTransform: 'none',
                            zIndex: 1,
                        }}>
                            Submit
                        </Button>
                    </center>
                </form>
                <br />

                <center>
                    <Typography
                        variant="p"
                        sx={{
                            mt: 5,
                            fontFamily: 'monospace',
                            color: '#',
                            textDecoration: 'none',
                            textAlign: 'center'
                        }}
                        data-aos="fade-up"
                    >
                        We value your time and will respond as soon as possible. Thank you for choosing Gestures, and we look forward to assisting you!
                    </Typography>
                </center>

            </Container>
        </div>
    );
};

export default ContactForm;

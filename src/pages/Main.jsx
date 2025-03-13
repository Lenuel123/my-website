import { useRef, useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import Home from "./Home";
import About from "./About/About";
import Mission from "./About/Mission";
import Features from "./About/Features";
import ContactForm from "./Contact/ContactForm";
import ContactUs from "./Contact/ContactUs";
import { ArrowUpward } from "@mui/icons-material";

const Main = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const featuresRef = useRef(null);
  const contactusRef = useRef(null);
  
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <MainLayout refs={{ homeRef, aboutRef, featuresRef, contactusRef }}>
      <div ref={homeRef}><Home /></div>
      <div ref={aboutRef}><About /></div>
      <div><Mission /></div>
      <div ref={featuresRef}><Features /></div>
      <div ref={contactusRef}><ContactUs /></div>
      <div><ContactForm /></div>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "10px",
            right: "10px",
            background: "#fff",
            color: "#0061fe",
            height: '40px', 
            width: '40px', 
            border: "1px solid #0061fe",
            borderRadius: "50%",
            cursor: "pointer",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <ArrowUpward />
        </button>
      )}
    </MainLayout>
  );
};

export default Main;

import MainLayout from "../layouts/MainLayout";
import Home from "./Home";
import { useRef } from "react";
import About from "./About/About";
import Mission from "./About/Mission";
import Features from "./About/Features";
import ContactUs from "./Contact/ContactUs";
import ContactForm from "./Contact/ContactForm";

const Main = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const featuresRef = useRef(null);
  const contactusRef = useRef(null);

  return (
    <MainLayout refs={{ homeRef, aboutRef, featuresRef, contactusRef }}>
      <div ref={homeRef}><Home /></div>
      <div ref={aboutRef}><About /></div>
      <div><Mission /></div>
      <div ref={featuresRef}><Features /></div>
      <div ref={contactusRef}><ContactUs /></div>
      <div><ContactForm /></div>
    </MainLayout>
  );
};

export default Main;

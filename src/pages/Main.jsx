import MainLayout from "../layouts/MainLayout";
import Home from "./Home";
import { useRef } from "react";
import About from "./About/About";
import Mission from "./About/Mission";
import Features from "./About/Features";
import ContactUs from "./ContactUs";

const Main = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const missionRef = useRef(null);
  const featuresRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <MainLayout refs={{ homeRef, aboutRef, missionRef, featuresRef, contactRef }}>
      <div ref={homeRef}><Home /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={missionRef}><Mission /></div>
      <div ref={featuresRef}><Features /></div>
      <div ref={contactRef}><ContactUs /></div>
    </MainLayout>
  );
};

export default Main;

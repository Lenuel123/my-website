import { useEffect } from 'react';
import './App.css'
import AppRoutes from './routes/AppRoutes'
import AOS from "aos";
import "aos/dist/aos.css";

const App =() => {

    useEffect(() => {
      AOS.init({
        duration: 1000, // Animation duration in milliseconds
        once: true, // Animation only happens once
        mirror: false, // Elements animate out when scrolling past them
      });
    }, []);

  return (
    <>
      <AppRoutes />
    </>
  )
}

export default App

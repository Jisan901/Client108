import Layout from "./layout/Layout.jsx"
import React, { useEffect } from "react";
import SEO from "./SEO.jsx";
import AOS from "aos";
import "./App.css"
import "aos/dist/aos.css";
  
function App() {
    useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
        <SEO/>
        <Layout/>
    </>
  )
}

export default App

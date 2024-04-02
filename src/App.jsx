import Layout from "./layout/Layout.jsx"
import React, { useEffect } from "react";
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
        <Layout/>
    </>
  )
}

export default App

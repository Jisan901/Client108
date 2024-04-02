import Nav from "../components/Home/Nav.jsx"
import Header from "../components/Home/Header.jsx"
import Categories from "../components/Home/Categories.jsx"
import About from "../components/Home/About.jsx"
import Team from "../components/Home/Team.jsx"
import Gallery from "../components/Home/Gallery.jsx"
import Contact from "../components/Home/Contact.jsx"
import Footer from "../components/Home/Footer.jsx"
// home layout fixed

const Layout = () => {
    return (
        <>
        <Nav/>
        <Header/>
        <Categories/>
        <About/>
        <Team/>
        <Gallery/>
        <Contact/>
        <Footer/>
        </>
    )
}

export default Layout;
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar";
import Footer from "../Pages/Home/Footer";
import { Toaster } from 'react-hot-toast';
import Contact from "../Pages/Home/Contact";
import AboutOurService from "../Pages/Home/AboutOurService";

const Main = () => {
    return (
        <div className="md:px-16 bg-base-200">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Contact></Contact>
            <AboutOurService></AboutOurService>
            <Footer></Footer>
            <Toaster />
        </div>
    );
};

export default Main;
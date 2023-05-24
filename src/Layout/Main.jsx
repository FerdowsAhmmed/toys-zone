import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar";
import Footer from "../Pages/Home/Footer";
import { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <div className="md:px-16">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster />
        </div>
    );
};

export default Main;
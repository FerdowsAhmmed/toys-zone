import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
      <footer className="footer p-10 bg-slate-900 text-white" data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom">
      <div>
       <img src={'https://i.ibb.co/Kr8GDGy/logoo.png'} alt="Logo" className='w-3/12'/>
        <p>Toys Zone<br/>Providing reliable toys since 2022</p>
      </div> 
      <div>
        <span className="footer-title">Social Media</span> 
       <div className='grid grid-cols-2 gap-5'>
        <Link to="/"> <FaFacebook className="w-5 h-5" /></Link> 
        <Link to="/">  <FaTwitter className="w-5 h-5" /></Link> 
        <Link to="/"> <FaInstagram className="w-5 h-5" /></Link> 
        <Link to="/"> <FaLinkedin className="w-5 h-5" /></Link>
       </div>
      </div> 
      <div>
        <span className="footer-title">Company</span> 
        <Link to="/">About us</Link> 
        <Link to="/">Contact</Link> 
      </div> 
      <div>
        <span className="footer-title">Legal</span> 
        <Link to="/">Terms of use</Link> 
        <Link to="/">Privacy policy</Link> 
      </div>
      <p className='pt-10'>Copyright © 2023 - All right reserved</p>
    </footer>
    );
};

export default Footer;
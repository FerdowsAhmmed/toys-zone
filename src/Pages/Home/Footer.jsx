import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
    <div className=' bg-slate-900 text-white'>
        <footer className="footer p-10">
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
      <div>
        <span className="footer-title">Address</span> 
        <Link to="/">Kaligat Road</Link> 
        <Link to="/">Sreemangal,Moulvibaza</Link> 
      </div> 
    </footer>
    <p className='text-center pb-10'>Copyright © 2023 - All right reserved</p>
    </div>
    );
};

export default Footer;
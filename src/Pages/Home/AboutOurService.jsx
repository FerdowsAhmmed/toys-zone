import { BsFillBagDashFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsCarFrontFill } from "react-icons/bs";
import { BsCursorFill } from "react-icons/bs";

const AboutOurService = () => {
    return (
   <section  data-aos="flip-up">
    <h1 className="text-center text-4xl mb-6">About Our Services</h1>
         <div className="grid grid-cols-1 md:grid-cols-4 ">
            <div className="flex flex-col items-center bg-red-400 p-20">
                <p><BsFillBagDashFill /></p>
                <h1>Fast Shipping</h1>
            </div>
            <div className="flex flex-col items-center bg-orange-400 p-20">
                <p><BsCursorFill/></p>
                <h1>Online Payment</h1>
            </div>
            <div className="flex flex-col items-center bg-yellow-500 p-20">
                <p><BsFillTelephoneFill/></p>
                <h1>24/7 Support</h1>
                
            </div>
            <div className="flex flex-col items-center bg-lime-300 p-20">
                <p><BsCarFrontFill/></p>
                <h1>On time Delivery</h1>
            </div>
        </div>
   </section>
    );
};

export default AboutOurService;
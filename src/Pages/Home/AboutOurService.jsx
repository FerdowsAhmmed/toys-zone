import { BsFillBagDashFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsCarFrontFill } from "react-icons/bs";
import { BsCursorFill } from "react-icons/bs";

const AboutOurService = () => {
    return (
   <section className="px-4 mb-10"  data-aos="flip-up">
    <h1 className="text-center text-4xl mb-6 underline underline-offset-8">About Our Services</h1>
         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center rounded-lg bg-red-400 p-16">
                <p className="text-5xl text-fuchsia-950"><BsFillBagDashFill /></p>
                <h1>Fast Shipping</h1>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-orange-400 p-16">
                <p className="text-5xl text-fuchsia-950"><BsCursorFill/></p>
                <h1>Online Payment</h1>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-yellow-500 p-16">
                <p className="text-5xl text-fuchsia-950"><BsFillTelephoneFill/></p>
                <h1>24/7 Support</h1>
                
            </div>
            <div className="flex flex-col items-center rounded-lg bg-lime-500 p-16">
                <p className="text-5xl text-fuchsia-950"><BsCarFrontFill/></p>
                <h1>On time Delivery</h1>
            </div>
        </div>
   </section>
    );
};

export default AboutOurService;
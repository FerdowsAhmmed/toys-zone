import { Link } from "react-router-dom";

const Banner = () => {
    return (
      <div className="bg-gradient-to-r py-28 from-blue-400 to-purple-700">
      <div className="container mx-auto py-28 px-4">
        <div className="text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Toys Zone</h1>
          <p className="text-xl md:text-3xl mb-8">Explore Science, Language, and Math Toys</p>
          <Link to="/allToys" className="bg-white text-purple-500 font-bold rounded-full py-3 px-8 hover:bg-purple-500 hover:text-white transition duration-300">Shop Now</Link>
        </div>
      </div>
    </div>
    
    );
  };
  
  export default Banner;

  
  
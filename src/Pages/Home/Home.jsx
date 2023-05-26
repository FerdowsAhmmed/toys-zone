import  { useEffect } from 'react';
import Banner from "../Banner/Banner";
import Gallery from "./Gallery";
import ToyCategories from "./ToyCategories";
import Contact from './Contact';
import AboutOurService from './AboutOurService';


const Home = () => {
  useEffect(() => {
    const handleRouteChange = () => {
      document.title = `Toys Zone | Home`;
    };

    handleRouteChange(); 

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);
    return (
    <div className="min-h-screen">
      <Banner></Banner>
      <Gallery></Gallery>
      <ToyCategories></ToyCategories>
      <Contact></Contact>
      <AboutOurService></AboutOurService>
    </div>
    );
};

export default Home;
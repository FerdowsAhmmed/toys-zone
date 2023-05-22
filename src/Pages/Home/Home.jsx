
import Banner from "../Banner/Banner";
import Gallery from "./Gallery";
import ToyCategories from "./ToyCategories";

const Home = () => {
    return (
    <div className="min-h-screen bg-base-200">
      <Banner></Banner>
      <Gallery></Gallery>
      <ToyCategories></ToyCategories>
    </div>
    );
};

export default Home;
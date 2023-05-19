import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar flex sm:flex-column md:flex-row justify-around items-center bg-slate-700 text-white">
      <img src={'https://i.ibb.co/Kr8GDGy/logoo.png'} alt="logo" className="[width:100px]" />
      <nav className="flex space-x-4">
        <Link to="/">Home</Link>
        <Link to="/allToys">All Toys</Link>
        <Link to="/myToys/:email">My Toys</Link>
        <Link to="/addToy">Add a Toy</Link>
        <Link to="/myBlog">My Blog</Link>
      </nav>
      <img src="" alt="UserPhoto" />
      <nav className="flex space-x-4">
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
};

export default Navbar;

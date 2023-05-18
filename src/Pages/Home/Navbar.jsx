import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar flex flex-row justify-around bg-indigo-600 text-white">
      <img src="" alt="logo" />
      <nav className="flex space-x-4">
        <Link to="/">Home</Link>
        <Link to="/allToys">All Toys</Link>
        <Link to="/myToys">My Toys</Link>
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

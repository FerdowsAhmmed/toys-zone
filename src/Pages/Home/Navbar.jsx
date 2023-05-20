import { Link } from "react-router-dom";

const Navbar = () => {
  const userData = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.reload();
  };

  return (
    <div className="navbar flex sm:flex-column md:flex-row justify-around items-center bg-slate-700 text-white">
      <div>
        <img src={'https://i.ibb.co/Kr8GDGy/logoo.png'} alt="logo" className="[width:100px]" />
        <h1 className="text-xl ps-2">TOYSZONE</h1>
      </div>
      <nav className="flex space-x-4">
        <Link to="/">Home</Link>
        <Link to="/allToys">All Toys</Link>
        {userData && <Link to="/myToys/:email">My Toys</Link>}
        {userData && <Link to="/addToy">Add a Toy</Link>}
        <Link to="/myBlog">My Blog</Link>
      </nav>
      {userData && <img src={userData.photo} alt="UserPhoto" />}
      <nav className="flex space-x-4">
        {userData ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </div>
  );
};

export default Navbar;

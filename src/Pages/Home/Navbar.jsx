import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import  './Navbar.css'
const Navbar = () => {
  const [userData, setUserData] = useState(() => JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    const updatedUserData = JSON.parse(localStorage.getItem("user"));
    setUserData(updatedUserData);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUserData(null);
    window.location.href = "/login";
  };

  return (
     <div className="bg-slate-700 text-white navDesign">
       <div className="navLogo">
         <img src={'https://i.ibb.co/Kr8GDGy/logoo.png'} alt="logo" className="[width:100px]" />
         <h1 className="text-xl ps-2 shopName">TOYSZONE</h1>
       </div>
       <nav className="navItems">
         <Link to="/">Home</Link>
         <Link to="/allToys">All Toys</Link>
         {userData && <Link to="/myToys/:email">My Toys</Link>}
         {userData && <Link to="/addToy">Add a Toy</Link>}
         <Link to="/myBlog">My Blog</Link>
       </nav>
       <nav>
         {userData ? (
           <button onClick={handleLogout}>Logout</button>
           ) : (
             <Link to="/login">Login</Link>
             )}
       </nav>
             {userData && userData.photoURL && (
               <img src={userData.photoURL} className="w-16 rounded-md pt-4" alt="UserPhoto" title={userData.displayName} />
             )}
     </div>


  );
};

export default Navbar;

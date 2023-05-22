import { Link, useLoaderData } from "react-router-dom";
import  { useEffect } from 'react';

const AllToys = () => {
  useEffect(() => {
    const handleRouteChange = () => {
      document.title = `Toys Zone | All Toys`;
    };

    handleRouteChange(); 

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);
  const toys = useLoaderData();

  return (
    <div className="min-h-screen bg-base-200 py-2 px-4 sm:px-6 lg:px-8" data-aos="fade-right"
    data-aos-offset="100"
    data-aos-easing="ease-in-sine">
      <h1 className="text-5xl text-center text- mb-8">All Toys {toys.length}</h1>
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Seller Name</th>
            <th>Sub Category</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy) => {
            const { _id, name, sellerName, subCategory, price,quantity } = toy;
            const toyDetailsPath = `/toy/${_id}`;

            return (
              <tr key={_id}>
                <td>{name}</td>
                <td>{sellerName}</td>
                <td>{subCategory}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td>
                  <Link to={toyDetailsPath} className="bg-indigo-200 px-2 py-1 rounded-md">
                    View Details
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;

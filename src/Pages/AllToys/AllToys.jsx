import { Link, useLoaderData } from "react-router-dom";

const AllToys = () => {
  const toys = useLoaderData();

  return (
    <div className="min-h-screen bg-base-200 py-2 px-4 sm:px-6 lg:px-8">
      <h1 className="text-5xl text-center text- mb-8">All Toys {toys.length}</h1>
      <table className="table flex w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Seller Name</th>
            <th>Sub Category</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy) => {
            const { _id, name, sellerName, subCategory, price } = toy;
            const toyDetailsPath = `/toy/${_id}`;

            return (
              <tr key={_id}>
                <td>{name}</td>
                <td>{sellerName}</td>
                <td>{subCategory}</td>
                <td>{price}</td>
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

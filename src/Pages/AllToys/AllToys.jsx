import { Link, useLoaderData } from "react-router-dom";
import { useEffect , useState} from "react";

const AllToys = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const initialToys = useLoaderData();
  const [toys, setToys] = useState(initialToys);
  const [itemsPerPage, setItemsPerPage] = useState(20);

  const handleSearch = (e) => {
    e.preventDefault();
    // Fetch toys by toy name
    fetch(
      `https://toys-zone-server.vercel.app/toy?name=${searchQuery}&limit=${itemsPerPage}`
    )
      .then((response) => response.json())
      .then((data) => {
        // Update toys state with search results
        setToys(data);
      })
      .catch((error) => {
        console.error("Error fetching toys:", error);
      });
  };

  useEffect(() => {
    const handleRouteChange = () => {
      document.title = `Toys Zone | All Toys`;
    };
    handleRouteChange();
    window.addEventListener("popstate", handleRouteChange);
    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  const handleItemsPerPageChange = (e) => {
    const selectedItemsPerPage = Number(e.target.value);
    setItemsPerPage(selectedItemsPerPage);
    // Fetch toys with updated limit
    fetch(
      `https://toys-zone-server.vercel.app/toy?name=${searchQuery}&limit=${selectedItemsPerPage}`
    )
      .then((response) => response.json())
      .then((data) => {
        // Update toys state with new limit
        setToys(data);
      })
      .catch((error) => {
        console.error("Error fetching toys:", error);
      });
  };

  return (
    <div
      className="min-h-screen bg-base-200 py-2 px-4 sm:px-6 lg:px-8"
      data-aos="fade-right"
      data-aos-offset="100"
      data-aos-easing="ease-in-sine"
    >
      <h1 className="text-5xl text-center text- mb-8">All Toys</h1>
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          placeholder="Search by toy name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2"
        />
        <button
          type="submit"
          className="bg-indigo-500 text-white px-4 py-2 rounded-md ml-2"
        >
          Search
        </button>
      </form>
      <div>
        Show:
        <select
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
          className="ml-2 border border-gray-300 rounded-md px-2 py-1"
        >
          <option value={5}>5</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div>
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
            const { _id, name, sellerName, subCategory, price, quantity } = toy;
            const toyDetailsPath = `/toy/${_id}`;

            return (
              <tr key={_id}>
                <td>{name}</td>
                <td>{sellerName}</td>
                <td>{subCategory}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td>
                  <Link
                    to={toyDetailsPath}
                    className="bg-indigo-200 px-2 py-1 rounded-md"
                  >
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

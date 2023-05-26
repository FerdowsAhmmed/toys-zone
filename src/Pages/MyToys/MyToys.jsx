import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import toast from 'react-hot-toast';

const MyToys = () => {
  const { email } = useParams();
  const [toys, setToys] = useState([]);
  console.log(toys);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleRouteChange = () => {
      document.title = `Toys Zone | My Toys`;
    };

    handleRouteChange();

    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  const handleDelete = (_id) => {
    console.log("delete", _id);
    fetch(`https://toys-zone-server.vercel.app/toy/${_id}`, {
      method: "DELETE"
    })
      .then((res) => res.json())
      .then((data) => {
     
        if (data.deletedCount > 0) {
          toast.success('Successfully deleted!');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    const fetchToys = async () => {
      try {
        const response = await fetch(`https://toys-zone-server.vercel.app/toy/email/ferdows962@gmail.com`);
        if (!response.ok) {
          throw new Error("Failed to fetch toys");
        }
        const data = await response.json();
        setToys(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };
  
    fetchToys();
  }, [email]);
  

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="min-h-screen bg-base-200 py-2 px-4 sm:px-6 lg:px-8">
      {toys.length === 0 ? (
        <div>No toys found.</div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {toys.map((toy) => (
            <div className="card flex flex-row bg-base-100 shadow-lg" key={toy._id}>
              <figure>
                <img
                  src={toy.pictureUrl}
                  style={{ height: "150px", width: "150px", padding: "20px" }}
                  alt={toy.name}
                />
              </figure>
              <div className="card-body flex flex-row justify-between items-center">
                <div>
                  <h2>{toy.name}</h2>
                  <p>Seller: {toy.sellerName}</p>
                  <p>Price: {toy.price}</p>
                  <p>Rating: {toy.rating}</p>
                  <p>Quantity: {toy.quantity}</p>
                  <p>Id:{toy._id}</p>
                </div>
                <div className="flex flex-col">
                  <Link
                    className="bg-green-500 mb-2 px-4 rounded-md"
                    onClick={() => handleDelete(toy._id)}
                  >
                    Delete
                  </Link>
                  <Link
                    to={`/updateToy/${toy._id}`}
                    className="bg-red-400 mb-2 px-4 rounded-md"
                  >
                    Update
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyToys;
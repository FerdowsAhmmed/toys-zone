import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const MyToys = () => {
  const { email } = useParams();
  const [toys, setToys] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchToys = async () => {
      try {
        const response = await fetch(`http://localhost:8801/toy/email/ferdows962@gmail.com`);
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
                <img src={toy.pictureUrl} style={{ height: '150px', width: '150px' , padding:'20px'}} alt={toy.name} />
              </figure>
              <div className="card-body flex flex-row justify-between items-center">
              <div>
                <h2>{toy.name}</h2>
                <p>Seller: {toy.sellerName}</p>
                <p>Price: {toy.price}</p>
                <p>Rating: {toy.rating}</p>
                <p>Quantity: {toy.quantity}</p>
              </div>
              <div className="flex flex-col">
                <Link className="bg-green-500 mb-2 px-4 rounded-md">Update</Link>
                <Link className="bg-red-400 mb-2 px-4 rounded-md">Delete</Link>
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

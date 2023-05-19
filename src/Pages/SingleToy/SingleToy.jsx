import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleToy = () => {
  const { id } = useParams();
  const [toyDetails, setToyDetails] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8001/toy/${id}`)
      .then((res) => res.json())
      .then((data) => setToyDetails(data));
  }, []);

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <img className="w-full mb-4 rounded" src={toyDetails?.pictureUrl} alt="" />
      <h2 className="text-2xl font-bold mb-2">{toyDetails?.name}</h2>
      <p className="text-gray-600 mb-1">Seller Name: {toyDetails?.sellerName}</p>
      <p className="text-gray-600 mb-1">Seller Email: {toyDetails?.sellerEmail}</p>
      <p className="text-gray-600">Description: {toyDetails?.description}</p>
      <p className="text-gray-600 mb-1">Available Quantity: {toyDetails?.quantity}</p>
      <p className="text-green-600 mb-1">Price: {toyDetails?.price}</p>
      <p className="text-yellow-500 mb-1">Rating: {toyDetails?.rating}</p>
    </div>
  );
};

export default SingleToy;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleToy = () => {
  const { id } = useParams();
  const [toyDetails, setToyDetails] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8801/toy/${id}`)
      .then((res) => res.json())
      .then((data) => setToyDetails(data));
  }, );

  return (
      <section className="mb-30">
       <h1 className="text-center text-5xl mt-6">Toy Details</h1>
     <div className=" p-6  m-12 bg-white shadow-lg rounded-lg">
      <img className="w-96 mx-auto mb-4 rounded-xl" src={toyDetails?.pictureUrl} alt="" />
     <div className="px-20 bg-white py-4">
     <h2 className="text-2xl font-bold mb-2">{toyDetails?.name}</h2>
      <p className="text-gray-600 mb-1">Seller Name: {toyDetails?.sellerName}</p>
      <p className="text-gray-600 mb-1">Seller Email: {toyDetails?.sellerEmail}</p>
      <p className="text-gray-600">Description: {toyDetails?.description}</p>
      <p className="text-gray-600 mb-1">Available Quantity: {toyDetails?.quantity}</p>
      <p className="text-green-600 mb-1">Price: {toyDetails?.price}</p>
      <p className="text-yellow-500 mb-1">Rating: {toyDetails?.rating}</p>
     </div>
    </div>
   </section>
  );
};

export default SingleToy;

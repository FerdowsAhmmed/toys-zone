import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SingleToy = () => {
  const { id } = useParams();
  const [toyDetails, setToyDetails] = useState({});

  useEffect(() => {
    fetch(`https://toys-zone-server.vercel.app/toy/${id}`)
      .then((res) => res.json())
      .then((data) => setToyDetails(data));
  }, [id]);

  useEffect(() => {
    const modalCheckbox = document.getElementById("my-modal-5");
    if (modalCheckbox) {
      modalCheckbox.checked = true;
    }
  }, []);

  return (
    <section
      className="min-h-screen bg-base-200 py-2 px-4 sm:px-6 lg:px-8"
      data-aos="zoom-out-left"
    >
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-1/2 max-w-5xl">
          <img
            className="w-80 mx-auto mb-4 rounded-xl"
            src={toyDetails?.pictureUrl}
            alt=""
          />
          <h3 className="font-bold text-lg">{toyDetails?.name}</h3>
          <p className="text-gray-600 mb-1">Seller Name: {toyDetails?.sellerName}</p>
          <p className="text-gray-600 mb-1">Seller Email: {toyDetails?.sellerEmail}</p>
          <p className="text-gray-600">Description: {toyDetails?.description}</p>
          <p className="text-gray-600 mb-1">Available Quantity: {toyDetails?.quantity}</p>
          <p className="text-green-600 mb-1">Price: {toyDetails?.price}</p>
          <p className="text-yellow-500 mb-1">Rating: {toyDetails?.rating}</p>
          <div className="modal-action">
            <Link to="/allToys"><label htmlFor="my-modal-5" className="btn">Close!</label></Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleToy;

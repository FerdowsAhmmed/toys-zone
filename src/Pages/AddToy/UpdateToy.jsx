import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import toast  from 'react-hot-toast';

const UpdateToy = () => {
  const { id } = useParams();
  const [toy, setToy] = useState(null);
  const [pictureUrl, setPictureUrl] = useState("");
  const [name, setName] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchToy = async () => {
      try {
        const response = await fetch(
          `https://toys-zone-server.vercel.app/toy/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch toy");
        }
        const data = await response.json();
        setToy(data);
        setPictureUrl(data.pictureUrl);
        setName(data.name);
        setSellerName(data.sellerName);
        setSellerEmail(data.sellerEmail);
        setSubCategory(data.subCategory);
        setPrice(data.price);
        setRating(data.rating);
        setQuantity(data.quantity);
        setDescription(data.description);
      } catch (error) {
        console.error(error);
      }
    };

    fetchToy();
  }, [id]);

  const handleToyUpdate = (event) => {
    event.preventDefault();
    const Toy = {
      pictureUrl,
      name,
      sellerName,
      sellerEmail,
      subCategory,
      price,
      rating,
      quantity,
      description
    };

    fetch(`https://toys-zone-server.vercel.app/toy/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(Toy)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
            toast.success('Toy details successfully updated!');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  if (!toy) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-1/2 mx-auto mt-8">
        <h1 className="text-3xl text-center py-5 bg-orange-900 text-white mb-4">Update toy Details</h1>
        <form onSubmit={(event) => handleToyUpdate(event, toy?._id)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

        <div className="mb-4">
          <label htmlFor="picture-url" className="block text-gray-700 text-sm font-bold mb-2">
            Picture URL:
          </label>
          <input
            type="text"
            id="picture-url"
            value={pictureUrl}
            onChange={(e) => setPictureUrl(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="seller-name" className="block text-gray-700 text-sm font-bold mb-2">
            Seller Name:
          </label>
          <input
            type="text"
            id="seller-name"
            value={sellerName}
            onChange={(e) => setSellerName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="seller-email" className="block text-gray-700 text-sm font-bold mb-2">
            Seller Email:
          </label>
          <input
            type="email"
            id="seller-email"
            value={sellerEmail}
            onChange={(e) => setSellerEmail(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="sub-category" className="block text-gray-700 text-sm font-bold mb-2">
            Sub-category:
          </label>
          <select
            id="sub-category"
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select Sub-category</option>
            <option value="Math Toys">Math-Toys</option>
            <option value="Language Toys">Language-Toys</option>
            <option value="Science Toys">Science-Toys</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">
            Price:
          </label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="rating" className="block text-gray-700 text-sm font-bold mb-2">
            Rating:
          </label>
          <input
            type="number"
            id="rating"
            value={rating}
            min="0"
            max="5"
            step="0.1"
            onChange={(e) => setRating(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="quantity" className="block text-gray-700 text-sm font-bold mb-2">
            Available Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            min="0"
            onChange={(e) => setQuantity(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
            Detail Description:
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            cols="50"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
           Update
          </button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default UpdateToy;

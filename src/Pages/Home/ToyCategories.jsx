import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ToyCategories = () => {
  const { subCategory } = useParams();
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchToys = async () => {
      try {
        let url = "https://toys-zone-server.vercel.app/toy";
        if (subCategory) {
          url += `/subcategory/${subCategory}`;
        }
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch toys");
        }
        const data = await response.json();
        setCategories(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchToys();
  }, [subCategory]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <main>
      <div data-aos="fade-up" data-aos-duration="1000">
        <h1 className="text-center text-2xl mt-10">Shop by Category</h1>
        <div className="btn-group grid grid-cols-3 w-1/2 mx-auto my-4">
          <Link to="/toy/subcategory/Math-Toys" className="btn btn-primary">
            Math Toys
          </Link>
          <Link to="/toy/subcategory/Science-Toys" className="btn btn-success">
            Science Toys
          </Link>
          <Link to="/toy/subcategory/Language-Toys" className="btn btn-error">
            Language Toys
          </Link>
        </div>
     <div className="grid grid-cols-4 gap-4 m-4">
     {categories.length === 0 ? (
          <div>No toys found.</div>
        ) : (
          categories.map((category) => (
            <div className="border border-gray-700 p-4" key={category._id}>
              <img
                src={category.pictureUrl}
                style={{ height: "200px", width: "100%" }}
                alt={category.name}
              />
              <h2>{category.name}</h2>
              <p>Price: {category.price}</p>
              <p>Rating: {category.rating}</p>
              <p>Quantity: {category.quantity}</p>
              <Link to={"/toy/" + category._id}>
                  <button className="bg-green-900 text-slate-300 px-4 py-1 rounded-xl mt-10">
                    View Details
                  </button>
                </Link>
            </div>
          ))
        )}
     </div>
      </div>
    </main>
  );
};

export default ToyCategories;
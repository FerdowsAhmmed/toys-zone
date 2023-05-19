
const MyToys = () => {
    const toys = [
        {
          id: 1,
          pictureUrl: 'https://example.com/toy1.jpg',
          name: 'Toy 1',
          sellerName: 'Seller A',
          price: 19.99,
          rating: 4.5,
        },
        {
          id: 2,
          pictureUrl: 'https://example.com/toy2.jpg',
          name: 'Toy 2',
          sellerName: 'Seller B',
          price: 29.99,
          rating: 4.2,
        },
      
      ];
      const handleUpdate = (toyId) => {
       
        console.log(`Updating toy with ID: ${toyId}`);
      };
    
      const handleDelete = (toyId) => {
      
        console.log(`Deleting toy with ID: ${toyId}`);
      };
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 py-2 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-3xl mx-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b border-gray-200">Toy Image</th>
            <th className="px-6 py-3 border-b border-gray-200">Seller Name</th>
            <th className="px-6 py-3 border-b border-gray-200">Price</th>
            <th className="px-6 py-3 border-b border-gray-200">Rating</th>
            <th className="px-6 py-3 border-b border-gray-200">Actions</th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy) => (
            <tr key={toy.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <img src={toy.pictureUrl} alt={toy.name} className="h-16 w-16 rounded" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{toy.sellerName}</td>
              <td className="px-6 py-4 whitespace-nowrap">${toy.price}</td>
              <td className="px-6 py-4 whitespace-nowrap">{toy.rating}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  className="text-blue-500 hover:text-blue-700 mr-2"
                  onClick={() => handleUpdate(toy.id)}
                >
                  Update
                </button>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleDelete(toy.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </div>
    );
};

export default MyToys;
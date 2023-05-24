import  './Gallery.css'

const Gallery = () => {
  return (
    <div className="container mx-auto py-8 mt-4 md:px-10 bg-amber-700">
      <h2 className="md:text-2xl font-bold mb-4 text-center bg-amber-800 rounded-xl  md:py-4">Image Gallery</h2>
      <div className=" grid grid-cols-3 md:grid-cols-5 gap-2 " data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0">
        <div className="relative gallery-image">
          <img
            src="https://i.ibb.co/ydDdySq/banner-image.jpg"
            alt="Image 1"
            className="rounded-lg w-full h-[200px]"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View
            </button>
          </div>
        </div>
        <div className="relative gallery-image">
          <img
            src="https://i.ibb.co/m6GDwY6/mathtoy4.jpg"
            alt="Image 2"
            className=" rounded-lg w-full h-[200px]"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View
            </button>
          </div>
        </div>
        <div className="relative gallery-image">
          <img
            src="https://i.ibb.co/ydDdySq/banner-image.jpg"
            alt="Image 3"
            className="rounded-lg w-full h-[200px]"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View
            </button>
          </div>
        </div>
        <div className="relative gallery-image">
          <img
            src="https://i.ibb.co/ydDdySq/banner-image.jpg"
            alt="Image 1"
            className=" rounded-lg w-full h-[200px]"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View
            </button>
          </div>
        </div>
        <div className="relative gallery-image">
          <img
            src="https://i.ibb.co/m6GDwY6/mathtoy4.jpg"
            alt="Image 2"
            className="rounded-lg w-full h-[200px]"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View
            </button>
          </div>
        </div>
        <div className="relative gallery-image">
          <img
            src="https://i.ibb.co/ydDdySq/banner-image.jpg"
            alt="Image 3"
            className="rounded-lg w-full h-[200px]"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View
            </button>
          </div>
        </div>
        <div className="relative gallery-image">
          <img
            src="https://i.ibb.co/ydDdySq/banner-image.jpg"
            alt="Image 1"
            className=" rounded-lg w-full h-[200px]"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View
            </button>
          </div>
        </div>
        <div className="relative gallery-image">
          <img
            src="https://i.ibb.co/m6GDwY6/mathtoy4.jpg"
            alt="Image 2"
            className="rounded-lg w-full h-[200px]"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View
            </button>
          </div>
        </div>
        <div className="relative gallery-image">
          <img
            src="https://i.ibb.co/ydDdySq/banner-image.jpg"
            alt="Image 3"
            className=" rounded-lg w-full h-[200px]"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View
            </button>
          </div>
        </div>
        <div className="relative gallery-image">
          <img
            src="https://i.ibb.co/ydDdySq/banner-image.jpg"
            alt="Image 1"
            className="rounded-lg w-full h-[200px]"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View
            </button>
          </div>
        </div>
        <div className="relative gallery-image">
          <img
            src="https://i.ibb.co/m6GDwY6/mathtoy4.jpg"
            alt="Image 2"
            className="rounded-lg w-full h-[200px]"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View
            </button>
          </div>
        </div>
        <div className="relative gallery-image">
          <img
            src="https://i.ibb.co/ydDdySq/banner-image.jpg"
            alt="Image 3"
            className=" rounded-lg w-full h-[200px]"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View
            </button>
          </div>
        </div>
         <div className="relative gallery-image">
          <img
            src="https://i.ibb.co/m6GDwY6/mathtoy4.jpg"
            alt="Image 2"
            className="rounded-lg w-full h-[200px]"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;



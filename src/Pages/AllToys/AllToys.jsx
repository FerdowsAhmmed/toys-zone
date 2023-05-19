    import { useLoaderData } from "react-router-dom";

    const AllToys = () => {
    const toys = useLoaderData();

        return (
    <div className="min-h-screen bg-base-200 py-2 px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl text-center text- mb-8 ">All Toys {toys.length}</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src="./logoo.png" className="[width:300px]" alt="Album"/></figure>
            <div className="card-body">
                <h2 className="card-title">New album is released!</h2>
                <p>Click the button to View details on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">View details</button>
            </div>
        </div>
        </div>
        
    </div>
    </div>
        );
    };

export default AllToys;
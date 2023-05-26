import { Link } from "react-router-dom";


const Page404 = () => {
    return (
        <div className="grid grid-cols-1 items-center pt-28">
            <div>
                <img src="https://i.ibb.co/Fh803yF/page404.jpg" alt="" className="w-2/6 mx-auto" />
            </div>
            <div className="mx-auto text-orange-600">
            <h1 className="text-5xl">Page not found</h1>
            <h1 className="text-5xl">The URL may be incorrect</h1>
            <Link to="/"><h1 className=" mx-auto bg-red-500 text-slate-200 mt-10 p-1 text-center rounded-lg">Go to the homepage</h1></Link>
            </div>
        </div>
    );
};

export default Page404;
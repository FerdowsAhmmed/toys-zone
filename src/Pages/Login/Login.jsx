import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login here</h2>
            </div>
            <form className="mt-8 space-y-6">
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full outline-none p-3"
                    placeholder="Email address"
                  />
                  <br />
                  <input
                    name="password"
                    type="password"
                    required
                    className="w-full outline-none p-3"
                    placeholder="Password"
                  />
              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <Link to="/register" >
                    Do not have an account?  <span className="font-medium text-indigo-600 hover:text-indigo-500"> Please Register here</span>
                  </Link>
                </div>
              </div>
              <div>
           <Link to='/register'>     
                 <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Login
                </button>
            </Link>
              </div>
            </form>
          </div>
        </div>
      );
    };
    

export default Login;
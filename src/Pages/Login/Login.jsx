import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import app from '../../Firebase/firebaseConfig';


const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const handleRouteChange = () => {
      document.title = `Toys Zone | Login`;
    };

    handleRouteChange(); 

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);


  const handleEmailPasswordLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+~`|}{[\]:;?><,./-=]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError(`
        * Password must be at least 6 characters
        * with an uppercase letter
        * a lowercase letter
        * a number
        * and a special character.
      `);
      return;
    }

    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError('');
        setSuccess('User logged in successfully');
        console.log(userCredential.user);
        navigate('/');
        localStorage.setItem('user', JSON.stringify(userCredential.user));
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const handleGoogleLogin = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        setError('');
        setSuccess('User logged in successfully');
        console.log(result.user);
        navigate('/');
        localStorage.setItem('user', JSON.stringify(result.user));
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login here</h2>
        </div>
        <form onSubmit={handleEmailPasswordLogin} className="mt-8 space-y-6">
          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">{success}</div>}
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
            <div className="text-sm mx-auto">
              <Link to="/register">
                Do not have an account?{' '}
                <span className="font-medium text-indigo-600 hover:text-indigo-500">
                  Please Register here
                </span>
              </Link>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative gallery-image w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-700 hover:bg-yellow-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-6">
          <button
            onClick={handleGoogleLogin}
            className="group relative gallery-image w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-700 hover:bg-yellow-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

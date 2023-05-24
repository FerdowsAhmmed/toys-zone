import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import app from '../../Firebase/firebaseConfig';

const Register = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const handleRouteChange = () => {
      document.title = `Toys Zone | Register`;
    };

    handleRouteChange(); 

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  const handleRegister = (event) => {
    event.preventDefault();
    const fullName = event.target.fullName.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const photoURL = event.target.photoURL.value;

    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+~`|}{[\]:;?><,./-=]).{6,}$/.test(password)) {
      setError(` 
        * Password must be at least 6 characters
        * with an uppercase letter
        * a number
        * and a special character.
      `);
      return;
    }

    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateProfile(user, {
          displayName: fullName,
          photoURL: photoURL
        })
          .then(() => {
            setError('');
            event.target.reset();
            setSuccess('User has been created successfully');
          })
          .catch((error) => {
            setError(error.message);
          });
      })
      .catch((error) => {
        setSuccess('');
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Register here</h2>
        </div>
        <form onSubmit={handleRegister} className="mt-8 space-y-6">
          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">{success}</div>}
          <input
            name="fullName"
            type="text"
            required
            className="w-full outline-none p-3"
            placeholder="Your Name"
          />
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
          <input
            name="photoURL"
            type="text"
            required
            className="w-full outline-none p-3"
            placeholder="Your Photo URL"
          />
          <div>
            <button
              type="submit"
              className="group relative gallery-image w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
          </div>
        </form>
        <div className="text-sm text-center">
          <Link to="/login">
            Already have an account? <span className="font-medium text-indigo-600 hover:text-indigo-500"> Please Login here</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;

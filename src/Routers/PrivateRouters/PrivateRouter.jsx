import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import PropTypes from "prop-types";

const PrivateRouter = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
      setIsLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (isLoading) {
    // Still loading, show a loading indicator or skeleton screen
    return <div>Loading...</div>;
  }

  if (isLoggedIn) {
    return children;
  }

  return <Navigate to="/login" replace={true} />;
};
PrivateRouter.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default PrivateRouter;

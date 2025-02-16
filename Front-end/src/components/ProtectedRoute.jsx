import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {PropTypes} from 'prop-types';

// Composant qui vérifie l'authentification
export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useSelector(state => state.auth);
  
  if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
  }
  
  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired
};

import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../page/homePage/HomePage';
import { Layout } from '../layout/Layout';
import { ErrorPage404 } from '../page/ErrorPage404';
import { Login } from '../page/login/Login';
import { Profile } from '../page/profile/Profile';
import { ProtectedRoute } from '../components/ProtectedRoute';

// Configuration du router avec protection et layout
const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage404 />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/profile',
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export { router };

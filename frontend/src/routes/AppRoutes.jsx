import App from '@/App';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import UserDashboard from '../pages/user/UserDashboard';
import PrivateRoute from './PrivateRoute';
import UserProfile from '@/pages/user/UserProfile';
import EmployerProfile from '@/pages/employer/EmployerProfile';
import EmployerDashboard from '@/pages/employer/EmployerDashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
      {
        path: '/',
        element: <PrivateRoute />,
        children: [
          {
            path: 'dashboard/user',
            element: <UserDashboard />,
          },
          {
            path: 'dashboard/employer',
            element: <EmployerDashboard />,
          },
          {
            path: 'profile/user',
            element: <UserProfile />,
          },
          {
            path: 'profile/employer',
            element: <EmployerProfile />,
          },
        ],
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Landing from './views/Landing';
import Auth from './views/Auth';
import Dashboard from './views/Dashboard';
import Profile from './views/Profile';
import Roles from './views/Roles';
import SignUp from './views/SignUp';
import './App.css';

  const router = createBrowserRouter([
    {
      path:'/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Landing />,
        },
        {
          path: '/auth',
          element: <Auth />
        },
        {
          path: '/dashboard',
          element: <Dashboard />
        },
        {
          path: '/profile',
          element: <Profile />
        },
        {
          path: '/roles', 
          element: <Roles />
        },
        {
          path: '/signup',
          element: <SignUp />
        },
      ],
    },
  ],
    {
      basename:'/volunteer'
    }
);

export default function App() {
  return (
   <RouterProvider router={router} />
  );
}

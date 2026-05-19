import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Landing from './views/Landing';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import Friends from './views/Friends';
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
          path: '/login',
          element: <Login />
        },
        {
          path: '/dashboard',
          element: <Dashboard />
        },
        {
          path: '/friends',
          element: <Friends />
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
      basename:'/blaasol/',
    }
);

export default function App() {
  return (
   <RouterProvider router={router} />
  );
}

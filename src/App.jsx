import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Landing from './views/Landing';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import Friends from './views/Friends';
import Profile from './views/Profile';
import Roles from './views/Roles';
import SignUp from './views/SignUp';
import RolesCards from './components/RolescArds';
import RoleList from './components/RoleList';
import RoleDetail from './components/RoleDetail';
import UnderConstruction from './views/UnderConstruction';
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
          path: '/messages',
          element: <UnderConstruction />
        },
        {
          path: '/profile',
          element: <UnderConstruction />
        },
        {
          path: '/roles', 
          element: <Roles />,
          children: [
            {
              index: true,
              element: <RolesCards />
            },
            {
              path: ':shiftType',
              element: <RoleList />
            },
            {
              path:':shiftType/details',
              element: <RoleDetail />
            }
          ]
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
